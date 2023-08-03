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
const templateElement = document
  .querySelector("#element-template")
  .content.querySelector(".element__item");
const elementTitle = document.querySelector(".element__title");
const elementImage = document.querySelector(".element__image");
//Находим элементы секции popup
const popup = pages.querySelector(".popup");
const popupEdit = pages.querySelector(".popup_place_edit");
//popup Edit
const popupFormEdit = popupEdit.querySelector(".popup__form_type_edit");
const nameInput = popupFormEdit.querySelector(".popup__name");
const jobInput = popupFormEdit.querySelector(".popup__job");
const popupButtonSave = popup.querySelector(".popup__save-button");

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
}

function closePopup(modal) {
  modal.classList.remove("popup_opened");
}

function toggleLike(evt) {
  evt.currentTarget.classList.toggle("element__image-like_active");
}

function setPopupImageData({ name, link }) {
  popupTitleImage.textContent = name;
  popupImageItem.src = link;
  popupImageItem.alt = name;
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
//при нажатии на Escape
document.addEventListener("keydown", function (evt) {
  if (evt.key === "Escape") {
    closePopup(popupEdit);
    closePopup(popupAdd);
    closePopup(popupImage);
  }
});

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

//при сохранении
popupButtonSave.addEventListener("click", function () {
  closePopup(popup);
  setTextInput();
});

//ДОБАВЛЕНИЕ 6 КАРТОЧЕК ГОРОДОВ
function createCard({ name, link }) {
  //Клонируем содержимое тега template
  const itemElement = templateElement.cloneNode(true);
  const elementTextElement = itemElement.querySelector(".element__title");
  const elementimageElement = itemElement.querySelector(".element__image");
  // Вставим текст, картинку и alt
  elementTextElement.textContent = name;
  elementimageElement.src = link;
  elementimageElement.alt = name;
  // поставить like
  const elementLike = itemElement.querySelector(".element__image-like");
  elementLike.addEventListener("click", toggleLike);
  //удалить элемент
  const elementDelete = itemElement.querySelector(".element__delete");
  elementDelete.addEventListener("click", function () {
    itemElement.remove();
  });
  //popup Image
  elementimageElement.addEventListener("click", () => {
    openPopup(popupImage);
    setPopupImageData({ name, link });
  });
  //вернуть нужный элемент
  return itemElement;
}

//добавить в ul(elementElement) все, что в функции createCard
function renderCard(data, container, position = "append") {
  switch (position) {
    case "append":
      container.append(createCard(data));
      break;
    case "prepend":
      container.prepend(createCard(data));
      break;
    default:
      break;
  }
}

//Вызываем функцию renderCard для всех элементов массива initialCards перебором(forEach)
initialCards.forEach((item) => {
  renderCard(item, elementElement, "append");
});

//убираем отправку запроса и перезагрузку страницы для попапа form
popupFormEdit.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

//СОЗДАНИЕ КАРТОЧЕК ГОРОДОВ
popupFormAdd.addEventListener("submit", function (evt) {
  evt.preventDefault(); //убираем отправку запроса и перезагрузку страницы для попапа add
  const nameCard = popupNameCard.value;
  const linkCard = popupLinkCard.value;
  renderCard({ name: nameCard, link: linkCard }, elementElement, "prepend");
  closePopup(popupAdd);
  evt.target.reset();
});

