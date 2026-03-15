import {IMG} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementDefault from "../element/elements/element_default.js";
import ActionPrune from "../element/element_actions/action_prune.js";
import Element from "../element/element.js";
import {getToolbarCategory} from "../view/bar.js";

/**
 * Register all static objects and trees in the game.
 * Static objects include plants, rocks, flowers, and trees that spawn naturally.
 */
export function registerStaticObjects() {
    // Static Objects
    (new ElementDefault(IMG.PLANT0)).setNaturalSpawnChance(75).setLootable(Resource.getResource("leaf"));
    (new ElementDefault(IMG.ROCK0)).setNaturalSpawnChance(30).setLootable(Resource.getResource("rock"), 3);
    (new ElementDefault(IMG.FLOWER0)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER1)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER2)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.TRUNK0)).setNaturalSpawnChance(10).setLootable(Resource.getResource("wood"), 2);

    // Bushes (Decoration category)
    (new ElementDefault(IMG.BUSH0))
        .setNaturalSpawnChance(20)
        .setLootable(Resource.getResource("leaf"))
        .setDisplayName("Bush")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    (new ElementDefault(IMG.BUSH1))
        .setNaturalSpawnChance(20)
        .setLootable(Resource.getResource("leaf"))
        .setDisplayName("Bush Green")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    (new ElementDefault(IMG.BUSH2))
        .setNaturalSpawnChance(20)
        .setLootable(Resource.getResource("leaf"))
        .setDisplayName("Bush Dark")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    // Mushroom and Hay Bale (Decoration category)
    (new ElementDefault(IMG.MUSHROOM0))
        .setNaturalSpawnChance(10)
        .setLootable(Resource.getResource("leaf"))
        .setDisplayName("Mushroom")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    (new ElementDefault(IMG.HAYBALE0))
        .setNaturalSpawnChance(10)
        .setLootable(Resource.getResource("fruit"))
        .setDisplayName("Hay Bale")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    // Trees
    (new ElementDefault(IMG.TREE0, new ActionPrune()))
        .setNaturalSpawnChance(20)
        .setLootable(Resource.getResource("wood"), 7)
        .setBlockChild(Element.getElementFromId("trunk0"));

    (new ElementDefault(IMG.TREE1, new ActionPrune()))
        .setNaturalSpawnChance(20)
        .setLootable(Resource.getResource("wood"), 7)
        .setBlockChild(Element.getElementFromId("trunk0"));
}
