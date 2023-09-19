class Card {
  constructor({ name, link }, cardTemplate, handleCardClick) {
    this._name = name;
    this._link = link;
    this._cardTemplate = cardTemplate;
    this.handleCardClick = handleCardClick;
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
    elementTextCard.textContent = this._name;
    this._elementimageCard.src = this._link;
    this._elementimageCard.alt = this._name;
  }

  _toggleLike(evt) {
    evt.currentTarget.classList.toggle("element__image-like_active");
  }
  _deleteCard() {
    this._newCard.remove();
    this._newCard = null; //удаляет из памяти
  }

  _setListener() {
    //ставить лайк
    const elementLike = this._newCard.querySelector(".element__image-like");
    elementLike.addEventListener("click", this._toggleLike.bind(this));
    //удалить карточку
    const elementDelete = this._newCard.querySelector(".element__delete");
    elementDelete.addEventListener("click", this._deleteCard.bind(this));
    this._elementimageCard.addEventListener("click", () => {
      this.handleCardClick({ name: this._name, link: this._link });
    });
  }
  _returnElementImageCard() {
    this._elementimageCard = this._newCard.querySelector(".element__image");
    return this._elementimageCard;
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
