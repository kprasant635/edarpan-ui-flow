# e-Darpan UX Flow Diagram — PRD

## Problem Statement
User asked to add the repo `https://github.com/kprasant635/edarpan-ui-flow.git` into `/app`
(full-stack React + FastAPI + MongoDB). After setup they reported issues:
- "all nodes are not working" (some nodes non-clickable / new nodes not behaving / colors wrong)
- "reverse node also dotted lines" (return loops overlapping, hard to read, wrong direction, cannot create own dashed edges)

## Tech Stack
- React 19 + React Flow 11 + `dagre` (auto-layout) + Tailwind CSS
- FastAPI 0.110 backend (status route stub) + Motor / MongoDB
- Craco build with `@` path alias
- Data lives in `/app/frontend/src/flowData.js`
- View logic in `/app/frontend/src/App.js`

## What's been implemented — Jan 2026 (post-fix)
- Cloned & wired the `edarpan-ui-flow` repo into `/app`, added missing `reactflow` and `dagre` deps.
- Three tabs: **Complete Workflow**, **Citizen Portal**, **Officer Portal** — each backed by data in `flowData.js`.
- **Interactive diagram** with drag/resize/pan/zoom, minimap, controls.
- **Editable**: double-click a node to rename, drag between red handle-dots to create edges, select + Delete to remove.
- **Auto-Layout** (NEW): dagre-powered auto layout — `Auto ⇥` (left→right) and `Auto ⇩` (top→bottom). Fixes overlapping edges.
- **Edge editing toolbar** (NEW):
  - `⇢ Toggle dashed` — turns any selected edge into a red dashed "return" edge (or back).
  - `⇄ Reverse` — flips direction of the selected edge.
- **Dashed lines are now RED** and thicker (previously muted grey — hard to see). Return-arrow labels sit on a pink chip.
- **Connection handles enlarged** and coloured red so users can visually spot where to drag from to make new edges.
- **Screen details side panel** — click any node with a linked `screen` key → shows role, purpose, key actions.
- Legend + "how to edit" instructions + export/import JSON + reset per tab (localStorage-backed persistence).

## Core Requirements (static)
- Read HTML sources → derive screens + transitions → render as an editable flow diagram.
- Match the reference visual language (red start pill, dark end pill, blue steps, yellow scrutiny, green officer,
  purple diamond decision, pink rejected, red dashed return loops).
- Show details per screen on click.
- Fully user-editable (add / remove / rename / connect / reverse / toggle dashed).

## Prioritised backlog / Next
- **P1** Export current diagram as PNG / SVG / Mermaid text.
- **P1** Upload-your-own-HTML mode: backend endpoint that parses uploaded HTML via LLM → flow JSON → renders.
- **P2** Save named diagrams to backend (MongoDB) with share URLs.
- **P2** Deep-linkable node URLs (`?screen=citizen-otp`).
- **P2** Print / A3 poster layout.
- **P2** Edge rerouting / smart return-lane offsets so parallel dashed edges never overlap.

## Files touched
- `/app/frontend/src/App.js` — added dagre auto-layout, edge action toolbar, improved styling.
- `/app/frontend/package.json` — added `reactflow`, `dagre`.
- `/app/frontend/src/flowData.js`, `App.css`, `index.css`, `constants/` — synced from the repo.
