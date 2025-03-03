// Closure in Javascript
// Closure is a function that has access to the outer function scope even after the outer function has returned. In JavaScript, closures are created every time a function is created, at function creation time.

// Example:
// function outerFunction() {
//     let outerVariable = 'I am outside!';
//     function innerFunction() {
//         console.log(outerVariable);
//     }
//     return innerFunction;
// }
// // The inner function has access to the outer function scope even after the outer function has returned.
// const innerFunc = outerFunction();
// innerFunc(); // Output: I am outside!
// innerFunc(); // Output: I am outside!


// Promises in JavaScript
// Promises are used to handle asynchronous operations in JavaScript. They are easy to manage when dealing with multiple asynchronous operations where callbacks can create callback hell leading to unmanageable code.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and
// its resulting value. 
// A promise can be in one of three states:
// Pending: Initial state, neither fulfilled nor rejected.
// Fulfilled: Meaning that the operation completed successfully.
// Rejected: Meaning that the operation failed.
// Syntax:
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Success!');
//     }, 2000);
// });
// promise.then((value) => {
//     console.log(value);
// });
// Output: Success!
// In the above example, the promise resolves after 2 seconds and logs Success! to the console.

// Example:
// const promise = new Promise((resolve, reject) => {
//     const res = true;
//     if (res) {
//         resolve('Resolved!');
//     } else {
//         reject('Rejected!');
//     }
// });
// promise.then((value) => {
//     console.log(value);
// }).catch((error) => {
//     console.log(error);
// });
// Output: Resolved!
// In the above example, the promise is resolved and logs Resolved! to the console.

// Example 2:
// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: 'John Doe' };
//             const success = true; // Simulate success or failure
//             if (success) {
//                 resolve(data);
//             } else {
//                 reject('Error: Unable to fetch data.');
//             }
//         }, 2000);
//     });
// }

// fetchData().then((data) => {
//     console.log('Data fetched:', data);
// }).catch((error) => {
//     console.log(error);
// });
// Output: Data fetched: { id: 1, name: 'John Doe' }
// In the above example, the promise resolves after 2 seconds and logs the fetched data to the console.

// function fetchData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             const data = { id: 1, name: 'Abhishek' };
//             const success = true;
//             if (success) {
//                 resolve(data);
//             } else {
//                 reject('Error: Unable to fetch the data');
//             }
//         }, 2000);
//     });
// }

// // Call fetchData once and handle the returned Promise
// fetchData().then(data => {
//     console.log('Data fetched:', data);
// }).catch(error => {
//     console.log(error);
// });
// Output: Data fetched: { id: 1, name: 'Abhishek' }
//  .then chaining is used to handle the resolved multiple values of the promise and .catch is used to handle any errors that occur during the promise execution
// In the above example, the promise resolves after 2 seconds and logs the fetched data to the console.

// Prototypal Inheritance in JavaScript
// Prototypal inheritance is a way to create objects that inherit properties and methods from other objects. In JavaScript, objects can inherit from other objects through the prototype chain, which allows for code reuse and a more efficient way of creating objects.
// Example:
// function Animal(name) {
//     this.name = name;
// }
// Animal.prototype.getName = function () {
//     return this.name;
// };
// function Dog(name, breed) {
//     Animal.call(this, name);
//     this.breed = breed;
// }
// Dog.prototype = Object.create(Animal.prototype);
// Dog.prototype.constructor = Dog;
// Dog.prototype.getBreed = function () {
//     return this.breed;
// };
// const animal = new Animal('Leo');
// console.log(animal.getName()); // Output: Leo
// const dog = new Dog('Buddy', 'Labrador');
// console.log(dog.getName()); // Output: Buddy
// console.log(dog.getBreed()); // Output: Labrador
// In the above example, the Dog object inherits from the Animal object using prototypal inheritance.
// The Dog object has its own properties (name and breed) and methods (getName and getB
// reed), as well as inherited methods from the Animal object (getName).
// The Dog object's prototype is set to the Animal object's prototype using Object.create(Animal.prototype), and the constructor is set back to Dog.prototype.constructor = Dog.

// This and and binding concepts in JavaScript
// The this keyword in JavaScript refers to the object it belongs to. It has different values depending on where it is used:
// In a method, this refers to the owner object.
// Alone, this refers to the global object.
// In a function, this refers to the global object.
// In a function, in strict mode, this is undefined.
// In an event, this refers to the element that received the event.
// Methods like call(), and apply() can refer this to any object.
// Example:
// const person = {
//     namen: 'Abhi',
//     sayHello: function () {
//         console.log(`This is my name : ${this.namen}`);
//     }
// };

// person.sayHello(); // Output: This is my name : Abhi

// const sayHelloFunction = person.sayHello; // Assign the method reference, not call it
// sayHelloFunction(); // Output: This is my name : undefined (because `this` refers to global object)

// const boundSayHelloFunction = person.sayHello.bind(person); // Bind the method to the `person` object
// boundSayHelloFunction(); // Output: This is my name : Abhi

//     firstName: 'John',
//     lastName: 'Doe',
//     fullName: function () {
//         return this.firstName + ' ' + this.lastName;
//     }
// };
// console.log(person.fullName()); // Output: John Doe
// In the above example, this refers to the person object when used inside the fullName method.
// The bind() method is used to set the this keyword of a function to a specific value.


// Async and await in JavaScript
// Async and await are used to handle asynchronous operations in JavaScript.
// The async keyword is used to define an asynchronous function, and the await keyword is used to paus
// e the execution of the function until the promise is resolved or rejected.
// Example:
// async function myFunction() {
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Hello, World!');
//         }, 2000);
//     });
//     const result = await promise;
//     console.log(result);
// }
// myFunction(); // Output: Hello, World!
// The above example shows how to use async and await to handle a promise. The myFunction function
// is defined as an asynchronous function using the async keyword. The promise is created using the
// Promise constructor, and the setTimeout function is used to simulate a delay. The await keyword is
// used to pause the execution of the function until the promise is resolved. The result of th
// e promise is then logged to the console.
// async function myFunction() {
//     try {
//         const url = 'https://api.example.com/data';
//         const response = await fetch(url);
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//     }
// }
//     try {
//         const response = await fetch('https://api.example.com/data');
//         const data = await response.json();
//         console.log(data);
//     } catch (error) {
//         console.error(error);
//     }
// }
// myFunction(); // Output: The data from the API
// The above example shows how to use async and await to handle a promise returned by the fetch
// function. The myFunction function is defined as an asynchronous function using the async keyword.
// The fetch function is used to make a GET request to the API, and the await keyword
// is used to pause the execution of the function until the response is received. The response is
// then parsed as JSON using the await keyword, and the data is logged to the console.

// Example 2:

// function fetchPostData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Post data');
//         }, 2000);
//     });
// }

// function fetchCommentData() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve('Comment data');
//         }, 3000);
//     });
// }

// async function myFunction() {
//     try {
//         // const postData = await fetchPostData();
//         // const commentData = await fetchCommentData();
//         const [ postData, commentData] = await Promise.all([
//             fetchPostData(),
//             fetchCommentData(),
//             ]);
//         console.log(postData);
//         console.log(commentData);
//     } catch (error) {
//         console.error('Error fetching data:', error.message);
//     }
// }
// myFunction(); // Output: Post data, Comment data


