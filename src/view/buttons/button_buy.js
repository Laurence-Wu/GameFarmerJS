import Button from "../button.js";
import Player from "../../game/player.js";
import Menu from "../menu.js";
import {displayMessageToAlertBox} from "../render.js";
import Element from "../../element/element.js";
import Resource from "../../game/resource.js";

export default class ButtonBuy extends Button {
    constructor() {
        super("buttonBuy");
    }

    executor(eventTarget) {
        const parentElement = eventTarget.parentElement;
        const buyQuantity = parseInt(parentElement.querySelector("#buyQuantity").value);
        // The output value is already total (unit price * quantity)
        const buyPrice = parseInt(parentElement.querySelector("#buyPrice").value);
        const player = Player.player;
        if (!player.isMoneyEnough(buyPrice)) {
            displayMessageToAlertBox(ENG_LANG.NO_ENOUGH_MONEY);
            return;
        }
        player.removeMoney(buyPrice);
        
        let buyElement = Element.getElementFromId(parentElement.parentElement.querySelector("#imgElement img").id);
        if (!buyElement)
            buyElement = Resource.getResource(parentElement.parentElement.querySelector("#imgElement img").id);
        buyElement.updateQuantity(buyQuantity);
        Menu.getMenu("menu-shop.html").build().displayMenu();
    }
}