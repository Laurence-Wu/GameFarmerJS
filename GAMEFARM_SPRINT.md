# GameFarm Sprint: Extract Static Objects Registration to Separate Module

**Type**: code
**Target file(s)**: src/game_manager/registry.js, src/game_manager/static_objects.js (new)
**Issue**: The static objects registration block (plants, rocks, flowers, trunk, trees) in registry.js can be extracted to a dedicated module for better code organization.
**Root cause**: Static objects registration logic is embedded inline within registerElements() instead of a dedicated module.
**Priority**: P3 (code quality improvement, no functional bug)

## Acceptance Criteria
1. A new file `src/game_manager/static_objects.js` is created that exports a `registerStaticObjects()` function
2. The `registerStaticObjects()` function contains all static object and tree registration calls
3. `registry.js` imports and calls `registerStaticObjects()` instead of inline registration
4. All static objects (plant0, rock0, flower0/1/2, trunk0, tree0/1) are still registered with correct properties
5. No changes to static object behavior or appearance

## Files to Touch
- src/game_manager/static_objects.js (new)
- src/game_manager/registry.js

## Estimated Scope
- Lines added: ~25
- Lines removed: ~15
- Total delta: ~40 (well under 150 limit)

## Branch
feat/gamefarm-static-objects-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in game_loader.js (896) | Out of scope - not touched in this sprint |
| Test coverage addition | Deferred until more critical code quality issues addressed |
| Ground types extraction | Focused on static objects only as bounded slice |

## Implementation Notes
- Approach: Extracted static objects and tree registration logic into a dedicated src/game_manager/static_objects.js module for better separation of concerns and code organization
- Files changed: src/game_manager/static_objects.js (new, 30 lines), src/game_manager/registry.js (17 lines removed, 2 lines added)
- Lines added: 32, lines removed: 17, total delta: 15
- Deferred (if any): None - all acceptance criteria met
- Import chain verified: yes (static_objects.js imports IMG, Resource, ElementDefault, ActionPrune, Element; registry.js imports registerStaticObjects)
