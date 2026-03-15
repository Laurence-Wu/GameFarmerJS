# GameFarm Sprint: Extract Crop Registration to Separate Module

**Type**: code
**Target file(s)**: src/game_manager/registry.js, src/game_manager/crops.js (new)
**Issue**: The crop registration block in registry.js can be extracted to a dedicated module for better code organization and separation of concerns.
**Root cause**: Crop registration logic is embedded inline within registerElements() instead of a dedicated module.
**Priority**: P3 (code quality improvement, no functional bug)

## Acceptance Criteria
1. A new file `src/game_manager/crops.js` is created that exports a `registerCrops()` function
2. The `registerCrops()` function contains all 8 crop element registration calls
3. `registry.js` imports and calls `registerCrops()` instead of inline crop registration
4. All 8 crops (Melon, Wheat, Sugarcane, Eggplant, Chili, Carrot, Corn, Tomato) are still registered with correct properties
5. No changes to crop behavior or appearance

## Files to Touch
- src/game_manager/crops.js (new)
- src/game_manager/registry.js

## Estimated Scope
- Lines added: ~25
- Lines removed: ~10
- Total delta: ~35 (well under 150 limit)

## Branch
feat/gamefarm-crops-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in game_loader.js (896) | Out of scope - not touched in this sprint |
| Test coverage addition | Deferred until more critical code quality issues addressed |
| Static object extraction | Focused on crops only as bounded slice |

## Implementation Notes
- Approach: Extracted crop registration logic into a dedicated src/game_manager/crops.js module for better separation of concerns and code organization
- Files changed: src/game_manager/crops.js (new, 20 lines), src/game_manager/registry.js (9 lines removed, 2 lines added)
- Lines added: 22, lines removed: 9, total delta: 13
- Deferred (if any): None - all acceptance criteria met
- Import chain verified: yes (crops.js imports IMG, Resource, ElementCrop, getToolbarCategory; registry.js imports registerCrops)
