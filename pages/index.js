import Card from "../scripts/card.js";
import Section from "../scripts/Section.js";
import FormValidator from "../scripts/FormValidator.js";
import initialCards from "../utils/cardList.js";
import Popup from "../scripts/Popup.js";
import PopupWithImage from "../scripts/PopupWithImage.js";
import PopupWithForm from "../scripts/PopupWithForm.js";
import UserInfo from "../scripts/UserInfo.js";
import {
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
} from "../utils/constants.js";

//PopupEditElement
const PopupEditElement = new Popup(popupEdit);
function openPopupEdit() {
  //создано для слушателя
  PopupEditElement.openPopup();
  UserInfoElement.getUserInfo(); //вставляет данные при открытии
  validationFormEdit.addButonInactive();
}
profileButtonInfo.addEventListener("click", openPopupEdit);

//PopupAddElement
const PopupAddElement = new Popup(popupAdd);

function openPopupAdd() {
  //создано для слушателя
  PopupAddElement.openPopup();
  validationFormContent.addButonInactive();
}
profileButtonAdd.addEventListener("click", openPopupAdd);

//PopupImageElement
const PopupImageElement = new Popup(popupImage);
PopupImageElement.setEventListeners(); //закрытие на крестик, темный фон

//Валидация форм Edit и Content
const validationFormEdit = new FormValidator(config, popupFormEdit);
const validationFormContent = new FormValidator(config, popupFormAdd);
validationFormEdit.enableValidation();
validationFormContent.enableValidation();

//открыть модальное окно с картинкой
function handleCardClick(data) {
  const popupWithImage = new PopupWithImage(popupImage);
  popupWithImage.openPopup(data);
}

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
  cardItems
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
  cardItems
);

//Действия при Submit формы Edit
const popupWithFormEdit = new PopupWithForm(popupEdit, {
  callbackSubmitForm: () => {
    UserInfoElement.setUserInfo();
    popupWithFormEdit.closePopup();
  },
});
popupWithFormEdit.setEventListeners();

//Действия при Submit формы Add
const popupWithFormAdd = new PopupWithForm(popupAdd, {
  callbackSubmitForm: () => {
    cardNewSection.renderCard(popupNameCard.value, popupLinkCard.value);
    popupWithFormAdd.closePopup();
  },
});
popupWithFormAdd.setEventListeners();

//Вставить данные из попапа на страницу и наоборот при открытии/закрытии попапа
const UserInfoElement = new UserInfo({
  profileTitleSelector: profileTitle,
  profileSubTitleSelector: profileSubTitle,
});
