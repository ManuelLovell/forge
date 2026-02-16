# Card Layout Visual Parity Checklist

This checklist validates the renderer against the requested 1:1 behavior.

## Layout + Container
- [x] Deserializer sorts by `row`, then `col`.
- [x] Components are grouped into rows by `row`.
- [x] Card container uses fixed size behavior (`350px` wide, `700px` height) with `overflow-y: auto`.
- [x] Card container is rounded, bordered, blurred, and uses themed background at ~50% alpha.
- [x] Optional `background_url` renders as bottom-right, `contain`, `no-repeat`, ~0.3 opacity overlay.
- [x] Fixed first row prepended with two half-cells: `Unit Name` and `Control-Reserved`.

## Component Mapping (9 types)
- [x] `text`: title header text using attribute and `labelMode` with fallback to `Title Header`.
- [x] `text-value`: optional label + disabled text input mock (`Text Input`).
- [x] `text-checkbox`: optional label + disabled checkbox/slider mocks from `inputType` and `checkboxCount`.
- [x] `line-break`: renders style variants `default|dash|shadow|zigzag|ridge|pulse`.
- [x] `line-spacer`: renders empty spacer block.
- [x] `column-text`: horizontal labels from valid `bidList` attributes.
- [x] `column-value`: horizontal disabled inputs from valid `bidList` with placeholder `18`.
- [x] `action-list`: tall translucent list block titled from list attribute.
- [x] `item-list`: tall translucent list block titled from list attribute.

## Typography + Theme Rules
- [x] Label color uses `theme_offset`.
- [x] Content/value color uses `theme_primary`.
- [x] Borders use `theme_border`.
- [x] `stretch=true` applies wider letter spacing.
- [x] Font-size maps use larger scale for title/text-value than column components.

## Validation Behavior
- [x] Invalid `attributeId` entries are ignored (component omitted where required).
- [x] Invalid `bidList` entries are filtered out.
- [x] Row order is preserved exactly from sorted `row,col` with no auto-reflow.
