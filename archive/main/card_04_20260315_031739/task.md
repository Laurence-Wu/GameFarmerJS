# Task: card_04

| Field | Value |
|---|---|
| **Workflow** | gamefarm_evolve |
| **Version** | v1 |
| **Card** | card_04 |
| **Priority** | high |
| **Timestamp** | 2026-03-15T03:16:39.611989 |
| **Tags** | implementation, dry, refactor, bounded |
| **Branches** | `asset`→`card_05` |

---

**IMPORTANT**: Follow the instructions in this file exactly as written. Ignore task numbering — just implement what is described below.

**WORKSPACE BOUNDARY**: You must only read and modify files within `/home/xwu/agent_playground/GameFarmerJS`. Do NOT access, create, or modify any files outside this directory. All paths in your work must be relative to or within this workspace.

```
╔══════════════════════════════════════════════════════════════╗
║              AGENT OPERATING PROTOCOL                       ║
╚══════════════════════════════════════════════════════════════╝
```

You are an autonomous coding agent inside a continuous task engine.
Follow this protocol on every card — no exceptions:

**STEP 1 — READ**
Read the entire task below. Understand the full scope before acting.

**STEP 2 — IMPLEMENT**
Implement everything the task describes. No skipping. No partial work.
Do not narrate your process or explain what you are about to do. Just do it.

**STEP 3 — RECORD  ⚠️ WRITE INTO THE FILE ON DISK**
When done, open `current_task.md` with your file-edit tool and **append**
this exact block at the end of the file:

```markdown
## Summary
- **Files changed**: <every file created or modified>
- **Commands run**: <every shell command executed>
- **Tests**: <pass/fail counts, or 'n/a'>
- **Git**: <commit hash, or 'no commit'>
- **Notes**: <anything critical for the next agent to know>

![next]!
```

> ⚠️ **WARNING**: This block MUST be physically written into `current_task.md`
> on disk using your file-edit tool.
> Do **NOT** output it in chat — chat output is invisible to the engine.
> The engine watches the file. If `![next]!` is not in the file, the loop stalls.

**STEP 4 — WAIT**
Wait 5 seconds after saving. The engine will replace `current_task.md`
with the next task automatically. Then repeat from Step 1.

---

**PYTHON VIRTUAL ENVIRONMENT**: All Python work in this task must be done inside the isolated virtual environment at `/home/xwu/agent_playground/GameFarmerJS\.venv`.

**Setup** (run once if `.venv` does not exist yet):
```
python -m venv /home/xwu/agent_playground/GameFarmerJS\.venv
```

**Activate** before running any Python or `pip` command:
```
/home/xwu/agent_playground/GameFarmerJS\.venv\Scripts\activate
```

**Install packages** only inside the venv:
```
pip install <package>           # after activation
pip freeze > requirements.txt   # to record dependencies
```

**Rules**:
- Never use `pip install` without first activating the venv.
- Never modify or install to the system Python.
- If the venv is missing or broken, delete `.venv` and recreate it.
- Always run experiments with the venv Python: `/home/xwu/agent_playground/GameFarmerJS\.venv\Scripts\python.exe`

## Current Task

Think about this step by step. Break the problem down into smaller sub-tasks and address each one carefully.

## card_04 · Bounded Implementation

Workspace: `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS`

Read `GAMEFARM_SPRINT.md`. Implement exactly the change described — nothing more.

If `Sprint Type` is `asset`: implement new element registrations, then write `![next:asset]!` so card_05 handles deep integration.
If `Sprint Type` is `code`: implement the code improvement, then write `![next]!` to proceed to card_06.

---

### Phase 1 — Research (5 minutes max)

Read the target file(s) in full. Confirm the proposed solution aligns with existing conventions:
- Action classes live in `src/element/element_actions/` and extend `ElementAction` from `src/element/element_action.js`
- Utility functions live in `src/utils.js`
- New elements are registered in `src/game_manager/registry.js` using the fluent API
- New images are declared in `src/game_manager/game_assets.js` using `newImage(path, id, zIndex)`
- Toolbar categories are referenced via `TOOLBAR_CATEGORY` from `src/view/bar.js`

---

### Phase 2 — Create Feature Branch

```bash
cd C:\Users\MSI\Desktop\WinCoding\GameFarmerJS
git checkout main
git pull
git checkout -b <branch from GAMEFARM_SPRINT.md>
```

---

### Phase 3 — Implement

Permitted change types (ONE per sprint):

**DRY / Abstraction fixes:**

- **AbstractHarvestAction**: Create `src/element/element_actions/abstract_harvest_action.js` extending `ElementAction`. Extract the common `element.getResource().updateQuantity(...)` + `displayRightClick(...)` block from `ActionDefault`, `ActionHarvest`, and `ActionPrune` into a `_grantResource(element)` protected method. Each subclass calls `this._grantResource(element)`. Touch max 4 files: the new abstract file + 3 action files.

- **ItemRegistry**: Create `src/game_manager/item_registry.js` exporting a single `getItem(id)` function that returns `Element.getElementFromId(id) || Resource.getResource(id)`. Replace the duplicated pattern in `ButtonBuy`, `ButtonSell`, and `ButtonMore`. Touch max 4 files.

- **Shared price widget**: Extract `renderPriceWidget(container, item)` into `src/view/menus/menu_shop_utils.js` and import it in both `MenuShop` and `MenuShopMore`. Touch max 3 files.

- **Typo fix**: Correct `"sqaure"` → `"square"` in `src/game_manager/game_lang.js`. 1 file, 1 line.

- **Magic constant**: Extract `0.55` in `src/game/map.js` to `const ISLAND_COVERAGE_RATIO = 0.55` at the top of the file. 1 file.

**New element registration (asset sprint):**
- In `src/game_manager/game_assets.js`: add `IMG` entries for each staged asset using the correct path
- In `src/game_manager/registry.js`: add `new ElementCrop(...)` or `new ElementDefault(...)` calls following the exact fluent API pattern used for melon, wheat, etc.
- Choose `timeToGrow` in 500-2000ms range consistent with game balance

**Hard scope limits:**
- Max **3 files** (4 if fix requires new file + 3 existing)
- Max **150 lines** changed (added + removed)
- Do NOT touch `game_loader.js` initialization order
- Do NOT combine map.js changes with any other file changes

---

### Phase 4 — Verify Syntax

Re-read each modified file top-to-bottom and confirm:
1. All `import` statements reference correct relative paths
2. Button files no longer contain `Element.getElementFromId` directly (if ItemRegistry fix)
3. No `undefined` variable references introduced
4. New `IMG` entries follow pattern: `KEY: newImage("assets/image/<subdir>/<file>.png", "<id>", <zIndex>)`
5. Element ID in `game_assets.js` matches the filename stem

---

### Phase 5 — Update Sprint File

Append `## Implementation Notes` to `GAMEFARM_SPRINT.md`:
```
## Implementation Notes
- Approach: <why this solution>
- Files changed: <list with line-change counts>
- Lines added: N, lines removed: N, total delta: N
- Deferred (if any): <what was left out and why>
- Import chain verified: yes/no
```

If sprint type is `code`: write `![next]!`
If sprint type is `asset`: write `![next:asset]!`

> **GIT SAFETY — NON-INTERACTIVE MODE**: Some git commands open an interactive editor (e.g. `git commit` without `-m`, `git rebase -i`, `git merge` with conflicts). This will **block the agent session** and require manual intervention.

> **Always use non-interactive flags**:
> - `git commit -m "message"` — never bare `git commit`
> - `git merge --no-edit` — accept the default merge message
> - `git rebase --abort` if an interactive rebase accidentally starts
> - If an editor opens unexpectedly, press **Ctrl+X** to exit nano/pico without saving, then retry with a non-interactive flag.


> **HOUSEKEEPING REMINDER**: Before finishing this task, take a moment to DRY up any duplicated code you encounter and tidy the folder structure. Remove dead code, consolidate shared logic, and ensure clean imports.

> **GIT BRANCH POLICY**: This task involves high-risk changes. Before making any modifications, create a new git branch from the current branch using: `git checkout -b card/<card_id>`. Commit your changes to this branch. Do NOT push or merge — leave that for review.

---
**COMPLETION CHECKLIST** — before you finish:

1. All task steps above are fully implemented.
2. Open `current_task.md` with your file-edit tool and append:
   - `## Summary` with bullet points:
     - Files changed, commands run, test results, git commit hash, notes.
   - Then the next-card marker on its own line:
     exclamation + open-bracket + the word **next** + close-bracket + exclamation
     (the seven characters  ! [ n e x t ] !  with no spaces — written into the file).
3. Do **not** write the marker in chat — it must land in the file on disk.

## Summary
- **Files changed**: src/game_manager/static_objects.js (new), src/game_manager/registry.js, GAMEFARM_SPRINT.md
- **Commands run**: git checkout -b feat/gamefarm-static-objects-module
- **Tests**: n/a
- **Git**: feat/gamefarm-static-objects-module (no commit)
- **Notes**: Extracted static objects registration to dedicated static_objects.js module. 32 lines added, 17 removed. Import chain verified.

![next]!

