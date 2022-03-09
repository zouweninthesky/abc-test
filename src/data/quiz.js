const quiz = [
  {
    id: 0,
    task: "Ваш пол:",
    name: "gender",
    answers: [
      { value: "male", label: "Мужчина" },
      { value: "female", label: "Женщина" },
    ],
  },

  {
    id: 1,
    task: "Укажите ваш возраст:",
    name: "age",
    answers: [
      { value: "<18", label: "До 18" },
      { value: "18-28", label: "От 18 до 28" },
      { value: "29-35", label: "От 29 до 35" },
      { value: "36>", label: "От 36" },
    ],
  },
  {
    id: 2,
    task: "Выберите лишнее",
    name: "exclude",
    answers: [
      { value: "house", label: "Дом" },
      { value: "hovel", label: "Шалаш" },
      { value: "bungalow", label: "Бунгало" },
      { value: "bench", label: "Скамейка" },
      { value: "hut", label: "Хижина" },
    ],
  },
  {
    id: 3,
    task: "Продолжите числовой ряд:",
    modifier: "span",
    subTask: ["18", "20", "24", "32"],
    small: true,
    fontSize: "1.1875",
    name: "numbers",
    answers: [
      { value: "62", label: "62" },
      { value: "48", label: "48" },
      { value: "74", label: "74" },
      { value: "57", label: "57" },
      { value: "60", label: "60" },
      { value: "77", label: "77" },
    ],
  },
  {
    id: 4,
    task: "Выберите цвет, который сейчас наиболее вам приятен:",
    modifier: "pick-color",
    fontSize: "1.1875",
    name: "color1",
    answers: [
      { value: "#A8A8A8" },
      { value: "#0000A9" },
      { value: "#00A701" },
      { value: "#F60100" },
      { value: "#FDFF19" },
      { value: "#A95403" },
      { value: "#000000" },
      { value: "#850068" },
      { value: "#46B2AC" },
    ],
  },
  {
    id: 5,
    task: "Отдохните пару секунд, ещё раз выберите цвет, который сейчас наиболее вам приятен:",
    modifier: "pick-color",
    fontSize: "1.1875",
    name: "color2",
    answers: [
      { value: "#A8A8A8" },
      { value: "#46B2AC" },
      { value: "#A95403" },
      { value: "#00A701" },
      { value: "#000000" },
      { value: "#F60100" },
      { value: "#850068" },
      { value: "#FDFF19" },
      { value: "#0000A9" },
    ],
  },
  {
    id: 6,
    task: "Какой из городов лишний?",
    name: "town",
    small: true,
    answers: [
      { value: "Washington", label: "Вашингтон" },
      { value: "London", label: "Лондон" },
      { value: "Paris", label: "Париж" },
      { value: "New-York", label: "Нью-Йорк" },
      { value: "Moscow", label: "Москва" },
      { value: "Ottawa", label: "Оттава" },
    ],
  },
  {
    id: 7,
    task: "Выберите\u00A0правильную\u00A0фигуру из\u00A0четырех\u00A0пронумерованных.",
    fontSize: "1.125",
    name: "figure",
    img: true,
    imgSizes: { width: 11.5625, height: 14.6875 },
    modifier: "row",
    answers: [
      { value: "1", label: "1" },
      { value: "2", label: "2" },
      { value: "3", label: "3" },
      { value: "4", label: "4" },
    ],
  },
  {
    id: 8,
    task: "Вам привычнее и важнее",
    fontSize: "1.1875",
    name: "preference",
    answers: [
      {
        value: "pleasure",
        label: "Наслаждаться каждой минутой проведенного времени",
      },
      { value: "future", label: "Быть устремлемнным мыслями в будущее" },
      {
        value: "experience",
        label: "Учитывать в ежедневной практике прошлый опыт",
      },
    ],
  },
  {
    id: 9,
    task: "Какое определениe, по-Вашему, больше подходит к этому геометрическому изображению:",
    fontSize: "1",
    name: "pyramid",
    img: true,
    imgSizes: { width: 10.8125, height: 7.1875 },
    answers: [
      { value: "spiky", label: "Оно остроконечное" },
      { value: "steady", label: "Оно устойчиво" },
      { value: "stable", label: "Оно находится в состоянии равновесия" },
    ],
  },
  {
    id: 10,
    task: "Вставьте подходящее число",
    name: "star",
    img: true,
    imgSizes: { width: 14.25, height: 12.9375 },
    modifier: "row",
    answers: [
      { value: "34", label: "34" },
      { value: "36", label: "36" },
      { value: "53", label: "53" },
      { value: "44", label: "44" },
      { value: "66", label: "66" },
      { value: "42", label: "42" },
    ],
  },
];

export default quiz;
