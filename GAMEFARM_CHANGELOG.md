## [cycle 1] 2026-03-14 — AbstractHarvestAction refactoring
- **Sprint type**: code
- **Target**: src/element/element_action.js, src/element/element_actions/action_default.js, action_harvest.js, action_prune.js
- **Change**: Introduce AbstractHarvestAction base class to DRY up duplicated harvest logic
- **Assets added**: none
- **Lines changed**: 30 added, 26 removed
- **Branch**: feat/gamefarm-abstract-harvest-action (merged and deleted)
- **DRY issues remaining**: 2 (ItemRegistry missing P1, Harvest logic duplication P1 partially addressed)
