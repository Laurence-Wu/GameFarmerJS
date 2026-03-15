import {infiniteResources} from "../game_manager/game_settings.js";

const resourceBarElement = document.getElementById('ressourcebar').getElementsByTagName('ul')[0];

// Dynamic toolbar category registry
const toolbarCategories = new Map();

export function registerToolbarCategory(name, element) {
    toolbarCategories.set(name, element);
}

export function getToolbarCategory(name) {
    return toolbarCategories.get(name);
}

export function getToolbarCategories() {
    return toolbarCategories;
}

// Legacy export for backward compatibility - will be removed in future refactor
export const TOOLBAR_CATEGORY = {
    CROP: document.getElementById('dropup-crop'),
    FENCE: document.getElementById('dropup-fence')
}

// Auto-register legacy categories
registerToolbarCategory('CROP', TOOLBAR_CATEGORY.CROP);
registerToolbarCategory('FENCE', TOOLBAR_CATEGORY.FENCE);

export function addChildToResourceBar(element) {
    resourceBarElement.appendChild(element);
}

/**
 * Add a certain number to a resource in the displayed resource navbar.
 *
 * This function is used to update the quantity of a resource displayed
 * in the navigation bar of the user interface
 *
 * @param {Resource} resource - The resource to add
 * @param {int} number - The amount of resource to add
 */
export function updateResourceBarNumber(resource, number) {
    const img = resourceBarElement.querySelector(`li img[id="${resource.getResourceId()}"]`);
    const span = img.parentElement.querySelector('span');
    span.textContent = number.toString()
}

export function addChildToToolBar(toolbarCategory, element) {
    toolbarCategory.appendChild(element);
}

export function updateToolBarQuantity(element, quantity) {
    if (infiniteResources)
        return;
    element.elementHtmlDiv.querySelector(".txtNumber").textContent = quantity.toString();
}