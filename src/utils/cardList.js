//ссылки для вебпака
// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
const elementKrasnoyarsk = new URL('../images/element-Krasnoyarsk.jpg', import.meta.url);
const elementNovosibirsk = new URL('../images/element-Novosibirsk.png', import.meta.url);
const elementMoskva = new URL('../images/element-Moskva.png', import.meta.url)
const elementSanktPeterburg = new URL('../images/element-Sankt-Peterburg.png', import.meta.url);
const elementTyumen = new URL('../images/element-Tyumen.png', import.meta.url);
const elementKazan = new URL('../images/element-Kazan.png', import.meta.url)

//Массив городов
const initialCards = [
    {
      name: "Красноярск",
      link: elementKrasnoyarsk,
    },
    {
      name: "Новосибирск",
      link: elementNovosibirsk,
    },
    {
      name: "Москва",
      link: elementMoskva,// теперь картинки можно импортировать,
// вебпак добавит в переменные правильные пути
    },
    {
      name: "Санкт-Петербург",
      link: elementSanktPeterburg,
    },
    {
      name: "Тюмень",
      link: elementTyumen,
    },
    {
      name: "Казань",
      link: elementKazan,
    },
  ];
export default initialCards;