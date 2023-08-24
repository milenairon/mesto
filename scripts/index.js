import Card from "./card.js";
//Массив городов
const initialCards = [
  {
    name: "Красноярск",
    link: "./images/element-Krasnoyarsk.jpg",
  },
  {
    name: "Новосибирск",
    link: "./images/element-Novosibirsk.png",
  },
  {
    name: "Москва",
    link: "./images/element-Moskva.png",
  },
  {
    name: "Санкт-Петербург",
    link: "./images/element-Sankt-Peterburg.png",
  },
  {
    name: "Тюмень",
    link: "./images/element-Tyumen.png",
  },
  {
    name: "Казань",
    link: "./images/element-Kazan.png",
  },
];
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
profileButtonInfo.addEventListener("click", function () {
  openPopup(popupEdit);
  setInputText();
});

profileButtonAdd.addEventListener("click", function () {
  openPopup(popupAdd);
});

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

//добавить в ul(elementElement) все, что в функции createCard
function renderCard(data, container, position = "append") {
  const card = new Card(data);
  switch (position) {
    case "append":
      container.append(card.getView());
      break;
    case "prepend":
      container.prepend(card.getView());
      break;
    default:
      break;
  }
}

//Вызываем функцию renderCard для всех элементов массива initialCards перебором(forEach)
initialCards.forEach((item) => {
  renderCard(item, elementElement, "append");
});

//при отправке данных в форме Edit
popupFormEdit.addEventListener("submit", function (evt) {
  evt.preventDefault(); //убираем отправку запроса и перезагрузку страницы для попапа form
  //при сохранении
  closePopup(popup);
  setTextInput();
});

//СОЗДАНИЕ КАРТОЧЕК ГОРОДОВ
popupFormAdd.addEventListener("submit", function (evt) {
  evt.preventDefault(); //убираем отправку запроса и перезагрузку страницы для попапа add
  const nameCard = popupNameCard.value;
  const linkCard = popupLinkCard.value;
  const buttonElement = popupFormAdd.querySelector(".popup__button");
  renderCard({ name: nameCard, link: linkCard }, elementElement, "prepend");
  closePopup(popupAdd);
  buttonElement.classList.add("popup__button_disabled");
  buttonElement.setAttribute("disabled", "true");
  evt.target.reset();
});

export { popupTitleImage, popupImageItem, popupImage };
