import { TwStyle } from "twin.macro";

interface BreakpointCss
{
    mobileNavLinks: TwStyle;
    desktopNavLinks: TwStyle;
    mobileNavLinksContainer: TwStyle;
}

type CollapseBreakPointCssMap = Record<string, BreakpointCss>;
interface CollapseBreakPointCssMap
{
    sm: BreakpointCss;
    md: BreakpointCss;
    lg: BreakpointCss;
    xl: BreakpointCss;
}