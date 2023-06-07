let popup = document.querySelector(".popup");
let profileButtonInfo = document.querySelector(".profile__button-info");
let popupCloseIcon = document.querySelector(".popup__button-close");

function popupOpen() {
  popup.classList.add("popup_opened");
}

function popupClose() {
  popup.classList.remove("popup_opened");
}
//открытие попапа
profileButtonInfo.addEventListener("click", popupOpen);
//закрытие попапа
popupCloseIcon.addEventListener("click", popupClose);
