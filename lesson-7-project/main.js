//loggin in the consol

console.log('Hello, world!')

// # Variables

let firstName = 'Noa';

firstName = 'Mary'

console.log(firstName);

const lastName = 'Valdal'

console.log(lastName);

// # Data types

let age = 28 // Integer Literal
let fullName = 'Noa Valdal'; // String Literal 
let isOfAge = true; // Boolean
let handsome = undefined; // Unedefind
let nothing = null; //null

// # String Maniupilation 

let favoritTeam = 'Arsenal';

// Concation
console.log('My favorit team is ' + favoritTeam);

// Template
console.log(`The best team is ${favoritTeam} in the world`);

// Mathematics 

console.log(3 + 6);
let addition = 3 + 6;
console.log(addition);

console.log(10 - 4);
let subtraction = 10 - 4;
console.log(subtraction);

console.log(3 * 6);
let multiplication = 3 * 6;
console.log(multiplication);

console.log(4 / 2);
let devision = 4 / 2;
console.log(devision);

// Arrays

const fruits = ['Apple','Banana','Pear','Orange'];
             //    0       1       2       3    
console.log(fruits[0]);
console.log(fruits);
console.log(fruits.length);

console.log(fruits);

fruits.splice(3, 1)

fruits.push("avocado");

console.log(fruits);

// Obeject Litrals

let person = {
    name: 'Nidar',
    age: 25,
    isJedi: true
};

// Dot notation
console.log(person.name)

// Braket notation
let theKey = "name";
console.log(person[theKey]);

person.name = "Yoda";
console.log(person.name)

person["swordColor"] = "green";

console.log(person.swordColor);


// # Loops


// For loop
for (let i = 0; i < 5; i++) {
    console.log("It's Running!");
}

// While loop

let i = 0;
while (i < 5) {
    console.log("Ran in a loop");
    i++;
}

//Mapping arrarys

let ages = [21, 43, 75, 32, 41];
ages.map( age => console.log(age));

// Conditionals Inverse with !

let isApproved = false;

if (!isApproved) {
    console.log("Congrats! You are apprvoed");
} else {
    console.log("Sorry! Fail");
}

let userAge = 0;

if (userAge > 12 && userAge < 19) {
    console.log("You are not too old");
}else if (userAge === 0) {
    console.log("How are you alive?");
} else {
    console.log("You are ancient");
}

// Functions 

function greet(name) {
    console.log("Hello," + name);
}

function greet(name) {
    if (name) {
        console.log("Hello," + name);
    } else {
        console.log("You really should have a name!");
    }
}

greet("Noa");
greet();

// Classes (ES6) Aka Objects real life objects like

class Dog {
    constructor(name) {
        this.name = name;
    }

    walk() {
        console.log("The dog is walking!")
    }

}

let dog = new Dog ("Felix");
dog.walk();