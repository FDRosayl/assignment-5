"use strict";
//write a program that uses filter to remove all negative numbers from an array of numbers.
let array = [2, -3, 5, -7, 8, -9, 10];
let updatedarray = array.filter(n => n >= 0);
console.log(updatedarray);
// give an array of numbers[1,2,3,4,5],use the map method to create a new array where each number is multiplied with 2.
let arr1 = [1, 2, 3, 4, 5];
let updatedarr1 = arr1.map(n => n * 2);
console.log(updatedarr1);
// Given an array of strings[apple,"banana,"cherry","date","grape"].use the filter method to create a new array containing only the fruits with more than 5 characters.
let arr2 = ["apple", "banana", "cherry", "date", "grape"];
let updatearr2 = arr2.filter(n => n.length > 5);
console.log(updatearr2);
//given an array of numbers [1,2,3,4,5,6,7,8,9,10];use the map and filter methods together to create a new array containing the squares of even numbers.
let arr3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let updatearr3 = arr3.filter(n => n % 2 == 0)
    .map(n => n * n);
console.log(updatearr3);
//given an array of temperature in celcius [0,10,20,30,40],use the map method to create a new array where each temperature is converted to fahrenheit using the formula.
let arr4 = [0, 10, 20, 30, 40];
let updatearr4 = arr4.map(n => (n * 9 / 5) + 32);
console.log(updatearr4);
// given an array of numbers[3,6,9,12,15,18],use the map and filter methods together to create a new array containing the double values of odd numbers.
let arr5 = [3, 6, 9, 12, 15, 18];
let updatearr5 = arr5.filter(n => n % 2 !== 0)
    .map(n => n * 2);
console.log(updatearr5);
// given an array of names["alice","bob","charlie","david","emily"]. use the forEach method to log each name with an exclaimation mark at the end.
let arr6 = ["alice", "bob", "charlie", "david", "emily"];
arr6.forEach(n => {
    console.log(n + "!");
});
