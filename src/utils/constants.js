//Находим элементы секции pages
const pages = document.querySelector(".pages");
//Находим элементы секции profile
const profile = document.querySelector(".profile");
const profileButtonInfo = profile.querySelector(".profile__button-info");
const profileButtonAdd = profile.querySelector(".profile__button-add");

//Находим элементы секции popup
//popup Edit
const popupFormEdit = pages.querySelector(".popup__form_type_edit");

//popup Add
const popupAdd = pages.querySelector(".popup_place_add"); //находим ради констант ниже
const popupFormAdd = popupAdd.querySelector(".popup__form_type_add");
//popup Image
const config = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__input-error-message_visible",
};

export {
  profileButtonInfo,
  profileButtonAdd,
  popupFormEdit,
  popupFormAdd,
  config,
};
