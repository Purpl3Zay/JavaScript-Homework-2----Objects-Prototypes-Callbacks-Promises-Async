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

for(let i = 0; i < Object.keys(person3).length; i++){
  console.log(Object.keys(person3)[i])
}

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
    Person.prototype.printInfo = () => {
        console.log(`Name: ${name}, Age: ${Person.age}`);
    };

    // Create another arrow function for the addAge method that takes a single parameter
    Person.prototype.addAge = () => {
        Person.age += 1;
    };
}

const person1 = new Person("Brandon", 67); // I assume you are this age
console.log(Person.prototype.printInfo(person1));
// Adding to the age
person1.addAge();
person1.addAge();
person1.addAge();
console.log(Person.prototype.printInfo(person1));

const person2 = new Person("Schadre", 24); 
console.log(Person.prototype.printInfo(person2));

// =============Exercise #3 ============//
/*
    Create a Promised based function that will check a string to determine
    if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/

const checkStringLength = (str) => {
    return new Promise((resolve, result) => {
      if (str.length > 9) {
        resolve(true);
      }
    else {
        result(false);
      }
    });
}

checkStringLength("bumfuzzled")
.then( (result) => {
  console.log("Big word")
})
.catch( (error) => {
  console.log("Small Number")
})

checkStringLength("hello")
.then( (result) => {
  console.log("Big word")
})
.catch( (error) => {
  console.log("Small Number")
})
