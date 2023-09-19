import "./index.css";
import Card from "../components/card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
import initialCards from "../utils/cardList.js";
import Popup from "../components/Popup.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import {
  profileButtonInfo,
  profileButtonAdd,
  popupFormEdit,
  popupFormAdd,
  popupNameCard,
  popupLinkCard,
  config,
} from "../utils/constants.js";

//Открытие Popup Edit
//new Popup нужен для закрытия без reset формы
const popupEditElement = new Popup(".popup_place_edit");
function openEdit() {
  //создано для слушателя
  userInfoElement.getUserInfo(popupWithFormEdit.giveInputValues()); //вставляет данные при открытии
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

//открыть модальное окно с картинкой
function handleCardClick(data) {
  popupWithImage.open(data);
}
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
      const card = new Card(item, "#element-template", (item) => {
        handleCardClick(item);
      });
      const cardElement = card.getView();
      cardSection.addItem(cardElement);
    },
  },
  ".element"
);
cardSection.renderCards();

//Создание new карточек
const cardNewSection = new Section(
  {
    renderer: (name, link) => {
      const card = new Card(
        { name, link },
        "#element-template",
        ({ name, link }) => {
          handleCardClick({ name, link });
        }
      );
      const cardElement = card.getView();
      cardNewSection.addItem(cardElement); //добавить элемент в разметку
    },
  },
  ".element"
);

//Действия при Submit формы Edit
const popupWithFormEdit = new PopupWithForm(".popup_place_edit", {
  callbackSubmitForm: () => {
    userInfoElement.setUserInfo(popupWithFormEdit.giveInputValues());
    popupEditElement.close();
  },
});
popupWithFormEdit.setEventListeners();

//Действия при Submit формы Add
const popupWithFormAdd = new PopupWithForm(".popup_place_add", {
  callbackSubmitForm: () => {
    cardNewSection.renderCard(popupNameCard.value, popupLinkCard.value);
    popupWithFormAdd.close();
  },
});
popupWithFormAdd.setEventListeners();

//Вставить данные из попапа на страницу и наоборот при открытии/закрытии попапа
const userInfoElement = new UserInfo({
  profileTitleSelector: ".profile__title",
  profileSubTitleSelector: ".profile__subtitle",
});
