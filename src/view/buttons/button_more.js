import Button from "../button.js";
import Menu from "../menu.js";
import {getItem} from "../../game_manager/item_registry.js";

export default class ButtonMore extends Button {
    constructor() {
        super("buttonMore");
    }

    executor(eventTarget) {
        let element = getItem(eventTarget.parentElement.querySelector("img").id);
        Menu.getMenu("menu-shop-more.html").build(element).displayMenu();
    }
}