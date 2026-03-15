# GameFarm Sprint: Add DECORATION Toolbar Category

**Type**: code
**Target file(s)**: src/view/bar.js
**Issue**: DECORATION category missing from TOOLBAR_CATEGORY, preventing decorative elements from having a toolbar tab
**Root cause**: Toolbar categories hardcoded with only CROP and FENCE keys
**Priority**: P2

## Acceptance Criteria
1. `TOOLBAR_CATEGORY` object in `src/view/bar.js` includes `DECORATION` key
2. `registerToolbarCategory('DECORATION', ...)` is called to register the category
3. New decorative elements can use `setHtmlDisplayCategory(getToolbarCategory('DECORATION'))`

## Files to Touch
- src/view/bar.js

## Estimated Scope
- Lines added: ~3
- Lines removed: ~0
- Total delta: ~3 (≤ 150)

## Branch
feat/gamefarm-decoration-category

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| P2 Asset coverage gap (registry.js) | Recently touched in cycle 4, negative score (-1) |
| P3 getResourceFromId stub (resource.js) | Lower priority (P3), deferred |

## Implementation Notes
- Approach: Added DECORATION key to TOOLBAR_CATEGORY object and registered it via registerToolbarCategory()
- Files changed: src/view/bar.js (2 lines added)
- Lines added: 2, lines removed: 0, total delta: 2
- Deferred: none
- Import chain verified: yes (no new imports needed)
