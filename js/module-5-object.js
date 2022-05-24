//!
//! Прототипы объекта
//!

// const user = {
//   name: 'Alexey',
//   age: 45,

//   // "Привет"-метод объекта user
//   greet() {
//     return `${this.name}, hellowwww!!!`;
//   },
// };

// console.log(user);
// console.log(user.greet());

// //

// const user2 = new Object({
//   name: 'Sergey',
//   age: 45,

//   greetSomeOne(personName) {
//     return `${this.name} say Hi to ${personName.name}`;
//   },
// });

// //

// // sayBye-функция на прототипе объекта
// Object.prototype.sayBye = function () {
//   return `${this.name}, Bye!!!`;
// };

// console.log('user -->', user.sayBye());
// console.log('user2 -->', user2.sayBye());

// const anna = Object.create(user);
// anna.name = 'Anna';

// // тест sayBye на anna
// console.log('🚀 ~ anna >>', anna.sayBye());

// // биндим метод  user.greet на Анне
// console.log('🚀 ~ user.greet.bind(anna)', anna.greet.bind(anna)());

// // запись ссылки на метод user.greet в переменную
// const greetings = user.greet;
// console.log(greetings.bind(anna)());

// // запись ссылки на метод user2.greetSomeOne в переменную
// const greetSomeOne = user2.greetSomeOne;
// console.log(greetSomeOne.bind(user)(anna));

// const str = new String('I am an elephant');
// const lastWordOfString = str.split(' ').slice(-1).join();

// // CAPS first letter
// str.name = lastWordOfString[0].toUpperCase() + lastWordOfString.substring(1);
// console.log('🚀 ~ str.name >>', str.sayBye());

//!---------------------------------------------------------------------------------
//!---------------------------------------------------------------------------------

const emploee = new Object({
  emploeeName: '',
  gender: '',
  age: 0,
  phone: 0000000000,
  email: '',
  specialization: '',
  skills: [1, 3],
});

// Вешаем функцию заполнения новых сотрудников на prototype
Object.prototype.fillEmploee = function (persone) {
  // console.log(persone);
  this.emploeeName = persone.emploeeName;
  this.gender = persone.gender;
  this.age = persone.age;
  this.phone = persone.phone;
  this.email = persone.email;
  this.specialization = persone.specialization;
  this.skills = persone.skills;
};

const designer = Object.create(emploee);
designer.fillEmploee({
  emploeeName: 'Alex',
  gender: 'male',
  age: 45,
  phone: 1423542352345,
  email: 'sss@dddd.fff',
  specialization: 'Design',
  skills: ['PS', 'AI'],
});
console.log(designer);

const driver = Object.create(emploee);
console.log(driver);

driver.fillEmploee({
  emploeeName: 'Serg',
  gender: 'male',
  age: 50,
  phone: 36543647,
  email: 'sfsfsds@dd.fff',
  specialization: 'Driver',
  skills: ['drive'],
});

console.log(driver);
