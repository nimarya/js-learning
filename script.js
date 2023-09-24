const mySecondName = 'Celia';
console.log(mySecondName);

let num1 = 4;
let num2 = 2;
console.log(num1 % num2);
let arr = ['item1', 'item2', 'item3'];
console.log(arr.reverse());
console.log(arr);

let str = 'Maria';
let mixedStr = `here is my full name: ${str} ${mySecondName}!`;
console.log(mixedStr);

console.log(arr.indexOf('item1'));

//objects

const person = {
    name: 'maria ivanova',
    'when-you-put-dashes': 'value',
    age: 20,
    howOldAmI() {
        console.log(`I am ${this.age} years old`);
    },
};
console.log(person.age);
// ! in objects order does not matter
// console.log(person.when-you-put-dashes); - this won't work
console.log(person['when-you-put-dashes']); // - this is the only option for name with dashes

// how to add new property and delete old:
person.hairColor = 'black';
//delete person.age;
console.log(person);
person.howOldAmI();

// function declarationn and execution:

function sayHi(name = 'John') {
    console.log(`Hi, ${name}!`);
}

sayHi('Bob');
sayHi();

function add(num1, num2) {
    return num1 + num2;
}

const sum = add(1, 4);
console.log(sum);

// hello(); - error
sayHello(); // - this works

// function expression:
const hello = function(name) {
    console.log('hello ' + name);
}
// possible shortening:
const hello1 = name => {
    return('hello ' + name);
}
const hello2 = name => 'hello ' + name; // implicit return

const add2 = (num1, num2) => num1 + num2;


// function declaration:
function sayHello() {
    console.log('hello');
}
console.log(add2(4, 7));

// main difference - you can call function wich was declared before it was declared
// and you can't do the same with function expression