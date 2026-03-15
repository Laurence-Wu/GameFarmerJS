# GameFarm Sprint: Add Well and Pumpkin Decorations

**Type**: asset
**Target file(s)**: src/game_manager/game_assets.js, src/game_manager/static_objects.js
**Issue**: The DECORATION toolbar category could benefit from more variety; adding well and pumpkin decorations would increase visual diversity
**Root cause**: Limited decoration asset variety in the game
**Priority**: P3 (polish/improvement, not a bug)

## Acceptance Criteria
1. At least 2 new decoration elements are added (well, pumpkin)
2. Each decoration is registered with `setHtmlDisplayCategory(getToolbarCategory('DECORATION'))`
3. Decorations have natural spawn chance set for world generation (5-15% range)
4. Decorations are lootable for a resource (e.g., fruit, leaf)

## Files to Touch
- src/game_manager/game_assets.js (add IMG.WELL0, IMG.PUMPKIN0)
- src/game_manager/static_objects.js (register well and pumpkin elements)

## Estimated Scope
- Lines added: ~16
- Lines removed: ~0
- Total delta: ~16 (well under 150 limit)

## Branch
feat/gamefarm-decoration-well-pumpkin

## Sprint Type
asset

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in static_objects.js | Data registration block, not complex logic - no refactor needed |
| Additional crop varieties with growth stages | Deferred - focusing on simple decoration items first |

## Notes
- Asset files to create: assets/image/static/well0.png, pumpkin0.png (placeholder assets)
- Placeholder assets: simple shapes (48x48 pixels)
- Resource dependency: verify existing resources (fruit, leaf) in resources.js

## Implementation Notes
- Approach: Added well and pumpkin decorations following existing static object registration pattern with DECORATION toolbar category assignment
- Files changed: src/game_manager/game_assets.js (+2 lines), src/game_manager/static_objects.js (+13 lines)
- Lines added: 15, lines removed: 0, total delta: 15
- Deferred: none
- Import chain verified: yes (getToolbarCategory from src/view/bar.js, IMG from game_assets.js, ElementDefault, Resource)
