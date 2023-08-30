let studentName:string[]= ['sana', 'saba', 'hina', 'zahra', 'rida']
studentName.splice(2,1,'faiza')
console.log(studentName);

//implement a simple shoping cart program using an array. create function to add items, remove items and update quantity using splice method.print the cart contents after each operation.
let grocery:string[]= ['oil', 'flour','rice', 'lentils', 'sugar', 'tea']
grocery.splice(2,0,"milk")
console.log(grocery);
grocery.splice(3,1)
console.log(grocery);
grocery.splice(0,0,'oil 5kg')
console.log(grocery);

//write a program that uses a while loop to print the first 25 integers.
var s:number= 0;
while(s<=25){
    console.log(s);
   s++ 
}
//write a program that uses a while loop to print the first 10 even numbers.

let m:number=1
while (m<=10) 
{if(m%2==0){
    console.log(m); 
  }
m++
}
// create a function that take a positive integer as parameter and uses a while loop to calculate and return the factorial of that number.

function factorial(num1:number)
{
    let result:number = num1;
    let multiplier:number = num1-1;
    while (multiplier>0){
        result = result*multiplier;
        multiplier--;
    }
    
   
    console.log(result);
    return;
    
}
factorial(5)

// write a program having an array of numbers if the number is negative it should remove the negative number from the array.

let list = [2,-5,6,7,-8,10,12];
let posNumber = [];
for(let i=0; i<list.length; i++){
    if(list[i]>0){
        posNumber.push(list[i]);
console.log(posNumber);

    }
    
}
    
// create a function that takes an array of numbers as parameter. use a while loop to calculate and return the sum of all the numbers in the array.
