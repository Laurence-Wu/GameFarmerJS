# GameFarm Sprint: Extract Toolbar Category Registration to Separate Module

**Type**: code
**Target file(s)**: src/game_manager/registry.js, src/game_manager/toolbar_categories.js (new)
**Issue**: The toolbar category registration in registry.js can be extracted to a dedicated module for complete modularization of all registration functions.
**Root cause**: Toolbar category registration logic is embedded inline in registry.js instead of a dedicated module.
**Priority**: P3 (code quality improvement, no functional bug)

## Acceptance Criteria
1. A new file `src/game_manager/toolbar_categories.js` is created that exports a `registerToolbarCategories()` function
2. The `registerToolbarCategories()` function contains the toolbar category registration calls (CROP, FENCE)
3. `registry.js` imports and calls `registerToolbarCategories()`
4. Both CROP and FENCE categories are still registered correctly
5. No changes to toolbar behavior or appearance

## Files to Touch
- src/game_manager/toolbar_categories.js (new)
- src/game_manager/registry.js

## Estimated Scope
- Lines added: ~12
- Lines removed: ~4
- Total delta: ~16 (well under 150 limit)

## Branch
feat/gamefarm-toolbar-categories-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in game_loader.js (896) | Out of scope - not touched in this sprint |
| Test coverage addition | Deferred until more critical code quality issues addressed |
| DECORATION category addition | Focused on extraction only, no new features |

## Implementation Notes
- Approach: Extracted toolbar category registration logic into a dedicated src/game_manager/toolbar_categories.js module for complete modularization of all registration functions
- Files changed: src/game_manager/toolbar_categories.js (new, 10 lines), src/game_manager/registry.js (4 lines removed, 2 lines added)
- Lines added: 12, lines removed: 4, total delta: 8
- Deferred (if any): None - all acceptance criteria met
- Import chain verified: yes (toolbar_categories.js imports registerToolbarCategory from bar.js; registry.js imports registerToolbarCategories)
