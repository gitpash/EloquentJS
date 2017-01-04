//метод это свойства, содержащие функции.

// var rabbit = {};
// rabbit.speak = function (line) {
//   console.log("кролик говорит '" + line + "'");
// };
// rabbit.speak("я живой!")

// function speak(line) {
//   console.log("А " + this.type + " кролик говорит '" + line + "'");
// }
// var whiteRabbit = {type: "белый", speak: speak};
// var fatRabbit = {type: "толстый", speak: speak};
//
// whiteRabbit.speak("Ушки мои и усики, я же наверняка опаздываю!");
// fatRabbit.speak("Мне бы сейчас морковочки!");
// // метод apply принимает первый аргумент, который дает значение для this
// speak.apply(fatRabbit, ["Отрыжка!"]);
// // метод call вызывает функцию, методом которой он является
// speak.call({type: "Старый"}, "О, Господи!")

// Прототипы
// var empty = {};
// console.log(empty.toString);
// console.log(empty.toString());

// var protoRabbit = {
//   speak: function (line) {
//     console.log("А " + this.type + " кролик говорит '" + line + "'");
//   }
// };
// var killerRabbit = Object.create(protoRabbit);
// killerRabbit.type = "убойный";
// killerRabbit.speak("Хрясь!")

//  Конструктор - способ создания объектов, наследуемых от некоего прототипа.
//
// function Rabbit(type) {
//   this.type = type;
// }
//
// var killerRabbit = new Rabbit("убойный");
// var blackRabbit = new Rabbit("черный");
// // console.log(blackRabbit.type);
// // конструкторы(как и все функции ) автоматически получают свойство prototype
// // которое содержит пустой обЪект, происходящий от Object.prototype
// // и каждый экземпляр, созданный этим конструктором будет иметь этот обЪект
// // в качестве прототипа
// //
// // Rabbit.prototype.speak = function (line) {
// //   console.log("А " + this.type + " кролик говорит'" +   line + "'");
// // };
// // blackRabbit.speak("Всем капец!")
//
// Rabbit.prototype.teeth = "мелкие";
// console.log(killerRabbit.teeth);
// killerRabbit.teeth = "длинные, острые и окровавленные"
// console.log(killerRabbit.teeth);
// console.log(blackRabbit.teeth);
// console.log(Rabbit.prototype.teeth);
//
// // Танецкроликов
//
// Rabbit.prototype.dance = function () {
//   console.log("A " + this.type + " rabit dancing jiga");
// };
// killerRabbit.dance();

// Геттеры и Сеттеры
//
// let pile = {
//   elements: ["shell", "pile", "worm"],
//   get height() {
//     return this.elements.length;
//   },
//   set height(value) {
//     console.log("will ignore attempt to set height", value);
//   }
// };
//
// console.log(pile.height);
//
// pile.height = 100;

// Задаём функцию, которая будет вызвана при чтении и записи свойств,
// в существующий объект

Object.defineProperty(TextCell.prototype, "heightProp", {
  get: function () {
    return this.text.length;
  }
});

let cell = new TextCell("yes\nwell");
console.log(cell.heightProp);
