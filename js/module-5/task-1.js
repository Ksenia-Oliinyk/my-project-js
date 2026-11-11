"use strict";

/*
 * Функція getUserEmails(users) повертає масив поштових адрес користувачів.
 *   users — масив обʼєктів користувачів.
 * 1. Оголоси getUserEmails як стрілочну функцію.
 * 2. Перебери масив users методом map().
 * 3. У колбеку поверни значення властивості email поточного користувача.
 * 4. Поверни новий масив, який дав map().
 */

const allUsers = [
  {
    name: "Alex",
    email: "alex@indexia.com",
    eyeColor: "blue",
    friends: ["Sam"],
    isActive: false,
    balance: 2811,
    skills: ["html", "css"],
    gender: "male",
    age: 37,
  },
  {
    name: "Nora",
    email: "nora@tubesys.com",
    eyeColor: "blue",
    friends: ["Kim", "Sam"],
    isActive: true,
    balance: 3821,
    skills: ["figma", "html", "css", "testing", "git"],
    gender: "female",
    age: 34,
  },
  {
    name: "Max",
    email: "max@xinware.com",
    eyeColor: "green",
    friends: ["Leo", "Iris", "Kim"],
    isActive: false,
    balance: 3793,
    skills: ["sql", "node", "git", "html", "javascript"],
    gender: "male",
    age: 24,
  },
  {
    name: "Iris",
    email: "iris@omatom.com",
    eyeColor: "green",
    friends: ["Nora", "Leo"],
    isActive: true,
    balance: 2278,
    skills: ["react", "javascript", "css"],
    gender: "female",
    age: 21,
  },
  {
    name: "Sam",
    email: "sam@nurali.com",
    eyeColor: "blue",
    friends: ["Alex", "Max"],
    isActive: true,
    balance: 3951,
    skills: ["git", "node", "sql"],
    gender: "male",
    age: 27,
  },
  {
    name: "Leo",
    email: "leo@furnigeer.com",
    eyeColor: "brown",
    friends: ["Iris", "Kim"],
    isActive: false,
    balance: 1498,
    skills: ["testing", "html", "figma"],
    gender: "male",
    age: 38,
  },
  {
    name: "Kim",
    email: "kim@kog.com",
    eyeColor: "brown",
    friends: ["Nora", "Max"],
    isActive: true,
    balance: 2764,
    skills: ["javascript", "react", "node"],
    gender: "female",
    age: 39,
  },
];

// Твій код тут

console.log(getUserEmails(allUsers));
// ['alex@indexia.com', 'nora@tubesys.com', 'max@xinware.com',
//  'iris@omatom.com', 'sam@nurali.com', 'leo@furnigeer.com', 'kim@kog.com']
