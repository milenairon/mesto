import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._popupImage = document.querySelector(".popup_place_image");
    this._popupImageItem = this._popupImage.querySelector(".popup__image-item");
    this._popupTitleImage = this._popupImage.querySelector(".popup__title-image");
  }

  openPopup({ name, link }) {
    super.openPopup();
    this._popupTitleImage.textContent = name;
    this._popupImageItem.src = link;
    this._popupImageItem.alt = name;
  }
}
