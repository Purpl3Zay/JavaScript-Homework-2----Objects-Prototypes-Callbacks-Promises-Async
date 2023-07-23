//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza:["Deep Dish","South Side Thin Crust"],
    tacos:"Anything not from Taco bell",
    burgers:"Portillos Burgers",
    ice_cream:["Chocolate","Vanilla","Oreo"],
    shakes:[{
        oberwise:"Chocolate",
        dunkin:"Vanilla",
        culvers:"All of them",
        mcDonalds:"Sham-rock-shake",
        cupids_candies:"Chocolate Malt"
    }]
}

function displayFavoriteFoods(foodlist) {
    for (let food in foodlist) {
      if (Array.isArray(foodlist[food])) {
        console.log(`${food}: ${foodlist[food].join(", ")}`);
      } else if (typeof foodlist[food] === "object") {
        console.log(`${food}:`);
        displayFavoriteFoods(foodlist[food][0]);
      } else {
        console.log(`${food}: ${foodlist[food]}`);
      }
    }
}

console.log(displayFavoriteFoods(person3))

//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype
function Person(name, age) {
    Person.name = name;
    Person.age = age;

    // Use an arrow to create the printInfo method
    Person.prototype.printInfo = function() {
        console.log(`Name: ${Person.name}, Age: ${Person.age}`);
    };

    // Create another arrow function for the addAge method that takes a single parameter
    Person.prototype.incrementAge = () => {
        Person.age += 1;
    };
}

const person1 = new Person("Brandon", 67); // I assume you are this age
const person2 = new Person("Schadre", 26); 

console.log(Person.prototype.printInfo(person1));
console.log(Person.prototype.printInfo(person2));
// Adding to the age
person1.incrementAge();
person1.incrementAge();
person1.incrementAge();
console.log(Person.prototype.printInfo(person1));

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine
    if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

function checkStringLength(str) {
    return new Promise(() => {
      if (str.length > 9) {
        console.log("Big word");
      }
    else {
        console.log("Small Number");
      }
    });
}
checkStringLength("bumfuzzled")
checkStringLength("hello")