import {IMG} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementDefault from "../element/elements/element_default.js";

/**
 * Register all static objects in the game.
 * Static objects include plants, rocks, flowers, and trunks that spawn naturally.
 * Note: Decorations are registered separately in decorations.js
 * Note: Trees are registered separately in trees.js
 */
export function registerStaticObjects() {
    // Static Objects (natural spawning)
    (new ElementDefault(IMG.PLANT0)).setNaturalSpawnChance(75).setLootable(Resource.getResource("leaf"));
    (new ElementDefault(IMG.ROCK0)).setNaturalSpawnChance(30).setLootable(Resource.getResource("rock"), 3);
    (new ElementDefault(IMG.FLOWER0)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER1)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER2)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.TRUNK0)).setNaturalSpawnChance(10).setLootable(Resource.getResource("wood"), 2);
}
