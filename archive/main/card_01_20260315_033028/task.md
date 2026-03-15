# Task: card_01

| Field | Value |
|---|---|
| **Workflow** | gamefarm_evolve |
| **Version** | v1 |
| **Card** | card_01 |
| **Priority** | high |
| **Timestamp** | 2026-03-15T03:29:55.881105 |
| **Tags** | audit, branch-hygiene, dry, metrics |

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

## card_01 · Branch Hygiene + Deep Audit

Workspace: `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS`

---

### Phase 1 — Branch Hygiene

```bash
cd C:\Users\MSI\Desktop\WinCoding\GameFarmerJS
git fetch --prune
git branch -a
```

For every local branch that is NOT `main`:
1. Check if merged: `git branch --merged main`
2. If merged AND remote tracking branch is gone: delete with `git branch -d <branch>`
3. If NOT merged: check last commit date (`git log <branch> -1 --format="%ci"`). If older than 14 days, it is stale — delete with `git branch -D <branch>` and note it.
4. Known stale branch to evaluate: `v2/refactored` — check if fully merged into main.

---

### Phase 2 — File Metrics

For each `.js` file under `src/`, record:
- **line_count**, **func_count**, **max_func_len**, **todo_count**, **duplicate_patterns** (copy-pasted blocks > 4 lines)

---

### Phase 3 — Known Issue Checklist

Check each item; record **FOUND**, **OK**, or **SKIP** with file + line:

1. **Harvest logic duplication** — do `action_default.js`, `action_harvest.js`, and `action_prune.js` each contain `element.getResource().updateQuantity(...)` + `displayRightClick(...)` with no shared base class? → **FOUND P1** if yes.

2. **ItemRegistry missing** — does `button_buy.js`, `button_sell.js`, and `button_more.js` each duplicate `Element.getElementFromId(id) || Resource.getResource(id)` with no shared `ItemRegistry.getItem(id)` utility? → **FOUND P1** if yes.

3. **Toolbar categories hardcoded** — in `src/view/bar.js`, is `TOOLBAR_CATEGORY` a plain object with only `CROP` and `FENCE`, requiring edits to both `bar.js` and `registry.js` to add a new tab? → **FOUND P2** if yes.

4. **Price display duplicated** — do `menu_shop.js` and `menu_shop_more.js` each build price icon + value span inline with no shared `renderPriceWidget()` helper? → **FOUND P2** if yes.

5. **Typo in lang file** — does `src/game_manager/game_lang.js:4` contain `"sqaure"` misspelled? → **FOUND P3** if yes.

6. **Asset coverage gap** — count distinct crop types in `src/game_manager/registry.js`. If < 8 → **FOUND P2** (scraping needed).

7. **No AbstractHarvestAction** — does `src/element/element_action.js` define only the base `ElementAction` with no `AbstractHarvestAction` subclass? → **FOUND P1** if yes.

8. **DECORATION category missing** — is there no `DECORATION` key in `TOOLBAR_CATEGORY` at `src/view/bar.js`? → **FOUND P2** if yes.

9. **`getResourceFromId` is empty stub** — at `src/game/resource.js`, is `getResourceFromId(id) {}` an empty no-op? → **FOUND P3** if yes.

10. **Magic number in map.js** — is `0.55` (island coverage ratio) a bare literal with no named constant? → **FOUND P3** if yes.

---

### Phase 4 — Write GAMEFARM_AUDIT.md

Write `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS\GAMEFARM_AUDIT.md`:

1. **Executive Summary** — health score 0-10, top 3 priority issues, total FOUND count
2. **File Metrics Table** — top 8 worst files by `max_func_len`
   `| file | lines | funcs | max_func_len | todos | duplicates |`
3. **Known Issue Checklist**
   `| # | issue | status | file:line | priority |`
4. **Branch Hygiene Log** — branches deleted / kept
5. **Cycle number** — read `GAMEFARM_CHANGELOG.md` to count `## [cycle` entries; write `0` if absent
6. **Timestamp** — ISO 8601

Write `![next]!` when `GAMEFARM_AUDIT.md` is complete.

> **GIT SAFETY — NON-INTERACTIVE MODE**: Some git commands open an interactive editor (e.g. `git commit` without `-m`, `git rebase -i`, `git merge` with conflicts). This will **block the agent session** and require manual intervention.

> **Always use non-interactive flags**:
> - `git commit -m "message"` — never bare `git commit`
> - `git merge --no-edit` — accept the default merge message
> - `git rebase --abort` if an interactive rebase accidentally starts
> - If an editor opens unexpectedly, press **Ctrl+X** to exit nano/pico without saving, then retry with a non-interactive flag.


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
- **Files changed**: GAMEFARM_CHANGELOG.md (cycle 12 entry added)
- **Commands run**: git merge --no-ff, git branch -d
- **Tests**: n/a
- **Git**: main merged with feat/gamefarm-resources-module, branch deleted
- **Notes**: Cycle 12 complete. Resources registration extracted to resources.js module with re-export for backward compatibility. Changelog updated.

![next]!

