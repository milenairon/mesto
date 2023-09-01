import Card from "./Card.js";
import FormValidator from "./FormValidator.js";
import initialCards from "./cardList.js";
//Находим элементы секции pages
const pages = document.querySelector(".pages");
//Находим элементы секции profile
const profile = document.querySelector(".profile");
const profileButtonInfo = profile.querySelector(".profile__button-info");
const profileButtonAdd = profile.querySelector(".profile__button-add");
const profileTitle = profile.querySelector(".profile__title");
const profileSubTitle = profile.querySelector(".profile__subtitle");
//Находим элементы секции element
const elementElement = document.querySelector(".element");

//Находим элементы секции popup
const popup = pages.querySelector(".popup");
const popupEdit = pages.querySelector(".popup_place_edit");
//popup Edit
const popupFormEdit = popupEdit.querySelector(".popup__form_type_edit");
const nameInput = popupFormEdit.querySelector(".popup__name");
const jobInput = popupFormEdit.querySelector(".popup__job");

//popup Add
const popupAdd = pages.querySelector(".popup_place_add");
const popupFormAdd = popupAdd.querySelector(".popup__form_type_add");
const popupNameCard = popupFormAdd.querySelector(".popup__name-card");
const popupLinkCard = popupFormAdd.querySelector(".popup__link-card");
//popup Image
const popupImage = pages.querySelector(".popup_place_image");
const popupImageItem = popupImage.querySelector(".popup__image-item");
const popupTitleImage = popupImage.querySelector(".popup__title-image");
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-message_visible",
};

function openPopup(modal) {
  modal.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc);
}

function closePopup(modal) {
  modal.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
}

//закрытие попапа esc
function closeByEsc(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

//ЗАПОЛНЕНИЕ ФОРМЫ name/job
//Значения на странице дублируем в форму
function setInputText() {
  nameInput.value = profileTitle.textContent.trim(); //.trim() - уберет лишние пробелы
  jobInput.value = profileSubTitle.textContent.trim();
}
// Дублируем значения из формы в значения на странице
function setTextInput() {
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
}

//POP UP
//ОТКРЫТИЕ
function openPopupEdit() {
  openPopup(popupEdit);
  setInputText();
}

profileButtonInfo.addEventListener("click", openPopupEdit);

function openPopupAdd() {
  openPopup(popupAdd);
}

profileButtonAdd.addEventListener("click", openPopupAdd);

//ЗАКРЫТИЕ
//при клике на темный фон
function closeOverlay(evt) {
  if (
    evt.currentTarget === evt.target || //закрытие при нажатии в пустоту
    evt.target.classList.contains("popup__close-icon") //закрытие при нажатии на крестик
  ) {
    //если 'элемент на котором висит(сам попапа, смотри ниже вызов)' = 'элемент, на который нажали(сам попап)' или 'параметр содержит класс popup__button-close'
    closePopup(evt.currentTarget);
  }
}

popupEdit.addEventListener("click", closeOverlay);
popupAdd.addEventListener("click", closeOverlay);
popupImage.addEventListener("click", closeOverlay);

//создаем карточку
function createCard(data, cardTemplate) {
  const card = new Card(
    data,
    cardTemplate,
    popupTitleImage,
    popupImageItem,
    popupImage,
    openPopup
  );
  return card.getView();
}

//Создание 6-ти карточек городов через перебор массива
function renderCard(data, cardTemplate, container) {
  container.prepend(createCard(data, cardTemplate));
}

initialCards.forEach((item) => {
  renderCard(item, "#element-template", elementElement);
});

//СОЗДАНИЕ NEW КАРТОЧЕК ГОРОДОВ
function renderNewCard(evt) {
  evt.preventDefault(); //убираем отправку запроса и перезагрузку страницы для попапа add
  const name = popupNameCard.value;
  const link = popupLinkCard.value;
  renderCard({ name, link }, "#element-template", elementElement);
  closePopup(popupAdd);
  validationFormContent.addButonInactive();
  evt.target.reset();
}

popupFormAdd.addEventListener("submit", renderNewCard);

//закрытие попапа Edit
function closePopupEdit(evt) {
  evt.preventDefault(); //убираем отправку запроса и перезагрузку страницы для попапа form
  //при сохранении
  closePopup(popup);
  setTextInput();
}
//при отправке данных в форме Edit
popupFormEdit.addEventListener("submit", closePopupEdit);

//Валидация форм Edit и Content
const validationFormEdit = new FormValidator(config, popupFormEdit);
const validationFormContent = new FormValidator(config, popupFormAdd);
validationFormEdit.enableValidation();
validationFormContent.enableValidation();
