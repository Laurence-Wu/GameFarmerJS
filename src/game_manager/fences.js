import {IMG} from "./game_assets.js";
import Resource from "../game/resource.js";
import ElementDefault from "../element/elements/element_default.js";
import {getToolbarCategory} from "../view/bar.js";

/**
 * Register all fence elements in the game.
 * Fences are decorative elements that can be placed by the player.
 */
export function registerFences() {
    const fences = [
        IMG.DOOR_WOOD_CLOSE, IMG.FENCE_WOOD_1, IMG.FENCE_WOOD_2, IMG.FENCE_WOOD_3,
        IMG.FENCE_WOOD_4, IMG.FENCE_WOOD_5, IMG.FENCE_WOOD_6, IMG.FENCE_WOOD_7, IMG.FENCE_WOOD_8
    ];

    fences.forEach(img => {
        const name = img.id.replace(/_/g, " ");
        (new ElementDefault(img))
            .setLootable(Resource.getResource("wood"))
            .setDisplayName(name.charAt(0).toUpperCase() + name.slice(1))
            .setHtmlDisplayCategory(getToolbarCategory('FENCE'));
    });
}
