import Button from "../view/button.js";
import ButtonApply from "../view/buttons/button_apply.js";
import ButtonBuy from "../view/buttons/button_buy.js";
import ButtonSell from "../view/buttons/button_sell.js";
import ButtonClose from "../view/buttons/button_close.js";
import ButtonMore from "../view/buttons/button_more.js";
import Menu from "../view/menu.js";
import * as Listeners from "./listeners.js";
import MenuShop from "../view/menus/menu_shop.js";
import MenuShopMore from "../view/menus/menu_shop_more.js";
import Player from "../game/player.js";
import {TOOLBAR_CATEGORY} from "../view/bar.js";
import defineGameSettings from "./game_settings.js";
import Map from "../game/map.js";
import { registerResources, registerElements } from "./registry.js";

export default function loadGame() {
    loadListeners();
    new Map();
}

export async function preLoadGame() {
    defineGameSettings();
    new Player();
    
    registerResources();
    registerElements();
    loadButtons();
    
    await loadMenus();
    setupMenuEventListeners();
}

function setupMenuEventListeners() {
    const menusContainer = document.getElementById("menus");
    
    menusContainer.addEventListener("click", (event) => {
        const button = Button.tryToGetButtonFromTarget(event.target);
        if (button) button.executor(event.target);
    });

    menusContainer.addEventListener("input", (event) => {
        const value = event.target.value;
        const container = event.target.closest(".transaction-box") || 
                          event.target.closest(".setting-item") || 
                          event.target.parentElement;
        
        const output = container.querySelector("output");
        if (output) {
            output.value = output.alt ? output.alt * value : value;
        }
    });
}

function loadButtons() {
    Button.buttons.push(
        new ButtonApply(), 
        new ButtonBuy(), 
        new ButtonSell(), 
        new ButtonClose(), 
        new ButtonMore()
    );
}

async function loadMenus() {
    await Promise.all([
        new Menu("menu-settings.html").init(),
        new MenuShop("menu-shop.html").init(),
        new MenuShopMore("menu-shop-more.html").init()
    ]);
}

function loadListeners() {
    document.addEventListener('contextmenu', e => e.preventDefault());

    document.addEventListener("animationend", (event) => {
        if (event.target.classList.contains('resourceCollectedAnimation')) {
            event.target.remove();
        }
    });

    document.getElementById("buttonSettings").addEventListener("click", () => {
        Menu.getMenu("menu-settings.html").displayMenu();
    });

    document.querySelector(".right-item").addEventListener("click", () => {
        Menu.getMenu("menu-shop.html").build().displayMenu();
    });

    document.addEventListener('mousemove', Listeners.mouseMove);
    document.addEventListener("mousedown", Listeners.mouseDown);

    TOOLBAR_CATEGORY.CROP.addEventListener("mousedown", Listeners.mouseDownToolBar);
    TOOLBAR_CATEGORY.FENCE.addEventListener("mousedown", Listeners.mouseDownToolBar);
}