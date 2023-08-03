//показывает элемент ошибки
const showInputError = (formElement, inputElement, errorMessage, setup) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.name}-input-error-message`
  );
  inputElement.classList.add(setup.inputErrorClass); // красная граница у input
  errorElement.classList.add(setup.errorClass); //текст ошибки
  errorElement.textContent = errorMessage; //текст ошибки
};

//скрывает элемент ошибки
const hideInputError = (formElement, inputElement, setup) => {
  const errorElement = formElement.querySelector(
    `.${inputElement.name}-input-error-message`
  );
  inputElement.classList.remove(setup.inputErrorClass); //красная граница у input
  errorElement.classList.remove(setup.errorClass); //текст ошибки
  errorElement.textContent = ""; //текст ошибки
};

//проверяет валидность поля
const isValid = (formElement, inputElement, setup) => {
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      setup
    );
  } else {
    hideInputError(formElement, inputElement, setup);
  }
};

//найдем все input в одной форме
const setEventListeners = (formElement, setup) => {
  const inputList = Array.from(
    formElement.querySelectorAll(setup.inputSelector)
  );
  const buttonElement = formElement.querySelector(setup.submitButtonSelector);
  toggleButtonState(inputList, buttonElement, setup); //всплывает ошибка
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      // Внутри колбэка вызовем isValid,
      // передав ей форму и проверяемый элемент
      isValid(formElement, inputElement, setup); //проверка: надо ли добавить ошибку
      toggleButtonState(inputList, buttonElement, setup); //проверка: надо ли разблокировать кнопку
    });
  });
};

//найдем все form в одном документе
const enableValidation = (setup) => {
  const formList = Array.from(document.querySelectorAll(setup.formSelector));
  formList.forEach((formElement) => {
    setEventListeners(formElement, setup);
  });
};

//проверяет все ли поля формы валидны. Возвращает true или false
const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

//hразблокирует/заблокирует кнопку
const toggleButtonState = (inputList, buttonElement, setup) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add(setup.inactiveButtonClass);
    buttonElement.setAttribute("disabled", "true");//добавим disabled
  } else {
    buttonElement.classList.remove(setup.inactiveButtonClass);
    buttonElement.removeAttribute('disabled')//уберем disabled
  }
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-message_visible",
});
