//! 1.Reverse a string

// function reverseString(str) {
//     let reversed = '';
//     for (let i = str.length - 1; i >= 0; i--) {
//         reversed += str[i];
//     }
//     return reversed;
// }

// let originalString = 'Hello, World!';
// let reversedString = reverseString(originalString);

// console.log(reversedString);


//! 2.Introduce function 

// let person = {
//     name: 'Ram',
//     introduce: function(age) {
//         console.log(`Hello, my name is ${this.name} and I am ${age} years old`);
//     }
// };
// person.introduce(20);

//! 4.callback function

// function add(a,b){
//     console.log(a,b)
//     console.log(a())
// }
// add(function demo(){
//     return 4
// },6)

//!6.map() method:The map() method in JavaScript is used to create a new array by applying a given function to each element of the original array. This method does not modify the original array but instead produces a new array with the transformed values.
// let originalArr = [1, 2, 3, 4, 5];

// let squaredArr = originalArr.map(function(ele) {
//     return ele * ele;
// });
// console.log(squaredArr);


//!7.filter() method:The filter() method in JavaScript is used to create a new array with all elements that pass a test implemented by the provided callback function. 
// let originalArr = [1, 2, 3, 4, 5];

// let evenArr = originalArr.filter(function(ele) {
//     return ele % 2 === 0;
// });

// console.log(evenArr);

// !9. date is valid or invalid
// function isValidDate(dateString) {
//     const [day, month, year] = dateString.split('/').map(Number);
//     const date = new Date(year, month - 1, day);

//     return date.getFullYear() === year && 
//            date.getMonth() === month - 1 && 
//            date.getDate() === day;
// }
// const dates = ['30/02/2020', '31/03/2000', '31/07/2029'];

// dates.forEach(date => {
//     console.log(`Date ${date} is ${isValidDate(date) ? 'valid' : 'invalid'}`);
// });

//!10.Leap year or not
// function isValidDate(dateString) {
//     const [day, month, year] = dateString.split('/').map(Number);
//     const date = new Date(year, month - 1, day);
//     if (date.getFullYear() === year && 
//         date.getMonth() === month - 1 && 
//         date.getDate() === day) {
//         return true;
//     } else {
//         return false;
//     }
// }

// function isLeapYear(year) {
//     return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
// }

// const dates = ['30/02/2020', '31/03/2000', '31/07/2029'];

// dates.forEach(date => {
//     if (isValidDate(date)) {
//         const year = parseInt(date.split('/')[2], 10);
//         console.log(`Date ${date} is valid and the year ${year} is ${isLeapYear(year) ? 'a leap year' : 'not a leap year'}.`);
//     } else {
//         console.log(`Date ${date} is invalid.`);
//     }
// });
