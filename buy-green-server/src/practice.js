//Object literals
const person = {
    firstName: 'Bobberdoo',
    lastName: 'Ribwich',
    age: 21,
    hobbies: ['videogames', 'anime', 'Transformers collecting'],
    address: {
        street: '62 West Wallaby Street',
        city: 'Wigan',
        region: 'North West',
    }
}

person.email = "bbdrib@gmail.com";

let fruitNum = 2;

const fruits = ['apples', 'oranges', 'bananas'];

fruits[3] = 'mangoes';
fruits.push('grapes');
fruits.unshift('strawberries');
//fruits.pop();

//Template strings/Template literals
console.log(`I am the fruit seller.  I have ${fruits}.`);
console.log(`I am ${person.firstName} from ${person.address.city}.  I want ${fruitNum} ${fruits[1]}.`);

//Object arrays
const todos = [
    {
        id: 1,
        text: 'Take out trash.',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss.',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment.',
        isCompleted: false
    }
];

//For loops
for(let i = 0; i < 4; i++) {
    console.log(`For loop number ${i}.`);
}

//For of loops
for(let todo of todos) {
    console.log(todo);
}

//While loops
let i = 0;

while(i < 4) {
    console.log(`While loop number ${i}.`);
    i++
}

//High Order Array Methods:

//forEach
todos.forEach(function(todo) {
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo) {
    return todo.text;
});
console.log(todoText);

//filter
const todoCompleted = todos.filter(function(todo) {
    return todo.isCompleted === true;
}).map(function(todo) {
    return todo.text;
});
console.log(todoCompleted);

//Conditionals
const x =11;
const y = 9;

if(x > 5 || y > 10) {
    console.log('x greater than 5 or y is greater than 10');
} else {
    console.log('x is less than 5 and y is less than 10');
}

//Ternaries
const colour = x > 10 ? 'red':'blue';

//Switches
switch(colour) {
    case 'red':
        console.log('Colour is red.');
        break;
    case 'blue':
        console.log('Colour is blue.');
        break;
    default:
        console.log('Colour is not red or blue');
        break;
}

//Functions
function addNums(num1=1, num2=1) {
    return num1 + num2;
}

console.log(addNums(4, 5));

//Arrow Functions
const multiplyNums = (num1=1, num2=1) => {
    return num1*num2;
}

const subtractNums = (num1=1, num2=1) => num1 - num2;
const addOne = num1 => num1 + 1;

console.log(multiplyNums(5, 5));
console.log(subtractNums(5, 2));
console.log(addOne(5));

//Todos again
todos.forEach((todo) => console.log(todo));

//Object constructor functions (before classes)
function PersonA(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

PersonA.prototype.getBirthYear = function() {
    return this.dob.getFullYear();
}
PersonA.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

//ES6 Classes (I will use these for convenience)
class PersonB {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }

    getBirthYear = function() {
        return this.dob.getFullYear();
    }

    getFullName = function() {
        return `${this.firstName} ${this.lastName}`;
    }
}

//Instantiate an object
//Before classes
const person1 = new PersonA('Gramble', 'Gigglefunny', '1-1-1999');

console.log(`${person1.getFullName()}, born in ${person1.getBirthYear()}`);
//After classes
const person2 = new PersonB('Cromdo', 'Face', '1-1-1960');

console.log(`${person2.getFullName()}, born in ${person2.getBirthYear()}`);