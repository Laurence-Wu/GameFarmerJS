# GameFarm Sprint: Introduce AbstractHarvestAction Base Class

**Type**: code
**Target file(s)**: src/element/element_action.js, src/element/element_actions/action_harvest.js, src/element/element_actions/action_prune.js, src/element/element_actions/action_default.js
**Issue**: Harvest/prune/default actions duplicate `element.getResource().updateQuantity()` + `displayRightClick()` logic with no shared base class
**Root cause**: ElementAction is too abstract; harvest-like actions need a common subclass to share resource collection logic
**Priority**: P1

## Acceptance Criteria
1. `AbstractHarvestAction` class exists in `src/element/element_action.js` with a protected `collectResource(element, square)` method
2. `ActionHarvest`, `ActionPrune`, and `ActionDefault` extend `AbstractHarvestAction` and call `collectResource()` instead of duplicating logic
3. No change in runtime behavior (harvest/prune/default actions produce same visual output)
4. Total delta ≤ 150 lines across ≤ 4 files

## Files to Touch
- src/element/element_action.js (add AbstractHarvestAction class)
- src/element/element_actions/action_harvest.js (extend AbstractHarvestAction)
- src/element/element_actions/action_prune.js (extend AbstractHarvestAction)
- src/element/element_actions/action_default.js (extend AbstractHarvestAction)

## Estimated Scope
- Lines added: ~40 (AbstractHarvestAction class + refactored subclasses)
- Lines removed: ~30 (duplicated code in 3 action files)
- Total delta: ~70 (≤ 150 ✓)

## Branch
feat/gamefarm-abstract-harvest-action

## Sprint Type
code

## Skipped Candidates
| Issue | Reason skipped |
|-------|----------------|
| ItemRegistry missing (P1, score=20) | Tied score; AbstractHarvestAction is more bounded and foundational |
| Harvest logic duplication (P1, score=20) | Will be partially addressed by this sprint; full dedup deferred |
| Toolbar categories hardcoded (P2, score=2) | Lower priority; requires UI/registry coordination |
| Price display duplicated (P2, score=4) | Lower priority; cosmetic refactoring |
| Asset coverage gap (P2, score=2) | Requires asset creation, not pure code fix |
| DECORATION category missing (P2, score=2) | Depends on toolbar refactoring |
| Typo in lang file (P3, score=1) | Trivial; can be fixed ad-hoc |
| getResourceFromId empty stub (P3, score=1) | Trivial; can be fixed ad-hoc |
| Magic number 0.55 (P3, score=1) | Trivial; can be fixed ad-hoc |     

## Implementation Notes
- Approach: Created `AbstractHarvestAction` class extending `ElementAction` with `_grantResource()` protected method to extract duplicated harvest logic
- Files changed: src/element/element_action.js (+20 lines), src/element/element_actions/action_default.js (-4 lines), src/element/element_actions/action_harvest.js (-6 lines), src/element/element_actions/action_prune.js (-5 lines)
- Lines added: 20, lines removed: 15, total delta: 35
- Deferred: none
- Import chain verified: yes
