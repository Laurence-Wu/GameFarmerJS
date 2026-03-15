import {SOUND} from "./game_assets.js";

export let globalSize;
export let mapHeight;
export let mapWidth;
export let timeToGrow;
export let naturalGeneration;
export let infiniteResources;

export default function defineGameSettings() {
    globalSize = parseInt(document.getElementById("inputTileSize").value);
    mapHeight = document.getElementById("inputMapHeight").value;
    mapWidth = document.getElementById("inputMapWidth").value;
    timeToGrow = document.getElementById("inputTimeToGrow").value;
    naturalGeneration = document.getElementById("inputNaturalGen").value;
    infiniteResources = document.getElementById("inputInfiniteRes").checked
    if (!document.getElementById("inputEnableSounds").checked)
        return
    SOUND.DEFAULT_SOUND.volume = 0.2;
    SOUND.DEFAULT_SOUND.loop = true;
    SOUND.DEFAULT_SOUND.play();
}