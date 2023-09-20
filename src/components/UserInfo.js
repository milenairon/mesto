export default class UserInfo {
  constructor({ profileTitleSelector, profileSubTitleSelector }) {
    this._profile = document.querySelector(".profile");
    this._profileTitle = this._profile.querySelector(profileTitleSelector);
    this._profileSubTitle = this._profile.querySelector(
      profileSubTitleSelector
    );
  }
  

  //вставляет данные со страницы в попапEdit(открытие попапа)
  getUserInfo(values) {
    values[0] = this._profileTitle.textContent.trim();//.trim() - уберет лишние пробелы
    values[1] = this._profileSubTitle.textContent.trim();
   
  }
  
  //вставляет данные из попапаEdit на страницу(закрытие попапа)
  setUserInfo(values) {
    this._profileTitle.textContent = values[0];
    this._profileSubTitle.textContent = values[1];
  }
}
