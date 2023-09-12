//Находим элементы секции pages
const pages = document.querySelector(".pages");
//Находим элементы секции profile
const profile = document.querySelector(".profile");
const profileButtonInfo = profile.querySelector(".profile__button-info");
const profileButtonAdd = profile.querySelector(".profile__button-add");
const profileTitle = profile.querySelector(".profile__title");
const profileSubTitle = profile.querySelector(".profile__subtitle");
//Находим элементы секции element
const cardItems = document.querySelector(".element");

//Находим элементы секции popup
const popupEdit = pages.querySelector(".popup_place_edit");
//popup Edit
const popupFormEdit = popupEdit.querySelector(".popup__form_type_edit");

//popup Add
const popupAdd = pages.querySelector(".popup_place_add");
const popupFormAdd = popupAdd.querySelector(".popup__form_type_add");
const popupNameCard = popupFormAdd.querySelector(".popup__name-card");
const popupLinkCard = popupFormAdd.querySelector(".popup__link-card");
//popup Image
const popupImage = pages.querySelector(".popup_place_image");
const config = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-message_visible",
};

export {
  profileButtonInfo,
  profileButtonAdd,
  profileTitle,
  profileSubTitle,
  cardItems,
  popupEdit,
  popupFormEdit,
  popupAdd,
  popupFormAdd,
  popupNameCard,
  popupLinkCard,
  popupImage,
  config,
};
