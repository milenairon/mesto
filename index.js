//Находим элементы секции profile
let profile = document.querySelector(".profile");
let profileButtonInfo = profile.querySelector(".profile__button-info");
let profileTitle = profile.querySelector(".profile__title");
let profileSubTitle = profile.querySelector(".profile__subtitle");
//Находим элементы секции popup
let popup = document.querySelector(".popup");
let formElement = popup.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__job");
let popupCloseIcon = formElement.querySelector(".popup__button-close");
let popupButtonSave = formElement.querySelector(".popup__button-save");

//POP UP
//ОТКРЫТИЕ и ЗАКРЫТИЕ
function popupOpen(modal) {
  modal.classList.add("popup_opened");
}
function popupClose(modal) {
  modal.classList.remove("popup_opened");
}
//ЗАПОЛНЕНИЕ ФОРМЫ
//Значения на странице дублируем в форму
function setInputText(evt) {
  nameInput.value = profileTitle.textContent.trim(); //.trim() - уберет лишние пробелы
  jobInput.value = profileSubTitle.textContent.trim();
}
// Дублируем значения из формы в значения на странице
function setTextInput(evt) {
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
}
//не дает отправить форму
function handleFormSubmit(evt) {
  evt.preventDefault();
}

//ВЫЗОВЫ ФУНКЦИЙ
popupCloseIcon.addEventListener("click", function () {
  popupClose(popup);
});
profileButtonInfo.addEventListener("click", function () {
  popupOpen(popup);
  setInputText();
});
popupButtonSave.addEventListener("click", function () {
  popupClose(popup);
  setTextInput();
});
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);
