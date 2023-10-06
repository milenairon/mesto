import Popup from "./Popup.js";

export default class PopupWithDelete extends Popup {
  constructor(config, popupSelector) {
    super(popupSelector);
    this._popupBtn = this._popup.querySelector(config.submitButtonSelector);
  }

  open(handleClickBtn) {
    super.open();
    this._handleClickBtn = handleClickBtn;
  }

  setEventListeners() {
    super.setEventListeners(); //слушатель закрытие попапа на темный фон/крестик
    this._popupBtn.addEventListener("click", () => {
      this._handleClickBtn();
    });
  }
}
