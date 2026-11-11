'use strict';

'use strict';

/*
 * Функція getPricesInRange(prices, minPrice, maxPrice) повертає новий масив
 * з цін, які входять у діапазон від minPrice до maxPrice включно.
 *   prices — масив цін (числа).
 *   minPrice, maxPrice — межі діапазону.
 * 1. Оголоси getPricesInRange як стрілочну функцію.
 * 2. Перебери масив prices методом filter().
 * 3. У колбеку поверни true лише для тих цін, які не менші за minPrice
 *    і не більші за maxPrice.
 * 4. Поверни новий масив, який дав filter().
 */

const menuPrices = [55, 120, 40, 85, 95, 25, 150];

const getPricesInRange = (prices, minPrice, maxPrice) => {
  return prices.filter(price => price >= minPrice && price <= maxPrice);
};

// const getPricesInRange = (prices, minPrice, maxPrice) =>
//   prices.filter(price => price >= minPrice && price <= maxPrice);

console.log(getPricesInRange(menuPrices, 50, 100)); // [55, 85, 95]
console.log(getPricesInRange(menuPrices, 25, 45)); // [40, 25]
console.log(getPricesInRange(menuPrices, 200, 300)); // []
