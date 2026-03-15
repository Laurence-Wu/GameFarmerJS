# GameFarm Sprint: Extract Resource Registration to Separate Module

**Type**: code
**Target file(s)**: src/game_manager/registry.js, src/game_manager/resources.js (new)
**Issue**: The resource registration in registerResources() can be extracted to a dedicated module for complete modularization of all registration functions.
**Root cause**: Resource registration logic is embedded inline within registerResources() instead of a dedicated module.
**Priority**: P3 (code quality improvement, no functional bug)

## Acceptance Criteria
1. A new file `src/game_manager/resources.js` is created that exports a `registerResources()` function
2. The `registerResources()` function contains all 5 resource registration calls (Fruit, Seed, Rock, Wood, Leaf)
3. `registry.js` imports and calls the new `registerResources()` from resources.js
4. All resources are still registered with correct properties (display names, prices)
5. No changes to resource behavior or appearance

## Files to Touch
- src/game_manager/resources.js (new)
- src/game_manager/registry.js

## Estimated Scope
- Lines added: ~15
- Lines removed: ~7
- Total delta: ~22 (well under 150 limit)

## Branch
feat/gamefarm-resources-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in game_loader.js (896) | Out of scope - not touched in this sprint |
| Test coverage addition | Deferred until more critical code quality issues addressed |
| Toolbar category extraction | Focused on resources only as bounded slice |

## Implementation Notes
- Approach: Extracted resource registration logic into a dedicated src/game_manager/resources.js module and re-exported from registry.js for backward compatibility
- Files changed: src/game_manager/resources.js (new, 14 lines), src/game_manager/registry.js (7 lines removed, 3 lines added)
- Lines added: 17, lines removed: 7, total delta: 10
- Deferred (if any): None - all acceptance criteria met
- Import chain verified: yes (resources.js imports IMG_ICON, Resource; registry.js imports and re-exports registerResources)
