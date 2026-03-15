import {IMG} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementDefault from "../element/elements/element_default.js";
import {getToolbarCategory} from "../view/bar.js";

/**
 * Register all decoration elements in the game.
 * Decorations are static objects that can be placed in the DECORATION toolbar category.
 */
export function registerDecorations() {
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

    // Well and Pumpkin (Decoration category)
    (new ElementDefault(IMG.WELL0))
        .setNaturalSpawnChance(8)
        .setLootable(Resource.getResource("leaf"))
        .setDisplayName("Well")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    (new ElementDefault(IMG.PUMPKIN0))
        .setNaturalSpawnChance(12)
        .setLootable(Resource.getResource("fruit"))
        .setDisplayName("Pumpkin")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    // Additional Flowers (Decoration category)
    (new ElementDefault(IMG.FLOWER3))
        .setNaturalSpawnChance(3)
        .setLootable(Resource.getResource("seed0"))
        .setDisplayName("Flower Pink")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));

    (new ElementDefault(IMG.FLOWER4))
        .setNaturalSpawnChance(3)
        .setLootable(Resource.getResource("seed0"))
        .setDisplayName("Flower Yellow")
        .setHtmlDisplayCategory(getToolbarCategory('DECORATION'));
}
