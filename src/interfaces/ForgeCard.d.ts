interface SerializedCardComponent
{
    id: string;
    type: string;
    fullsize: boolean;
    styles?: CardComponentInfo;
    row: number; // Order based on layout
    col: number; // Column position (0 or 1 for half-size, always 0 for full)
};

interface SerializedCardLayout extends Array<SerializedCardComponent> {}
