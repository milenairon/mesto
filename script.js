//Находим элементы секции profile
let profile = document.querySelector(".profile");
let profileButtonInfo = profile.querySelector(".profile__button-info");
let profileTitle = profile.querySelector(".profile__title");
let profileSubTitle = profile.querySelector(".profile__subtitle");
//Находим элементы секции element
let elementLike = document.querySelector(".element__like");
//Находим элементы секции popup
let popup = document.querySelector(".popup");
let formElement = popup.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__name-description");
let popupCloseIcon = formElement.querySelector(".popup__button-close");
let popupButtonSave = formElement.querySelector(".popup__button-save");

//POP UP
//ОТКРЫТИЕ
//описание функции
function popupOpen(modal) {
  modal.classList.add("popup_opened");
}
//вызов функции
profileButtonInfo.addEventListener("click", function () {
  popupOpen(popup);
});

//ЗАКРЫТИЕ
//описание функции
function popupClose(modal) {
  modal.classList.remove("popup_opened");
}
//вызов функций
popupCloseIcon.addEventListener("click", function () {
  popupClose(popup);
});
popupButtonSave.addEventListener("click", function () {
  popupClose(popup);
});

//Значения на странице дублируем в форму
function handleFormSubmit(evt) {
  nameInput.value = profileTitle.textContent.trim(); //.trim() - уберет лишние пробелы
  jobInput.value = profileSubTitle.textContent.trim();
}
profileButtonInfo.addEventListener("click", function () {
  handleFormSubmit();
});

// Дублируем значения из формы в значения на странице
function handleFormSubmit2(evt) {
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
}
popupButtonSave.addEventListener("click", function () {
  handleFormSubmit2();
});

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
