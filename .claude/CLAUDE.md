## vexp — Context-Aware AI Coding <!-- vexp v1.0.0 -->

### MANDATORY: use vexp pipeline — do NOT grep, glob, or Read files

For every task — bug fixes, features, refactors, debugging:
**call `run_pipeline` FIRST**. It executes context search + impact analysis +
memory recall in a single call, returning compressed results.

Do NOT use grep, glob, Bash, Read, or cat to search/explore the codebase.
vexp returns pre-indexed, graph-ranked context that is more relevant and
uses fewer tokens than manual file reading.

### Primary Tool

- `run_pipeline` — **USE THIS FOR EVERYTHING**. Single call that runs
  capsule + impact + memory server-side. Returns compressed results.
  Auto-detects intent (debug/modify/refactor/explore) from your task.
  Includes full file content for pivots (no need to Read files).
  Examples:
  - `run_pipeline({ "task": "fix JWT validation bug" })` — auto-detect
  - `run_pipeline({ "task": "refactor db layer", "preset": "refactor" })` — explicit
  - `run_pipeline({ "task": "add auth", "observation": "using JWT" })` — save insight in same call

### Other MCP tools (use only when run_pipeline is insufficient)

- `get_context_capsule` — lightweight alternative for simple questions only
- `get_impact_graph` — standalone deep impact analysis of a specific symbol
- `search_logic_flow` — trace execution paths between two specific symbols
- `get_skeleton` — token-efficient file structure for a specific file
- `index_status` — indexing status and health check
- `get_session_context` — recall observations from current/previous sessions
- `search_memory` — cross-session search for past decisions
- `save_observation` — persist insights (prefer using run_pipeline's observation param instead)

### Workflow

1. `run_pipeline("your task")` — ALWAYS FIRST. Returns pivots + impact + memories in 1 call
2. Make targeted changes based on the context returned
3. `run_pipeline` again ONLY if you need more context during implementation
4. Do NOT chain multiple vexp calls — one `run_pipeline` replaces capsule + impact + memory + observation

### Smart Features (automatic — no action needed)

- **Intent Detection**: auto-detects from your task keywords. "fix bug" → Debug, "refactor" → blast-radius, "add" → Modify
- **Hybrid Search**: keyword + semantic + graph centrality ranking
- **Session Memory**: auto-captures observations; memories auto-surfaced in results
- **LSP Bridge**: VS Code captures type-resolved call edges
- **Change Coupling**: co-changed files included as related context

### Advanced Parameters

- `preset: "debug"` — forces debug mode (capsule+tests+impact+memory)
- `preset: "refactor"` — deep impact analysis (depth 5)
- `max_tokens: 12000` — increase total budget for complex tasks
- `include_tests: true` — include test files in results
- `include_file_content: false` — omit full file content (lighter response)

### Multi-Repo Workspaces

`run_pipeline` auto-queries all indexed repos. Use `repos: ["alias"]` to scope.
Use `index_status` to discover available repo aliases.

<!-- /vexp -->

## Design System Rules

**Full rules:** `docs/figma-design-system.md` — read this before any UI task.

### Quick reference

**Package:** `@doctorproject/react` | **Storybook:** https://storybook-static-two-delta.vercel.app

**ALWAYS do first:**

```tsx
import "@doctorproject/react/styles"; // mandatory — components are unstyled without this
```

**Component imports:**

```tsx
import {
  Button,
  Input,
  Select,
  Textarea,
  Alert,
  Card,
  Modal,
  Table,
  Badge,
  Tag,
  Avatar,
  Tabs,
  Skeleton,
  EmptyState,
  Loader,
  AppSidebar,
  AppTopBar,
  AppFooter,
} from "@doctorproject/react";
```

**App shell (all authenticated screens):**

```tsx
<div className="app-layout">
  <AppSidebar />
  <div className="main-content">
    <AppTopBar />
    <main className="page-content">{children}</main>
    <AppFooter /> {/* must be INSIDE main-content */}
  </div>
</div>
```

**Token prefix:** `var(--drp-*)` — never hardcode colors, spacing, shadows, or radii.

**Design language:** Brutalist — `border-radius: 0` always. Offset-black shadows (`3px 3px 0 0 rgba(0,0,0,1)`).

**Never:**

- Raw `<button>`, `<input>`, `<select>`, `<textarea>` — use DS components
- Hardcode hex colors — use `var(--drp-purple)`, `var(--drp-error-dark)`, etc.
- Add `border-radius` — the design language is zero-radius
- Use `--drp-error` / `--drp-success` for text — use `--drp-error-dark` / `--drp-success-dark`
- Install external component libraries — add missing components to `@doctorproject/react`
- Infinite CSS animations — max 3 iterations
