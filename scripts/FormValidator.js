class FormValidator {
  constructor(config, formElement) {
    this._config = config;
    this._form = config.formSelector;
    this._input = config.inputSelector;
    this._submitButton = config.submitButtonSelector;
    this._inactiveButton = config.inactiveButtonClass;
    this._inputError = config.inputErrorClass;
    this._error = config.errorClass;
    this._formElement = formElement;
    this._inputList = Array.from(
      this._formElement.querySelectorAll(this._input)
    );
    this._button = this._formElement.querySelector(this._submitButton);
  }

  //показывает элемент ошибки
  _showInputError(inputElement, errorMessage) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.name}-input-error-message`
    );
    inputElement.classList.add(this._inputError); // красная граница у input
    errorElement.classList.add(this._error); //текст ошибки
    errorElement.textContent = errorMessage; //текст ошибки
  }

  //скрывает элемент ошибки
  _hideInputError(inputElement) {
    const errorElement = this._formElement.querySelector(
      `.${inputElement.name}-input-error-message`
    );
    inputElement.classList.remove(this._inputError); //красная граница у input
    errorElement.classList.remove(this._error); //текст ошибки
    errorElement.textContent = ""; //текст ошибки
  }

  //проверяет валидность поля
  _isValid(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement, inputElement.validationMessage);
    } else {
      this._hideInputError(inputElement);
    }
  }

  //проверяет все ли поля формы валидны. Возвращает true или false
  _hasInvalidInput() {
    return this._inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  //заблокировать кнопку
  addButonInactive() {
    this._button.classList.add(this._inactiveButton);
    this._button.setAttribute("disabled", "true");
  }

  //разблокировать кнопку
  removeButonInactive() {
    this._button.classList.remove(this._inactiveButton);
    this._button.removeAttribute("disabled"); //уберем disabled
  }

  //hразблокирует/заблокирует кнопку
  _toggleButtonState() {
    if (this._hasInvalidInput()) {
      this.addButonInactive();
    } else {
      this.removeButonInactive()
    }
  }

  //найдем все input в одной форме
  _setEventListeners() {
    this._toggleButtonState(); //проверка: надо ли разблокировать кнопку
    this._inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._isValid(inputElement); //проверка: надо ли добавить ошибку
        this._toggleButtonState(); //проверка: надо ли разблокировать кнопку
      });
    });
  }

  //найдем все form в одном документе
  enableValidation() {
    this._setEventListeners();
  }
}

export default FormValidator;
