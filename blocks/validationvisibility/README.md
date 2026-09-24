# Validation Suite

This validation suite replaces the oversized `blockvalidation` block with several focused blocks that stay within Adobe's recommended block-cell guardrail.

## Included blocks

1. `Validation Visibility`: conditional hide and show plus CTA reveal logic.
2. `Validation Rules`: required fields, regex validation, and number-range validation.
3. `Validation Options`: static `select`, `multiselect`, `radio-group`, and `checkbox-group` examples.
4. `Validation Pickers`: AEM tags, DAM assets, AEM content, and Content Fragment pickers.
5. `Validation Content`: Experience Fragment, date-time, and content-path validation examples.

## Why this split is recommended

- It keeps each block model small and intentional.
- It follows Adobe guidance to avoid configuration-heavy blocks.
- It avoids the `xwalk/max-cells` build error on a single oversized model.
- It makes authoring easier because each block teaches one topic.

## Authoring guidance

1. Add the validation blocks to the same section or to separate sections on a demo page.
2. Use `Validation Visibility` to test Core Image style hide and show behavior.
3. Use `Validation Rules` to test required text, slug regex, email regex, and number range rules.
4. Use `Validation Options` to test the static dropdown and choice controls supported directly in UE.
5. Use `Validation Pickers` and `Validation Content` to test the supported AEM-backed picker sources and `rootPath` restrictions.

## Dynamic dropdown note

True runtime-populated external dropdowns still require a Universal Editor extension or a build-time generated model file. The split only changes the model size, not that product limitation.