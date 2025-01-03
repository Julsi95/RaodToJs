//** INTRODUCTUION TO JS
// console.log('test');
// window.alert('test');
//**===============DOM===================*/
//The 'document' object allows you to access and manipulate elements in the HTML
//'document' is a global object that represents the HTML document (or webpage)

// ?==========================================================================================

//***------------------VARIABLES---------------------*/
//variable = container that stores a value

//**-------- Two tpes of variables----------- //
// 1. declaration --> let x; <---declaration needs to be unique
// 2. assignments --> x = 1;

//*------------DECLARATION-------------*/
// declaration variableName;
// let variableName;   // Declaration of a variable without a value
// let x; 
// let x; double declaration will show a syntax error, change to let y;

//*-------------ASSIGNMENT--------------*/
// variableName = assignmentValue
// x = 100;

//*-------------COMBINED--------------*/
//Both declaration and assignment
//declaration variableName = assignmentValue
//let x = 100;

//*-------------QUOTATIONS--------------*/
// " " Common for simple strings, allows single quotes inside --> "Hello, world!"	
// ' ' Another common way to define strings, escape single quotes --> 'It\'s a nice day'
// ` ` Allows multi-line strings and expression interpolation or insert a variable inside --> `Hello, ${name}!`

//*-------------DATA TYPES--------------*/
// Number 
// "String"
// Boolean: True or False
// let x = 100;
// let x = "Some text";
// let x = true;

//* When using a tempalte literal for strngs can be like this
// let name = 'John';
// let x = `Hello, ${name}`;  //* Using an expression inside the string
// console.log(x);  // Output: Hello, John

// ARITHMETIC OPERATORS = operands("values, variables, etc.")
//                        operators(+, -, *, /) example: 11 = x + 5;

// ?==========================================================================================
/*-------------TAKING USERS INPUT--------------*/
// let textin;
// document.getElementById("submitbtn").onclick = function () {
//     textin = document.getElementById("typein").value;
//     document.getElementById("displayin").textContent = `NIGGA ${textin}`;
// }

// ?==========================================================================================
/*-------------DATA TYPE CONVERSION--------------*/
// let x = "one"; //Not a Number (NaN)
// let y = "two";
// let z = "three";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, y, z, typeof x, typeof y, typeof z);

// ?==========================================================================================

/*-------------BUTTON CLICK COUNTER--------------*/
// const increment = document.getElementById("increment");
// const decrement = document.getElementById("decrement");
// const reset = document.getElementById("reset");
// const counter = document.getElementById("count");

// let count = 0;

// increment.onclick = function (){
//     count++;
//     counter.textContent = count;
// }


// decrement.onclick = function (){
//     count--;
//     counter.textContent = count;
// }

// reset.onclick = function () {
//     count = 0
//     counter.textContent = count;
// }

// ?==========================================================================================
/*-------------DELAY DISPLAY--------------*/
// function logMessage() {
//     console.log("Message logged!");
//   }
//  
//    Pass the function reference (not executed yet)
//   setTimeout(logMessage, 2000); // Waits 2 seconds, then executes logMessage
// 
//    Call it immediately (executed immediately)
//   logMessage(); // Outputs: "Message logged!" right now
// ?==========================================================================================

/*-------------IF, NESTED IF, ELSE IF STATEMENTS--------------*/
// const inputage = document.getElementById("inputage");
// const submitage = document.getElementById("submitage");
// const message = document.getElementById("message");

// let age;


// submitage.onclick = function(){
//   age = inputage.value;
//   age = Number(age);
//   if(age >= 80){
//     message.textContent = `IN AGE OF ${age} YOU DAMN SO OLD HOW ARE YOU STILL ALIVE???`;
//     if(age >= 100){
//       message.textContent = `IN AGE OF ${age} WHAT THE FUCK???`;
//     }
//   }
//   else if(age >= 20){
//     message.textContent = `IN AGE OF ${age} WELCOME TO REALITY`;
//   }
//   else if(age == 0){
//     message.textContent = `IF YOUR AGE IS ${age} HOW YOU CAN USE KEYBOARD THEN?`
//   }
//   else if(age <= 7){
//     message.textContent = `IF YOUR AGE IS ${age} DAMN`
//   }
//   else if(age < 20){
//     message.textContent = `YOUR ARE JUST ${age} GO OUTSIDE AND PLAY, ENJOY YOUR LIFE`
//   }
//   else{
//     message.textContent = `NO AGE ARE YOU AN ALIEN?`
//   }
// }




/*-------------CHECKED PROPERTY WITH NESTED IF ELSE PRACTICE--------------*/
//*! NOTE!!! Avoid using nested if when you can achieve the same result with else if, as it simplifies the code and makes it easier to understand and avoid redundancy checking.
// const msg = document.getElementById("checkmsg");
// const rmsg = document.getElementById("radiomsg");
// const optionf = document.getElementById("option1");
// const optionse = document.getElementById("option2");
// const optiont = document.getElementById("option3");
// const fradio = document.getElementById("radio1");
// const sradio = document.getElementById("radio2");
// const tradio = document.getElementById("radio3");
// const submitcheck = document.getElementById("submitcheck");

// submitcheck.onclick = function(){
//     if(optionf.checked && optionse.checked){
//         if(optionf.checked && optionse.checked && optiont.checked){
//             msg.textContent = `1,2 and 3 was checked`
//         }
//         else{
//             msg.textContent = `1 and 2 was checked`
//         }
//     }
//     else if(optionf.checked){
//         if(optionf.checked && optiont.checked){
//             msg.textContent = `1 and 3 was checked`
//         }
//         else {
//             msg.textContent = `Option 1 was checked`
//         }
//     }

//     else if(optionse.checked){
//         if(optionse.checked && optiont.checked){
//             msg.textContent = `2 and 3 was checked`
//         }
//         else{
//             msg.textContent = `Option 2 was checked`
//         }
//     }
//     else if(optiont.checked){
//         msg.textContent = `Option 3 was checked`
//     }
//     else{
//         msg.textContent = `NO OPTION WAS CHECKED`
//     }    
//     if(fradio.checked){
//         rmsg.textContent = `Radio 1 was selected`
//     }
//     else if (sradio.checked) {
//         rmsg.textContent = ` Radio 2 was selected`
//     }
//     else if (tradio.checked){
//         rmsg.textContent = `Radio 3 was seelcted`
//     }
//     else{
//         rmsg.textContent = `NO RADIO SELECTED`
//     }
// }



// ?==========================================================================================


/*-------------SWITCH STATEMENT--------------*/
// i replaced the onlick function to addeventlistener to make
// document.getElementById("submitzodiac").addEventListener("click", function(){
//     let year = document.getElementById("inputyear").value;
//     year = Number(year);
//     let zodiac;

//     switch(year){
//         case 1956:
//         case 1968:
//         case 1980:
//         case 1992:
//         case 2004:
//         case 2016:
//             zodiac = `YEAR OF THE RAT`
//             break;

//         case 1949:
//         case 1961:
//         case 1973:
//         case 1985:
//         case 1997:
//         case 2009:
//         case 2021:
//         case 2033 :
//             zodiac = `YEAR OF THE OX`
//             break;
//         default:
//             zodiac = "TINAMAD NA AKO ulit ulitin practice lang naman";
//     }
//     document.getElementById("resultzodiac").innerHTML = zodiac;
// });


// ?==========================================================================================


// /*-------------STRING METHODS--------------*/ --> allow you to manipulate and work with text (string)
//  javascript has different, you can search on chatgpt or google on what strings methods is suited in your situation

// let str = "this is a string";

// result = str.startsWith("a");

// if (result){
//     console.log("meron daw")
// }
// else{
//     console.log("wala eh")
// }
// console.log(result);

// ?==========================================================================================

/*-------------STRING MANIPULATION--------------*/
// you can search on chatgpt or google on what string manipulation is suited in your situation
// let str = "123123-2323-123123";

// result = str.replaceAll("-", " ")
// console.log(result)
// console.log(`Dashes Replaced With Spaces ${result}`)

// ?==========================================================================================


//------- STRING SLICING----------/ --> creating a substring from a portion of another string string.slice(start, end)
// const myname = "krungkrung monolith";
// let firstname = myname.slice(0, myname.indexOf(" ")); // krungkrung
// const  lastname = myname.slice(myname.indexOf(" ")+1); //monolith if no +1 space will included " "monolith
// console.log(firstname) firstname is now an independent string containing "krungkrung" extracted string from const myname
// console.log(lastname) also same as first name explanation


// --- THIS IS AN EXPERIMENTAL IMPLEMENTATION TO SPLIT A STRING INTO AN ARRAY --- // 
// document.getElementById("submitname").addEventListener("click", function() {
//     const fullname = document.getElementById("inputname").value.trim(); // Trim to remove extra spaces;
//     let parts = fullname.split(" ")
//     let firstname = parts[0] ||  "Unknown";
//     const firstname = fullname.slice(0, fullname.indexOf(" "));
//     if(parts.length === 2){
//         console.log(`your fullname is 2 ${firstname}`)
//     }else if(parts.length === 3){
//         console.log("your fullname is 3")
//     }else if (parts.length === 4){
//         console.log("your fullname is 4")
//     }
//     else{
//         console.log("wala di gumana una")
//     }
//     console.log(firstname)
//     console.log(parts)
// })

// ?==========================================================================================

// --- METHOD CHAINING --- //  calling one method after another in one continous line of code
        // const cars = ["toyota", "nissan", "honda"]
        // let join = cars.map(car => car.charAt(0).toUpperCase() + car.slice(1).toLowerCase()).join().replaceAll(",", " ");
        // console.log(join)
        // console.log (cars, typeof cars)
        

// ?==========================================================================================

// --- LOGICAL OPERATORS --- // used to combine or manipulate boolean values
// (true or false) 
// AND = && 
// OR = ||
//  NOT = !

// This is AND operator 

// let logical = "Julius";
// if(logical.includes("ul") && logical.includes("li")){    ----> The && operator checks both conditions. The code inside the block will only run if both conditions are true.
//         console.log("yes it has")
// }else{
//         console.log("it dosent")
// }

// This is OR operator
// The || operator checks if either of the conditions is true. The code will run if at least one condition is true.
// switch(true){
//         case logical.includes("J") && logical.includes("z"): console.log("first was executed");
//         break;
//         case logical.includes("u") || logical.includes("z"): console.log("have");
//         break;
//         default:console.log("nothing")
// }


// This is the NOT operator example with parentheses for correct precedence
// The `!` negates the result of the comparison (logical.length <= 6)

// if (!(logical.length <= 6)) {
//         console.log("testing");  // This will run if logical.length is greater than 6
//     } else {
//         console.log("not working");  // This will run if logical.length is less than or equal to 6
//     }
/*
Explanation:
        The parentheses ensure the comparison logical.length <= 6 is evaluated first. Then, the result (true or false) is negated by !. If the length is 6 or less, logical.length <= 6 is true, but ! makes it false, so the else block runs. If the length is greater than 6, logical.length <= 6 is false, and ! makes it true, so the if block runs.

        This is the NOT operator example without parentheses (incorrect usage of precedence)
        The expression is evaluated as: !(logical.length) <= 6
        Here, the NOT operator negates the value of logical.length before comparing it to 6

        if (!logical.length <= 6) {
                console.log("testing");  // This will run unexpectedly
        } else {
                console.log("not working");  // This will run unexpectedly
        }

Explanation:
        The ! operator applies to logical.length first due to precedence, making !6 false. This changes the comparison to false <= 6, which evaluates to true (false is coerced to 0). The if block runs unexpectedly because of this negation. Operator precedence: ! has higher precedence than comparison operators, so it negates the value before the comparison.

    // **Operator Precedence Notes**:
    // 1. `!` (logical NOT) has higher precedence than comparison operators like `<=`.
    // 2. When you use `!` without parentheses, it negates the value **before** the comparison happens.

    // ?==========================================================================================

// --------------------------STRICT EQUALITY-------------------------------//
//  = assignment operator
//  == comparison operator (compare if values are eqal)
//  === strict equality operator (compare if values & datatype are equal)
//  != inequality operator
//  !== strict inequality operator














// if else statements
// let age = 20;

// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }

//  case statement
// let color = "green";

// switch (color) {
//     case "red":
//         console.log("Stop!");
    
//     case "yellow":
//         console.log("Caution!");
    
//     case "green":
//         console.log("Go!");
//     default:
//         console.log("Unknown color");
// }

// for (let i = 0; i < 5; i++) {
//     console.log("Count:", i);
// }
