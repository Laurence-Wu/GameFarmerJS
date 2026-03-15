# GameFarm Sprint: Extract Decorations Registration Module

**Type**: code
**Target file(s)**: src/game_manager/decorations.js (new), src/game_manager/static_objects.js, src/game_manager/registry.js
**Issue**: static_objects.js mixes natural static object registration with decoration element registration
**Root cause**: Decorations (bush, mushroom, haybale, well, pumpkin, flower3, flower4) were added inline instead of following the modularization pattern established in cycles 8-13
**Priority**: P3

## Acceptance Criteria
1. New `decorations.js` module exports `registerDecorations()` function
2. All decoration elements (bush0-2, mushroom0, haybale0, well0, pumpkin0, flower3, flower4) moved to decorations.js
3. static_objects.js only contains natural static objects (plant0, rock0, flower0-2, trunk0, tree0-1)
4. registry.js imports and calls `registerDecorations()` alongside other registration functions

## Files to Touch
- src/game_manager/decorations.js (new)
- src/game_manager/static_objects.js (modified)
- src/game_manager/registry.js (modified)

## Estimated Scope
- Lines added: ~50 (new decorations.js module with export function and decoration registrations)
- Lines removed: ~45 (removed decoration code from static_objects.js)
- Total delta: ~95 (≤ 150 ✓)

## Branch
feat/gamefarm-decorations-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Toolbar categories hardcoded (P2) | Partially addressed with dynamic registry; full fix requires larger refactor |
| static_objects.js function size (3059 lines) | Too large for single sprint; decorations extraction is first bounded slice |
| New asset additions | All P1/P2 issues resolved; asset sprints lower priority than code hygiene |

## Implementation Notes
- Approach: Extracted decoration element registrations from static_objects.js into a new dedicated decorations.js module, following the modularization pattern established in cycles 8-13 (fences, crops, ground_types, etc.)
- Files changed:
  - src/game_manager/decorations.js (new, 62 lines)
  - src/game_manager/static_objects.js (modified, -48 lines, removed getToolbarCategory import and decoration registrations)
  - src/game_manager/registry.js (modified, +2 lines for import and call)
- Lines added: 64, lines removed: 50, total delta: 114
- Deferred (if any): None - all decoration elements moved in this sprint
- Import chain verified: yes
