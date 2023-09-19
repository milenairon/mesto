export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._items = items; //что добавить(массив из 6-ти карточек)
    this._renderer = renderer; //функция
    this._container = document.querySelector(containerSelector); //куда добавить
  }

  //вставаить один элемент в контекнер
  addItem(element) {
    this._container.prepend(element);
  }

  //отрисовка новой карточки
  renderCard(name, link) {
    this._renderer(name, link);
  }

  //отрисовка всех элементов
  renderCards() {
    this._items.forEach((item) => {
      this._renderer(item);
    });
  }
}
