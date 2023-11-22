"use strict";

// Оператор ||

const checkAge = (age) => {
  return age > 18 || confirm("Родители разрешили?");
};

checkAge(10);
// checkAge(20);
