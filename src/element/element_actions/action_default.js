import {AbstractHarvestAction} from "../element_action.js";
import Element from "../element.js";
import {removeElementImg} from "../../view/render.js";

export default class ActionDefault extends AbstractHarvestAction {
	executor(square) {
		const element = Element.getElementFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		if (element.getResource() !== undefined) {
			this._grantResource(element, square);
		}
		removeElementImg(square);
	}
}