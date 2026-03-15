import {preLoadGame} from "./src/game_manager/game_loader.js";
import loadGame from "./src/game_manager/game_loader.js";

// Update initial menu labels
document.querySelector(".menu-initial-container").addEventListener("input", function(event) {
    const value = event.target.value;
    const output = event.target.closest(".input-control").querySelector("output");
    if (output) {
        output.value = value;
    }
});

document.getElementById("buttonPlay").addEventListener("click", async function(e) {
    await preLoadGame();
    document.querySelector(".menu-initial-container").remove();
    e.target.removeEventListener('click', this, false);
    loadGame();
});