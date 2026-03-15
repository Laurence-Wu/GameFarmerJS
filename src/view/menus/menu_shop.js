import Menu from "../menu.js";
import Element from "../../element/element.js";
import Resource from "../../game/resource.js";
import Player from "../../game/player.js";

export default class MenuShop extends Menu {
    async init() {
        await super.init();
        this.renderShopItems();
    }

    renderShopItems() {
        const shopContainer = this.menuHtmlContent.getElementsByClassName("shopItems")[0];
        shopContainer.innerHTML = "";

        // Elements
        Element.elements.filter(el => el.haveEconomy()).forEach(element => {
            shopContainer.appendChild(this.createShopItemCard(element));
        });

        // Resources
        Resource.resources.forEach(resource => {
            if (resource.haveEconomy()) {
                shopContainer.appendChild(this.createShopItemCard(resource));
            }
        });
    }

    createShopItemCard(item) {
        const card = document.createElement("div");
        card.classList.add("shopItem");

        // Image
        const img = item.getImage().cloneNode(true);
        card.appendChild(img);

        // Title
        const title = document.createElement("div");
        title.classList.add("shopItemTitle");
        title.textContent = item.displayName || item.getElementId() || "Item";
        card.appendChild(title);

        // Price info
        const priceInfo = document.createElement("div");
        priceInfo.classList.add("shopItemPrice");
        
        const moneyIcon = document.createElement("img");
        moneyIcon.src = "assets/image/icon/money_icon.png";
        
        const priceValue = document.createElement("span");
        priceValue.textContent = `${item.getBuyPrice() || item.getSellPrice()}`;
        
        priceInfo.appendChild(moneyIcon);
        priceInfo.appendChild(priceValue);
        card.appendChild(priceInfo);

        // More Button
        const button = document.createElement("button");
        button.classList.add("menuItem", "button", "buttonMore");
        button.textContent = "More";
        card.appendChild(button);

        return card;
    }

    build() {
        this.menuHtmlContent.querySelector("#playerMoney").textContent = Player.player.getMoney();
        return this;
    }
}