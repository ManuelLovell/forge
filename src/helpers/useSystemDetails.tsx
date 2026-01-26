import { useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";

export function useCardSystemDetails(
    selectedSystem: ForgeSystem | null,
    setPreviewComponents: (layout: PreviewComponent[][]) => void,
    setSystemAttributes: (attrs: ForgeAttribute[]) => void,
    setIsHydrating: (hydrating: boolean) => void,
    deserializeCardLayout: (layout: SerializedCardLayout, system: ForgeSystem) => PreviewComponent[][]
) {
    useEffect(() => {
        const fetchSystemDetails = async () => {
            if (!selectedSystem) return;

            // 1. Fetch the card layout
            const { data: layoutData, error: layoutError } = await supabase
                .from("bs_forge_systems")
                .select("card_layout")
                .eq("id", selectedSystem.id)
                .single();

            setIsHydrating(true);
            if (layoutError) {
                console.error("Error loading layout:", layoutError);
                setPreviewComponents([]);
            } else if (layoutData?.card_layout) {
                const layout = deserializeCardLayout(layoutData.card_layout, selectedSystem);
                setPreviewComponents(layout);
            } else {
                setPreviewComponents([]);
            }

            // 2. Fetch attributes
            const { data: attrData, error: attrError } = await supabase
                .from("bs_forge_system_attributes")
                .select("attribute:bs_forge_attributes(id, name, abbr, type, bid)")
                .eq("system_id", selectedSystem.id)
                .overrideTypes<{ attribute: ForgeAttribute }[]>();

            if (!attrError && attrData) {
                setSystemAttributes(attrData.map((d: { attribute: ForgeAttribute }) => d.attribute));
            }
            setIsHydrating(false);
        };

        fetchSystemDetails();
    }, [selectedSystem]);
}

export function useListSystemDetails<T>(
    selectedSystem: ForgeSystem | null,
    setListColumns: (layout: T) => void,
    setSystemAttributes: (attrs: ForgeAttribute[]) => void,
    setIsHydrating: (hydrating: boolean) => void,
    deserializeListLayout: (layout: SerializedListLayout, system: ForgeSystem) => T
) {
    useEffect(() => {
        const fetchSystemDetails = async () => {
            if (!selectedSystem) return;

            // 1. Fetch the list layout
            const { data: layoutData, error: layoutError } = await supabase
                .from("bs_forge_systems")
                .select("list_layout")
                .eq("id", selectedSystem.id)
                .single();

            setIsHydrating(true);
            if (layoutError) {
                console.error("Error loading layout:", layoutError);
                const layout = deserializeListLayout([] as any, selectedSystem);
                setListColumns(layout);
            } else if (layoutData?.list_layout) {
                const layout = deserializeListLayout(layoutData.list_layout, selectedSystem);
                setListColumns(layout);
            } else {
                // No saved layout - pass empty array to get defaults
                const layout = deserializeListLayout([] as any, selectedSystem);
                setListColumns(layout);
            }

            // 2. Fetch attributes
            const { data: attrData, error: attrError } = await supabase
                .from("bs_forge_system_attributes")
                .select("attribute:bs_forge_attributes(id, name, abbr, type, bid)")
                .eq("system_id", selectedSystem.id)
                .overrideTypes<{ attribute: ForgeAttribute }[]>();

            if (!attrError && attrData) {
                setSystemAttributes(attrData.map((d: { attribute: ForgeAttribute }) => d.attribute));
            }
            setIsHydrating(false);
        };

        fetchSystemDetails();
    }, [selectedSystem]);
}