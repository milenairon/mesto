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
  _hasInvalidInput(inputList) {
    return inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }

  //hразблокирует/заблокирует кнопку
  _toggleButtonState(inputList, buttonElement) {
    if (this._hasInvalidInput(inputList)) {
      buttonElement.classList.add(this._inactiveButton);
      buttonElement.setAttribute("disabled", "true"); //добавим disabled
    } else {
      buttonElement.classList.remove(this._inactiveButton);
      buttonElement.removeAttribute("disabled"); //уберем disabled
    }
  }

  //найдем все input в одной форме
  _setEventListeners() {
    const inputList = Array.from(
      this._formElement.querySelectorAll(this._input)
    );
    const buttonElement = this._formElement.querySelector(this._submitButton);
    this._toggleButtonState(inputList, buttonElement); //проверка: надо ли разблокировать кнопку
    inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        // Внутри колбэка вызовем isValid,
        // передав ей форму и проверяемый элемент
        this._isValid(inputElement); //проверка: надо ли добавить ошибку
        this._toggleButtonState(inputList, buttonElement); //проверка: надо ли разблокировать кнопку
      });
    });
  }

  //найдем все form в одном документе
  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._form));
    formList.forEach(() => {
      this._setEventListeners();
    });
  }
}

export default FormValidator;
