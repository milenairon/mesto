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
const profile = document.querySelector(".profile");
const profileButtonInfo = profile.querySelector(".profile__button-info");
const profileButtonAdd = profile.querySelector(".profile__button-add");
const profileTitle = profile.querySelector(".profile__title");
const profileSubTitle = profile.querySelector(".profile__subtitle");
//Находим элементы секции element
const elementElement = document.querySelector('.element');
const templateElement = document.querySelector('#element-template').content.querySelector('.element__item');


//Находим элементы секции popup
let popup = document.querySelector(".popup");
const popupForm = document.querySelector(".popup-form");
const popupAdd = document.querySelector(".popup-add");
let formElement = popup.querySelector(".popup__container");
let nameInput = formElement.querySelector(".popup__name");
let jobInput = formElement.querySelector(".popup__job");
const popupCloseIcon = document.querySelector(".popup__button-close");

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

//




//ВЫЗОВЫ ФУНКЦИЙ
popupCloseIcon.addEventListener("click", function () {
  popupClose(popup);
});
profileButtonInfo.addEventListener("click", function () {
  popupOpen(popupForm);
  setInputText();
});
profileButtonAdd.addEventListener("click", function () {
  popupOpen(popupAdd);
});
popupButtonSave.addEventListener("click", function () {
  popupClose(popup);
  setTextInput();
});

// Прикрепляем обработчик к форме: он будет следить за событием “submit” - «отправка»
formElement.addEventListener("submit", handleFormSubmit);

















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
elementElement.prepend(create(data));
}

//Вызываем функцию render для всех элементов массива initialCards перебором(forEach)
initialCards.forEach(item => {
  render (item);
});


















































