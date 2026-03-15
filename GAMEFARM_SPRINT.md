# GameFarm Sprint: Extract renderPriceWidget Helper for Shop Menus

**Type**: code
**Target file(s)**: src/view/menus/menu_shop_utils.js (new), src/view/menus/menu_shop.js, src/view/menus/menu_shop_more.js
**Issue**: MenuShop and MenuShopMore each build price icon + value span inline with no shared renderPriceWidget() helper
**Root cause**: Price widget rendering logic duplicated across two menu files instead of extracted to shared utility
**Priority**: P2

## Acceptance Criteria
1. `renderPriceWidget(container, item, type)` function exists in new `src/view/menus/menu_shop_utils.js`
2. `MenuShop` and `MenuShopMore` import and use `renderPriceWidget()` instead of inline price building
3. No change in runtime behavior (price widgets render identically)
4. Total delta ≤ 150 lines across ≤ 3 files

## Files to Touch
- src/view/menus/menu_shop_utils.js (new file with renderPriceWidget utility)
- src/view/menus/menu_shop.js (use renderPriceWidget)
- src/view/menus/menu_shop_more.js (use renderPriceWidget)

## Estimated Scope
- Lines added: ~15 (renderPriceWidget function + imports)
- Lines removed: ~10 (duplicated inline price building in 2 menu files)
- Total delta: ~25 (≤ 150 ✓)

## Branch
feat/gamefarm-price-widget-utils

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| Harvest logic P1 | Already addressed in cycle 1 with AbstractHarvestAction - backlog item stale |
| TOOLBAR_CATEGORY hardcoded P2 | Lower score (2 vs 4); requires UI/registry coordination |
| Asset coverage gap P2 | Requires asset creation, not pure code fix; score=2 or 3 |
| Typo in lang file P3 | Trivial; can be fixed ad-hoc; score=1 |
| Magic number 0.55 P3 | Trivial; can be fixed ad-hoc; score=1 |
| getResourceFromId stub P3 | Trivial; can be fixed ad-hoc; score=1 |
