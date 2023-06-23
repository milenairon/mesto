//Массив из имен и ссылок городов
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

//Находим элементы секции popup
let pages = document.querySelector(".pages");
let popup = pages.querySelector(".popup");
const popupForm = pages.querySelector(".popup-form");
const popupAdd = pages.querySelector(".popup-add");
let formElement = popup.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__job");
const popupButtonSave = formElement.querySelector(".popup__button-save");
const popupButtonCreate = formElement.querySelector(".popup__button-create");


function popupOpen(modal) {
  modal.classList.add("popup_opened");
}

function popupClose(evt) {
  evt.classList.remove("popup_opened");
}

//ЗАПОЛНЕНИЕ ФОРМЫ name/job
//Значения на странице дублируем в форму
function setInputText(evt) {
  nameInput.value = profileTitle.textContent.trim(); //.trim() - уберет лишние пробелы
  jobInput.value = profileSubTitle.textContent.trim();
}
// Дублируем значения из формы в значения на странице
function setTextInput(evt) {
  profileTitle.textContent = nameInput.value;
  profileSubTitle.textContent = jobInput.value;
}
//не дает отправить форму
function handleFormSubmit(evt) {
  evt.preventDefault();
}

//Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);

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
    evt.currentTarget === evt.target ||
    evt.target.classList.contains("popup__close-icon")
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
/*popupButtonCreate.addEventListener("click", function () {
  popupClose(popup); НЕ РАБОТАЕТ НЕПОНЯТНО ПОЧЕМУ
});*/

//6 КАРТОЧЕК ГОРОДОВ
function create(evt) {
  //Клонируем содержимое тега template
  const cloneElementElement = templateElement.cloneNode(true);
  // Вставим текст
  const elementTextElement = cloneElementElement.querySelector(".element__title");
  elementTextElement.textContent = evt.name;
  // Вставим картинку и ее alt
  const elementimageElement =
    cloneElementElement.querySelector(".element__image");
  elementimageElement.src = evt.link;
  elementimageElement.alt = evt.name;

  return cloneElementElement;
}

//добавить в ul(elementElement) все, что в функции create
function render(data) {
  elementElement.prepend(create(data));
}

//Вызываем функцию render для всех элементов массива initialCards перебором(forEach)
initialCards.forEach((item) => {
  render(item);
});
