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

  //отрисовка всех элементов
  renderItems() {
    this._items.forEach((item) => {
      const element = this._renderer(item);
      this.addItem(element);
    });
  }
}
