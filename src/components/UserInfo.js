export default class UserInfo {
  constructor({ profileTitleSelector, profileSubTitleSelector }) {
    this._profileTitle = profileTitleSelector;
    this._profileSubTitle = profileSubTitleSelector;
    this._popupEdit = document.querySelector(".popup_place_edit");
    this._nameInput = this._popupEdit.querySelector(".popup__name");
    this._jobInput = this._popupEdit.querySelector(".popup__job");
  }

  //вставляет данные со страницы в попапEdit
  getUserInfo() {
    //возвращает объект с данными пользователя(при открытии попапа)
    this._nameInput.value = this._profileTitle.textContent.trim(); //.trim() - уберет лишние пробелы
    this._jobInput.value = this._profileSubTitle.textContent.trim();
  }
  //вставляет данные из попапаEdit на страницу
  setUserInfo() {
    this._profileTitle.textContent = this._nameInput.value;
    this._profileSubTitle.textContent = this._jobInput.value;
  }
}
