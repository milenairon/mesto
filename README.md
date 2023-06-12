# Практическая работа №4 "Сдача проекта Mesto: базовая функциональность"

---

## Оглавление

1. Описание
2. Функциональность
3. Технологии, используемые в проекте
   - открытие и закрытие pop up по клику на кнопки;
   - редактиование и сохранение данных;
   - адаптивность сайта;
   - "резиновость" сайта;
   - флекc-элементы;
   - грид-элементы;
   - подключение шрифтов;
   - "отзывчивость" интерактивных элементов;
   - файловая структура проекта по правилам Nested БЭМ;
4. Ссылка на GitHub Pages

---

## 1. Описание

Данный проект - это одностраничный сайт, представляющий собой страничку путешественника по России.

---

## 2. Функциональность

Данный сайт обладает следующими критериями функциональности:

- дизайн;
- контент;
- структура;
- доступные функции;

Под функциями понимаются следующие возможности:

- просмотра тектового материала без перехода на сторонние сайты;
- возможность изменения имени и места работы в сплывающем pop up;
- возможность сохранения свои данных после ввода;
- возможность закрытия страницы без сохранения своих данных.

---

## 3. Технологии, используемые в проекте

В проекте были применены следующие технологии:

- открытие и закрытие pop up по клику на кнопки;
- редактиование и сохранение данных;
- адаптивность сайта;
- "резиновость" сайта;
- флекc-элементы;
- грид-элементы;
- подключение шрифтов;
- "отзывчивость" интерактивных элементов;
- файловая структура проекта по правилам Nested БЭМ;

### Открытие и закрытие pop up по клику на кнопки

Данная технология реализуется посредством кода из js документа. Ниже представлен пример открытия pop up. Технология представляет собой объявление и присвоение переменной, описание и вызов функции.

```
jS:

let popup = document.querySelector(".popup");

function popupOpen(modal) {
  modal.classList.add("popup_opened");
}

profileButtonInfo.addEventListener("click", function () {
  popupOpen(popup);
```

### Редактиование и сохранение данных

Данные технологии реализуется посредством кода из js документа. Ниже представлены примеры. Технология редактирования представляет собой объявление и присвоение переменной, описание и вызов функций: функции1 для дублирования значений на странице в форму и функции2 для дублирования значений из формы на страницу, в дальнейшем вызываем эти функции.

```
JS:
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
//Вызовы функций
profileButtonInfo.addEventListener("click", function () {
  setInputText();
});
popupButtonSave.addEventListener("click", function () {
  setTextInput();
});
```

### Адаптивность сайта

Для адаптивности сайта используются медиазапросы на разные брейкпоинты. Эта технология позволяет сделать сайт доступных для устройств с различными разрешеиями.

```
CSS:

@media screen and (max-width=320px) {
  header: {
    margin-top: 6px;
  }
}
```

### "Резиновость" сайта

Данная технология позволяет сделать сайт для комфортного просмотра между брекпоинтами с помощью изменения размеров элементов при изменении разрешения экрана.

```
CSS:
  header: {
    max-width: 320px;
    width: 100%;
  }

```

### Флекс-элементы

Данная технология помогает изменять размеры элементов при изменении масштаба и помогает сделать сайт более "резиновым"

### Грид-элементы

Данная технология помогает изменять размеры элементов при изменении масштаба, облегчает расположение элементов по сетке (секция elements) и помогает сделать сайт более "резиновым"

### Подключение шрифтов;

```
@font-face {
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url(./Inter/Inter-Regular.woff2) format("woff2"),
    url(./Inter/Inter-Regular.woff) format("woff");
}
```

### "Отзывчивость" интерактивных элементов

Данная технология реализуется за счет добавления интерактивным элементам (кнопкам) css-свойства

```
opacity: 0.6;
```

или

```
opacity: 0.6;
```

### Файловая структура проекта по правилам Nested БЭМ

```
папка "блок"
    папка "__элемент"
        папка "_ключ модификатора"
            папка "_значение модификатора"
                файл  "блок__элемент_значение модификатора"
    файл "блок__элемент.css"
файл "блок.css"
```

## 3. Ссылка на GitHub Pages

https://milenairon.github.io/mesto/