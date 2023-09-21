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
    };
  }

  //вставляет данные из попапаEdit на страницу(закрытие попапа)
  setUserInfo({ forename, job }) {
    this._profileTitle.textContent = forename;
    this._profileSubTitle.textContent = job;
  }
}
