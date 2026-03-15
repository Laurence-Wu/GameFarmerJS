import Player from "../game/player.js";
import {displayRightClick} from "../view/render.js";

export default class ElementAction {
	constructor() {
		if (this.constructor === ElementAction)
			throw new Error("Abstract classes can't be instantiated.");
	}

	executor(square) {
		throw new Error("This function need to be implemented");
	}
}

export class AbstractHarvestAction extends ElementAction {
	executor(square) {
		throw new Error("This function need to be implemented");
	}

	_grantResource(element, square) {
		element.getResource().updateQuantity(element.getResourceNumber());
		displayRightClick(
			"+" + element.getResourceNumber(),
			element.getResource().getImage(),
			Player.player.getMouseX() + 40,
			Player.player.getMouseY()
		);
	}
}