# GameFarm Sprint: Add Decoration Assets (Bush Variety)

**Type**: asset
**Target file(s)**: src/game_manager/game_assets.js, src/game_manager/static_objects.js
**Issue**: The DECORATION toolbar category exists but has no decorative items assigned to it - only fences use the FENCE category
**Root cause**: No decoration elements were registered to use the DECORATION toolbar category
**Priority**: P2

## Acceptance Criteria
1. At least 3 new bush decoration elements are added with distinct visual variants (bush0, bush1, bush2)
2. Each bush element is registered with `setHtmlDisplayCategory(getToolbarCategory('DECORATION'))`
3. Bushes have natural spawn chance set for world generation (10-30% range)
4. Bushes are lootable for a resource (e.g., leaf, seed)

## Files to Touch
- src/game_manager/game_assets.js (add IMG.BUSH0, BUSH1, BUSH2)
- src/game_manager/static_objects.js (register bush elements)
- src/game_manager/resources.js (add leaf resource if not exists)

## Estimated Scope
- Lines added: ~12
- Lines removed: ~0
- Total delta: ~12 (well under 150 limit)

## Branch
feat/gamefarm-decoration-bush-assets

## Sprint Type
asset

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| None - all P1/P2/P3 issues resolved | Selecting asset sprint for feature growth |

## Notes
- Asset files staged: assets/image/static/bush0.png, bush1.png, bush2.png (card_03)
- Placeholder assets: simple green circle/oval shapes (48x48 pixels)
- Resource dependency verified: Resource.getResource("leaf") exists in resources.js

## Implementation Notes
- Approach: Added bush elements following existing static object registration pattern with DECORATION toolbar category assignment
- Files changed: src/game_manager/game_assets.js (+3 lines), src/game_manager/static_objects.js (+20 lines including import)
- Lines added: 23, lines removed: 0, total delta: 23
- Deferred: none
- Import chain verified: yes (getToolbarCategory from src/view/bar.js, IMG from game_assets.js, ElementDefault, Resource, ActionPrune)
