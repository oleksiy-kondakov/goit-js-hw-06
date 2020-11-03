function calculateTotalPrice(array, prop) {
  "use strict";
  // Write code under this line
  let sum = 0;
  let result = 0;
  for (let obj of array) {
    const keys = Object.values(obj);
    if (keys[0] === prop) {
      result = keys[1] * keys[2];
    } else {
      result = 0;
    }
    sum += result;
  }
  return sum;
}

// Объекты и ожидаемый результат
const products = [
  { name: "Радар", price: 1300, quantity: 4 },
  { name: "Радар", price: 1280, quantity: 2 },
  { name: "Радар", price: 1320, quantity: 1 },
  { name: "Сканер", price: 2700, quantity: 1 },
  { name: "Сканер", price: 2500, quantity: 3 },
  { name: "Дроид", price: 400, quantity: 7 },
  { name: "Захват", price: 1200, quantity: 2 },
];

console.log(calculateTotalPrice(products, "Радар"));
// 9080

console.log(calculateTotalPrice(products, "Сканер"));
// 10200

console.log(calculateTotalPrice(products, "Захват"));
// 2400

console.log(calculateTotalPrice(products, "Дроид"));
// 2800

// Напиши функцию calculateTotalPrice(allProdcuts, productName),
//которая получает массив объектов и имя продукта(значение свойства name).
//Возвращает общую стоимость продукта(цена умноженная на количество).

// Вызовы функции для проверки работоспособности твоей реализации.
