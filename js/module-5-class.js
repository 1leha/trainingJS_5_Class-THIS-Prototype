//!
//! Прототипы
//!

const user = {
  name: 'Alexey',
  age: 45,

  // "Привет"-метод объекта user
  greet() {
    return `${this.name}, hellowwww!!!`;
  },
};

console.log(user);
console.log(user.greet());

//

const user2 = new Object({
  name: 'Sergey',
  age: 45,

  greetSomeOne(personName) {
    return `${this.name} say Hi to ${personName.name}`;
  },
});

//

// sayBye-функция на прототипе объекта
Object.prototype.sayBye = function () {
  return `${this.name}, Bye!!!`;
};

console.log('user -->', user.sayBye());
console.log('user2 -->', user2.sayBye());

const anna = Object.create(user);
anna.name = 'Anna';

// тест sayBye на anna
console.log('🚀 ~ anna >>', anna.sayBye());

// биндим метод  user.greet на Анне
console.log('🚀 ~ user.greet.bind(anna)', anna.greet.bind(anna)());

// запись ссылки на метод user.greet в переменную
const greetings = user.greet;
console.log(greetings.bind(anna)());

// запись ссылки на метод user2.greetSomeOne в переменную
const greetSomeOne = user2.greetSomeOne;
console.log(greetSomeOne.bind(user)(anna));

const str = new String('I am an elephant');
const lastWordOfString = str.split(' ').slice(-1).join();

// CAPS first letter
str.name = lastWordOfString[0].toUpperCase() + lastWordOfString.substring(1);
console.log('🚀 ~ str.name >>', str.sayBye());
