import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImageItem = this._popup.querySelector(".popup__image-item");
    this._popupTitleImage = this._popup.querySelector(
      ".popup__title-image"
    );
  }

  open({ name, link }) {
    super.open();
    this._popupTitleImage.textContent = name;
    this._popupImageItem.src = link;
    this._popupImageItem.alt = name;
  }
  
}
