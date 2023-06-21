//Массив из имен и ссылок городов
const initialCards = [
  {
    name: 'Красноярск',
    link: './images/element-Krasnoyarsk.jpg'
  },
  {
    name: 'Новосибирск',
    link: './images/element-Novosibirsk.png'
  },
  {
    name: 'Москва',
    link: './images/element-Moskva.png'
  },
  {
    name: 'Санкт-Петербург',
    link: './images/element-Sankt-Peterburg.png'
  },
  {
    name: 'Тюмень',
    link: './images/element-Tyumen.png'
  },
  {
    name: 'Казань',
    link: './images/element-Kazan.png'
  }
];
//Находим элементы секции profile
let profile = document.querySelector(".profile");
let profileButtonInfo = profile.querySelector(".profile__button-info");
let profileTitle = profile.querySelector(".profile__title");
let profileSubTitle = profile.querySelector(".profile__subtitle");
//Находим элементы секции element
const elementElement = document.querySelector('.element');
const templateElement = document.querySelector('#element-template').content.querySelector('.element__item');


//Находим элементы секции popup
let popup = document.querySelector(".popup");
let formElement = popup.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__job");
let popupCloseIcon = formElement.querySelector(".popup__button-close");
let popupButtonSave = formElement.querySelector(".popup__button-save");

//POP UP
//ОТКРЫТИЕ и ЗАКРЫТИЕ
function popupOpen(modal) {
  modal.classList.add("popup_opened");
}
function popupClose(modal) {
  modal.classList.remove("popup_opened");
}
//ЗАПОЛНЕНИЕ ФОРМЫ
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



















//6 КАРТОЧЕК ГОРОДОВ
function create(evt) {
  //Клонируем содержимое тега template 
const cloneElementElement = templateElement.cloneNode(true);
// Вставим текст
const elementTextElement = cloneElementElement.querySelector('.element__title').textContent = evt.name;
// Вставим картинку и ее alt
const elementimageElement = cloneElementElement.querySelector('.element__image');
elementimageElement.src = evt.link;
elementimageElement.alt = evt.name;

return cloneElementElement;
}

//добавить в ul(elementElement) все, что в функции create
function render (data){
elementElement.append(create(data));
}

//Вызываем функцию render для всех элементов массива initialCards перебором(forEach)
initialCards.forEach(item => {
  render (item);
});





























//ВЫЗОВЫ ФУНКЦИЙ
popupCloseIcon.addEventListener("click", function () {
  popupClose(popup);
});
profileButtonInfo.addEventListener("click", function () {
  popupOpen(popup);
  setInputText();
});
popupButtonSave.addEventListener("click", function () {
  popupClose(popup);
  setTextInput();
});
// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);




















