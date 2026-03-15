export function renderPriceWidget(container, item) {
    const priceInfo = document.createElement("div");
    priceInfo.classList.add("shopItemPrice");

    const moneyIcon = document.createElement("img");
    moneyIcon.src = "assets/image/icon/money_icon.png";

    const priceValue = document.createElement("span");
    priceValue.textContent = `${item.getBuyPrice() || item.getSellPrice()}`;

    priceInfo.appendChild(moneyIcon);
    priceInfo.appendChild(priceValue);
    container.appendChild(priceInfo);
}
