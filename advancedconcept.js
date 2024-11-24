/*
    Advanced JavaScript Concepts - Explained Like You're 7
*/

//==================
// SCOPE AND CLOSURES
//==================

// Let's talk about where things live in our code!

// Global Scope: This means the whole world can see this!
let globalToy = "I can play everywhere!";

function playWithGlobalToy() {
    // We can see the global toy here too!
    console.log(globalToy); // Output: I can play everywhere!
}

playWithGlobalToy();

// Local Scope: This toy is only in this room (inside the function)!
function playInRoom() {
    let roomToy = "I can only play in this room!";
    console.log(roomToy); // Output: I can only play in this room!
}

playInRoom();
// console.log(roomToy); // Error! We can't see roomToy outside!

// Closures: Imagine we have a box inside a box.
function boxOutside(outsideToy) {
    return function boxInside(insideToy) {
        // The inside box can play with both toys!
        console.log('Outside toy:', outsideToy);
        console.log('Inside toy:', insideToy);
    }
}

const toyBox = boxOutside('Car');
toyBox('Doll');
// Output: Outside toy: Car, Inside toy: Doll

//==================
// HOISTING
//==================

// JavaScript is like magic! It moves some things to the top before it starts!

console.log(magicToy); // Output: undefined (JavaScript knew about this toy but hasn't given it a value yet!)
var magicToy = "Abra Kadabra!";

// But it doesn't do this for "let" or "const" toys!
// console.log(hiddenToy); // Error! We can't use hiddenToy before we make it.
// let hiddenToy = "Shh! I'm hidden!";

//==================
// THE 'THIS' KEYWORD
//==================

// 'this' is a special word that tells us who is speaking.

const character = {
    name: "Max",
    sayName: function() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

character.sayName(); // Output: Hello, I'm Max

// In a normal function, 'this' refers to the whole world (global object like window in the browser).

function showThis() {
    console.log(this);
}

showThis(); // Output: The global object (in browsers, this is 'window').

//==================
// PROTOTYPES AND INHERITANCE
//==================

// Imagine a blueprint for building things, like toys!

function Toy(name, color) {
    this.name = name;
    this.color = color;
}

Toy.prototype.showToy = function() {
    console.log(`This toy is ${this.name} and it's ${this.color}`);
};

const carToy = new Toy("Car", "Red");
carToy.showToy(); // Output: This toy is Car and it's Red

// Inheritance: One toy can borrow features from another toy!
function Robot(name, color, batteryLife) {
    Toy.call(this, name, color);
    this.batteryLife = batteryLife;
}

Robot.prototype = Object.create(Toy.prototype);
Robot.prototype.showBattery = function() {
    console.log(`${this.name} has ${this.batteryLife} hours of battery left!`);
}

const roboToy = new Robot("Robot", "Blue", 10);
roboToy.showToy(); // Output: This toy is Robot and it's Blue
roboToy.showBattery(); // Output: Robot has 10 hours of battery left!

//==================
// ASYNCHRONOUS JAVASCRIPT (Promises and Async/Await)
//==================

// Imagine we're waiting for a friend to finish their game. We promise to wait and do something when they're done!

function finishGame() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Game finished!");
        }, 1000); // Waiting 1 second for the game to finish
    });
}

finishGame().then((message) => {
    console.log(message); // Output: Game finished!
});

// Async/Await: A cleaner way to wait.
async function playAsync() {
    let result = await finishGame();
    console.log(result); // Output: Game finished!
}

playAsync();

//==================
// FETCHING DATA (fetch API)
//==================

// Fetch data like asking a library for a book.

async function fetchWeather() {
    let response = await fetch('https://api.weatherapi.com/v1/current.json?key=YOUR_API_KEY&q=London');
    let data = await response.json();
    console.log("Weather in London:", data.current.temp_c, "°C");
}

fetchWeather(); // Fetch weather info from the internet

//==================
// EVENT LOOP (ASYNC Code)
//==================

console.log('Start');

// This code will wait 1 second, but JavaScript can do other things in the meantime!
setTimeout(() => {
    console.log('Timer is done!');
}, 1000);

// Promises get done faster than timers!
Promise.resolve().then(() => {
    console.log('Promise done!');
});

console.log('End');

//==================
// ES6+ FEATURES
//==================

// Destructuring: Taking pieces from a box of toys
let [redToy, blueToy] = ["Car", "Truck"];
console.log("Red Toy:", redToy); // "Car"
console.log("Blue Toy:", blueToy); // "Truck"

// Spread Operator: Sharing all your toys with your friend
let allToys = ["Doll", ...["Robot", "Lego"]];
console.log("All Toys:", allToys); // ["Doll", "Robot", "Lego"]

// Template Literals: Talk fancy by combining words and variables easily
let name = "Sam";
let greeting = `Hello, ${name}! Welcome to the playground.`;
console.log(greeting); // "Hello, Sam! Welcome to the playground."

//==================
// MODULES (Sharing code between files)
//==================

// Exporting toys from a file (mathToys.js)
export const toy1 = "Teddy Bear";
export const toy2 = "Lego Set";

// Importing them into another file (main.js)
import { toy1, toy2 } from './mathToys.js';

console.log(toy1); // Output: Teddy Bear
console.log(toy2); // Output: Lego Set

//==================
// OBJECT-ORIENTED PROGRAMMING (OOP) BASICS
//==================

// Classes: A class is like a blueprint for making toys.
class ToyClass {
    constructor(name, color) {
        this.name = name;
        this.color = color;
    }

    play() {
        console.log(`Playing with a ${this.color} ${this.name}`);
    }
}

let car = new ToyClass("Car", "Red");
car.play(); // "Playing with a Red Car"

// Inheritance: Extending the toy with more features
class FancyCar extends ToyClass {
    constructor(name, color, speed) {
        super(name, color); // Inheriting properties from the ToyClass
        this.speed = speed;
    }

    race() {
        console.log(`${this.name} is racing at ${this.speed} mph!`);
    }
}

let fancyCar = new FancyCar("Fancy Car", "Blue", 200);
fancyCar.play(); // "Playing with a Blue Fancy Car"
fancyCar.race(); // "Fancy Car is racing at 200 mph!"

//==================
// HIGHER-ORDER FUNCTIONS
//==================

// A super-smart toy that can control other toys!

function superSmartToy(controller) {
    console.log("The super smart toy is ready!");
    controller();
}

function toyAction() {
    console.log("This toy is now moving!");
}

superSmartToy(toyAction); // The super smart toy calls the toyAction function!

//==================
// FINAL NOTES
//==================

// JavaScript is like a toy box full of fun things to play with. You can create toys, make them do tricks,
// wait for toys to be ready, and even share them with your friends!
