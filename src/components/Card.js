class Card {
  constructor(
    { name, link, _id, likes, isLiked, owner },
    cardTemplate,
    handleCardClick,
    handleCardDelete,
    handleLikeClick,
    myId
  ) {
    this._name = name;
    this._link = link;
    this._id = _id;
    this._likes = likes;
    this._likesLength = likes.length;
    this._isLiked = isLiked;
    this._ownerId = owner._id;
    this._cardTemplate = cardTemplate;
    this._handleCardClick = handleCardClick;
    this._handleCardDelete = handleCardDelete;
    this._handleLikeClick = handleLikeClick;
    this._myId = myId;
  }

  _getTemplate() {
    //Клонируем содержимое тега template
    return document
      .querySelector(this._cardTemplate)
      .content.querySelector(".element__card")
      .cloneNode(true);
  }

  _setData() {
    //картинка в карточке (elementImageCard)
    this._elementImageCard = this._newCard.querySelector(".element__image");
    // Вставим текст, картинку и alt
    const elementTextCard = this._newCard.querySelector(".element__title");
    elementTextCard.textContent = this._name;
    this._elementImageCard.src = this._link;
    this._elementImageCard.alt = this._name;
    //значок урны (delete)
    this._urn = this._newCard.querySelector(".element__delete");
    //like-кнопка
    this._likeButton = this._newCard.querySelector(".element__image-like");
  }

  //Удалить карточку
  deleteCard() {
    this._newCard.remove();
    this._newCard = null; //удаляет из памяти
  }

  //проверяет наличие css-класса(active) у кнопки
  isLiked() {
    return this._likeButton.classList.contains("element__image-like_active");
  }
  //ставит/убирает лайк
  toggleLike(likes) {
    this._likeButton.classList.toggle("element__image-like_active");
    this._counter = this._newCard.querySelector(".element__like-lot");
    this._counter.textContent = likes.length;
  }

  //слушатели
  _setListener() {
    //открыть попап и удалить карточку
    this._urn.addEventListener("click", () => {
      this._handleCardDelete(this._id);
    });

    //открыть попап с картинкой (Popup Image)
    this._elementImageCard.addEventListener("click", () => {
      this._handleCardClick({ name: this._name, link: this._link });
    });
    //like
    this._likeButton.addEventListener("click", () => {
      this._handleLikeClick(this.isLiked(), this._id);
    });
  }

  //загружать количество лайков при прорисовки карточки
  _checkLikeStatus() {
    //закрашивать сердечко, если в списке лайкнутых есть мой id
    this._likes.forEach((item) => {
      if (item._id === this._myId) {
        this._likeButton.classList.add("element__image-like_active");
      }
    });
    this._counter = this._newCard.querySelector(".element__like-lot");
    this._counter.textContent = this._likesLength;
  }

  //this._elementImageCard
  _returnelementImageCard() {
    this._elementImageCard = this._newCard.querySelector(".element__image");
    return this._elementImageCard;
  }

  //удалить значок урны у не созданных мною картинок
  _deleteLogoUrn() {
    //if id user card !== id меня
    if (this._ownerId !== this._myId) {
      this._urn.style.display = "none";
    }
  }

  getView() {
    //обозначение основной переменной и вызов методов
    this._newCard = this._getTemplate();
    this._setData();
    this._deleteLogoUrn();
    this._setListener();
    this._checkLikeStatus();
    return this._newCard;
  }
}
export default Card;
