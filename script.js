let popup = document.querySelector(".popup");
let profileButtonInfo = document.querySelector(".profile__button-info");
let popupCloseIcon = document.querySelector(".popup__button-close");
let elementLike = document.querySelector(".element__like");

//POP UP
//описание функции открытие попапа
function popupOpen() {
  popup.classList.add("popup_opened");
}
//описание функции закрытие попапа
function popupClose() {
  popup.classList.remove("popup_opened");
}
//вызов функции открытие попапа
profileButtonInfo.addEventListener("click", popupOpen);
//вызов функции закрытие попапа
popupCloseIcon.addEventListener("click", popupClose);
