export default class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }
  _getRequest(url, options) {
    return fetch(url, options).then((res) => {
      if (res.ok) {
        return res.json();
      }
      //если запрос ушел, но пришел ответ с ошибкой
      return new Error("Что-то пошло не так");
    });
  }

  //Получить данные профиля
  getProfile() {
    return this._getRequest(`${this._url}/users/me`, {
      method: "GET",
      headers: this._headers,
    });
  }

  //Редактирование профиля
  editProfile(name, job) {
    return this._getRequest(`${this._url}/users/me`, {
      //Метод PATCH обычно используют для обновления уже существующей инфы
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: name,
        about: job,
      }),
    });
  }
  //Получить все карточки
  getAllCards() {
    return this._getRequest(`${this._url}/cards`, {
      method: "GET",
      headers: this._headers,
    });
  }

  //Создать новую карточку
  createnewCard(data) {
    return this._getRequest(`${this._url}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(data),
    });
  }

  //Удалить карточку
  deleteCard(id) {
    return this._getRequest(`${this._url}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    });
  }

  //добавить/удалить лайк
  changeLike(isLiked, id) {
    const method = !isLiked ? "PUT" : "DELETE";
    return this._getRequest(`${this._url}/cards/${id}/likes`, {
      method: method,
      headers: this._headers,
    });
  }

  //Обновить аватар
  updateAvatar(avatar) {
    return this._getRequest(`${this._url}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify(avatar),
    });
  }
}
