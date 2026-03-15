# Task: card_03

| Field | Value |
|---|---|
| **Workflow** | gamefarm_evolve |
| **Version** | v1 |
| **Card** | card_03 |
| **Priority** | normal |
| **Timestamp** | 2026-03-14T23:25:47.478124 |
| **Tags** | asset-scraping, research, kenney, opengameart |
| **Branches** | `asset`→`card_04` |

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

## card_03 · Asset Scout

Workspace: `C:\Users\MSI\Desktop\WinCoding\GameFarmerJS`

Read `GAMEFARM_SPRINT.md`.

**If `Sprint Type` is `code`**: This card is a NO-OP. Write a one-line note at the top of `GAMEFARM_ASSETS.md`: `SKIPPED: code sprint cycle — no asset work this iteration.` Then write `![next]!` immediately.

**If `Sprint Type` is `asset`**: Execute the full asset scout below, then write `![next:asset]!`.

---

### Asset Scout (asset sprints only)

#### Phase 1 — Inventory Existing Assets

List all files under `assets/image/` by subdirectory:
- `crops/` — currently: melon, wheat, sugarcane, eggplant, chili (7 stages each, 0-6)
- `ground/` — grass, grass_side, grass_corner, grass_farm
- `static/` — flower0/1/2, plant0, rock0, tree0/1, trunk0
- `fence/` — door_wood_close, fence_wood_1 through 8
- `icon/` — various icons

Identify gaps: missing crop varieties, missing decorations.

#### Phase 2 — Scout Free Sprite Sources

Search these sources for freely licensed farming sprite packs (CC0, CC-BY, or MIT only):

1. **kenney.nl** — search for "Tiny Farm", "Farming", "Fruits", or "RPG" packs. Record pack name, license, download URL, and which sprites map to GameFarmerJS crop/decoration IDs.

2. **opengameart.org** — search `farming sprites pixel` or `crop tileset`. Target: small PNGs with transparent backgrounds, 16x16 or 32x32 tiles. Record: title, author, license, URL, tile dimensions.

3. **itch.io** — search `free farming tileset` filtered to "Free" price. Record any CC0 packs.

For each candidate, evaluate:
- License: CC0 (ideal) > CC-BY (acceptable) > others (skip)
- Style compatibility: pixel art, top-down, color tone matching existing GameFarmerJS crops
- Usable sprites for: carrot, corn, tomato, pumpkin, hay bale, mushroom, well

#### Phase 3 — Download and Stage Assets

For the top 1-2 packs found:
1. Download the pack or individual sprites
2. Place in:
   - New crops → `assets/image/crops/`
   - New decorations → `assets/image/static/`
3. Follow naming convention: `<cropname>0.png` through `<cropname>6.png` for crops, `<name>0.png` for decorations
4. If a spritesheet was downloaded, crop individual tiles and save as separate PNGs
5. Verify files are correctly sized (~32-64px matching existing assets)

#### Phase 4 — Write GAMEFARM_ASSETS.md

```
# GameFarm Asset Scout Report

## Cycle N — <date>

## Sources Checked
| Source | Pack | License | URL |
|--------|------|---------|-----|

## Assets Staged
| Filename | Type | Stages | Source | Attribution |
|----------|------|--------|--------|-------------|

## Assets Skipped
| Name | Reason |
|------|--------|

## Ready for Integration
<list element IDs and display names for card_04 to register>
```

Write `![next:asset]!` when `GAMEFARM_ASSETS.md` is complete and assets are staged.

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
- **Files changed**: GAMEFARM_ASSETS.md (created)
- **Commands run**: git add GAMEFARM_ASSETS.md, git commit
- **Tests**: n/a
- **Git**: 9c9b418 (card/card_01 branch)
- **Notes**: Sprint type is 'code', so asset scout is NO-OP. GAMEFARM_ASSETS.md created with skip note.

![next]!

