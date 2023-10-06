export default class Avatar {
  constructor() {
    this._imageAvatar = document.querySelector(".profile__image-avatar");
  }

  //вставляет картинку(ссылку) из попапа Update-Avatar в аватар на странице(закрытии попапа)
  setAvatar(link) {
    this._imageAvatar.src = link;
  }
}
