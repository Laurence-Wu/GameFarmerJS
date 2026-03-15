import {IMG} from "./game_assets.js";
import ElementGround from "../element/elements/element_ground.js";
import ActionPlowe from "../element/element_actions/action_plowe.js";
import ActionUnplowe from "../element/element_actions/action_unplowe.js";

/**
 * Register all ground types in the game.
 * Ground types include grass variants and farmable ground.
 */
export function registerGroundTypes() {
    // Ground Types
    new ElementGround(IMG.GRASS, new ActionPlowe());
    new ElementGround(IMG.GRASS_SIDE);
    new ElementGround(IMG.GRASS_CORNER);
    new ElementGround(IMG.GRASS_FARM, new ActionUnplowe());
}
