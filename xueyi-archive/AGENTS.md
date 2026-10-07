# Xueyi's Archive — guidance for coding agents

## Project
A static personal portfolio. Source lives in `public/`; `scripts/build.mjs` copies it to generated `dist/`. Do not edit `dist/` directly. No framework or application dependencies are required. Use Node 18 or newer.

## Approved visual direction
- Elegant, experimental fantasy; fashion editorial influence.
- Continuous purple-black background throughout the page and project dialogs. Avoid light-background section breaks.
- Palette: background `#100b16`, pink `#e9c3df`, lavender `#bba4d7`, text `#eae1ec`.
- Cormorant Garamond serif for display type, with italic variants; DM Sans for body copy and metadata. Fonts load from Google Fonts with system fallbacks.
- Original hero artwork combines a lilac orchid, silver lace, and a chrome star. Do not present it as a portfolio project or as the user's own artwork.
- Keep responsive sizing, readable copy, keyboard focus, native dialog close/Escape behavior, and reduced-motion support.

## Structure and content
Page order: hero → personal bio → four category cards → footer.
Desktop: two-column card grid. Mobile: single column.
Categories: Interaction Design; Product & Technology; 3D Art; Graphic Design.
Product & Technology combines Computer Science and internship projects, including TikTok and Sohu.
Category buttons open project-list dialogs. Project data is in `public/script.js`.
3D Art and Graphic Design remain empty pending actual work assets. Do not invent completed projects, experience, metrics, contact details, or links.

## Commands
`npm run dev` starts a local preview on port 3000; browser refresh is required after edits.
`npm run check` checks browser JavaScript syntax.
`npm run build` produces deployable static files in `dist/`.
No credentials or application API keys are needed.

## Existing Site
`.openai/hosting.json` identifies the existing Site. Preserve its `project_id`; never create a replacement Site when continuing this portfolio. Sites publication requires the Sites plugin and its normal source synchronization and deployment workflow. Local changes or GitHub pushes do not automatically update the hosted Site. Use a different host only when requested.
