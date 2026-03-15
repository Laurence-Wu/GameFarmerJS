import {IMG, IMG_ICON} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementGround from "../element/elements/element_ground.js";
import ElementDefault from "../element/elements/element_default.js";
import ElementCrop from "../element/elements/element_crop.js";
import ActionPlowe from "../element/element_actions/action_plowe.js";
import ActionUnplowe from "../element/element_actions/action_unplowe.js";
import ActionPrune from "../element/element_actions/action_prune.js";
import Element from "../element/element.js";
import {TOOLBAR_CATEGORY} from "../view/bar.js";

export function registerResources() {
    new Resource("Fruit", IMG_ICON.FRUIT).setPrice(5, 5);
    new Resource("Seed", IMG_ICON.SEED);
    new Resource("Rock", IMG_ICON.ROCK);
    new Resource("Wood", IMG_ICON.WOOD);
    new Resource("Leaf", IMG_ICON.LEAF);
}

export function registerElements() {
    // Ground Types
    new ElementGround(IMG.GRASS, new ActionPlowe());
    new ElementGround(IMG.GRASS_SIDE);
    new ElementGround(IMG.GRASS_CORNER);
    new ElementGround(IMG.GRASS_FARM, new ActionUnplowe());

    // Static Objects
    (new ElementDefault(IMG.PLANT0)).setNaturalSpawnChance(75).setLootable(Resource.getResource("leaf"));
    (new ElementDefault(IMG.ROCK0)).setNaturalSpawnChance(30).setLootable(Resource.getResource("rock"), 3);
    (new ElementDefault(IMG.FLOWER0)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER1)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.FLOWER2)).setNaturalSpawnChance(2).setLootable(Resource.getResource("seed0"));
    (new ElementDefault(IMG.TRUNK0)).setNaturalSpawnChance(10).setLootable(Resource.getResource("wood"), 2);
    
    // Trees
    (new ElementDefault(IMG.TREE0, new ActionPrune()))
        .setNaturalSpawnChance(20)
        .setLootable(Resource.getResource("wood"), 7)
        .setBlockChild(Element.getElementFromId("trunk0"));
        
    (new ElementDefault(IMG.TREE1, new ActionPrune()))
        .setNaturalSpawnChance(20)
        .setLootable(Resource.getResource("wood"), 7)
        .setBlockChild(Element.getElementFromId("trunk0"));

    // Fences
    const fences = [
        IMG.DOOR_WOOD_CLOSE, IMG.FENCE_WOOD_1, IMG.FENCE_WOOD_2, IMG.FENCE_WOOD_3,
        IMG.FENCE_WOOD_4, IMG.FENCE_WOOD_5, IMG.FENCE_WOOD_6, IMG.FENCE_WOOD_7, IMG.FENCE_WOOD_8
    ];

    fences.forEach(img => {
        const name = img.id.replace(/_/g, " ");
        (new ElementDefault(img))
            .setLootable(Resource.getResource("wood"))
            .setDisplayName(name.charAt(0).toUpperCase() + name.slice(1))
            .setHtmlDisplayCategory(TOOLBAR_CATEGORY.FENCE);
    });

    // Crops
    (new ElementCrop(IMG.MELON, "Melon", 1000, Resource.getResource("fruit"))).setPrice(15, 500);
    (new ElementCrop(IMG.WHEAT, "Wheat", 1500, Resource.getResource("fruit"), 5)).setPrice(5, 5);
    (new ElementCrop(IMG.SUGARCANE, "Sugarcane", 1300, Resource.getResource("fruit"), 3)).setPrice(5, 5);
    (new ElementCrop(IMG.EGGPLANT, "Eggplant", 300, Resource.getResource("fruit"))).setPrice(5, 5);
    (new ElementCrop(IMG.CHILI, "Chili", 700, Resource.getResource("fruit"), 2)).setPrice(5, 5);
}
