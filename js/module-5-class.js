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
// console.log('🚀 ~ anna >>', anna.sayBye());
// console.log('🚀 ~ user.greet.bind(anna)', anna.greet.bind(anna)());
// console.log('🚀 ~ anna >>', anna);

const greetings = user.greet;
// console.log(greetings.bind(anna)());

const str = new String('I am an elephant');
str.name =
  str.split(' ')[str.split(' ').length - 1][0].toUpperCase() +
  str.split(' ')[str.split(' ').length - 1].substring(1);
console.log('🚀 ~ str.name >>', str.sayBye());
