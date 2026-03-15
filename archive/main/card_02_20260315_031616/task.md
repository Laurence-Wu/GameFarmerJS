# Task: card_02

| Field | Value |
|---|---|
| **Workflow** | gamefarm_evolve |
| **Version** | v1 |
| **Card** | card_02 |
| **Priority** | high |
| **Timestamp** | 2026-03-15T03:15:42.923890 |
| **Tags** | planning, sprint, selection |

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

## card_02 · Sprint Target Selection

Workspace: `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS`

Select ONE bounded improvement from `GAMEFARM_AUDIT.md` and write a complete sprint plan.

---

### Phase 1 — Read Context

1. Read `GAMEFARM_AUDIT.md` — collect all FOUND issues.
2. Read `GAMEFARM_CHANGELOG.md` (last 3 entries if it exists) — build a **recently-touched exclusion list** of files changed in the last 2 cycles.
3. Read `GAMEFARM_BACKLOG.md` (if exists) — check for deferred P1 items carried over.

---

### Phase 2 — Score and Rank Candidates

Score each FOUND issue:
```
score = priority_weight × (1 + no_abstraction) × (1 + systemic_bonus) - recently_touched_penalty
```
- `priority_weight`: P1=5, P2=2, P3=1
- `no_abstraction`: 1 if the fix introduces a missing shared utility/base class, else 0
- `systemic_bonus`: 1 if fixing it unblocks 2+ other issues, else 0
- `recently_touched_penalty`: 3 if the target file was changed in the last 2 cycles

**Asset sprints** are eligible when ALL P1 issues have been addressed in previous cycles OR when `GAMEFARM_ASSETS.md` exists with ready-to-integrate assets. Score asset sprints at 3.

---

### Phase 3 — Selection Rules

The selected target MUST satisfy:
- ONE atomic change (not "refactor the whole action system")
- Bounded: ≤ 150 lines (added + removed) across ≤ 3 source files
- Safe: does not touch `game_loader.js` initialization order
- Verifiable: confirmable by reading the resulting source code

If top candidate requires > 150 lines: select only the smallest self-contained slice, defer the rest to `GAMEFARM_BACKLOG.md`.

**Sprint type classification**:
- Code fix → `type: code`
- New crop/decoration from assets → `type: asset`

---

### Phase 4 — Write GAMEFARM_SPRINT.md

```
# GameFarm Sprint: <title>

**Type**: code | asset
**Target file(s)**: <relative paths>
**Issue**: <one sentence>
**Root cause**: <one sentence>
**Priority**: P1 / P2 / P3

## Acceptance Criteria
1. <specific and mechanically verifiable>
2. ...
(max 4 criteria)

## Files to Touch
- src/...  (max 3 total)

## Estimated Scope
- Lines added: ~N
- Lines removed: ~N
- Total delta: ~N  (must be ≤ 150)

## Branch
feat/gamefarm-<kebab-slug>

## Sprint Type
code | asset

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
```

Write `![next]!` when `GAMEFARM_SPRINT.md` is complete.

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
- **Files changed**: GAMEFARM_SPRINT.md
- **Commands run**: None (read-only file analysis)
- **Tests**: n/a
- **Git**: no commit
- **Notes**: All FOUND issues resolved (count=0). Selected code quality sprint: extract static objects registration to separate module. Backlog empty, health score 10/10.

![next]!

