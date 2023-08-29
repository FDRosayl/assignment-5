"use strict";
var getDays = 17;
var convertIntoWeeks = getDays / 7;
var convertIntoDays = getDays % 7;
console.log(convertIntoWeeks);
console.log(convertIntoDays);
// write a program that calculates the discount for a product based on its price. if the price is above $100, apply a 10% discount, otherwise apply 5% discount.
var price = 140;
var Discount1 = (price * 10) / 100;
var Discount2 = (price * 5) / 100;
if (price > 100) {
    console.log(Discount1);
}
else {
    console.log(Discount2);
}
// create a program that determine the category of a user-provided age. if the age is between 0 and 12, print child. if it is between 13 and 19 print "teenager".  otherwise print adult.
var provideAge = 22;
if (provideAge >= 0 && provideAge <= 12) {
    console.log("child");
}
else if (provideAge >= 13 && provideAge <= 19) {
    console.log("teenager");
}
else {
    console.log("Adult");
}
//write a program that take temperature and check it. if it is cold then suggest the user to wear warm clothes and so on according to the weather.
var giveTemp = 10;
if (giveTemp < 16) {
    console.log("please wear warm clothes");
}
else {
    console.log("please wear loght dress");
}
// write a program that check if the given number is divisible by 3 or 5 or both or not divisble by anyone. show out put accordingly.
var userNumber = 25;
if (userNumber % 3 == 0 || userNumber % 5 == 0) {
    console.log("number is divisible by 3 or 5");
}
else if (userNumber % 3 == 0 && userNumber % 5 == 0) {
    console.log("number is divisible by both");
}
else {
    console.log("number is divisble by none");
}
// write a program that check if the given year is leap year or not
var daysInYear = 366;
if (daysInYear > 365) {
    console.log("this is leap year");
}
else {
    console.log("this is not leap year");
}
// develop a progrma that determine the day of the week. ask a user for a number for a number(1-7) and use nested if statements to print the corresponding day name.
var dayNum = 4;
if (dayNum == 1) {
    console.log("Monday");
}
else if (dayNum == 2) {
    console.log("Tuesday");
}
else if (dayNum == 3) {
    console.log("wednesday");
}
else if (dayNum == 4) {
    console.log("Thursday");
}
else if (dayNum == 5) {
    console.log("Friday");
}
else if (dayNum == 6) {
    console.log("Saturday");
}
else {
    console.log("Sunday");
}
// write a program that take the number of units consumed by a user if it is greater than 100 than add 10% tax if greater than 200 then add 15% of tax so on upto if greater than 500 then add 25% of tax.
var numberOfUnits = 100;
var priceOfOneUnit = 27;
if (numberOfUnits >= 100) {
    var aC = numberOfUnits * priceOfOneUnit;
    var bill = aC * (10 / 100) + aC;
    console.log(bill);
}
else if (numberOfUnits > 200) {
    var aC1 = numberOfUnits * priceOfOneUnit;
    var bill1 = aC1 * (15 / 100) + aC1;
    console.log(bill1);
}
else {
    var aC2 = numberOfUnits * priceOfOneUnit;
    var bill2 = aC2 * (25 / 100) + aC2;
    console.log(bill2);
}
