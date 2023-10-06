import "./index.css";
import Card from "../components/Card.js";
import Section from "../components/Section.js";
import FormValidator from "../components/FormValidator.js";
//import initialCards from "../utils/cardList.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import PopupWithDelete from "../components/PopupWithDelete.js";
import Api from "../components/Api.js";
import Avatar from "../components/Avatar.js";
import {
  profileButtonInfo,
  profileButtonAdd,
  profileButtonAvatar,
  popupFormEdit,
  popupFormAdd,
  popupFormUpdateAvatar,
  config,
} from "../utils/constants.js";

//OТКРЫТИЕ POPUP
//Открытие Popup Edit
function openEdit() {
  //создано для слушателя
  //вставляет данные при открытии
  popupWithFormEdit.changeValueButtonAtBoot(config, "Сохранить");
  popupWithFormEdit.setInputValues(userInfoElement.getUserInfo());
  popupWithFormEdit.open();
  validationFormEdit.addButonInactive();
}
profileButtonInfo.addEventListener("click", openEdit);

//Открытие Popup Add
function openAdd() {
  //создано для слушателя
  popupWithFormAdd.changeValueButtonAtBoot(config, "Создать");
  popupWithFormAdd.open();
  validationFormContent.addButonInactive();
}
profileButtonAdd.addEventListener("click", openAdd);

//Открытие Popup Image
const popupWithImage = new PopupWithImage(".popup_place_image");
//слушатель закрытия на крестик, темный фон
popupWithImage.setEventListeners();

//Открытие Popup card-delete
const popupWithCardDelete = new PopupWithDelete(
  config,
  ".popup_place_card-delete"
);
//слушатель закрытия на крестик, темный фон
popupWithCardDelete.setEventListeners();

//открытие Popup update-avatar
function openUpdateAvatar() {
  //создано для слушателя
  popupWithFormUpdateAvatar.changeValueButtonAtBoot(config, "Сохранить");
  popupWithFormUpdateAvatar.open();
  validationFormUpdateAvatar.addButonInactive();
}
profileButtonAvatar.addEventListener("click", openUpdateAvatar);

//ВАЛИДАЦИЯ форм Edit и Content
const validationFormEdit = new FormValidator(config, popupFormEdit);
const validationFormContent = new FormValidator(config, popupFormAdd);
const validationFormUpdateAvatar = new FormValidator(
  config,
  popupFormUpdateAvatar
);
validationFormEdit.enableValidation();
validationFormContent.enableValidation();
validationFormUpdateAvatar.enableValidation();

//Создание карточек с сервера
function getCardSection(data) {
  const cardSection = new Section(
    {
      items: data,
      renderer: (item) => {
        const newcard = createCard(item);
        cardSection.addItem(newcard);
      },
    },
    ".element"
  );
  return cardSection;
}
//Рендер карточек с сервера
function renderCardSection(data) {
  const cardSection = getCardSection(data);
  cardSection.renderCards();
}

//Создание любой карточки
function createCard(item) {
  const card = new Card(
    item,
    "#element-template",
    () => {
      //открыть попап с картинкой
      popupWithImage.open({ name: item.name, link: item.link });
    },
    (id) => {
      //открыть попап удаления карточки
      popupWithCardDelete.open(() => {
        api.deleteCard(id).then(() => {
          card.deleteCard();
          popupWithCardDelete.close();
        });
      });
    },
    (isLiked, id) => {
      api.changeLike(isLiked, id).then((res) => {
        card.toggleLike(res.likes);
      });
    },
    userInfoElement.getUserInfo().id //id меня
  );
  const cardElement = card.getView();
  return cardElement;
}

//Действия при Submit формы Edit
const popupWithFormEdit = new PopupWithForm(".popup_place_edit", {
  callbackSubmitForm: (inputValues) => {
    popupWithFormEdit.changeValueButtonAtBoot(config, "Сохранение...");
    //Запрос. Редактирование профиля
    api.editProfile(inputValues.forename, inputValues.job).then((data) => {
      popupWithFormEdit.changeValueButtonAtBoot(config, "Данные сохранены!");
      userInfoElement.setUserInfo(data);
      popupWithFormEdit.close();
    });
  },
});
popupWithFormEdit.setEventListeners();

//Действия при Submit формы Add
const popupWithFormAdd = new PopupWithForm(".popup_place_add", {
  callbackSubmitForm: (inputValues) => {
    popupWithFormAdd.changeValueButtonAtBoot(config, "Создание...");
    //Добавить новую карточку на сервер
    api
      .createnewCard({
        name: inputValues.name,
        link: inputValues.link,
      })
      .then((data) => {
        popupWithFormAdd.changeValueButtonAtBoot(config, "Карточка создалась!");
        const newcard = createCard({
          name: data.name,
          link: data.link,
          _id: data._id,
          likes: data.likes,
          isLiked: false,
          owner: data.owner, //id создателя карточки
        });
        const cardSection = getCardSection(data);
        cardSection.addItem(newcard);
        popupWithFormAdd.close();
      });
  },
});
popupWithFormAdd.setEventListeners();

//Действия при Submit формы Update-Avatar
const popupWithFormUpdateAvatar = new PopupWithForm(
  ".popup_place_update-avatar",
  {
    callbackSubmitForm: (inputValues) => {
      popupWithFormUpdateAvatar.changeValueButtonAtBoot(
        config,
        "Сохранение..."
      );
      //Добавить новую карточку на сервер
      api
        .updateAvatar({
          avatar: inputValues.link,
        })
        .then((data) => {
          popupWithFormUpdateAvatar.changeValueButtonAtBoot(
            config,
            "Данные сохранены!"
          );
          avatar.setAvatar(data.avatar);
          popupWithFormUpdateAvatar.close();
        });
    },
  }
);
popupWithFormUpdateAvatar.setEventListeners();

//Класс Avatar
const avatar = new Avatar();

//Вставить данные из попапа на страницу и наоборот при открытии/закрытии попапа
const userInfoElement = new UserInfo({
  profileTitleSelector: ".profile__title",
  profileSubTitleSelector: ".profile__subtitle",
});

//ЗАПРОСЫ
const api = new Api({
  url: "https://mesto.nomoreparties.co/v1/cohort-76",
  headers: {
    authorization: "aeacf97e-5e0d-4830-af6d-c3921dcf63db",
    "Content-Type": "application/json",
  },
});

//Запросы
api
  .getProfile() //Получить мои данные
  .then((user) => {
    userInfoElement.setUserInfo(user);
    avatar.setAvatar(user.avatar);
  })
  .then(() => {
    api
      .getAllCards() //Получить все карточки
      .then((data) => {
        renderCardSection(data.reverse());
      });
  });
