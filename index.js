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
const templateElement = document.querySelector("#element-template").content;
const elementTitle = document.querySelector(".element__title");
const elementImage = document.querySelector(".element__image");
//Находим элементы секции popup
const popup = pages.querySelector(".popup");
const popupForm = pages.querySelector(".popup-form");
const formElement = popup.querySelector(".popup__container");
const containerFormElement = popup.querySelector(
  ".popup__container_place_form"
);
const popupFormEdit = containerFormElement.querySelector(
  ".popup__form_type_edit"
);
const nameInput = popupFormEdit.querySelector(".popup__name");
const jobInput = popupFormEdit.querySelector(".popup__job");
const popupButtonSave = containerFormElement.querySelector(
  ".popup__button-save"
);
const popupAdd = pages.querySelector(".popup-add");
const containerAddElement = popupAdd.querySelector(
  ".popup__container_place_add"
);
const popupFormAdd = containerAddElement.querySelector(".popup__form_type_add");
const popupNameCard = popupFormAdd.querySelector(".popup__name-card");
const popupLinkCard = popupFormAdd.querySelector(".popup__link-card");

function popupOpen(modal) {
  modal.classList.add("popup_opened");
}

function popupClose(evt) {
  evt.classList.remove("popup_opened");
}

function popupLike(evt) {
  evt.currentTarget.classList.toggle("element__image-like_active");
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
  popupOpen(popupForm);
  setInputText();
});

profileButtonAdd.addEventListener("click", function () {
  popupOpen(popupAdd);
});

//ЗАКРЫТИЕ
function closeOverlay(evt) {
  if (
    evt.currentTarget === evt.target || //закрытие при нажатии в пустоту
    evt.target.classList.contains("popup__close-icon") //закрытие при нажатии на крестик
  ) {
    //если 'элемент на котором висит(сам попапа, смотри ниже вызов)' = 'элемент, на который нажали(сам попап)' или 'параметр содержит класс popup__button-close'
    popupClose(evt.currentTarget);
  }
}

popupForm.addEventListener("click", closeOverlay);
popupAdd.addEventListener("click", closeOverlay);

popupButtonSave.addEventListener("click", function () {
  popupClose(popup);
  setTextInput();
});

//6 КАРТОЧЕК ГОРОДОВ

function create({ name, link }) {
  //Клонируем содержимое тега template
  const cloneElementElement = templateElement.cloneNode(true);
  const elementTextElement =
    cloneElementElement.querySelector(".element__title");
  const elementimageElement =
    cloneElementElement.querySelector(".element__image");
  // Вставим текст, картинку и alt
  elementTextElement.textContent = name;
  elementimageElement.src = link;
  elementimageElement.alt = name;
  // поставить like
  const elementItemElement =
    cloneElementElement.querySelector(".element__item");
  const elementLike = elementItemElement.querySelector(".element__image-like");
  elementLike.addEventListener("click", popupLike);
  //вернем нужный элемент
  return cloneElementElement;
}

//добавить в ul(elementElement) все, что в функции create
function render(data, container, position = "append") {
  switch (position) {
    case "append":
      container.append(create(data));
      break;
    case "prepend":
      container.prepend(create(data));
      break;
    default:
      break;
  }
}

//Вызываем функцию render для всех элементов массива initialCards перебором(forEach)
initialCards.forEach((item) => {
  render(item, elementElement, "append");
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
  render({ name: nameCard, link: linkCard }, elementElement, "prepend");
  popupClose(popupAdd);
  evt.target.reset();
});
