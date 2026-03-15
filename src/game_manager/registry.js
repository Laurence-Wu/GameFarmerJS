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
import {registerStaticObjects} from "./static_objects.js";
import {registerGroundTypes} from "./ground_types.js";

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
    registerGroundTypes();

    // Static Objects
    registerStaticObjects();

    // Fences
    registerFences();

    // Crops
    registerCrops();
}
