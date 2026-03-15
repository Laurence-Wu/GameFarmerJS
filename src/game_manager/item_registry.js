import Element from "../element/element.js";
import Resource from "../game/resource.js";

export function getItem(id) {
    return Element.getElementFromId(id) || Resource.getResource(id);
}
