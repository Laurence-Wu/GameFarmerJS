# Task: card_08

| Field | Value |
|---|---|
| **Workflow** | gamefarm_evolve |
| **Version** | v1 |
| **Card** | card_08 |
| **Priority** | normal |
| **Timestamp** | 2026-03-15T03:00:55.315528 |
| **Tags** | backlog, reprioritize, loop-reset, hygiene |

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

## card_08 · Backlog Refresh and Loop Reset

Workspace: `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS`

---

### Phase 1 — Review the Cycle

1. Read `GAMEFARM_CHANGELOG.md` (last 3 entries) — understand what was improved.
2. Read `GAMEFARM_AUDIT.md` — which issues remain FOUND but unaddressed?
3. Read `GAMEFARM_ASSETS.md` if it exists and is not a SKIPPED entry — note staged-but-unintegrated assets.

---

### Phase 2 — Rewrite GAMEFARM_BACKLOG.md

Write a fresh `GAMEFARM_BACKLOG.md` with **at most 10 items**, ranked by priority.

Priority definitions:
- **P1**: DRY violations causing divergent behavior (harvest logic, ItemRegistry), broken stubs
- **P2**: Content/usability gaps (missing toolbar categories, crop variety, price display duplication)
- **P3**: Polish (typos, magic numbers, empty stubs)

Format:
```markdown
# GameFarm Evolve Backlog

Updated: YYYY-MM-DD (cycle N)

| Priority | File(s) | Issue | Effort estimate |
|----------|---------|-------|-----------------|
| P1 | src/element/element_actions/ (3 files) | Harvest logic not sharing AbstractHarvestAction | ~40 lines |
| P1 | src/view/buttons/ (3 files) | Element.getElementFromId duplicated; needs ItemRegistry.getItem | ~25 lines |
| P2 | src/view/bar.js + registry.js | TOOLBAR_CATEGORY hardcoded; DECORATION category missing | ~15 lines |
| P2 | src/view/menus/ (2 files) | Price display logic duplicated between MenuShop and MenuShopMore | ~20 lines |
| P2 | src/game_manager/registry.js | Only 5 crop types; add carrot/corn/tomato from scraped assets | ~10 lines |
| P3 | src/game_manager/game_lang.js | Typo: "sqaure" should be "square" | 1 line |
| P3 | src/game/map.js | Magic number 0.55 (island coverage) needs named constant | 2 lines |
| P3 | src/game/resource.js | Empty stub getResourceFromId(id) should be removed or implemented | 2 lines |
```

**Seed rule** (cycle 1 only): if `GAMEFARM_BACKLOG.md` does not yet exist, seed from the Known Issue Checklist in `GAMEFARM_AUDIT.md`, minus any item addressed this cycle.

**Promotion rule**: any issue appearing in the backlog for 3+ cycles without being selected MUST be promoted one level (P3→P2→P1) or annotated `[DEFERRED: reason]`.

**Asset opportunity rule**: if `GAMEFARM_ASSETS.md` lists staged-but-unintegrated assets, add a P2 item: `Integrate staged <name> assets into registry.js`.

---

### Phase 3 — Clean Up Sprint Artifacts

Delete one-cycle artifact files (use `rm` or delete directly):
- `GAMEFARM_SPRINT.md`
- `GAMEFARM_REVIEW.md`
- `GAMEFARM_ASSETS.md` — ONLY if assets were fully integrated this cycle; retain if staged assets remain unintegrated

Do NOT delete: `GAMEFARM_AUDIT.md`, `GAMEFARM_CHANGELOG.md`, `GAMEFARM_BACKLOG.md`.

---

### Phase 4 — Workspace Sanity Check

```bash
cd C:\Users\MSI\Desktop\WinCoding\GameFarmerJS
git status
git log --oneline -5
```

The working tree must be clean. If stray uncommitted changes exist:
- Stage and commit any legitimate source file missed in card_07
- Discard accidental modifications: `git checkout -- <file>`

Confirm the merge commit from card_07 appears on top of `git log`.

---

### Phase 5 — Self-Evolution Score

Compute cycle health delta:
- `N_before` = P1 count from `GAMEFARM_AUDIT.md`
- `N_after` = P1 count in the new `GAMEFARM_BACKLOG.md`
- `delta = N_before - N_after` (positive = improved)

Append to `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS\ops_log.md`:
```
[YYYY-MM-DD HH:MM UTC] cycle N — <sprint type>: improved <scope>, P1 delta: <signed value>, next priority: <top backlog item>
```

Write `![next]!` when: backlog is written, artifacts are cleaned, workspace is git-clean, and `ops_log.md` is updated. The loop returns to card_01.

> **GIT SAFETY — NON-INTERACTIVE MODE**: Some git commands open an interactive editor (e.g. `git commit` without `-m`, `git rebase -i`, `git merge` with conflicts). This will **block the agent session** and require manual intervention.

> **Always use non-interactive flags**:
> - `git commit -m "message"` — never bare `git commit`
> - `git merge --no-edit` — accept the default merge message
> - `git rebase --abort` if an interactive rebase accidentally starts
> - If an editor opens unexpectedly, press **Ctrl+X** to exit nano/pico without saving, then retry with a non-interactive flag.


> **HOUSEKEEPING REMINDER**: Before finishing this task, take a moment to DRY up any duplicated code you encounter and tidy the folder structure. Remove dead code, consolidate shared logic, and ensure clean imports.

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
- **Files changed**: GAMEFARM_BACKLOG.md, ops_log.md; deleted GAMEFARM_SPRINT.md, GAMEFARM_REVIEW.md, GAMEFARM_ASSETS.md
- **Commands run**: rm -f (artifact cleanup), git status, git log
- **Tests**: n/a
- **Git**: main (372e963) - 7 cycles complete, backlog empty
- **Notes**: All P1/P2/P3 issues resolved. Backlog refreshed with empty state. Artifacts cleaned. Ops log updated.

![next]!

