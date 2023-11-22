"use strict";

// Функция возведения в степень

let x;
let n;

const pow = (x, n) => {
  while (true) {
    x = +prompt("Введите значение X:", "");

    n = +prompt("Введите значение N:", "");

    if (n > 0 && n % 1 == 0) {
      return x ** n;
    } else {
      alert("Вы ввели нецелое число. Введите целое число");
      continue;
    }
  }
};

console.log(pow());
