import { useEffect } from 'react';
import OBR, { Metadata } from '@owlbear-rodeo/sdk';
import LOGGER from './../helpers/Logger';
import { DATA_STORED_IN_ROOM } from '../helpers/Constants';
import { SettingsConstants, UnitConstants } from '../interfaces/MetadataKeys';
import { Regex } from '../helpers/Regex';
import { useSceneStore } from '../helpers/BSCache';
import { AddOrReplaceAdjective } from '../helpers/Adjectives';

export function SetupContextMenu({ children }: { children: React.ReactNode }) {
    const roomMetadata = useSceneStore((state) => state.roomMetadata);
    const sceneMetadata = useSceneStore((state) => state.sceneMetadata);
    const sceneItems = useSceneStore((state) => state.items);

    //Control for setting the data to Room or to Scene
    const storageContainer = DATA_STORED_IN_ROOM ? roomMetadata : sceneMetadata;

    useEffect(() => {
        // This is ran once, but this is a performative place to ensure this is not tried before the scene is ready
        OBR.onReady(() => {
            OBR.contextMenu.create({
                id: UnitConstants.ON_LIST,
                icons: [
                    {
                        icon: "/icon.svg",
                        label: "[Forge] Add to list",
                        filter: {
                            every: [{ key: ["metadata", UnitConstants.ON_LIST], operator: "!=", value: true }],
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                        },
                    },
                    {
                        icon: "/icon.svg",
                        label: "[Forge] Remove from list",
                        filter: {
                            every: [{ key: ["metadata", UnitConstants.ON_LIST], operator: "==", value: true }],
                            some: [
                                { key: "layer", value: "CHARACTER", coordinator: "||" },
                                { key: "layer", value: "MOUNT" }],
                        },
                    },
                ],
                async onClick(context) {
                    LOGGER.info(`Context Menu Clicked: ${context.items[0].name}`);

                    const removeFromList = context.items.every(
                        (item) => item.metadata[UnitConstants.ON_LIST] === true
                    );

                    if (removeFromList) {
                        // Remove from list - possible cleanup of localitems here
                        await OBR.scene.items.updateItems(context.items, (items) => {
                            for (let item of items) {
                                delete item.metadata[UnitConstants.ON_LIST];
                                delete item.metadata[UnitConstants.INITIATIVE];
                            }
                        });
                    } else {
                        // Prepare update pack so we can batch update
                        // Names to check will be used to check Collections for prebuilt units
                        const namesToCheck: { id: string, name: string }[] = [];
                        // Metadata updates is the batch to apply at the end
                        const metadataUpdates: { id: string, metadata: Metadata }[] = [];
                        for (let item of context.items) {
                            const update: Metadata = {};
                            update[UnitConstants.ON_LIST] = true;
                            update[UnitConstants.INITIATIVE] = 0;
                            // If already fabricated, we don't need to build it again
                            if (item.metadata[UnitConstants.FABRICATED] !== true) {
                                let itemName = (item as any).text?.plainText || item.name;
                                // We check to see if the name ends with a number (for duplicates)
                                // and take the clean name for searching
                                if (Regex.ALPHANUMERICTEXTMATCH.test(item.name)) {
                                    itemName = itemName.slice(0, -2);
                                }
                                namesToCheck.push({ id: item.id, name: itemName });

                                /* Later we will add collection search here based on name
                                function-find-data-in-collection
                                await OBR.action.setBadgeText("Retrieving Data.. ⏱️");
                                if (BSCACHE.USER_REGISTERED && namesToCheck.length > 0) {
                                    search online - add data to metadataUpdates
                                } else {
                                    search local - add data to metadataUpdates
                                }
                                await OBR.action.setBadgeText(undefined);
                                */

                                update[UnitConstants.UNIT_NAME] = item.name;
                                // Check descriptive name setting
                                if (storageContainer[SettingsConstants.USE_DESCRIPTIVE_DUPLICATES] !== undefined) {
                                    // We want to check the 'itemName'
                                    const currentNamesInScene = sceneItems
                                        .filter((x) => x.metadata[UnitConstants.UNIT_NAME] != null)
                                        .map((x) => x.metadata[UnitConstants.UNIT_NAME]);
                                    if (currentNamesInScene.includes(itemName)) {
                                        update[UnitConstants.UNIT_NAME] = AddOrReplaceAdjective(itemName);
                                    }
                                }
                            }
                            metadataUpdates.push({ id: item.id, metadata: update });
                        }

                        // Add to list
                        await OBR.scene.items.updateItems(context.items, (items) => {
                            for (let item of items) {
                                const forUnit = metadataUpdates.find(update => update.id === item.id);
                                if (forUnit) {
                                    Object.assign(item.metadata, forUnit.metadata);
                                    if (sceneMetadata[SettingsConstants.SHOW_NAMES] === true)
                                        (item as any).text.plainText = forUnit.metadata[UnitConstants.UNIT_NAME];
                                }
                            }
                        });
                    }
                }
            })
        });
    }, [storageContainer]);

    return <>{children}</>;
}
