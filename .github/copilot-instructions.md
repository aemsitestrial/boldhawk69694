# Copilot Instructions

## Figma MCP

- Use the workspace MCP server configured in `.vscode/mcp.json` to access Figma design context.
- Prefer the remote Figma MCP server at `https://mcp.figma.com/mcp`.
- For design-to-code tasks, start from a Figma frame or layer link and extract its node id through the MCP workflow.
- Use Figma MCP tools that fit the task:
  - `get_metadata` for page and frame discovery
  - `get_design_context` for structure and code-oriented context
  - `get_variable_defs` for tokens and styles
  - `get_screenshot` when visual fidelity matters

## AEM EDS + Universal Editor

- Implement Figma designs using existing Adobe EDS patterns in this repo before introducing new blocks.
- Favor semantic content structure, block isolation, and minimal DOM reshaping.
- Keep authoring compatible with Universal Editor models and block conventions.
- Reuse or extend existing blocks such as hero, cards, columns, header, footer, and fragment when possible.
- Validate changes with the narrowest available check, then preview through the local AEM workflow.

## References

- MCP TypeScript SDK docs: https://ts.sdk.modelcontextprotocol.io/v2/
- MCP protocol docs: https://modelcontextprotocol.io/docs
- Figma MCP docs: https://developers.figma.com/docs/figma-mcp-server/
- Figma MCP tools: https://developers.figma.com/docs/figma-mcp-server/tools-and-prompts/
- Adobe EDS docs: https://www.aem.live/developer/anatomy-of-a-project