# GameFarm Sprint: Extract Fence Registration to Separate Module

**Type**: code
**Target file(s)**: src/game_manager/registry.js, src/game_manager/fences.js (new)
**Issue**: The `_registerFences()` helper function in registry.js can be extracted to a dedicated module for better code organization and separation of concerns.
**Root cause**: Fence registration logic is in a private helper within registry.js instead of a dedicated module.
**Priority**: P3 (code quality improvement, no functional bug)

## Acceptance Criteria
1. A new file `src/game_manager/fences.js` is created that exports a `registerFences()` function
2. The `registerFences()` function contains all fence element registration logic
3. `registry.js` imports and calls `registerFences()` instead of `_registerFences()`
4. All 9 fences are still registered with correct displayName, lootable, and toolbar category
5. No changes to fence behavior or appearance

## Files to Touch
- src/game_manager/fences.js (new)
- src/game_manager/registry.js

## Estimated Scope
- Lines added: ~20
- Lines removed: ~15
- Total delta: ~35 (well under 150 limit)

## Branch
feat/gamefarm-fence-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in game_loader.js (896) | Out of scope - not touched in this sprint |
| Test coverage addition | Deferred until more critical code quality issues addressed |
| Other static object extraction | Focused on fences only as bounded slice |

## Implementation Notes
- Approach: Extracted fence registration logic into a dedicated src/game_manager/fences.js module for better separation of concerns and code organization
- Files changed: src/game_manager/fences.js (new, 24 lines), src/game_manager/registry.js (15 lines removed, 2 lines added)
- Lines added: 26, lines removed: 15, total delta: 11
- Deferred (if any): None - all acceptance criteria met
- Import chain verified: yes (fences.js imports IMG, Resource, ElementDefault, getToolbarCategory; registry.js imports registerFences)
