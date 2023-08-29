import { popupTitleImage, popupImageItem, popupImage } from "./index.js";
class Card {
  constructor({ name, link }, cardTemplate) {
    this._name = name;
    this._link = link;
    this._popupTitleImage = popupTitleImage;
    this._popupImageItem = popupImageItem;
    this._popupImage = popupImage;
    this._cardTemplate = cardTemplate;
  }
  
  _getTemplate() {
    //Клонируем содержимое тега template
    const cardTemplate = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element__card")
      .cloneNode(true);

    return cardTemplate;
  }

  _setData() {
    // Вставим текст, картинку и alt
    const elementTextCard = this._newCard.querySelector(".element__title");
    const elementimageCard = this._newCard.querySelector(".element__image");
    elementTextCard.textContent = this._name;
    elementimageCard.src = this._link;
    elementimageCard.alt = this._name;
  }

  _toggleLike(evt) {
    evt.currentTarget.classList.toggle("element__image-like_active");
  }
  _deleteCard() {
    this._newCard.remove();
    this._newCard = null; //удаляет из памяти
  }

  _setPopupImageData() {
    //ИМПОРТИРОВАТЬ СЮДА ПЕРЕМЕННЫЕ?
    this._popupTitleImage.textContent = this._name;
    this._popupImageItem.src = this._link;
    this._popupImageItem.alt = this._name;
  }
  _openPopup() {
    this._popupImage.classList.add("popup_opened");
  }

  _setListener() {
    //ставить лайк
    const elementLike = this._newCard.querySelector(".element__image-like");
    elementLike.addEventListener("click", (evt) => {
      this._toggleLike(evt);
    });
    //удалить карточку
    const elementDelete = this._newCard.querySelector(".element__delete");
    elementDelete.addEventListener("click", () => {
      this._deleteCard();
    });
    const elementimageCard = this._newCard.querySelector(".element__image");
    elementimageCard.addEventListener("click", () => {
      this._openPopup();
      this._setPopupImageData();
    });
  }

  getView() {
    //обозначение основной переменной и вызов методов
    this._newCard = this._getTemplate();
    this._setData();
    this._setListener();
    return this._newCard;
  }
}
export default Card;
