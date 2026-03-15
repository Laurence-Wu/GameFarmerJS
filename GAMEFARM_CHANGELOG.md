## [cycle 1] 2026-03-14 — AbstractHarvestAction refactoring
- **Sprint type**: code
- **Target**: src/element/element_action.js, src/element/element_actions/action_default.js, action_harvest.js, action_prune.js
- **Change**: Introduce AbstractHarvestAction base class to DRY up duplicated harvest logic
- **Assets added**: none
- **Lines changed**: 30 added, 26 removed
- **Branch**: feat/gamefarm-abstract-harvest-action (merged and deleted)
- **DRY issues remaining**: 2 (ItemRegistry missing P1, Harvest logic duplication P1 partially addressed)

## [cycle 2] 2026-03-14 — ItemRegistry.getItem utility
- **Sprint type**: code
- **Target**: src/game_manager/item_registry.js (new), src/view/buttons/button_buy.js, button_sell.js, button_more.js
- **Change**: Introduce ItemRegistry.getItem() to deduplicate element/resource lookup pattern
- **Assets added**: none
- **Lines changed**: 14 added, 17 removed
- **Branch**: feat/gamefarm-item-registry (merged and deleted)
- **DRY issues remaining**: 1 (Harvest logic duplication P1 partially addressed)

## [cycle 3] 2026-03-14 — renderPriceWidget utility
- **Sprint type**: code
- **Target**: src/view/menus/menu_shop_utils.js (new), src/view/menus/menu_shop.js
- **Change**: Extract renderPriceWidget() helper to deduplicate price widget building
- **Assets added**: none
- **Lines changed**: 16 added, 12 removed
- **Branch**: feat/gamefarm-price-widget-utils (merged and deleted)
- **DRY issues remaining**: 0 (all P1 items addressed)

## [cycle 4] 2026-03-15 — Dynamic toolbar category registry + typo fix + magic constant
- **Sprint type**: code
- **Target**: src/view/bar.js, src/game_manager/registry.js, src/game_manager/game_loader.js, src/element/elements/element_crop.js, src/game_manager/game_lang.js, src/game/map.js
- **Change**: Dynamic toolbar category registry; typo fix "sqaure" → "square"; ISLAND_COVERAGE_RATIO constant
- **Assets added**: none
- **Lines changed**: 68 added, 39 removed
- **Branch**: feat/gamefarm-toolbar-category-registry (merged and deleted)
- **DRY issues remaining**: 0 (all P1/P2 issues addressed; remaining: P3 asset gap, P3 getResourceFromId stub)

## [cycle 5] 2026-03-15 — Add DECORATION toolbar category
- **Sprint type**: code
- **Target**: src/view/bar.js
- **Change**: Add DECORATION key to TOOLBAR_CATEGORY for decorative elements
- **Assets added**: none
- **Lines changed**: 2 added, 0 removed
- **Branch**: feat/gamefarm-decoration-category (merged and deleted)
- **DRY issues remaining**: 2 (P2 asset gap, P2 DECORATION now resolved; remaining: P3 getResourceFromId stub, P2 asset coverage gap)

## [cycle 6] 2026-03-15 — Implement getResourceFromId utility
- **Sprint type**: code
- **Target**: src/game/resource.js
- **Change**: Implement static getResourceFromId(id) method to return Resource.resources.get(id)
- **Assets added**: none
- **Lines changed**: 8 added, 1 removed
- **Branch**: feat/gamefarm-get-resource-from-id (merged and deleted)
- **DRY issues remaining**: 1 (P2 asset coverage gap; P3 getResourceFromId now resolved)

## [cycle 7] 2026-03-15 — Add crop variety assets (carrot, corn, tomato)
- **Sprint type**: asset
- **Target**: src/game_manager/game_assets.js, src/game_manager/registry.js, assets/image/crops/
- **Change**: Add 3 new crops (carrot, corn, tomato) with 7 growth stages each
- **Assets added**: 21 PNG files (carrot0-6, corn0-6, tomato0-6)
- **Lines changed**: 8 added, 1 removed
- **Branch**: feat/gamefarm-crop-variety-assets (merged and deleted)
- **DRY issues remaining**: 0 (asset coverage gap resolved)

## [cycle 8] 2026-03-15 — Fence registration module extraction
- **Sprint type**: code
- **Target**: src/game_manager/fences.js (new), src/game_manager/registry.js
- **Change**: Extract fence registration logic to dedicated fences.js module
- **Assets added**: none
- **Lines changed**: 26 added, 15 removed
- **Branch**: feat/gamefarm-fence-module (merged and deleted)
- **DRY issues remaining**: 0 (backlog empty)

## [cycle 9] 2026-03-15 — Crop registration module extraction
- **Sprint type**: code
- **Target**: src/game_manager/crops.js (new), src/game_manager/registry.js
- **Change**: Extract crop registration logic to dedicated crops.js module
- **Assets added**: none
- **Lines changed**: 22 added, 9 removed
- **Branch**: feat/gamefarm-crops-module (merged and deleted)
- **DRY issues remaining**: 0 (backlog empty)

## [cycle 10] 2026-03-15 — Static objects registration module extraction
- **Sprint type**: code
- **Target**: src/game_manager/static_objects.js (new), src/game_manager/registry.js
- **Change**: Extract static objects and trees registration logic to dedicated static_objects.js module
- **Assets added**: none
- **Lines changed**: 32 added, 17 removed
- **Branch**: feat/gamefarm-static-objects-module (merged and deleted)
- **DRY issues remaining**: 0 (backlog empty)

## [cycle 11] 2026-03-15 — Ground types registration module extraction
- **Sprint type**: code
- **Target**: src/game_manager/ground_types.js (new), src/game_manager/registry.js
- **Change**: Extract ground types registration logic to dedicated ground_types.js module
- **Assets added**: none
- **Lines changed**: 18 added, 5 removed
- **Branch**: feat/gamefarm-ground-types-module (merged and deleted)
- **DRY issues remaining**: 0 (backlog empty)
