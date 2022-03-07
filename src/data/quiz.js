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
    subTask: ["18", "20", "24", "32"],
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
    name: "color1",
    answers: [{ value: "", label: "" }],
  },
  {
    id: 5,
    task: "Отдохните пару секунд, ещё раз выберите цвет, который сейчас наиболее вам приятен:",
    name: "color2",
    answers: [{ value: "", label: "" }],
  },
  {
    id: 6,
    task: "Какой из городов лишний?",
    name: "town",
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
    task: "Выберите правильную фигуру из четырех пронумерованных",
    name: "figure",
    img: "",
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
    task: "Какое определени, по-Вашему, больше подходит к этому геометрическому изображению:",
    name: "pyramid",
    img: "",
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
    img: "",
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
