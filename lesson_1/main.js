//- Створити змінні. Присвоїти кожному з них значення: 'hello','owu','com', 'ua', 1, 10, -999, 123, 3.14, 2.7, 16, true, false.
let hello = 'hello';
let owu = 'owu';
let com = 'com';
let ua = 'ua';
let num1 = 1;
let num10 = 10;
let numMinus999 = -999;
let num123 = 123;
const PI = 3.14;
const NUM_FLOAT = 2.7;
const NUM_16 = 16;
let isTrue = true;
let isFalse = false;
console.log(hello,
    owu,
    com,
    ua,
    num1,
    num10,
    numMinus999,
    num123,
    PI,
    NUM_FLOAT,
    NUM_16,
    isTrue,
    isFalse);

//Створити 3 змінних firstName, middleName, lastName, наповнити їх своїм ПІБ.
let firstName = 'Sergiy';
let middleName = 'Volodymyrovych';
let lastName = 'Danyliuk';
let person = `${lastName} ${firstName} ${middleName}`;
console.log(person);


//За допомогою оператора typeof визначити типи наступних змінних та вивести їх в консоль.
let a = 100;
let b = '100';
let c = true;
console.log(typeof a, b, c);


//- За допомогою 3х різних prompt() отримати 3 слова які являються вашими Імям, По-Батькові та роками. та вивести в консоль
let myName = prompt("Введіть ім'я", '');
let fatherName = prompt("Введіть як вас Побатькові", '');
let age = prompt("Введіть свій вік",);
console.log(`${myName} ${fatherName} ${parseInt(age)}`);
