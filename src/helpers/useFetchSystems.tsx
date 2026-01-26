import { useEffect } from "react";
import { supabase } from "../supabase/supabaseClient";

export function useAvailableSystems(setAvailableSystems: (systems: ForgeSystem[]) => void) {
    useEffect(() => {
        const fetchSystems = async () => {
            const { data, error } = await supabase
                .from("bs_forge_systems")
                .select("id, user_id, name, theme_primary, theme_offset, theme_background, theme_border, background_url")
                .order("created_at", { ascending: true });

            if (!error && data) {
                setAvailableSystems(data);
            }
        };

        fetchSystems();
    }, [setAvailableSystems]);
}