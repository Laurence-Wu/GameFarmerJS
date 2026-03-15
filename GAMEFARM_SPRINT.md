# GameFarm Sprint: Add Flower Variety Decorations

**Type**: asset
**Target file(s)**: src/game_manager/game_assets.js, src/game_manager/static_objects.js
**Issue**: The DECORATION toolbar category has limited flower variety; adding more flower types would increase visual diversity
**Root cause**: Limited decoration asset variety in the game
**Priority**: P3 (polish/improvement, not a bug)

## Acceptance Criteria
1. At least 2 new flower decoration elements are added (flower3, flower4)
2. Each flower is registered with `setHtmlDisplayCategory(getToolbarCategory('DECORATION'))`
3. Flowers have natural spawn chance set for world generation (2-5% range, consistent with existing flowers)
4. Flowers are lootable for a resource (e.g., seed0)

## Files to Touch
- src/game_manager/game_assets.js (add IMG.FLOWER3, IMG.FLOWER4)
- src/game_manager/static_objects.js (register flower3 and flower4 elements)

## Estimated Scope
- Lines added: ~16
- Lines removed: ~0
- Total delta: ~16 (well under 150 limit)

## Branch
feat/gamefarm-decoration-flower-variety

## Sprint Type
asset

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Large max_func_len in static_objects.js | Data registration block, not complex logic - no refactor needed |
| Additional crop varieties with growth stages | Deferred - focusing on simple decoration items first |

## Notes
- Asset files to create: assets/image/static/flower3.png, flower4.png (placeholder assets)
- Placeholder assets: simple flower shapes with different colors (48x48 pixels)
- Resource dependency: verify existing resource (seed0) in resources.js

## Implementation Notes
- Approach: Added flower3 and flower4 decorations following existing flower registration pattern
- Files changed: src/game_manager/game_assets.js (+2 lines), src/game_manager/static_objects.js (+2 lines)
- Lines added: 4, lines removed: 0, total delta: 4
- Deferred: none (flowers use existing DECORATION category, no additional category registration needed)
- Import chain verified: yes (IMG from game_assets.js, ElementDefault, Resource from static_objects.js)
