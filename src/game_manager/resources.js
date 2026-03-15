import {IMG_ICON} from "./game_assets.js";
import Resource from "../game/resource.js";

/**
 * Register all resources in the game.
 * Resources include fruits, seeds, and materials that players can collect.
 */
export function registerResources() {
    new Resource("Fruit", IMG_ICON.FRUIT).setPrice(5, 5);
    new Resource("Seed", IMG_ICON.SEED);
    new Resource("Rock", IMG_ICON.ROCK);
    new Resource("Wood", IMG_ICON.WOOD);
    new Resource("Leaf", IMG_ICON.LEAF);
}
