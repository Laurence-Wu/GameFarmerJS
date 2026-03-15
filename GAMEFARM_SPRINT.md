# GameFarm Sprint: Extract Ground Types Registration to Separate Module

**Type**: code
**Target file(s)**: src/game_manager/registry.js, src/game_manager/ground_types.js (new)
**Issue**: The ground types registration block in registry.js can be extracted to a dedicated module for better code organization and complete modularization of registerElements().
**Root cause**: Ground types registration logic is embedded inline within registerElements() instead of a dedicated module.
**Priority**: P3 (code quality improvement, no functional bug)

## Acceptance Criteria
1. A new file `src/game_manager/ground_types.js` is created that exports a `registerGroundTypes()` function
2. The `registerGroundTypes()` function contains all 4 ground type registration calls
3. `registry.js` imports and calls `registerGroundTypes()` instead of inline registration
4. All ground types (grass, grass_side, grass_corner, grass_farm) are still registered with correct actions
5. No changes to ground type behavior or appearance

## Files to Touch
- src/game_manager/ground_types.js (new)
- src/game_manager/registry.js

## Estimated Scope
- Lines added: ~15
- Lines removed: ~5
- Total delta: ~20 (well under 150 limit)

## Branch
feat/gamefarm-ground-types-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in game_loader.js (896) | Out of scope - not touched in this sprint |
| Test coverage addition | Deferred until more critical code quality issues addressed |
| Resource registration extraction | Focused on ground types only as bounded slice |

## Implementation Notes
- Approach: Extracted ground types registration logic into a dedicated src/game_manager/ground_types.js module for better separation of concerns and complete modularization of registerElements()
- Files changed: src/game_manager/ground_types.js (new, 16 lines), src/game_manager/registry.js (5 lines removed, 2 lines added)
- Lines added: 18, lines removed: 5, total delta: 13
- Deferred (if any): None - all acceptance criteria met
- Import chain verified: yes (ground_types.js imports IMG, ElementGround, ActionPlowe, ActionUnplowe; registry.js imports registerGroundTypes)
