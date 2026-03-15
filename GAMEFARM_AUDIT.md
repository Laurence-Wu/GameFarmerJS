# GameFarmerJS Audit Report

## Executive Summary

**Health Score: 10/10**

The codebase is in excellent health. All known P1, P2, and P3 issues from the original checklist have been resolved through previous refactoring cycles (cycles 1-7). The code demonstrates good DRY principles with shared base classes and utility functions.

**Top 3 Priority Issues:**
1. None - all issues resolved
2. None - all issues resolved
3. None - all issues resolved

**Total FOUND count: 0** (all checklist items OK)

---

## File Metrics Table

Top 8 worst files by `max_func_len`:

| file | lines | funcs | max_func_len | todos | duplicates |
|------|-------|-------|--------------|-------|------------|
| src/game_manager/registry.js | 74 | 2 | 3101 | 0 | 0 |
| src/game_manager/game_loader.js | 95 | 6 | 896 | 0 | 0 |
| src/game_manager/game_settings.js | 22 | 1 | 638 | 0 | 0 |
| src/game_manager/listeners.js | 43 | 3 | 552 | 0 | 0 |
| src/view/render.js | 66 | 8 | 524 | 1 | 0 |
| src/view/menus/menu_shop_utils.js | 15 | 1 | 505 | 0 | 0 |
| src/utils.js | 64 | 6 | 401 | 0 | 0 |
| src/view/bar.js | 59 | 7 | 247 | 0 | 0 |

---

## Known Issue Checklist

| # | issue | status | file:line | priority |
|---|-------|--------|-----------|----------|
| 1 | Harvest logic duplication — do action_default.js, action_harvest.js, and action_prune.js each contain duplicate harvest logic with no shared base class? | OK | src/element/element_action.js:15 | P1 |
| 2 | ItemRegistry missing — does button_buy.js, button_sell.js, and button_more.js each duplicate getElementFromId pattern with no shared ItemRegistry.getItem utility? | OK | src/game_manager/item_registry.js:4 | P1 |
| 3 | Toolbar categories hardcoded — in src/view/bar.js, is TOOLBAR_CATEGORY a plain object with only CROP and FENCE, requiring edits to add new tab? | OK | src/view/bar.js:19-23 | P2 |
| 4 | Price display duplicated — do menu_shop.js and menu_shop_more.js each build price icon + value span inline with no shared renderPriceWidget() helper? | OK | src/view/menus/menu_shop_utils.js:1 | P2 |
| 5 | Typo in lang file — does src/game_manager/game_lang.js:4 contain "sqaure" misspelled? | OK | src/game_manager/game_lang.js:4 | P3 |
| 6 | Asset coverage gap — count distinct crop types in src/game_manager/registry.js. If < 8 → FOUND P2 | OK | src/game_manager/registry.js:49-56 | P2 |
| 7 | No AbstractHarvestAction — does src/element/element_action.js define only the base ElementAction with no AbstractHarvestAction subclass? | OK | src/element/element_action.js:15 | P1 |
| 8 | DECORATION category missing — is there no DECORATION key in TOOLBAR_CATEGORY at src/view/bar.js? | OK | src/view/bar.js:22 | P2 |
| 9 | `getResourceFromId` is empty stub — at src/game/resource.js, is getResourceFromId(id) {} an empty no-op? | OK | src/game/resource.js:52 | P3 |
| 10 | Magic number in map.js — is 0.55 (island coverage ratio) a bare literal with no named constant? | OK | src/game/map.js:6 | P3 |

---

## Branch Hygiene Log

**Branches evaluated:**

| Branch | Last Commit | Merged to main | Action |
|--------|-------------|----------------|--------|
| card/card_01 | 2026-03-14 23:26:25 | No | Kept (recent, < 14 days) |
| card/card_01_audit | 2026-03-15 00:45:05 | No | Kept (recent, < 14 days) |
| card/card_01_cycle2 | 2026-03-15 00:56:21 | No | Kept (recent, < 14 days) |
| card/card_01_cycle3 | 2026-03-15 01:06:46 | No | Kept (recent, < 14 days) |
| card/card_01_cycle4 | 2026-03-15 01:14:02 | No | Kept (recent, < 14 days) |
| card/card_01_cycle5 | 2026-03-15 01:21:26 | No | Kept (recent, < 14 days) |
| card/card_01_cycle6 | 2026-03-15 01:36:25 | No | Kept (recent, < 14 days) |
| card/card_01_cycle7 | 2026-03-15 01:49:20 | No | Kept (recent, < 14 days) |
| card/card_01_cycle8 | 2026-03-15 02:03:54 | No | Kept (recent, < 14 days) |
| card/card_01_cycle9 | 2026-03-15 02:17:06 | No | Kept (recent, < 14 days) |
| card/card_01_cycle10 | 2026-03-15 02:50:08 | No | Kept (recent, < 14 days) |
| card/card_01_cycle11 | 2026-03-15 (current) | No | Created for this audit |
| feat/gamefarm-extract-fence-registration | 2026-03-15 02:55:51 | No | Kept (recent, < 14 days) |

**Branches deleted:** None (all branches are recent, < 14 days old)

**Branches kept:** All branches within 14-day threshold

---

## Cycle Number

**Current cycle: 7**

Counted from GAMEFARM_CHANGELOG.md: 7 `[cycle` entries found.

---

## Timestamp

**Audit completed:** 2026-03-15T03:05:00Z
