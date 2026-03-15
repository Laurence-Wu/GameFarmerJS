# GameFarm Sprint: Extract Tree Registrations from static_objects.js

**Type**: code
**Target file(s)**: src/game_manager/static_objects.js, src/game_manager/trees.js (new), src/game_manager/registry.js
**Issue**: static_objects.js contains both natural static objects and tree registrations; trees can be extracted to dedicated module
**Root cause**: After decorations extraction in cycle 18, trees remained in static_objects.js; separation improves modularity
**Priority**: P2

## Acceptance Criteria
1. New trees.js module exports `registerTrees()` function
2. Tree registrations (tree0, tree1 with prune actions and trunk children) moved to trees.js
3. static_objects.js only contains natural static objects (plant0, rock0, flower0-2, trunk0)
4. registry.js imports and calls `registerTrees()` alongside other registration functions

## Files to Touch
- src/game_manager/trees.js (new)
- src/game_manager/static_objects.js (modified)
- src/game_manager/registry.js (modified)

## Estimated Scope
- Lines added: ~20 (new trees.js module with export function and tree registrations)
- Lines removed: ~10 (remove tree registrations from static_objects.js)
- Total delta: ~30 (≤ 150 ✓)

## Branch
feat/gamefarm-trees-module

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| element_actions/ prune logic | Lower priority (P3), only relevant if more prune actions are added |

## Implementation Notes
- Approach: Extracted tree registrations from static_objects.js into a new dedicated trees.js module, following the modularization pattern established in cycles 8-13 and cycle 18 (decorations).
- Files changed:
  - src/game_manager/trees.js (new, 22 lines)
  - src/game_manager/static_objects.js (modified, -11 lines: removed tree registrations and unused imports)
  - src/game_manager/registry.js (modified, +2 lines: import and call registerTrees())
- Lines added: 24, lines removed: 11, total delta: 35
- Deferred (if any): None
- Import chain verified: yes
