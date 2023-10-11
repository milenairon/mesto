export default class Section {
  constructor({ renderer }, containerSelector) {
    this._renderer = renderer; //функция
    this._container = document.querySelector(containerSelector); //куда добавить
  }

  //вставаить один элемент в контекнер
  addItem(element) {
    this._container.prepend(element);
  }

  //отрисовка всех элементов
  renderItems(dataCard) {
    dataCard.forEach((item) => {
      this._renderer(item);
    });
  }
}
