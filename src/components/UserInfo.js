export default class UserInfo {
  constructor({ profileTitleSelector, profileSubTitleSelector }) {
    this._profileTitle = document.querySelector(profileTitleSelector);
    this._profileSubTitle = document.querySelector(profileSubTitleSelector);
  }

  //вставляет данные со страницы в попапEdit(открытие попапа)
  getUserInfo() {
    return {
      forename: this._profileTitle.textContent.trim(), //.trim() - уберет лишние пробелы
      job: this._profileSubTitle.textContent.trim(),
      id: this._id,
    };
  }

  //вставляет данные из попапаEdit на страницу(закрытие попапа)
  setUserInfo({ name, about, _id }) {
    this._profileTitle.textContent = name;
    this._profileSubTitle.textContent = about;
    this._id = _id;
  }
}
