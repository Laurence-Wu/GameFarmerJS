import {AbstractHarvestAction} from "../element_action.js";
import Element from "../element.js";
import {getImageNumber} from "../../utils.js";
import {
	displayMessageToAlertBox,
	removeElementImg,
	replaceGroundImg
} from "../../view/render.js";

export default class ActionHarvest extends AbstractHarvestAction {
	executor(square) {
		const img = square.querySelectorAll('img')[1];
		const element = Element.getElementFromId(img.getAttribute("id"));
		if (!element.isGrown(getImageNumber(img.getAttribute("src"))))
			return displayMessageToAlertBox(ENG_LANG.WAIT_CROP_GROW);
		this._grantResource(element, square);
		removeElementImg(square);
		replaceGroundImg(square, Element.getElementFromId("ground").getImage());
	}
}