"use strict";

// Оператор ?

const checkAge = (age) => {
  return age > 18 ? true : window.confirm("Родители разрешили?");
};

checkAge(5);
// checkAge(25);
