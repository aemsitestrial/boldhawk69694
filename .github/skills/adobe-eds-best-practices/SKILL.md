---
name: adobe-eds-best-practices
description: "Use when: creating or updating Adobe Edge Delivery Services (EDS) / AEM Universal Editor blocks, content models, sections, header/footer blocks, CSS, JavaScript, or project workflows. Includes Adobe-authoritative guidance for component modeling, block development, authoring patterns, previewing, linting, and collaboration best practices."
---

# Adobe EDS / AEM Universal Editor Best Practices

This skill is the first reference point for Adobe Edge Delivery Services (EDS) and AEM Universal Editor work in this workspace.

Use this skill before broader searches for any request involving:
- block and section authoring
- component definitions and model files
- block lifecycle and DOM decoration
- CSS/JS development for AEM/EDS blocks
- Universal Editor authoring and preview workflows
- header/footer patterns
- branch workflows, PR review, and linting
- content-first and collaboration best practices

## Required workflow

1. Check this skill document first for the relevant domain guidance.
2. If the specific answer is not in this file, search the local codebase and the Adobe references below.
3. Use the best matching Adobe reference to confirm the final implementation.
4. Keep the code aligned with the AEM.EDS model conventions and project-level lint rules.

## Canonical Adobe references

Primary references:
- https://www.aem.live/developer/component-model-definitions
- https://www.aem.live/developer/markup-sections-blocks
- https://www.aem.live/developer/block-collection
- https://www.aem.live/developer/ue-tutorial
- https://www.aem.live/docs/dev-collab-and-good-practices

Universal Editor training references:
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/edge-delivery-services/developing/universal-editor/5-new-block
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/edge-delivery-services/developing/universal-editor/6-author-block
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/edge-delivery-services/developing/universal-editor/7a-block-css
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/edge-delivery-services/developing/universal-editor/7b-block-js-css
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/edge-delivery-services/developing/universal-editor/how-to/block-options
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/edge-delivery-services/developing/universal-editor/how-to/header-and-footer
- https://experienceleague.adobe.com/en/docs/experience-manager-learn/sites/edge-delivery-services/developing/universal-editor/how-to/local-extension-preview

## Core principles

### 1. Start with content, not code
- Model content to match authoring semantics and real content intent.
- Prefer semantic default content over forcing authors into complex tables.
- Use drafts for structural changes and avoid changing production content blindly.
- Keep new content structures backwards compatible where possible.

### 2. Prefer semantic markup over custom DOM hacks
- Blocks should map authoring fields to meaningful HTML semantics.
- Use the natural document semantics first: headings, text, links, lists, images.
- Only decorate or re-shape DOM when required for layout or interaction.
- Avoid unnecessary DOM rewrites that may break the authoring UX in Universal Editor.

### 3. Keep block model design intentional
- A block model defines what authors can edit and how it is rendered.
- Use field collapse and element grouping to create semantic groups.
- Use type inference for image, link, and rich text behavior.
- Use block option classes for variants; avoid creating a new block when a variant is enough.

### 4. Keep blocks isolated and simple
- Scope block CSS to the block class.
- Prefer readable selectors over deep nested selectors.
- Keep CSS names intuitive and reusable.
- Avoid heavy frameworks and unnecessary tooling in block code.

### 5. Favor progressive enhancement
- Use CSS for layout and styling when structure is already semantic.
- Use JavaScript only for real enhancement and interactivity.
- Ensure JS works without breaking the authoring experience.
- Keep scripts lightweight and scoped.

### 6. Follow AEM project conventions
- Block folder name matches block name.
- Block CSS and JS are usually in the block directory with the same base name.
- For authoring-based blocks, JSON files define:
  - definitions
  - models
  - filters
- Use the standard AEM resource type:
  - core/franklin/components/block/v1/block
  - section uses core/franklin/components/section/v1/section

## Modeling rules

### Block model
A block model should:
- define the authoring experience
- map to semantic HTML in EDS
- minimize custom JS DOM rewriting
- align with how the block is used in the design

### Type inference
Useful for default content and simple authoring:
- Images become picture/img markup.
- Links become anchor tags.
- Rich text gets rendered as HTML.
- classes values become block option classes.

### Field collapse
Combine related data into one semantic element:
- image + alt text -> picture/image
- link + label + type -> button/link
- heading + heading type -> heading element

### Element grouping
Group related fields into a single logical content unit:
- text + title + CTA
- image + supporting text
- block option classes groups

### Container blocks
Use container blocks only when a block should accept children and the author needs multiple repeated items.

## Block lifecycle

The typical EDS block lifecycle is:
1. Author content in AEM Universal Editor or document markup.
2. Page content is parsed into sections and blocks.
3. Generic decoration runs in scripts.js and aem.js.
4. The block is discovered and `decorateBlock()` is applied.
5. CSS and JS for the block are loaded via the block loader.
6. The block module runs and enhances the HTML.
7. Visual styling is applied from the block CSS.
8. The page is previewed locally and in AEM preview.

## Practical implementation guidance

### JSON and component definitions
- Use component-models.json, component-definitions.json, and component-filters.json as generated outputs of block JSON definitions.
- Keep block JSON clean and minimal.
- Ensure names, IDs, model references, and filters match the block folder and usage.
- Add block ids to the correct section filter when the block is authored inside sections.

### CSS guidance
- Prefer block-scoped selectors such as `.block.teaser`.
- Keep selectors readable and maintainable.
- Use mobile-first design and standard breakpoints: 600px, 900px, 1200px.
- Avoid overly deep selectors and brittle CSS.
- Do not use !important by default.
- Keep CSS fluid and contextual for the block.

### JavaScript guidance
- Use JavaScript only when needed.
- Keep it simple and browser-native.
- Use `export default function decorate(block) { ... }` for block scripts.
- Prefer adding classes and attributes over moving elements unless required.
- Avoid heavy libraries or framework dependencies unless absolutely necessary.

### Header/footer guidance
- Header and footer are special blocks tied to `<header>` and `<footer>`.
- Their content is often authored on dedicated AEM pages and loaded as fragments.
- Keep the fragment pattern simple and maintainable.
- Update and publish the dedicated header/footer pages separately.

### Block options guidance
- Use `classes` field for block variants.
- Prefer semantically meaningful class values such as `side-by-side` instead of arbitrary names.
- Use options to control layout or theme variations, not to build entirely new blocks.

## Collaboration and project workflow

### Git and PR rules
- Prefer small PRs and trunk-based development.
- Keep branch scope focused and reviewable.
- Open draft PRs for work in progress.
- Include preview URLs in PR descriptions.
- Do not push directly to main without project rules. 

### Linting and quality gates
- Run linting before completion and before PR submission.
- Keep the project lint rules consistent with boilerplate.
- Do not change linting rules for personal preference.
- Verify no lint errors remain in the changed block.

### Performance and quality
- Keep pages fast and accessible.
- Use lazy loading appropriately.
- Avoid placing heavy dependencies in the critical path.
- Prefer AEM boilerplate patterns before custom solutions.
- Check Lighthouse/PageSpeed targets where project practices require them.

### Repository and code health
- Prefer public repositories unless there is a valid reason not to.
- Keep code reusable and easy to onboard to.
- Maintain simple project setup and avoid custom build-heavy tooling where not needed.

## Local development and preview

Use the local AEM CLI workflow for fast feedback:
- clone the repo
- install dependencies
- run the local AEM preview
- test pages in preview and authoring UI
- validate CSS/JS in the local environment
- preview block changes in Universal Editor after branch push

For local Universal Editor extension work:
- run the extension locally
- accept the self-signed cert
- open the page in Universal Editor
- add `devMode=true&ext=https://localhost:9080`

## Decision guide for common tasks

### If the task is about authoring properties or content models
Consult:
- component-model-definitions
- block collection
- type inference / field collapse / element grouping guidance

### If the task is about page structure or sections
Consult:
- markup-sections-blocks
- section metadata behavior
- auto-blocking guidance

### If the task is about block CSS or DOM shaping
Consult:
- 7a-block-css
- 7b-block-js-css
- CSS isolation best practices

### If the task is about header/footer behavior
Consult:
- header-and-footer tutorial
- fragment loading approach

### If the task is about variant styling or block options
Consult:
- how-to/block-options
- block option classes

### If the task is about repo and PR quality
Consult:
- dev-collab-and-good-practices
- linting, PR etiquette, and performance rules

## Quick checklist before finishing work

- Has the project skill been checked first?
- Is the solution aligned with Adobe EDS/AEM best practices?
- Did we model the content semantically?
- Did we avoid unnecessary DOM rewrites?
- Is the block CSS scoped and readable?
- Is JavaScript limited to real enhancement?
- Have we tested preview behavior local and in Universal Editor?
- Have we linted the project and fixed errors?
- Is the change review-friendly and scoped?

## Summary

The Adobe EDS best practice is simple:
- model content intentionally
- keep semantics clean
- minimize unnecessary DOM manipulation
- scope styling and logic strictly
- validate in local preview and Universal Editor
- keep PRs small, reviewable, and production-safe

This file is the canonical workspace reference for Adobe EDS and Universal Editor development practices.
