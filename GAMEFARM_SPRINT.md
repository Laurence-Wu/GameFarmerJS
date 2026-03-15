# GameFarm Sprint: Remove Hardcoded TOOLBAR_CATEGORY

**Type**: code
**Target file(s)**: src/view/bar.js, src/game_manager/toolbar_categories.js
**Issue**: TOOLBAR_CATEGORY object has hardcoded CROP/FENCE/DECORATION DOM queries despite dynamic registry existing
**Root cause**: Legacy TOOLBAR_CATEGORY export was kept for backward compatibility when dynamic registry was added in cycle 4, creating duplicate patterns
**Priority**: P2

## Acceptance Criteria
1. Remove TOOLBAR_CATEGORY constant from src/view/bar.js
2. Update toolbar_categories.js to not reference TOOLBAR_CATEGORY
3. Update any consumers that import TOOLBAR_CATEGORY to use getToolbarCategory() instead
4. All existing toolbar categories (CROP, FENCE, DECORATION) continue to work after refactor

## Files to Touch
- src/view/bar.js (modified - remove TOOLBAR_CATEGORY)
- src/game_manager/toolbar_categories.js (modified - update registration pattern)
- src/game_manager/decorations.js (modified - if using TOOLBAR_CATEGORY)

## Estimated Scope
- Lines added: ~5 (updated imports and calls)
- Lines removed: ~10 (TOOLBAR_CATEGORY constant and auto-register code)
- Total delta: ~15 (≤ 150 ✓)

## Branch
feat/gamefarm-remove-toolbar-category-constant

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| static_objects.js large function | Too large for single sprint (~60 lines); needs bounded slice |
| P3 items (console.log, TODO, prune logic) | Lower priority than P2; P2 toolbar cleanup first |

## Implementation Notes
- Approach: Removed legacy TOOLBAR_CATEGORY constant from bar.js and moved all category registrations to toolbar_categories.js using the existing registerToolbarCategory() function. This eliminates the duplicate pattern where categories were defined both as a constant and via dynamic registry.
- Files changed:
  - src/view/bar.js (modified, -13 lines: removed TOOLBAR_CATEGORY constant and auto-register code)
  - src/game_manager/toolbar_categories.js (modified, +1 line: added DECORATION registration)
- Lines added: 1, lines removed: 13, total delta: 14
- Deferred (if any): None
- Import chain verified: yes (no imports changed, only removed exports)
