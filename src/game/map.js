import Element from "../element/element.js";
import {getPercent} from "../utils.js"
import {addImgToSquare} from "../view/render.js";
import {globalSize, mapHeight, mapWidth, naturalGeneration} from "../game_manager/game_settings.js";

const ISLAND_COVERAGE_RATIO = 0.55;

export default class Map {
    static map;
    static mapInstance;

    constructor() {
        Map.mapInstance = this;

        Map.map = document.createElement("div");
        Map.map.setAttribute("id", "map");
        document.body.prepend(Map.map);

        // Map Size in Grid Units
        let pixelWidth = getPercent(window.innerWidth, parseFloat(mapWidth));
        let pixelHeight = getPercent(window.innerHeight, parseFloat(mapHeight));
        
        this.squaresPerRow = Math.max(10, Math.floor(pixelWidth / globalSize));
        this.numRows = Math.max(10, Math.floor(pixelHeight / globalSize));


        // Adjust Container Size
        Map.map.style.width = (this.squaresPerRow * globalSize) + "px";
        Map.map.style.height = (this.numRows * globalSize) + "px";

        this.#mapGenerator();
        return this;
    }

    #addSquare(square) {
        Map.map.appendChild(square);
    }

    #generateIslandShape() {
        const landTiles = new Set();
        const maxTiles = this.numRows * this.squaresPerRow;
        const targetLandCount = Math.floor(maxTiles * ISLAND_COVERAGE_RATIO); // Island covers 55% area

        let curX = Math.floor(this.numRows / 2);
        let curY = Math.floor(this.squaresPerRow / 2);

        // Drunkard's Walk
        while (landTiles.size < targetLandCount) {
            landTiles.add(`${curX},${curY}`);

            const dir = Math.floor(Math.random() * 4);
            if (dir === 0) curX++;
            else if (dir === 1) curX--;
            else if (dir === 2) curY++;
            else if (dir === 3) curY--;

            // Boundary Padding
            curX = Math.max(1, Math.min(this.numRows - 2, curX));
            curY = Math.max(1, Math.min(this.squaresPerRow - 2, curY));
        }
        return landTiles;
    }

    #mapGenerator() {
        const start = performance.now();
        const islandTiles = this.#generateIslandShape();
        const naturalSpawnableElement = Element.elements.filter((elem) => elem.naturalSpawnChance);

        for (let x = 0; x < this.numRows; x++) {
            for (let y = 0; y < this.squaresPerRow; y++) {
                const square = document.createElement('div');
                square.classList.add('square');
                square.style.width = globalSize + "px";
                square.style.height = globalSize + "px";

                if (islandTiles.has(`${x},${y}`)) {
                    // Check neighbors for border textures
                    const neighbors = this.#getNeighborStats(x, y, islandTiles);
                    
                    if (neighbors.count < 8) {
                        addImgToSquare(square, Element.getElementFromId("ground_side").getImage());
                        const img = square.querySelector('img');
                        img.style.transform = this.#calculateEdgeRotation(neighbors);
                    } else {
                        addImgToSquare(square, Element.getElementFromId("ground").getImage());
                        if (Math.random() * 100 <= naturalGeneration) {
                            this.#generateElement(square, [...naturalSpawnableElement]);
                        }
                    }
                } else {
                    square.classList.add('empty-square'); // Non-playable water/void
                }
                
                this.#addSquare(square);
            }
        }
    }

    #getNeighborStats(x, y, islandTiles) {
        const directions = [
            {dx: -1, dy: 0, tag: 'N'}, {dx: 1, dy: 0, tag: 'S'},
            {dx: 0, dy: -1, tag: 'W'}, {dx: 0, dy: 1, tag: 'E'},
            {dx: -1, dy: -1}, {dx: -1, dy: 1}, {dx: 1, dy: -1}, {dx: 1, dy: 1}
        ];
        
        let count = 0;
        let map = {};
        directions.forEach(d => {
            const has = islandTiles.has(`${x + d.dx},${y + d.dy}`);
            if (has) count++;
            if (d.tag) map[d.tag] = has;
        });
        
        return { count, ...map };
    }

    #calculateEdgeRotation(n) {
        if (!n.N) return "rotate(0deg)";
        if (!n.E) return "rotate(90deg)";
        if (!n.S) return "rotate(180deg)";
        if (!n.W) return "rotate(270deg)";
        return "rotate(0deg)";
    }

    #generateElement(square, naturalSpawnableElement) {
        while (true) {
            let element = naturalSpawnableElement[Math.floor(Math.random() * naturalSpawnableElement.length)];
            let randValue = Math.floor(Math.random() * 100);
            if (randValue <= element.naturalSpawnChance) {
                element.setElementToSquare(square);
                break;
            }
        }
    }

    getElementFromSquare(square) {
        const nodes = square.querySelectorAll('img');
        if (nodes.length === 0) return null;
        return Element.getElementFromId(nodes[nodes.length - 1].getAttribute('id'));
    }

    isSquareContainMaxElement(square) {
        return square.querySelectorAll('img').length > 1;
    }

    tryToGetSquareFromGround(target) {
        return target.classList.contains("ground") ? target.parentElement : null;
    }
}
