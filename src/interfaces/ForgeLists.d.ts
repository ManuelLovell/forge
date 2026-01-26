type ForgeListLayout = "single" | "double" | "triple";

interface SerializedListColumn
{
    id: string;
    col: number; // Order position in the list
    type: string; // Column type: 'initiative', 'name', 'health', etc.
    styles?: ListColumnInfo;
}

interface SerializedListLayout extends Array<SerializedListColumn> {}