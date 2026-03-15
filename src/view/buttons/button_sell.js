import Button from "../button.js";
import Player from "../../game/player.js";
import {displayMessageToAlertBox} from "../render.js";
import Menu from "../menu.js";
import {getItem} from "../../game_manager/item_registry.js";

export default class ButtonSell extends Button {
    constructor() {
        super("buttonSell");
    }

    executor(eventTarget) {
        const parentElement = eventTarget.parentElement;

        let sellElement = getItem(parentElement.parentElement.querySelector("#imgElement img").id);

        const sellQuantity = parseInt(parentElement.querySelector("#sellQuantity").value);
        if (sellElement.getQuantity() < sellQuantity) {
            displayMessageToAlertBox(ENG_LANG.NO_ENOUGH_RESOURCE);
            return;
        }

        // The output value is already total (unit price * quantity)
        const sellPrice = parseInt(parentElement.querySelector("#sellPrice").value);
        const player = Player.player;

        player.addMoney(sellPrice);
        sellElement.updateQuantity(-sellQuantity);
        Menu.getMenu("menu-shop.html").build().displayMenu();
    }
}