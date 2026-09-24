# Layout Block

This block follows the Adobe EDS recommendation to reuse an existing container-item pattern and use block options through the reserved `classes` field for layout variants.

## Implemented approach

- The block reuses the same content model shape as `cards`: a container block with repeated `Layout Item` children.
- Layout variation is modeled on the block itself with a `select` field named `classes`.
- The selected option adds a semantic class to the block element: `two-columns`, `three-columns`, or `four-columns`.

## Why this matches Adobe best practices

- It keeps the model simple and intentional.
- It uses block options for visual variation instead of creating three separate blocks.
- It preserves semantic block markup and keeps JavaScript limited to light DOM enhancement.

## Universal Editor authoring guide

1. Push the branch and open Universal Editor with `?ref=<branch-name>`.
2. Add a `Layout` block inside a section.
3. In the properties panel, choose `Layout Variation` as `2 Columns`, `3 Columns`, or `4 Columns`.
4. Use `Add` on the block to create one or more `Layout Item` entries.
5. For each item, author an image and rich text.
6. Publish to Preview and validate the rendered variant in the local AEM proxy.

## Rendered behavior

- Mobile: all variants stack as a single column.
- Tablet: the `2 Columns`, `3 Columns`, and `4 Columns` variants render as two columns.
- Desktop: the `3 Columns` and `4 Columns` variants expand to their selected column count.