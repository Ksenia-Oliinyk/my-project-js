'use strict';

/*
 * Масив books містить книги з властивостями title, author і rating.
 * 1. Оголоси змінну bookWithTitle і поклади в неї обʼєкт книги,
 *    назва якої збігається зі значенням змінної bookTitle.
 *    Використай метод find().
 * 2. Оголоси змінну bookByAuthor і поклади в неї обʼєкт книги,
 *    автор якої збігається зі значенням змінної author.
 */

const books = [
  { title: 'Silent Harbor', author: 'Alex', rating: 8.38 },
  { title: 'Paper Moons', author: 'Nora', rating: 8.51 },
  { title: 'The Glass Garden', author: 'Leo', rating: 7.75 },
  { title: 'North of Winter', author: 'Kim', rating: 7.94 },
  { title: 'Ashes and Salt', author: 'Alex', rating: 8.67 },
];

const bookTitle = 'The Glass Garden';
const author = 'Alex';

const bookWithTitle = books.find(book => book.title === bookTitle);

const bookByAuthor = books.find(book => book.author === author);

console.log(bookWithTitle);
// { title: 'The Glass Garden', author: 'Leo', rating: 7.75 }

console.log(bookByAuthor);
// { title: 'Silent Harbor', author: 'Alex', rating: 8.38 }
