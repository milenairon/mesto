export default class Popup {
  constructor(popupSelector) {
    this._popup = popupSelector;
    this._handleEscClose = this._handleEscClose.bind(this);
  }
  openPopup() {
    this._popup.classList.add("popup_opened");
    document.addEventListener("keydown", this._handleEscClose);
  }

  closePopup() {
    this._popup.classList.remove("popup_opened");
    document.removeEventListener("keydown", this._handleEscClose);
  }
  //закрыть попап на esc
  _handleEscClose(evt) {
    if (evt.key === "Escape") {
      this.closePopup();
    }
  }
  //закрыть попап  на крестик/темный фон
  _closeOverlay(evt) {
    if (
      evt.currentTarget === evt.target || //закрытие при нажатии в пустоту
      evt.target.classList.contains("popup__close-icon") //закрытие при нажатии на крестик
    ) {
      //если 'элемент на котором висит(сам попапа, смотри ниже вызов)' = 'элемент, на который нажали(сам попап)' или 'параметр содержит класс popup__button-close'
      this.closePopup();
    }
  }

  //слушатели/обработчики событий
  setEventListeners() {
    this._popup.addEventListener("click", this._closeOverlay.bind(this));
  }
}
