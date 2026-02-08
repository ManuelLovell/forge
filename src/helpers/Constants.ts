
export const DATA_STORED_IN_ROOM = false;

export enum Constants
{
    UP = "UP",
    DOWN = "DOWN",
    LEFT = "LEFT",
    RIGHT = "RIGHT",
    PRIMARYCOLOR = "#FFFFFF",
    OFFSETCOLOR = "#B794F4",
    BGCOLOR = "#000000",
    BORDERCOLOR = "#1E2231",
}
export enum OwlbearIds
{
    EXTENSIONID = "com.battle-system.forge",
    BONESID = "com.battle-system.bones",
    RUMBLECHATCHANNEL = "RUMBLECHAT",
    BROADCASTCHANNEL = "FORGE-BROADCAST",
    MARKCONNECT = "com.battle-system.marked-connect"
}

export const BSRoutes = {
    CHECKREGISTRATION: 'https://vrwtdtmnbyhaehtitrlb.supabase.co/functions/v1/patreon-check'
}

export const BSKeys = {
    ANONAUTH: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZS1kZW1vIiwicm9sZSI6ImFub24iLCJleHAiOjE5ODM4MTI5OTZ9.CRXP1A7WOeoJeXxjNni43kdQwgnWNReilDMblYTn_I0',
}

export const DefaultTheme = {
    primary: "#FFFFFF",
    offset: "#CD5C5C",
    background: "#5E1914",
    border: "#EB5406",
};

export enum Names
{
    //Component Names
    TITLECOMPONENT = "Title-Header",
    TEXTVALUECOMPONENT = "Text-Value",
    CHECKBOXCOMPONENT = "Checkbox",
    LINEBREAKCOMPONENT = "Line-Break",
    SPACERCOMPONENT = "Spacer",
    COLUMNTEXTCOMPONENT = "Column-Text",
    COLUMNVALUECOMPONENT = "Column-Value",
    ACTIONCOMPONENT = "Action-List",
    ITEMCOMPONENT = "Item-List",
    VALUECOLUMNCOMPONENT = "Value-Column",
    CHECKBOXCOLUMNCOMPONENT = "Checkbox-Column",
    LISTCOLUMNCOMPONENT = "List-Column",
    SPECIALCOLUMNCOMPONENT = "Special-Column",
    DIVIDERCOLUMNCOMPONENT = "Divider-Column",
}