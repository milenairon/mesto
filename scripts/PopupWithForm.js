import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, { callbackSubmitForm }) {
    super(popupSelector);
    this._form = popupSelector.querySelector(".popup__form");
    //собирает данные со всех полей формы
    this._inputs = Array.from(this._form.querySelectorAll(".popup__input"));
    this._callbackSubmitForm = callbackSubmitForm;
  }
  _getInputValues() {
    //создаем пустой объекст
    this._inputValues = {};
    //Добавляем в пустой объект все значения name из input
    this._inputs.forEach((input) => {
      this._inputValues[input.name] = input.value;
    });

    return this._inputValues;
  }

  setEventListeners() {
    super.setEventListeners(); //слушатель закрытие попапа на темный фон/крестик
    //добавляет обработчик сабмита формы
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._callbackSubmitForm(this._getInputValues());
    });
  }

  closePopup() {
    super.closePopup(); //функция закрытие попапа на esc
    this._form.reset();
  }
}
