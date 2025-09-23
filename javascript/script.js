






// let text = "this is a test for archutha";
// let words = text.split("");
// console.log(words);
// for(let i = 0; i < words.length; i++){
// let word = words[i];
// console.log(word);

// words[i] = word[0].toUpperCase() + word.slice(1);
// }
// let result = words.join("")
// console.log(result);


// const numbers = [1,2,3,3,4,5,5,6,7,7,8,9]
// {
//     uniqueNumbers = [1,2,3,4,5,6,7,8,9];
//     duplicateNumbers = [3,5,7];
// }
// 




// let player = {
//     name : "per",
//     chips : 142
// }

// let cards = [];
// let sum = 0 ;
// let isAlive = false;
// let hasBlackJack = false;
// let message = "";
// console.log(sum);
//  let messageEl = document.getElementById("message-el");
//  let sumEl = document.getElementById("sum-el");
//  let cardEl = document.getElementById("card-el");
// let playerEl = document.getElementById("player-el");
//     // playerEl.textContent = player.name + " :$ " + player.chips;

//  function getRandomCard(){
//     let randomNumber = Math.floor(Math.random()*13)+1;
//     if(randomNumber > 10){
//         return 10
//     }
//     else if(randomNumber === 1){
//         return 11
//     }
//     else {
// return randomNumber
//     }
    
//  }

//  function startGame(){
//     isAlive = true;
//     let firstCard = getRandomCard();
//     let secondCard = getRandomCard();
//    cards = [firstCard , secondCard];
//     let sum = firstCard + secondCard;
//    renderGame()
//  }

// function renderGame() {
//     cardEl.textContent = "cards:" 
//     for(let i = 0; i< cards.length; i+=1){
//         cardEl.textContent=  "cards:" + cards
//     }
//     sumEl.textContent = "Sum:"+sum;
// if(sum < 21){
//     message = ("Do you want to draw the new card 😊");
// }
// else if(sum === 21) {
//     message = ("you have win the BlackJack game! 😍");
    
// }
// else if(sum > 21){
//    message = ("you have lost the game! 😂");
//     isAlive = false;
// }
// messageEl.textContent = message;
// }
// function newCard(){ 
//     if(isAlive ===true  && hasBlackJack ===false){
//     let card = getRandomCard();
//       sum += card;
//       cards.push(card)
//       console.log(cards)
//     renderGame()
//     }  

// }







// let fruits = ["apples","oranges","oranges",'apples',"apples","oranges" , "oranges"];
// let appleShelf = document.getElementById("apple-Shelf");
// let orangeShelf = document.getElementById("orange-Shelf");
// function myfavourite(){
//     for(let i =0; i < fruits.length; i+=1){
//         if(fruits[i] === "apples"){
//           appleShelf.textContent =  "apples :" 
//           console.log("apples added")
//         }
//         else if(fruits[i] === "oranges" ){
//             orangeShelf.textContent = "oranges "
//             console.log("oranges added")
//         }
//     }
// }
//  myfavourite()


// let myNumbers = [1,2,3,3,4,5,5,6,7,7,8,9];
// function getNumbers(){
//     uniqueNumbers = [];
//     duplicateNumbers = [];
//     for(let i = 0;i< myNumbers.length; i+=1){
//         let num = myNumbers[i];
//         if (uniqueNumbers.includes(num)){
//             if(!duplicateNumbers.includes(num)){
//             duplicateNumbers.push(num);
//         }
//         }
//         else{
//                 uniqueNumbers.push(num);
//         }
//         }
//         console.log("uniqueNumbers:" , (uniqueNumbers));
//         console.log("duplicateNumbers:" , (duplicateNumbers));
//     } 
// getNumbers();


// let myLeads = ["www.goggle.com", "www.leads.com", "www.great.com"];
// const inputEl = document.getElementById("input-el")
// const buttonEl = document.getElementById("input-btn")
// const ulEl = document.getElementById("ul-el")
// buttonEl.addEventListener("click",function(){
//     myLeads.push(inputEl.value);
//     console.log(myLeads);
// })
// for(let i=0; i< myLeads.length; i++){
//     ulEl.innerHTML += "<li>" + myLeads[i] + "</li>"
// }
// let boxEl = document.getElementById("box-el")
// boxEl.addEventListener("click" ,function (){
// console.log("I want to open the box");
// })

// for(let i = 1; i<= 5;i++ ){
//     let row = "";
//     for(let j = 1; j<=i ;j++ ){
// row = row + "* ";
//     }
// console.log(row);
// }



// 1 ODD OR EVEN NUMBERS
let num = 99;
if(num % 2 === 0){
    console.log("Even number");
}
else{
    console.log("odd Number")
}

// 2 CHECK DRIVING LICENSE

let age;
age = 14;
if(age >= 18){
console.log("you have Driving license🚘")
}
else{
    console.log("Your Not Allowed to Drive vehicle 🔥")
}

// 3 CALCULATE CTC WITH A BONUS

let basicSalary = 12300;
let annualSalary = 12300 * 12;
console.log( "AnnulaSalary : ₹" , annualSalary);
let bonus = (annualSalary )* 0.2;
console.log( "Bonus: ₹" , bonus);
let totalCtc = annualSalary + bonus;
console.log( "TotalCTC : ₹" , totalCtc);

// 4 TRAFFIC LIGHTS
let color = "Green";
switch(color){
    case "Red":
        console.log("STOP");
        break;
        case "Green":
            console.log("Go");
            break;
            case "Yellow":
                console.log("Ready To Go");
                break;
            default:
                console.log("No Colour");
}

// 5 ELECTRICITY BILL
let units = 10;
let costPerUnit = 150;
let dailyCost = units * costPerUnit;
console.log("Daily Cost: ₹", dailyCost);
let monthlyCost = dailyCost * 30;
console.log( "Month Bill: ₹",monthlyCost);
let annualCost = monthlyCost * 12;
console.log("Annual Cost: ₹" , annualCost);
//discount give 20% so, you can calculate 100-20 = 80 => 0.80
let discount = annualCost * 0.80;
console.log("After Discount: ₹", discount);

// 6 CHECK WHETHER IT IS LEAP YEAR OR NOT

let year = 2024;
if(year % 4 === 0){
    console.log("yes it is leap year")
}
else{
    console.log("NO it is not leap year")
}

// 7 MAX OF THREE NUMBERS

let p = 24;
let q = 34;
let r = 32;

let max;
if(p >= q && p >=r){
    max = p;
}
else if( q >= p && q >=r){
    max = q;
}
else{
    max = r;
}
console.log("maximum Number:", max);


//output of code
let day = "monday";
switch(day){
    case "monday":
        console.log("it is the start of week day");
        break;
        default:
            console.log("it is not week day")
}

//Build an Atm cash withdrawl

// let number = (prompt("Enter the money"));
// if(number % 100 === 0){
//     console.log("withdrawl is successful");
// }
// else{
//     console.log("invalid amount");
// }

// Build calculator

let myNumber = "multiplication";
let x = 5;
let y = 4;
switch(myNumber){
    case "Addition" :
        console.log(x + y);
        break;
        case " subtraction" :
            console.log(x - y);
            break;
            case "multiplication" :
                console.log( x * y);
                break;
                case " division " :
                    console.log( x / y);
                    break;
                    default:
                        console.log("invalid number")
}

//MOVIE TICKET
let myAge = 70;
if(myAge <= 18){
    console.log("your ticket price is ₹50");
}
else if(myAge >= 18 && myAge <= 60){
    console.log("your ticket price is ₹100 ");
}
else{
    console.log("your ticket price is ₹200")
}


// HOROSCOPE SIGN CHECKER

let month = "october";
if(month === "july" || month === "october"){
    console.log("The person's Horoscope is ARIES");
}
else if (month === "january" || month === "march"){
    console.log("The person's  Horoscope is TAURUS");
}
else if(month === "November" || month === "December"){
    console.log("The person's Horoscope is GEMINI");
}
else{
    console.log("Invalid Horoscope");
}

//TRIANGLE

let x1 = 4;
let y1 = 2;
let z1 = 6;
if(x1 === y1  && y1=== z1 && z1 === x1){
    console.log("It is Equilateral triangle")
}
else if( x1 === y1 || y1 === z1 || z1===x1){
console.log("It is isoscelens triangle")
}
else if(x1 !==y1 && y1 !== z1 && z1 !==x1){
    console.log("It is Scalene triangle")
}

//NESTED LOOP
let myPramid = 5;
for(let i = 1; i<=myPramid; i++){
   let line = " ";
    for (let j=1; j<=i; j++){
        line += " *";
    }
    console.log(line);
}
// 2 NESTED LOOP
let row = 5;
for(let i= 1; i<= row; i++){
    console.log("* "  .repeat(i));
}

//MULTIPLICATION TABLE

for(i = 1; i<=10; i++){
        console.log (`${"3 * " } ${i}  ${" = "}  ${(3*i)}`);
    }
   
    //SUMMATION OF  ODD NUMBER BETWEEN 1 TO 500
    let sum = 0;
    for(let i =1; i<=500; i++){
    if(i % 2 !== 0){
        sum += i;  
    }
}
console.log("sum of the odd numbers from 1 to 500: " ,sum);

//SKIPPING MULTIPLES OF 3
console.log("Skipping multiple of 3")
for(i = 1; i<=20; i++){
    if(i % 3 ===0)
        continue;
    console.log(i)
}

//REVERSE NUMBER
let myNewNumber = 6789;
let reverse = 0;
while(myNewNumber > 0){
    let lastDigit = myNewNumber % 10;
    reverse = reverse * 10 + lastDigit;
    myNewNumber = Math.floor(myNewNumber / 10);
}
console.log( "Reverse Number:" ,reverse);

// About for loop; do while loop; while loop😍🤷‍♀️
// 1, forloop: it knows fixed number of iteration then we can used for loop
// syntax(for(let i = intialization; condition; updation)){...code execution..}🤷‍♂️
// 2, while loop: It does not know how many times i want loop but until it goes till true condition is reached
// syntax: while(condition){....code execution .....}
// 3, do while loop: It loop atleast once before checking condition whether it false or true
// syntax: do{....code execution....}  while(condition)

//FUNCTION TO CONVERT CELSIUS TO FAHRENHEIT
function celsiusToFahrenheit(celsius){
    // let celsius = 100;
    let fahrenhit = (celsius * 9/5) + 32;
    console.log(  "Fahrenheit:" ,fahrenhit);
}
celsiusToFahrenheit(100)

//FUNCTION OF FINDING MAXIMUM OF TWO NUMBERS
function findMax(num1 , num2){
    if(num1 > num2){
        console.log("maxNumber:" , num1)
    }
    else{
        console.log("maxNumber:", num2)
    }
}
findMax(-5, -2)

// FUNCTION TO CHECK STRING IS PALINDROME 
function isPalindrome(str){
 let reversed = str.split("").reverse() .join("");
    if(str === reversed){
        console.log(str , "is a Palindrome");
    }
    else{
        console.log(str , "is NOT palindrome");
    }
}
isPalindrome("noon")

//FUNCTION TO FIND FACTORIAL
function factorial(n){
    if(n === 0){
        return 1
    }
    else{
        return  n * factorial(n-1);
    }
}
 console.log(factorial(5))

 // FUNCTION TO COUNT STRING

function countVowel(str){
     let count = 0;
    
        for(let i = 0; i< str.length; i++){
            let char = str[i] .toLowerCase();
            if(char === "a" || char === "e" || char=== "i" || char === "o" || char === "u"){
            count++
            console.log(char)
        }
    }
    if(count === 0){
        console.log("NO VOWELS ARE PRESENT")
    }
      else{
        console.log("Total no of vowels:", count)
      }  
}
countVowel("ARCHUTHA PATEL")

//FUNCTION TO CAPITALIZE THE FIRST LETTER

function capitalizeWords(sentence){
   let words = sentence.split(" "); //split the sentence by the words
   for(let i = 0; i<words.length; i++){
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
   }
   let result = words.join(" ")
   console.log(result)
}
capitalizeWords("this is the test for archutha")
capitalizeWords("hello")

//IMMEDIATELY  INVOKED FUNCTION EXPRESSION (IIFE)
    // (function(name) {
    // console.log("hello " + name);
    // })("javascript");

//SIMPLE CALLBACK FUNCTION

function greet(name , callback){
    console.log("hello" , name)
    callback();
}
greet("javascript" , function(){
    console.log("This is the callback")
});

// CALL STACK EXECUTION
function f1(){
    console.log("Hello from f1");
}
function f2(){
    f1()
    console.log("hello from f2");
}
f2();

//CALL STACK EXECUTION 
function f1(){
    console.log("hello from html")
}
function f2(){
    console.log("hello from css")
}
function f3(){
    console.log("hello  from javascript")
     f1()
}
f2();
f3();
f1();

//BUILD PROJECT OF ROCK PAPER SCISSORS👻


// function RockPaperScissor(){
// let user = prompt("Enter  Rock, Paper or  Scissor");
// let userChoice = user.toLowerCase();


// const randomNumber = Math.floor( Math.random() * 3 )+1;
// let computerChoice;

// switch(randomNumber) {
//     case 1:
//        computerChoice = "rock";
//         break;
//         case 2 :
//             computerChoice = "paper";
//             break;
//             case 3:
//             computerChoice = "scissor";
//                 break; 
//                 default:
//                 computerChoice = "invalid";
// }
// console.log("userchoice:" , user);
// console.log("computerChoice:", computerChoice)
// if(
// (userChoice === "rock" && computerChoice === "scissor")||
//  (userChoice === "paper" && computerChoice === "rock") ||
// (userChoice === "scissor" && computerChoice === "paper") 
// )
// {
//     console.log("User Wins the Game!");
// }
// else if(user === computerChoice){
//     console.log("Your Game is Tie");
// }
// else if(
// (computerChoice === "rock"  && userChoice === "scissor")||
// ( computerChoice === "paper" && userChoice === "rock") ||
// (computerChoice === "scissor" && userChoice === "paper")
// )
//     {
//     console.log("Computer wins the Game!");
// }
// else{
//     console.log("please Check the input")
// }
// const playAgain = prompt("Do you want to play Again? (yes / no)")
// if(playAgain === "yes"){
//     RockPaperScissor();
// }
// else{
//     console.log("Thanks for playing!")
// }
// }
// RockPaperScissor()




//NUMBER GUESSING GAME☠️

// function numberGuessingGame(){
//     const maxNumber = 10;
//     const minNumber = 1;
//     const secretNumber = Math.floor(Math.random() * 10)+1;
//     let attempts  = 0;
//     let userGuess;

//     while (true) {
//  userGuess = Number(prompt(`Enter the Number from ${minNumber} to ${maxNumber}`));
//  attempts ++;

//  if(isNaN(userGuess)){
//     console.log("Enter a valid Number");
//     continue;
//  }

    
//     if (userGuess === secretNumber){
//         console.log("You Guessed Correct Number");
//          break;
//     }

//     else if(userGuess > secretNumber){
//         console.log("Your Guess is too high!")
//     }
//     else if(userGuess  < secretNumber){
//         console.log("Your Guess is too low")
//     }
// }
//     console.log("Total Number Of Attempts:", attempts);
// const playAgain = prompt("Do you want Play Again (yes / no) ").toLowerCase();
// if (playAgain === "yes"){
// numberGuessingGame();
// }
// else{
//     console.log("Thanks for playing!")
// }
// }
// numberGuessingGame()
   
//EXECUTION CONTEXT DIAGRAM
const message = "I can do it";

function sum1 (a,b) {
      const result = a + b;
      return result;
}
    function mul(a,b){
        const result = a * b;
        return result;
    }
    function calc(a,b) {
        return (sum1(a,b)+ mul(a,b)) / 2;
    }
    function getResult(a, b){
        return calc(a ,b);
    }
     console.log(getResult(8 , 5));


     function mul(y){
        return x * y;
     }
     console.log(mul(4));

     //Temporal Dead  Zone 
     {
        let x = 4;
        let y = 6;
        let z = 7;
        console.log( x * y * z);
     }
     //Variable and function Hoisting
    
let myNum = 6;
     function sayHello(){
        console.log("my Age is :", myNum);
     }
     sayHello();

     //output of the code

     function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    }
}
const counter = outer();
counter();//1
counter();//2

// output of the code
function testClosure() {
    let x = 10;
    return function () {
        return x * x;
    };
}
console.log(testClosure ()());//100

//Button creation dynamically with closure property
function setUpbutton(){
    let count = 0;
     const button = document.createElement("button");
     button.textContent = "click me";

     button.addEventListener("click",function(){
        count++;
        console.log("button is clicked", count ,"times")
     });
     document.body.appendChild(button);
      
}
 setUpbutton()

 //function with multiplyer numbers
 function createMultiplier(multiplier){
    return function(a ){
return a * multiplier;
    }
    
 }
  const multiplier = createMultiplier(7)
  console.log(multiplier(10));

  //function factory
  function factoryCounter(){
    let counter = 0;
    
        return{
            increment:function(){
                counter++;
                console.log("The number after increment" ,counter )
            },
            decrement:function(){
                counter--;
                console.log("The number after decrement:", counter)
            },
            getcount:function(){
                console.log("current value", counter)
            }
        };
  }
  const mycounter = factoryCounter();
  console.log(mycounter);
  mycounter.getcount()
  mycounter.increment()
   mycounter.increment()
  mycounter.decrement();
  mycounter.getcount()

  //output of given code:
  const user = { name: "Alex", age: undefined };
console.log(user.age );

// modify frozen
const obj = Object.freeze({ a: 1 });
obj.a = 2;
console.log(obj.a);// in freezen it cannot modify it 

//Destruction method
const person = {
  name: "Tapas",
  company: {
    name: "tapaScript",
    location: {
      city: "Bangalore",
      zip: "94107"
    }
  }
};
const{  //solution
    name,
    company,
    company : {location : {city}}
} = person;
console.log(name);
console.log(company);
console.log(city);

//STUDENT MANAGEMENT SYSTEM

let student = {
    name:"Ammulu",
    age:23,
    grade:[85,90,78,92],
    getAverage : function(){
let sum = this.grade.reduce((acc ,g) => acc + g ,0 );
let result = (sum / this.grade.length);
return result
    }
}
console.log("Name :",student.name);
console.log("age:", student.age);
console.log("Grades :", student.grade);
console.log("GradeAverage :",student.getAverage());

//BOOK STORE INVENTORY SYSTEM
let book = {
    math: "isavaliable",
    english: "isavaliable",
    physics:"notavaliable",
    sanskrit:"isavaliable",
    mybook: function(subject){
        if(this[subject] === "isavaliable"){
          return subject + " book is avaliable";
        }
     else {
        return subject+ " book is not avaliable"
    }
    }
}
console.log(book.mybook("math"));
console.log(book.mybook("english"));
console.log(book.mybook("physics"));
console.log(book.mybook("social"));

//Difference between object.key() and object.entries()
//object.key() in this it  will return only keys NOT THE PROPERTY VALUES it is stored in the array
let studentDetails = {
    myName : "Archutha",
    age:23,
    location:"Husnabad",
    college:"kakatiya University"
}
console.log(Object.keys(studentDetails));
//object.entries() in this it will return key and values total object and it is stored in the same arrray
let studentmyDetails = {
    myName : "Archutha",
    age:23,
    location:"Husnabad",
    college:"kakatiya University"
}
console.log(Object.entries(studentDetails));
//CHECK THE OBJECT HAS CERTAIN VALUE OR NOT
//we write the object with key value pairs if any object we want to acces we access with the object name if it exists it return the output otherwise not
//output of this
const myperson = { name: "John" };
const newPerson = myperson;
newPerson.name = "Doe";
console.log(myperson.name);
//Nested objects
const myDetails = {
    name:"sai",
    age:22,
    location:{
        street:"yellamma bazar",
        city:"Husnabad",
        pincode:50567,
    },
    college:"keshava",
    city:"Hyderabad"
}
console.log(Object.keys(myDetails));
console.log(Object.entries(myDetails));
console.log(Object.values(myDetails));

//OBJECT DESTRUCTING
const users = [
  {
      'name': 'Alex',
      'address': '15th Park Avenue',
      'age': 43
  },
  {
      'name': 'Bob',
      'address': 'Canada',
      'age': 53
  },
  {
      'name': 'Carl',
      'address': 'Bangalore',
      'age': 26
  }
];
for(let i = 0; i<= users.length; i++){
    console.log(users[i]);
}