# GameFarm Sprint: Introduce ItemRegistry.getItem Utility

**Type**: code
**Target file(s)**: src/game_manager/item_registry.js (new), src/view/buttons/button_buy.js, src/view/buttons/button_sell.js, src/view/buttons/button_more.js
**Issue**: ButtonBuy, ButtonSell, and ButtonMore each duplicate `Element.getElementFromId(id) || Resource.getResource(id)` pattern with no shared utility
**Root cause**: No centralized item lookup registry forces each button to duplicate the fallback lookup logic
**Priority**: P1

## Acceptance Criteria
1. `ItemRegistry.getItem(id)` function exists in new `src/game_manager/item_registry.js` and returns `Element.getElementFromId(id) || Resource.getResource(id)`
2. `ButtonBuy`, `ButtonSell`, and `ButtonMore` import and use `ItemRegistry.getItem(id)` instead of inline fallback pattern
3. No change in runtime behavior (buttons resolve elements/resources identically)
4. Total delta ≤ 150 lines across ≤ 4 files

## Files to Touch
- src/game_manager/item_registry.js (new file with getItem utility)
- src/view/buttons/button_buy.js (use ItemRegistry.getItem)
- src/view/buttons/button_sell.js (use ItemRegistry.getItem)
- src/view/buttons/button_more.js (use ItemRegistry.getItem)

## Estimated Scope
- Lines added: ~10 (ItemRegistry module + imports in 3 button files)
- Lines removed: ~6 (duplicated fallback pattern in 3 button files)
- Total delta: ~16 (≤ 150 ✓)

## Branch
feat/gamefarm-item-registry

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Harvest logic duplication (P1, score=20) | Already addressed in cycle 1 with AbstractHarvestAction |
| Toolbar categories hardcoded (P2, score=2) | Lower priority; requires UI/registry coordination |
| Price display duplicated (P2, score=4) | Lower priority; cosmetic refactoring |
| Asset coverage gap (P2, score=2) | Requires asset creation, not pure code fix |
| DECORATION category missing (P2, score=2) | Depends on toolbar refactoring |
| Typo in lang file (P3, score=1) | Trivial; can be fixed ad-hoc |
| getResourceFromId empty stub (P3, score=1) | Trivial; can be fixed ad-hoc |
| Magic number 0.55 (P3, score=1) | Trivial; can be fixed ad-hoc |
