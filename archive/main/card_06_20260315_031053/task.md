# Task: card_06

| Field | Value |
|---|---|
| **Workflow** | gamefarm_evolve |
| **Version** | v1 |
| **Card** | card_06 |
| **Priority** | high |
| **Timestamp** | 2026-03-15T03:09:44.865256 |
| **Tags** | validation, gate, review, quality |
| **Branches** | `fail`→`card_04` |

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

## card_06 · Validation Gate

Workspace: `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS`

This is a **hard gate**. Every FAIL must be fixed before writing the next signal.

---

### Automated Checks

**Check 1 — Diff size gate**
```bash
cd C:\Users\MSI\Desktop\WinCoding\GameFarmerJS
git diff main...HEAD --stat
```
PASS: total lines added + removed ≤ 150. FAIL: reduce scope before continuing.

**Check 2 — Files touched count**
PASS: ≤ 4 files. FAIL: revert excess changes.

**Check 3 — Import path integrity**
```bash
git diff main...HEAD --name-only
```
For each modified `.js` file, verify every `import` statement resolves to a file that exists on disk.
PASS: all import paths exist. FAIL: fix broken imports.

**Check 4 — No debug artifacts**
```bash
git diff main...HEAD
```
Search for new `console.log(`, `debugger`, `alert(` in changed lines of production code.
PASS: none found (pre-existing `console.log` in map.js is OK — do NOT flag it). FAIL: remove new ones.

**Check 5 — No secrets or credentials**
Search diff for: `password`, `api_key`, `token =`, `Bearer`, `-----BEGIN`.
PASS: none found.

**Check 6 — Asset file existence (asset sprints only)**
For each `newImage(...)` call added in `game_assets.js`, verify the referenced PNG exists on disk.
PASS: every file exists. FAIL: remove registration or download missing asset.

---

### Manual Checklist

Record PASS / FAIL / N-A for each:

7. All acceptance criteria from `GAMEFARM_SPRINT.md` are satisfied (check each one explicitly).
8. The duplicated pattern no longer appears in old locations. Grep to confirm — e.g., for ItemRegistry, `Element.getElementFromId` should return zero matches in `button_buy.js`, `button_sell.js`, `button_more.js`.
9. New abstractions follow conventions: `snake_case` file names, `PascalCase` class names.
10. No bare catch-all error handling added without a meaningful comment.
11. No commented-out code blocks added.
12. `TOOLBAR_CATEGORY` references use the exported constant from `src/view/bar.js`, not raw DOM queries.
13. For asset sprints: element ID in `game_assets.js` is consistent with what `getElementId()` will return.

---

### Fix Loop

For each FAIL: fix in place on the feature branch, re-read the changed code, confirm PASS.
Do NOT write any next signal while any check is FAIL.

---

### Write GAMEFARM_REVIEW.md

```
# GameFarm Review — Cycle N

## Automated Checks
| # | Check | Result | Notes |
|---|-------|--------|-------|
| 1 | Diff size | PASS/FAIL | N lines |
| 2 | Files touched | PASS/FAIL | N files |
| 3 | Import paths | PASS/FAIL | ... |
| 4 | Debug artifacts | PASS/FAIL | ... |
| 5 | Secrets | PASS/FAIL | ... |
| 6 | Asset existence | PASS/FAIL/N-A | ... |

## Manual Checklist
| # | Item | Result | Notes |
|---|------|--------|-------|
| 7 | Acceptance criteria | PASS/FAIL | ... |
| 8 | DRY pattern removed | PASS/FAIL/N-A | ... |
| 9 | Naming conventions | PASS/FAIL | ... |
| 10 | Error handling | PASS/FAIL | ... |
| 11 | No dead code | PASS/FAIL | ... |
| 12 | TOOLBAR_CATEGORY usage | PASS/FAIL/N-A | ... |
| 13 | Element ID consistency | PASS/FAIL/N-A | ... |

## Issues Found and Fixed
<list any FAILs and the fix applied>

## Final Verdict
**APPROVED** or **NEEDS_REWORK**
```

If verdict is **APPROVED**: write `![next]!`
If verdict is **NEEDS_REWORK**: write `![next:fail]!` (routes back to card_04 for repair)

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
- **Files changed**: GAMEFARM_REVIEW.md
- **Commands run**: git diff (validation checks), git commit
- **Tests**: n/a
- **Git**: feat/gamefarm-fence-module (66697ab)
- **Notes**: All validation checks PASS. Diff size 81 lines (49+32), 3 source files. GAMEFARM_REVIEW.md created with APPROVED verdict.

![next]!

