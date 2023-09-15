//personal message: Store a person name in a variable and print a message to that person. your message should be simple, such as "hell Eric, would you like to learn some python today?"
var CusName:string= "Eric";
var message:string= "Would you like to learn some Python today";
console.log("hello", CusName, message);

// store a person name in a variable and then print that person name in lower case, uppercase and title case.

var name1:string = "M. Burhan Butt";
console.log("person name in lower case", name1.toLowerCase());
console.log("person name in upper case", name1.toUpperCase());

// title case

// Find a quote from a famous person you admire. Print the qoute and the name of its author. your output should look something like the following, including th quotation mark.
var authorName:string= "Allama Iqbal";
var quote:string = "People who have no hold over their process of thinking are likely to be ruined by liberty of thought.";
console.log(authorName, "once said;", quote);

/*Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.
You should create four lines that look like this:console.log(5 + 3)
Your output should simply be four lines with the number 8 appearing once on each line.
*/

console.log(5+3);
console.log(11-3);
console.log(24/3);
console.log(4*2);

/*Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
*/
var favNumber:number = 5;
var message:string = "Your Favourite Number is";
console.log(message, favNumber);

//Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

//comments are added before each questions above//

//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
//

let nameArray:string[] = ["sahir","Khawar","Amir","Fakhar","zeeshan","imtiaz","Fizan" ];
console.log(nameArray);
for (let i=0; i<nameArray.length; i++){
console.log(nameArray[i]);
}

/*Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
*/

let namearr:string[] = ["saba","hina","hira","rabia"];
console.log(namearr);
for (let i=0; i<namearr.length; i++){
console.log(namearr[i], "your assignment is ready");
}
//Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”//

let transport:string[]= ["ToyotaGLI", "cultus", "honda", "train","thaiairways"]
for (let i=0; i<transport.length;i++){
if(transport[i]== "ToyotaGLI"){
    console.log(transport[i], "i prefer to use it for outstation visits")
}  
else if (transport[i]=="cultus"){
    console.log(transport[i], "Fuel economical car for visiting intercity");
    }  
else if(transport[i]=="honda"){
    console.log(transport[i], "Me ta Honda e le san");
    } 
    else if(transport[i]=="train"){
        console.log(transport[i], "Train is best for visiting Karachi");
    }
    else{console.log(transport[i], "use thaiairways for visiting bankok");
    
    }
}
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let guestList:string[]= ["Nadeem", "Shabana","Yasmeen","Saima","nahid"];
for(let i=0; i < guestList.length; i++){
console.log(guestList[i], "Im feeling delighted to invite you for dinner");

}

//Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

let guestList1:string[]= ["Nadeem", "Shabana","Yasmeen","Saima","nahid"];
for(let i=0; i<guestList1.length;i++){
guestList1.splice(3,1,);
console.log(guestList1[i], "You are invited to dinner");
}
console.log("unfortunately Saima couldnot join us for dinner");

// Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.
// Print a second set of invitation messages, one for each person who is still in your list.
let guestList2:string[]= ["Nadeem", "Shabana","Yasmeen","Saima","nahid"];
for(let i=0; i<guestList2.length;i++){
guestList2.splice(3,1,"Naeem");
console.log(guestList2[i], "You are invited to dinner");
}

//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
//Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
let guestList3:string[]= ["Nadeem", "Shabana","Yasmeen","naeem","nahid"];
guestList3.push("Raouf");
guestList3.push("Burhan");
guestList3.push("Rida");
for(let i=0; i<guestList3.length;i++){
console.log(guestList3[i], "You are invited to dinner");
}
console.log("i found a bigger dinning table, as more people are added in dinner list");

// Add one new guest to the beginning of your array.//
let guestList4:string[]= ["Nadeem", "Shabana","Yasmeen","naeem","nahid"];
guestList4.splice(0,0,"Yameen")
for(let i=0; i<guestList4.length;i++){
console.log(guestList4[i], "You are invited to dinner");
}

// Add one new guest to the middle of your array.//
let guestList5:string[]= ["Nadeem", "Shabana","Yasmeen","naeem","nahid"];
guestList5.splice(guestList5.length/2,0,"ruqia");
console.log(guestList5);
// Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.//
let guestList6:string[]= ["Nadeem", "Shabana","Yasmeen","naeem","nahid"];
guestList6.push("Sobia");
for(let i=0;i<guestList6.length;i++){
if(guestList6[i]=="Nadeem"){
    console.log(guestList6[i], "Hi! You are invited to dinner");
    }
     else if(guestList6[i]=="Shabana"){
        console.log(guestList6[i], "Hi! Im happy to invite to dinner");
        }  
 else if(guestList6[i]=="Yasmeen"){
            console.log(guestList6[i], "Hi! Can you come to dinner");
            }  
     else if(guestList6[i]=="Naeem"){
                console.log(guestList6[i], "Hi! can you come to join me on dinner");
                }
     else if(guestList6[i]=="Nahid"){
                    console.log(guestList6[i], "Hi! You are invited to dinner");
                    } 
                    else {
                        console.log(guestList6[i], "Hi! You are invited to dinner");
                        } 

                    }
