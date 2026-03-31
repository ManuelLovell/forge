import { useEffect } from 'react';
import OBR, { Metadata } from '@owlbear-rodeo/sdk';
import LOGGER from './../helpers/Logger';
import { DATA_STORED_IN_ROOM, OwlbearIds } from '../helpers/Constants';
import { MenuConstants, SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { Regex } from '../helpers/Regex';
import { useSceneStore } from '../helpers/BSCache';
import { AddOrReplaceAdjective } from '../helpers/Adjectives';
import { filterExtensionMetadata, getAllUnitCollectionRecords, type UnitCollectionRecord } from '../helpers/unitCollectionDb';
import { findRemoteUnitCollectionByNames, findSharedUnitCollectionByNames } from '../helpers/unitCollectionRemote';
import { MOCK_BIDS } from '../helpers/MockData';

const VIEW_UNIT_CONTEXT_MENU_ID = 'com.battle-system.forge/view-unit';
const VIEW_UNIT_PLAYER_CONTEXT_MENU_ID = 'com.battle-system.forge/view-unit-player';

const normalizeLookupName = (name: string): string => name.trim().toLowerCase();

const normalizeBid = (value: unknown): string | null => {
    if (typeof value !== 'string') {
        return null;
    }

    const trimmed = value.trim();
    return trimmed.length > 0 ? trimmed : null;
};

const getSearchNameFromItem = (itemName: string): string => {
    const trimmed = itemName.trim();
    if (!trimmed) {
        return itemName;
    }

    return Regex.ALPHANUMERICTEXTMATCH.test(trimmed)
        ? trimmed.slice(0, -2)
        : trimmed;
};

const getPreferredUnitNameFromItem = (item: { name?: string; metadata?: Record<string, unknown>; text?: { plainText?: string } }): string => {
    const textName = typeof item.text?.plainText === 'string' ? item.text.plainText.trim() : '';
    if (textName.length > 0) {
        return textName;
    }

    const metadataNameRaw = item.metadata?.[UnitConstants.UNIT_NAME];
    const metadataName = typeof metadataNameRaw === 'string' ? metadataNameRaw.trim() : '';
    if (metadataName.length > 0) {
        return metadataName;
    }

    const itemName = typeof item.name === 'string' ? item.name.trim() : '';
    if (itemName.length > 0) {
        return itemName;
    }

    return typeof item.name === 'string' ? item.name : '';
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
        const localMatches = localByName.get(normalized);
        const firstLocal = localMatches?.[0];
        if (!firstLocal || !firstLocal.metadata) {
            continue;
        }

        byNormalizedName.set(normalized, filterExtensionMetadata(firstLocal.metadata));
    }

    try {
        const remoteRecords = await findRemoteUnitCollectionByNames(normalizedNames);
        for (const record of remoteRecords) {
            const normalized = normalizeLookupName(record.name);
            if (!normalized || byNormalizedName.has(normalized) || !record.metadata) {
                continue;
            }

            byNormalizedName.set(normalized, filterExtensionMetadata(record.metadata));
        }

        const sharedRecords = await findSharedUnitCollectionByNames(normalizedNames);
        for (const record of sharedRecords) {
            const normalized = normalizeLookupName(record.name);
            if (!normalized || byNormalizedName.has(normalized) || !record.metadata) {
                continue;
            }

            byNormalizedName.set(normalized, filterExtensionMetadata(record.metadata));
        }
    } catch (error) {
        LOGGER.log('Remote collection lookup failed, using local collection only', error);
    }

    return byNormalizedName;
};

export function SetupContextMenu({ children }: { children: React.ReactNode }) {
    const roomMetadata = useSceneStore((state) => state.roomMetadata);
    const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
    const sceneItems = useSceneStore((state) => state.items);
    const playerData = useSceneStore((state) => state.playerData);
    const runtimeSystemData = useSceneStore((state) => state.systemData);

    //Control for setting the data to Room or to Scene
    const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;
    const systemAttributes = runtimeSystemData?.attributes ?? [];
    const attributeBids = new Set(systemAttributes.map((attribute) => attribute.attr_bid));

    const inferredCurrentHpBid = systemAttributes.find((attribute) => {
        const abbr = (attribute.attr_abbr || '').toUpperCase();
        const name = (attribute.attr_name || '').toLowerCase();
        return abbr === 'HP' || name === 'hit points';
    })?.attr_bid;

    const inferredMaxHpBid = systemAttributes.find((attribute) => {
        const abbr = (attribute.attr_abbr || '').toUpperCase();
        const name = (attribute.attr_name || '').toLowerCase();
        return abbr === 'MHP' || name === 'max hit points';
    })?.attr_bid;

    const configuredCurrentHpBid = normalizeBid(storageContainer[SettingsConstants.HP_CURRENT_BID]);
    const configuredMaxHpBid = normalizeBid(storageContainer[SettingsConstants.HP_MAX_BID]);

    const resolvedCurrentHpBid = configuredCurrentHpBid
        && (attributeBids.size === 0 || attributeBids.has(configuredCurrentHpBid))
        ? configuredCurrentHpBid
        : (inferredCurrentHpBid || (attributeBids.size === 0 ? MOCK_BIDS.CURRENT_HP : ''));

    const resolvedMaxHpBid = configuredMaxHpBid
        && (attributeBids.size === 0 || attributeBids.has(configuredMaxHpBid))
        ? configuredMaxHpBid
        : (inferredMaxHpBid || (attributeBids.size === 0 ? MOCK_BIDS.MAX_HP : ''));

    const healthAttrbEnabled = Boolean(resolvedCurrentHpBid && resolvedMaxHpBid);
    const showModifyUnitContextMenu = storageContainer[SettingsConstants.SHOW_MODIFY_UNIT_CONTEXT_MENU] === undefined
        ? true
        : storageContainer[SettingsConstants.SHOW_MODIFY_UNIT_CONTEXT_MENU] === true;
    const showPlayerViewUnitContextMenu = storageContainer[SettingsConstants.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS] === undefined
        ? true
        : storageContainer[SettingsConstants.SHOW_VIEW_UNIT_CONTEXT_MENU_FOR_PLAYERS] === true;

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
                        const useDescriptiveDuplicates = storageContainer[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] === true;
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
                            const textItem = item as typeof item & { text?: { plainText?: string } };
                            const preferredUnitName = getPreferredUnitNameFromItem(textItem);

                            // If already fabricated, we don't need to build it again
                            if (item.metadata[UnitConstants.FABRICATED] !== true) {
                                const itemName = getSearchNameFromItem(textItem.text?.plainText || item.name);

                                const match = collectionMatches.get(normalizeLookupName(itemName));
                                if (match) {
                                    Object.assign(update, match);
                                }

                                if (typeof update[UnitConstants.UNIT_NAME] !== 'string' || !String(update[UnitConstants.UNIT_NAME]).trim()) {
                                    update[UnitConstants.UNIT_NAME] = preferredUnitName;
                                }
                                update[UnitConstants.FABRICATED] = true;
                            }

                            if (useDescriptiveDuplicates) {
                                const existingUnitName = typeof item.metadata[UnitConstants.UNIT_NAME] === 'string'
                                    ? String(item.metadata[UnitConstants.UNIT_NAME]).trim()
                                    : '';
                                const fallbackItemName = getSearchNameFromItem(textItem.text?.plainText || item.name).trim();
                                const baseUnitName = String(
                                    update[UnitConstants.UNIT_NAME]
                                    || existingUnitName
                                    || preferredUnitName
                                    || fallbackItemName
                                    || item.name
                                ).trim();

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

                            if (typeof update[UnitConstants.UNIT_NAME] !== 'string' || !String(update[UnitConstants.UNIT_NAME]).trim()) {
                                update[UnitConstants.UNIT_NAME] = preferredUnitName;
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
                                    if (storageContainer[SettingsConstants.SHOW_NAMES] === true) {
                                        const textItem = item as typeof item & { text?: { plainText?: string } };
                                        const resolvedUnitName = typeof forUnit.metadata[UnitConstants.UNIT_NAME] === 'string'
                                            && String(forUnit.metadata[UnitConstants.UNIT_NAME]).trim().length > 0
                                            ? String(forUnit.metadata[UnitConstants.UNIT_NAME]).trim()
                                            : getPreferredUnitNameFromItem(textItem);
                                        if (textItem.text) {
                                            textItem.text.plainText = resolvedUnitName;
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
            });

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
                        const preferredUnitName = getPreferredUnitNameFromItem(textItem);
                        const itemName = getSearchNameFromItem(textItem.text?.plainText || selectedItem.name);

                        await OBR.action.setBadgeText('Retrieving Data.. ⏱️');
                        const collectionMatches = await getFirstCollectionMatchesByName([itemName]);
                        await OBR.action.setBadgeText(undefined);

                        const match = collectionMatches.get(normalizeLookupName(itemName));
                        if (match) {
                            Object.assign(update, match);
                        }

                        if (typeof update[UnitConstants.UNIT_NAME] !== 'string' || !String(update[UnitConstants.UNIT_NAME]).trim()) {
                            update[UnitConstants.UNIT_NAME] = preferredUnitName;
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

                            if (storageContainer[SettingsConstants.SHOW_NAMES] === true) {
                                const writableItem = item as typeof item & { text?: { plainText?: string } };
                                const resolvedUnitName = typeof update[UnitConstants.UNIT_NAME] === 'string'
                                    && String(update[UnitConstants.UNIT_NAME]).trim().length > 0
                                    ? String(update[UnitConstants.UNIT_NAME]).trim()
                                    : getPreferredUnitNameFromItem(writableItem);
                                if (writableItem.text) {
                                    writableItem.text.plainText = resolvedUnitName;
                                }
                            }
                        });
                    }

                    await openCardPopoverForUnit(selectedItem.id);

                }
            });

            if (showPlayerViewUnitContextMenu) {
                OBR.contextMenu.create({
                    id: VIEW_UNIT_PLAYER_CONTEXT_MENU_ID,
                    icons: [
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
                            const preferredUnitName = getPreferredUnitNameFromItem(textItem);
                            const itemName = getSearchNameFromItem(textItem.text?.plainText || selectedItem.name);

                            await OBR.action.setBadgeText('Retrieving Data.. ⏱️');
                            const collectionMatches = await getFirstCollectionMatchesByName([itemName]);
                            await OBR.action.setBadgeText(undefined);

                            const match = collectionMatches.get(normalizeLookupName(itemName));
                            if (match) {
                                Object.assign(update, match);
                            }

                            if (typeof update[UnitConstants.UNIT_NAME] !== 'string' || !String(update[UnitConstants.UNIT_NAME]).trim()) {
                                update[UnitConstants.UNIT_NAME] = preferredUnitName;
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

                                if (storageContainer[SettingsConstants.SHOW_NAMES] === true) {
                                    const writableItem = item as typeof item & { text?: { plainText?: string } };
                                    const resolvedUnitName = typeof update[UnitConstants.UNIT_NAME] === 'string'
                                        && String(update[UnitConstants.UNIT_NAME]).trim().length > 0
                                        ? String(update[UnitConstants.UNIT_NAME]).trim()
                                        : getPreferredUnitNameFromItem(writableItem);
                                    if (writableItem.text) {
                                        writableItem.text.plainText = resolvedUnitName;
                                    }
                                }
                            });
                        }

                        await openCardPopoverForUnit(selectedItem.id);

                    }
                });
            } else {
                OBR.contextMenu.remove(VIEW_UNIT_PLAYER_CONTEXT_MENU_ID).catch(() => { });
            }

            if (healthAttrbEnabled && showModifyUnitContextMenu) {
                OBR.contextMenu.create({
                    id: UnitConstants.MODIFY_UNIT,
                    icons: [
                        {
                            icon: "/icon.svg", // GM Version
                            label: "Adjust HP",
                            filter: {
                                some: [
                                    { key: "layer", value: "CHARACTER", coordinator: "||" },
                                    { key: "layer", value: "MOUNT" }],
                                roles: ["GM"],
                            },
                        },
                        {
                            icon: "/icon.svg", // Player Version
                            label: "Adjust HP",
                            filter: {
                                every: [
                                    { key: "createdUserId", operator: "==", value: playerData?.id }
                                ],
                                some: [
                                    { key: "layer", value: "CHARACTER", coordinator: "||" },
                                    { key: "layer", value: "MOUNT" }],
                                roles: ["PLAYER"],
                            },
                        }
                    ],
                    async onClick(context, elementId) {
                        LOGGER.info(`Adjust HP Clicked: ${context.items[0].name}`);
                        await OBR.popover.open({
                            id: MenuConstants.CONTEXT_MENU,
                            url: `/pages/forgecontext.html`,
                            height: 50,
                            width: 180,
                            anchorElementId: elementId,
                            hidePaper: true,
                        });
                    },
                    embed: { url: `/pages/forgecontext.html?contextmenu=true`, height: 70 }
                });
            } else {
                OBR.contextMenu.remove(UnitConstants.MODIFY_UNIT).catch(() => { });
            }
        });
    }, [storageContainer, healthAttrbEnabled, showModifyUnitContextMenu, showPlayerViewUnitContextMenu]);

    return <>{children}</>;
}
