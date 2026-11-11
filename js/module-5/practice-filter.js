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

/*
 * Масив books містить книги з властивостями title, author і rating.
 * 1. Оголоси змінну topRatedBooks і поклади в неї масив книг,
 *    рейтинг яких не менший за minRating. Використай метод filter().
 * 2. Оголоси змінну booksByAuthor і поклади в неї масив книг,
 *    автор яких збігається зі значенням змінної author.
 */

const books = [
  { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
  { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
  { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
  { title: 'North of Winter', author: 'Kim', rating: 7.94 },
  { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
];

const minRating = 8;
const author = 'Alex';

const topRatedBooks = books.filter(book => book.rating >= minRating);

const booksByAuthor = books.filter(book => book.author === author);

console.log(topRatedBooks);
// [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// ]

console.log(booksByAuthor);
// [
//   { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
//   { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 }
// ]
