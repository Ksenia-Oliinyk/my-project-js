'use strict';

// Task about peopleEye

const allUsers = [
  {
    name: 'Alex',
    email: 'alex@indexia.com',
    eyeColor: 'blue',
    friends: ['Sam'],
    isActive: false,
    balance: 2811,
    skills: ['html', 'css'],
    gender: 'male',
    age: 37,
  },
  {
    name: 'Nora',
    email: 'nora@tubesys.com',
    eyeColor: 'blue',
    friends: ['Kim', 'Sam'],
    isActive: true,
    balance: 3821,
    skills: ['figma', 'html', 'css', 'testing', 'git'],
    gender: 'female',
    age: 34,
  },
  {
    name: 'Max',
    email: 'max@xinware.com',
    eyeColor: 'green',
    friends: ['Leo', 'Iris', 'Kim'],
    isActive: false,
    balance: 3793,
    skills: ['sql', 'node', 'git', 'html', 'javascript'],
    gender: 'male',
    age: 24,
  },
  {
    name: 'Iris',
    email: 'iris@omatom.com',
    eyeColor: 'green',
    friends: ['Nora', 'Leo'],
    isActive: true,
    balance: 2278,
    skills: ['react', 'javascript', 'css'],
    gender: 'female',
    age: 21,
  },
  {
    name: 'Sam',
    email: 'sam@nurali.com',
    eyeColor: 'blue',
    friends: ['Alex', 'Max'],
    isActive: true,
    balance: 3951,
    skills: ['git', 'node', 'sql'],
    gender: 'male',
    age: 27,
  },
  {
    name: 'Leo',
    email: 'leo@furnigeer.com',
    eyeColor: 'brown',
    friends: ['Iris', 'Kim'],
    isActive: false,
    balance: 1498,
    skills: ['testing', 'html', 'figma'],
    gender: 'male',
    age: 38,
  },
  {
    name: 'Kim',
    email: 'kim@kog.com',
    eyeColor: 'brown',
    friends: ['Nora', 'Max'],
    isActive: true,
    balance: 2764,
    skills: ['javascript', 'react', 'node'],
    gender: 'female',
    age: 39,
  },
];

/*
 * Функція getUsersWithEyeColor(users, color) повертає масив користувачів,
 * у яких колір очей збігається зі значенням параметра color.
 *   users — масив обʼєктів користувачів.
 *   color — колір очей (рядок).
 * 1. Оголоси getUsersWithEyeColor як стрілочну функцію.
 * 2. Перебери масив users методом filter().
 * 3. У колбеку поверни true лише для тих користувачів,
 *    у яких властивість eyeColor дорівнює color.
 * 4. Поверни новий масив, який дав filter().
 */

const getUsersWithEyeColor = (users, color) =>
  users.filter(user => user.eyeColor === color);

console.log(getUsersWithEyeColor(allUsers, 'blue'));
// Масив із трьох користувачів: Alex, Nora, Sam

console.log(getUsersWithEyeColor(allUsers, 'green'));
// Масив із двох користувачів: Max, Iris

console.log(getUsersWithEyeColor(allUsers, 'red'));
// []

// Task about peopleAge

/*
 * Функція getUsersWithAge(users, minAge, maxAge) повертає масив користувачів,
 * вік яких потрапляє в діапазон від minAge до maxAge включно.
 *   users — масив обʼєктів користувачів.
 *   minAge, maxAge — межі діапазону (числа).
 * 1. Оголоси getUsersWithAge як стрілочну функцію.
 * 2. Перебери масив users методом filter().
 * 3. У колбеку поверни true лише для тих користувачів, у яких age
 *    не менший за minAge і не більший за maxAge.
 * 4. Поверни новий масив, який дав filter().
 */

const getUsersWithAge = (users, minAge, maxAge) => {
  return users.filter(user => user.age >= minAge && user.age <= maxAge);
};

console.log(getUsersWithAge(allUsers, 20, 30));
// Масив із трьох користувачів: Max, Iris, Sam

console.log(getUsersWithAge(allUsers, 30, 40));
// Масив із чотирьох користувачів: Alex, Nora, Leo, Kim

console.log(getUsersWithAge(allUsers, 80, 100));
// []
