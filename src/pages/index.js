import "./index.css";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import initialCards from "../utils/cardList.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  profileButtonInfo,
  profileButtonAdd,
  popupFormEdit,
  popupFormAdd,
  config,
} from "../utils/constants.js";

//Открытие Popup Edit
function openEdit() {
  //создано для слушателя
  //вставляет данные при открытии
  popupWithFormEdit.setInputValues(userInfoElement.getUserInfo());
  popupWithFormEdit.open();
  validationFormEdit.addButonInactive();
}
profileButtonInfo.addEventListener("click", openEdit);

//Открытие Popup Add
function openAdd() {
  //создано для слушателя
  popupWithFormAdd.open();
  validationFormContent.addButonInactive();
}
profileButtonAdd.addEventListener("click", openAdd);

//Popup Image
const popupWithImage = new PopupWithImage(".popup_place_image");

//слушатель закрытия на крестик, темный фон
popupWithImage.setEventListeners();

//Валидация форм Edit и Content
const validationFormEdit = new FormValidator(config, popupFormEdit);
const validationFormContent = new FormValidator(config, popupFormAdd);
validationFormEdit.enableValidation();
validationFormContent.enableValidation();

//Создание карточек из массива
const cardSection = new Section(
  {
    items: initialCards,
    renderer: (item) => {
      const newcard = createCard(item);
      cardSection.addItem(newcard);
    },
  },
  ".element"
);
cardSection.renderCards();

//Создание карточки
function createCard(item) {
  const card = new Card(item, "#element-template", () => {
    //открыть модальное окно с картинкой
    popupWithImage.open({ name: item.name, link: item.link });
  });
  const cardElement = card.getView();
  return cardElement;
}

//Действия при Submit формы Add
const popupWithFormAdd = new PopupWithForm(".popup_place_add", {
  callbackSubmitForm: (inputValues) => {
    const newcard = createCard({
      name: inputValues.name,
      link: inputValues.link,
    });
    cardSection.addItem(newcard);
    popupWithFormAdd.close();
  },
});
popupWithFormAdd.setEventListeners();

//Действия при Submit формы Edit
const popupWithFormEdit = new PopupWithForm(".popup_place_edit", {
  callbackSubmitForm: (inputValues) => {
    userInfoElement.setUserInfo(inputValues);
    popupWithFormEdit.close();
  },
});
popupWithFormEdit.setEventListeners();

//Вставить данные из попапа на страницу и наоборот при открытии/закрытии попапа
const userInfoElement = new UserInfo({
  profileTitleSelector: ".profile__title",
  profileSubTitleSelector: ".profile__subtitle",
});
