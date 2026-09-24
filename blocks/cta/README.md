# CTA Block

This block follows Adobe EDS best practices by keeping the authored model simple, using a standard block model in Universal Editor, and limiting JavaScript to light enhancement that turns authored properties into a single CTA element.

## Supported authoring behavior

1. `CTA Text` is required.
2. `Link Type` switches authoring between internal and external URLs using conditional fields.
3. `Internal CTA Link` uses the AEM content picker.
4. `External CTA Link` uses validation for `https`, `mailto`, and `tel` links.
5. `CTA Style Variation` supports default outlined or filled background styles.
6. `CTA Color` supports four authored color themes: teal, coral, navy, and gold.
7. `CTA Font Weight` supports normal and bold text.
8. `Arrow Option` supports arrow and no-arrow variants.

## Styling behavior

- Default variation: transparent background, colored border, colored text.
- Filled variation: solid background with the authored theme color.
- Short text handling: when CTA text is 15 characters or fewer, the block applies a compact border treatment so the button wraps tightly around the text.

## Universal Editor authoring guide

1. Push the branch and open Universal Editor with `?ref=<branch-name>`.
2. Add `CTA` inside a section.
3. Author `CTA Text`.
4. Choose `Link Type` as `Internal` or `External`.
5. Provide the corresponding link field.
6. Choose `CTA Style Variation`, `CTA Color`, `CTA Font Weight`, and `Arrow Option`.
7. Publish to Preview and validate the final CTA rendering in the local AEM proxy.

## Implementation note

The model uses conditional fields for AEM-like show and hide behavior and relies on the block decorator to compose one final CTA link from the authored properties.