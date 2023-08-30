class Card {
  constructor(
    { name, link },
    cardTemplate,
    popupTitleImage,
    popupImageItem,
    popupImage,
    openPopup
  ) {
    this._name = name;
    this._link = link;
    this._popupTitleImage = popupTitleImage;
    this._popupImageItem = popupImageItem;
    this._popupImage = popupImage;
    this._cardTemplate = cardTemplate;
    this._openPopup = openPopup;
  }

  _getTemplate() {
    //Клонируем содержимое тега template
    return document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element__card")
      .cloneNode(true);
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
    this._popupTitleImage.textContent = this._name;
    this._popupImageItem.src = this._link;
    this._popupImageItem.alt = this._name;
  }

  _openPopupImage() {
    this._openPopup(this._popupImage);
    this._setPopupImageData();
  }

  _setListener() {
    //ставить лайк
    const elementLike = this._newCard.querySelector(".element__image-like");
    elementLike.addEventListener("click", this._toggleLike.bind(this));
    //удалить карточку
    const elementDelete = this._newCard.querySelector(".element__delete");
    elementDelete.addEventListener("click", this._deleteCard.bind(this));
    //открыть модальное окно с картинкой
    const elementimageCard = this._newCard.querySelector(".element__image");
    elementimageCard.addEventListener("click", this._openPopupImage.bind(this));
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
