import {IMG, IMG_ICON} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementGround from "../element/elements/element_ground.js";
import ElementDefault from "../element/elements/element_default.js";
import ElementCrop from "../element/elements/element_crop.js";
import ActionPlowe from "../element/element_actions/action_plowe.js";
import ActionUnplowe from "../element/element_actions/action_unplowe.js";
import ActionPrune from "../element/element_actions/action_prune.js";
import Element from "../element/element.js";
import {registerToolbarCategory, getToolbarCategory} from "../view/bar.js";
import {registerFences} from "./fences.js";
import {registerCrops} from "./crops.js";

// Register toolbar categories dynamically
registerToolbarCategory('CROP', document.getElementById('dropup-crop'));
registerToolbarCategory('FENCE', document.getElementById('dropup-fence'));

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
    registerFences();

    // Crops
    registerCrops();
}
