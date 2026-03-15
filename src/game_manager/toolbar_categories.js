import {registerToolbarCategory} from "../view/bar.js";

/**
 * Register all toolbar categories in the game.
 * Toolbar categories organize elements into tabs for easy access.
 */
export function registerToolbarCategories() {
    registerToolbarCategory('CROP', document.getElementById('dropup-crop'));
    registerToolbarCategory('FENCE', document.getElementById('dropup-fence'));
}
