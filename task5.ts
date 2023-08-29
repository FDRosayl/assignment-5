// develope a program that calculates and print the sum of the first n even unmbers using a for loop.

let sum:number = 0;
for (let i = 0; i <= 10; i++) {
    if(i % 2 ==0){
        sum = sum + i
    }
    
}
console.log(sum);

// implement a program that uses a for loop to iterate through an array of numbers and print only the even numbers.
let array1:number[] = [1,2,3,4,5,6,7,8];
let even:number[] = [];
for(let i=0; i<array1.length; i++){
    if((array1[i]) % 2 ==0){
even.push(array1[i]);
    }        
} 
console.log(even);

//write a program that defines a function to calculate the area of a circle. the function should take the radius as input and return the calculated area.
function areaofcircle(r:number){
    const pi:number = 3.14;
    let area:number = pi*r*r;
    return area;
} 
console.log(areaofcircle(10));

//implement a program that uses a loop to iterate through an array of numbers and remove all the even numbers from them and just leave the odd ones.
let array2: number[] = [1,2,3,4,5,6,7,8,9,10];
let odd:number[]=[];
for(let i=0; i<array2.length; i++){
if((array2[i]) % 2 !==0)
    odd.push(array2[i]);
}        
 
console.log(odd);

// develope a program that read a list of grades and uses the splice method to remove failing grades (below 50) from the array.

let listofgrades:number[]=[40,50,60,70,78,80,45,48,51,90];
for(let i=0; i<array1.length; i++){
if((listofgrades[i])<50){
    listofgrades.splice(i,1);
}    
} 
console.log(listofgrades);

// write a program that uses a function to find the largest in an array of numbers.

let largestArray=[2,9,6,7,12,17,22,31,45,65];
let largestElement=0;
for(let i=0; i<largestArray.length; i++){
    if(largestArray[i]>largestElement)largestElement=largestArray[i]
}
console.log(largestElement);





