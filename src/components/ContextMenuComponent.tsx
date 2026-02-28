import { useEffect } from 'react';
import OBR, { Metadata } from '@owlbear-rodeo/sdk';
import LOGGER from './../helpers/Logger';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { Regex } from '../helpers/Regex';
import { useSceneStore } from '../helpers/BSCache';
import { AddOrReplaceAdjective } from '../helpers/Adjectives';
import { filterExtensionMetadata, getAllUnitCollectionRecords, type UnitCollectionRecord } from '../helpers/unitCollectionDb';
import { supabase } from '../supabase/supabaseClient';

const VIEW_UNIT_CONTEXT_MENU_ID = 'com.battle-system.forge/view-unit';

type SupabaseCollectionRow = {
    name: string;
    metadata: Record<string, unknown> | null;
    is_active: boolean | null;
};

const normalizeLookupName = (name: string): string => name.trim().toLowerCase();

const getSearchNameFromItem = (itemName: string): string => {
    const trimmed = itemName.trim();
    if (!trimmed) {
        return itemName;
    }

    return Regex.ALPHANUMERICTEXTMATCH.test(trimmed)
        ? trimmed.slice(0, -2)
        : trimmed;
};

const openCardPopoverForUnit = async (unitId: string) => {
    const windowHeight = await OBR.viewport.getHeight();
    const modalBuffer = 100;
    const viewableHeight = windowHeight > 800 ? 700 : windowHeight - modalBuffer;

    await OBR.popover.open({
        id: OwlbearIds.CARDSID,
        url: `/pages/forgecard.html?unitid=${encodeURIComponent(unitId)}`,
        height: viewableHeight,
        width: 350,
        anchorReference: 'POSITION',
        anchorPosition: {
            left: (await OBR.viewport.getWidth()) / 2,
            top: (await OBR.viewport.getHeight()) / 2,
        },
        anchorOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
        transformOrigin: { horizontal: 'CENTER', vertical: 'CENTER' },
        hidePaper: true,
        disableClickAway: true,
    });
};

const getFirstCollectionMatchesByName = async (names: string[]): Promise<Map<string, Record<string, unknown>>> => {
    const normalizedNames = Array.from(new Set(
        names
            .map((name) => name.trim())
            .filter((name) => name.length > 0)
    ));

    const byNormalizedName = new Map<string, Record<string, unknown>>();
    if (normalizedNames.length === 0) {
        return byNormalizedName;
    }

    try {
        const { data, error } = await supabase
            .from('bs_forge_creatures')
            .select('name,metadata,is_active')
            .eq('is_active', true)
            .in('name', normalizedNames)
            .limit(250);

        if (!error && Array.isArray(data)) {
            const rows = data as SupabaseCollectionRow[];
            for (const row of rows) {
                const normalized = normalizeLookupName(String(row.name || ''));
                if (!normalized || byNormalizedName.has(normalized)) {
                    continue;
                }

                const metadata = row.metadata && typeof row.metadata === 'object' && !Array.isArray(row.metadata)
                    ? filterExtensionMetadata(row.metadata)
                    : null;
                if (!metadata) {
                    continue;
                }

                byNormalizedName.set(normalized, metadata);
            }
        }
    } catch (error) {
        LOGGER.log('Supabase collection lookup failed, falling back to local collection', error);
    }

    const localRecords = await getAllUnitCollectionRecords();
    const localByName = new Map<string, UnitCollectionRecord[]>();
    for (const record of localRecords) {
        const normalized = normalizeLookupName(record.name);
        if (!normalized) {
            continue;
        }

        const existing = localByName.get(normalized);
        if (existing) {
            existing.push(record);
        } else {
            localByName.set(normalized, [record]);
        }
    }

    for (const name of normalizedNames) {
        const normalized = normalizeLookupName(name);
        if (byNormalizedName.has(normalized)) {
            continue;
        }

        const localMatches = localByName.get(normalized);
        const firstLocal = localMatches?.[0];
        if (!firstLocal || !firstLocal.metadata) {
            continue;
        }

        byNormalizedName.set(normalized, filterExtensionMetadata(firstLocal.metadata));
    }

    return byNormalizedName;
};

export function SetupContextMenu({ children }: { children: React.ReactNode }) {
    const roomMetadata = useSceneStore((state) => state.roomMetadata);
    const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
    const sceneItems = useSceneStore((state) => state.items);
    const playerData = useSceneStore((state) => state.playerData);

    //Control for setting the data to Room or to Scene
    const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;

    useEffect(() => {
        // This is ran once, but this is a performative place to ensure this is not tried before the scene is ready
        OBR.onReady(() => {
            OBR.contextMenu.create({
                id: UnitConstants.ON_LIST,
                icons: [
                    {
                        icon: "/icon.svg", // GM Version
                        label: "Enter Combat",
                        filter: {
                            every: [
                                { key: ["metadata", UnitConstants.ON_LIST], operator: "!=", value: true },
                                { key: "type", operator: "==", value: "IMAGE" }
                            ],
                            roles: ["GM"]
                        },
                    },
                    {
                        icon: "/icon.svg", // Player Version
                        label: "Enter Combat",
                        filter: {
                            every: [
                                { key: ["metadata", UnitConstants.ON_LIST], operator: "!=", value: true },
                                { key: "type", operator: "==", value: "IMAGE" },
                                { key: "createdUserId", operator: "==", value: playerData?.id }
                            ],
                            roles: ["PLAYER"]
                        },
                    },
                    {
                        icon: "/icon.svg", // GM Version
                        label: "Exit Combat",
                        filter: {
                            every: [
                                { key: ["metadata", UnitConstants.ON_LIST], operator: "==", value: true },
                                { key: "type", operator: "==", value: "IMAGE" }
                            ],
                            roles: ["GM"]
                        },
                    },
                    {
                        icon: "/icon.svg", // Player Version
                        label: "Exit Combat",
                        filter: {
                            every: [
                                { key: ["metadata", UnitConstants.ON_LIST], operator: "==", value: true },
                                { key: "type", operator: "==", value: "IMAGE" },
                                { key: "createdUserId", operator: "==", value: playerData?.id }
                            ],
                            roles: ["PLAYER"]
                        },
                    },
                ],
                async onClick(context) {
                    LOGGER.info(`Add to Combat Clicked: ${context.items[0].name}`);

                    const removeFromCombat = context.items.every(
                        (item) => item.metadata[UnitConstants.ON_LIST] === true
                    );

                    if (removeFromCombat) {
                        // Remove from combat - possible cleanup of localitems here
                        await OBR.scene.items.updateItems(context.items, (items) => {
                            for (let item of items) {
                                delete item.metadata[UnitConstants.ON_LIST];
                                delete item.metadata[UnitConstants.INITIATIVE];
                            }
                        });
                    } else {
                        // Prepare update pack so we can batch update
                        // Names to check will be used to check Collections for prebuilt units
                        const collectionNamesToCheck: string[] = [];
                        // Metadata updates is the batch to apply at the end
                        const metadataUpdates: { id: string, metadata: Metadata }[] = [];
                        const contextItemIds = new Set(context.items.map((item) => item.id));
                        const useDescriptiveDuplicates = storageContainer[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] !== undefined;
                        const usedUnitNames = new Set(
                            sceneItems
                                .filter((sceneItem) => {
                                    if (contextItemIds.has(sceneItem.id)) {
                                        return false;
                                    }

                                    const existingName = sceneItem.metadata[UnitConstants.UNIT_NAME];
                                    return typeof existingName === 'string' && existingName.trim().length > 0;
                                })
                                .map((sceneItem) => normalizeLookupName(String(sceneItem.metadata[UnitConstants.UNIT_NAME])))
                        );

                        for (let item of context.items) {
                            if (item.metadata[UnitConstants.FABRICATED] === true) {
                                continue;
                            }

                            const textItem = item as typeof item & { text?: { plainText?: string } };
                            const itemName = getSearchNameFromItem(textItem.text?.plainText || item.name);
                            collectionNamesToCheck.push(itemName);
                        }

                        await OBR.action.setBadgeText('Retrieving Data.. ⏱️');
                        const collectionMatches = await getFirstCollectionMatchesByName(collectionNamesToCheck);
                        await OBR.action.setBadgeText(undefined);

                        for (let item of context.items) {
                            const update: Metadata = {};

                            // If already fabricated, we don't need to build it again
                            if (item.metadata[UnitConstants.FABRICATED] !== true) {
                                const textItem = item as typeof item & { text?: { plainText?: string } };
                                const itemName = getSearchNameFromItem(textItem.text?.plainText || item.name);

                                const match = collectionMatches.get(normalizeLookupName(itemName));
                                if (match) {
                                    Object.assign(update, match);
                                }

                                if (typeof update[UnitConstants.UNIT_NAME] !== 'string' || !String(update[UnitConstants.UNIT_NAME]).trim()) {
                                    update[UnitConstants.UNIT_NAME] = item.name;
                                }
                                update[UnitConstants.FABRICATED] = true;
                                if (useDescriptiveDuplicates) {
                                    const baseUnitName = String(update[UnitConstants.UNIT_NAME] || itemName || item.name).trim();
                                    let resolvedUnitName = baseUnitName;
                                    let normalizedResolvedName = normalizeLookupName(resolvedUnitName);

                                    if (normalizedResolvedName) {
                                        let guard = 0;
                                        while (usedUnitNames.has(normalizedResolvedName) && guard < 20) {
                                            resolvedUnitName = AddOrReplaceAdjective(resolvedUnitName);
                                            normalizedResolvedName = normalizeLookupName(resolvedUnitName);
                                            guard += 1;
                                        }

                                        if (normalizedResolvedName) {
                                            usedUnitNames.add(normalizedResolvedName);
                                        }
                                    }

                                    update[UnitConstants.UNIT_NAME] = resolvedUnitName;
                                }
                            }

                            update[UnitConstants.ON_LIST] = true;
                            update[UnitConstants.INITIATIVE] = 0;
                            metadataUpdates.push({ id: item.id, metadata: update });
                        }

                        // Add to list
                        await OBR.scene.items.updateItems(context.items, (items) => {
                            for (let item of items) {
                                const forUnit = metadataUpdates.find(update => update.id === item.id);
                                if (forUnit) {
                                    Object.assign(item.metadata, forUnit.metadata);
                                    if (sceneMetadata[SettingsConstants.SHOW_NAMES] === true) {
                                        const textItem = item as typeof item & { text?: { plainText?: string } };
                                        if (textItem.text) {
                                            textItem.text.plainText = String(forUnit.metadata[UnitConstants.UNIT_NAME] || '');
                                        }
                                    }
                                }
                            }
                        });
                    }
                }
            })

            OBR.contextMenu.create({
                id: UnitConstants.IN_PARTY,
                icons: [
                    {
                        icon: "/icon.svg", // GM Version
                        label: "Add to Party",
                        filter: {
                            every: [{ key: ["metadata", UnitConstants.IN_PARTY], operator: "!=", value: true }],
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                            roles: ["GM"],
                        },
                    },
                    {
                        icon: "/icon.svg", // Player Version
                        label: "Add to Party",
                        filter: {
                            every: [
                                { key: ["metadata", UnitConstants.IN_PARTY], operator: "!=", value: true },
                                { key: "createdUserId", operator: "==", value: playerData?.id }
                            ],
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                            roles: ["PLAYER"],
                        },
                    },
                    {
                        icon: "/icon.svg", // GM Version
                        label: "Remove from Party",
                        filter: {
                            every: [{ key: ["metadata", UnitConstants.IN_PARTY], operator: "==", value: true }],
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                            roles: ["GM"],
                        },
                    },
                    {
                        icon: "/icon.svg", // Player Version
                        label: "Remove from Party",
                        filter: {
                            every: [
                                { key: ["metadata", UnitConstants.IN_PARTY], operator: "==", value: true },
                                { key: "createdUserId", operator: "==", value: playerData?.id }
                            ],
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                            roles: ["PLAYER"],
                        },
                    },
                ],
                async onClick(context) {
                    LOGGER.info(`Add to Party Clicked: ${context.items[0].name}`);

                    const removeFromParty = context.items.every(
                        (item) => item.metadata[UnitConstants.IN_PARTY] === true
                    );

                    if (removeFromParty) {
                        await OBR.scene.items.updateItems(context.items, (items) => {
                            for (let item of items) {
                                delete item.metadata[UnitConstants.IN_PARTY];
                            }
                        });
                    }
                    else {
                        await OBR.scene.items.updateItems(context.items, (items) => {
                            for (let item of items) {
                                item.metadata[UnitConstants.IN_PARTY] = true;
                            }
                        });
                    }
                }
            })

            OBR.contextMenu.create({
                id: VIEW_UNIT_CONTEXT_MENU_ID,
                icons: [
                    {
                        icon: "/icon.svg", // GM Version
                        label: "View Unit",
                        filter: {
                            max: 1,
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                            roles: ["GM"],
                        },
                    },
                    {
                        icon: "/icon.svg", // Player Version
                        label: "View Unit",
                        filter: {
                            max: 1,
                            every: [{ key: "createdUserId", operator: "==", value: playerData?.id }],
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                            roles: ["PLAYER"],
                        },
                    }
                ],
                async onClick(context) {
                    LOGGER.info(`View Unit Clicked: ${context.items[0].name}`);

                    const selectedItem = context.items[0];
                    if (!selectedItem) {
                        return;
                    }

                    const update: Metadata = {};

                    if (selectedItem.metadata[UnitConstants.FABRICATED] !== true) {
                        const textItem = selectedItem as typeof selectedItem & { text?: { plainText?: string } };
                        const itemName = getSearchNameFromItem(textItem.text?.plainText || selectedItem.name);

                        await OBR.action.setBadgeText('Retrieving Data.. ⏱️');
                        const collectionMatches = await getFirstCollectionMatchesByName([itemName]);
                        await OBR.action.setBadgeText(undefined);

                        const match = collectionMatches.get(normalizeLookupName(itemName));
                        if (match) {
                            Object.assign(update, match);
                        }

                        if (typeof update[UnitConstants.UNIT_NAME] !== 'string' || !String(update[UnitConstants.UNIT_NAME]).trim()) {
                            update[UnitConstants.UNIT_NAME] = selectedItem.name;
                        }

                        update[UnitConstants.FABRICATED] = true;

                        if (storageContainer[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] !== undefined) {
                            const currentNamesInScene = sceneItems
                                .filter((x) => x.metadata[UnitConstants.UNIT_NAME] != null && x.id !== selectedItem.id)
                                .map((x) => x.metadata[UnitConstants.UNIT_NAME]);
                            if (currentNamesInScene.includes(itemName)) {
                                update[UnitConstants.UNIT_NAME] = AddOrReplaceAdjective(itemName);
                            }
                        }

                        await OBR.scene.items.updateItems([selectedItem], (items) => {
                            const item = items[0];
                            Object.assign(item.metadata, update);

                            if (sceneMetadata[SettingsConstants.SHOW_NAMES] === true) {
                                const writableItem = item as typeof item & { text?: { plainText?: string } };
                                if (writableItem.text) {
                                    writableItem.text.plainText = String(update[UnitConstants.UNIT_NAME] || '');
                                }
                            }
                        });
                    }

                    await openCardPopoverForUnit(selectedItem.id);

                }
            })
        });
    }, [storageContainer]);

    return <>{children}</>;
}
