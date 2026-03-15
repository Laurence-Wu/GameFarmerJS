import {AbstractHarvestAction} from "../element_action.js";
import Element from "../element.js";
import {replaceElementImg} from "../../view/render.js";

export default class ActionPrune extends AbstractHarvestAction {
	executor(square) {
		const element = Element.getElementFromId(square.querySelectorAll('img')[1].getAttribute("id"))
		this._grantResource(element, square);
		replaceElementImg(square, element.getBlockChild().getImage());
	}
}