interface PreviewComponent
{
    id: string;
    type: string;
    fullsize: boolean; // If the component is a half column, or full width
    styles?: CardComponentInfo;
    theme: ThemeStyle
};

interface ThemeStyle
{
    primary: string;
    offset: string;
    background: string;
    border: string;
}

interface CardComponentInfo
{
    fontStyle?: "normal" | "italic"; // If the font if italic or not
    fontWeight?: "normal" | "bold"; // If the font is bold or not
    fontSize?: "sm" | "md" | "lg"; // Three presets of font size
    textAlign?: "left" | "center" | "right"; // Where the text is justified
    labelPosition?: "left" | "right"; // If the labels appears on left or right

    attributeId?: string; // ID of the linked attribute from the system
    labelMode?: "name" | "abbr" | "blank"; // Display Name, Abbr., or hide label

    inputType?: "checkbox" | "slider"; // This is the style of checkbox - slider or box
    checkboxCount?: number; // This is the amount of checkboxes in a component
    valueCount?: number; // This is the amount of columns in a component
    styleDesign?: string; // For Line-break Style
    stretch?: boolean; // If the text is stretched or not
    bidList?: string[];
};

interface ListColumnInfo
{
    labelMode?: "icon" | "text"; // Display as icon or text
    labelName?: string; // Custom label name for the column
    labelIcon?: string; // Icon type for the column
    description?: string; // Description of the column
    styleDesign?: string; // For Line-break Style
    bidList?: string[]; // List of attribute IDs for multi-value columns
    dividers?: string[]; // Dividers between values (for value columns)
};

// For backwards compatibility
type ComponentInfo = CardComponentInfo;

interface ConfigProps
{
    styles?: CardComponentInfo;
    update: <K extends keyof CardComponentInfo>(key: K, value: CardComponentInfo[K]) => void;
    fullsize?: boolean;
};

interface ListConfigProps
{
    styles?: ListColumnInfo;
    update: <K extends keyof ListColumnInfo>(key: K, value: ListColumnInfo[K]) => void;
};