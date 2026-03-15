import {IMG, IMG_ICON} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementGround from "../element/elements/element_ground.js";
import ElementDefault from "../element/elements/element_default.js";
import ElementCrop from "../element/elements/element_crop.js";
import ActionPlowe from "../element/element_actions/action_plowe.js";
import ActionUnplowe from "../element/element_actions/action_unplowe.js";
import ActionPrune from "../element/element_actions/action_prune.js";
import Element from "../element/element.js";
import {registerToolbarCategories} from "./toolbar_categories.js";
import {registerFences} from "./fences.js";
import {registerCrops} from "./crops.js";
import {registerStaticObjects} from "./static_objects.js";
import {registerGroundTypes} from "./ground_types.js";
import {registerResources as registerResourcesModule} from "./resources.js";

// Register toolbar categories
registerToolbarCategories();

// Re-export registerResources from resources module for backward compatibility
export const registerResources = registerResourcesModule;

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
