# Multifield Block

This block demonstrates the Adobe-supported Universal Editor patterns for structured authoring that are closest to AEM Sites multifield dialogs.

## Implemented pattern

- Outer multifield: the `Multifield Block` is a container block. Each `Multifield Block Item` child added in Universal Editor behaves like a repeated top-level multifield item.
- Simple multifield: the `Highlights` field uses `multi: true` on a `text` field for short repeated values.
- Composite multifield: the `Resources` field uses `component: container` with `multi: true`, so each repeated entry can hold multiple related fields.

## Important limitation

Universal Editor supports multi-fields and composite multi-fields, but it does not allow nested container multi-fields in the properties panel. That means a true `phase -> milestones -> milestone links` dialog structure cannot be modeled as nested multifields inside a single block model.

## Recommended ways to achieve nested requirements

1. Recommended and implemented here: use a container block for the first repeated level, and use simple or composite multi-fields inside each item for the second level.
2. For real hierarchy in EDS: model the second level as authored child components or sections, then combine them in delivery with auto-blocking or a light decorator.
3. For deep structured data: author the hierarchy in Content Fragments or spreadsheet-style data and let the block render from that source.

## Universal Editor authoring guide

1. Push the branch and open Universal Editor with `?ref=<branch-name>`.
2. Add a `Multifield Block` inside a section.
3. Select the `Multifield Block` and use `Add` to create one or more `Multifield Block Item` items.
4. For each phase, author `Phase Title`, `Phase Description`, and add one or more `Highlights`.
5. Add one or more `Resources` entries when the phase needs grouped link data.
6. Publish to Preview and validate the rendered structure in the local AEM proxy.

## Resulting authoring behavior

- Authors get an AEM dialog-like repeated item flow for phases.
- Each phase supports both flat repeated values and grouped repeated values.
- Nested composite multifields are intentionally avoided because Adobe documents that as unsupported in the Universal Editor properties panel.