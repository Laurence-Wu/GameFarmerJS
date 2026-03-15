import Menu from "../menu.js";
import Player from "../../game/player.js";

export default class MenuShopMore extends Menu {

    build(item) {
        const img = this.menuHtmlContent.querySelector("#imgElement img");
        img.src = item.getImage().src;
        // Set id so buttons can retrieve the element/resource
        img.id = item.getElementId ? item.getElementId() : item.getResourceId();
        
        const buyPrice = item.getBuyPrice() || 0;
        const sellPrice = item.getSellPrice() || 0;

        const buyOutput = this.menuHtmlContent.querySelector("#buyPrice");
        const sellOutput = this.menuHtmlContent.querySelector("#sellPrice");

        buyOutput.value = buyPrice;
        buyOutput.alt = buyPrice;
        
        sellOutput.value = sellPrice;
        sellOutput.alt = sellPrice;

        this.menuHtmlContent.querySelector("#buyQuantity").value = 1;
        this.menuHtmlContent.querySelector("#sellQuantity").value = 1;
        this.menuHtmlContent.querySelector("#playerMoney").textContent = Player.player.getMoney();
        return this;
    }
}