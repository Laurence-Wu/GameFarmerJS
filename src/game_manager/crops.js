import {IMG} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementCrop from "../element/elements/element_crop.js";
import {getToolbarCategory} from "../view/bar.js";

/**
 * Register all crop elements in the game.
 * Crops are plantable elements that grow over time and can be harvested.
 */
export function registerCrops() {
    // Crops
    (new ElementCrop(IMG.MELON, "Melon", 1000, Resource.getResource("fruit"), 5)).setPrice(15, 500).setHtmlDisplayCategory(getToolbarCategory('CROP'));
    (new ElementCrop(IMG.WHEAT, "Wheat", 1500, Resource.getResource("fruit"), 5)).setPrice(5, 5).setHtmlDisplayCategory(getToolbarCategory('CROP'));
    (new ElementCrop(IMG.SUGARCANE, "Sugarcane", 1300, Resource.getResource("fruit"), 3)).setPrice(5, 5).setHtmlDisplayCategory(getToolbarCategory('CROP'));
    (new ElementCrop(IMG.EGGPLANT, "Eggplant", 300, Resource.getResource("fruit"))).setPrice(5, 5).setHtmlDisplayCategory(getToolbarCategory('CROP'));
    (new ElementCrop(IMG.CHILI, "Chili", 700, Resource.getResource("fruit"), 2)).setPrice(5, 5).setHtmlDisplayCategory(getToolbarCategory('CROP'));
    (new ElementCrop(IMG.CARROT, "Carrot", 800, Resource.getResource("fruit"), 4)).setPrice(5, 5).setHtmlDisplayCategory(getToolbarCategory('CROP'));
    (new ElementCrop(IMG.CORN, "Corn", 1200, Resource.getResource("fruit"), 3)).setPrice(5, 5).setHtmlDisplayCategory(getToolbarCategory('CROP'));
    (new ElementCrop(IMG.TOMATO, "Tomato", 600, Resource.getResource("fruit"), 5)).setPrice(5, 5).setHtmlDisplayCategory(getToolbarCategory('CROP'));
}
