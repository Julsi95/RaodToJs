// INTRODUCTUION TO JS
// console.log('test');
// window.alert('test');
/*===============DOM===================*/
//The 'document' object allows you to access and manipulate elements in the HTML
//'document' is a global object that represents the HTML document (or webpage)

/*------------------VARIABLES---------------------*/
//variable = container that stores a value

//-------- Two tpes of variables----------- //
// 1. declaration let x; <---declaration needs to be unique 
// 2. assignments x = 1;

/*------------DECLARATION-------------*/
// declaration variableName;
// let variableName;   // Declaration of a variable without a value
// let x; 
// let x; double declaration will show a syntax error, change to let y;

/*-------------ASSIGNMENT--------------*/
// variableName = assignmentValue
// x = 100;

/*-------------COMBINED--------------*/
//Both declaration and assignment
//declaration variableName = assignmentValue
//let x = 100;

/*-------------QUOTATIONS--------------*/
// " " Common for simple strings, allows single quotes inside --> "Hello, world!"	
// ' ' Another common way to define strings, escape single quotes --> 'It\'s a nice day'
// ` ` Allows multi-line strings and expression interpolation or insert a variable inside --> `Hello, ${name}!`

/*-------------DATA TYPES--------------*/
// Number 
// "String"
// Boolean: True or False
// let x = 100;
// let x = "Some text";
// let x = true;

// When using a tempalte literal for strngs can be like this
// let name = 'John';
// let x = `Hello, ${name}`;  // Using an expression inside the string
// console.log(x);  // Output: Hello, John

// arithmetic operators = operands("values, variables, etc.")
//                        operators(+, -, *, /) example: 11 = x + 5;

/*-------------TAKING USERS INPUT--------------*/
// let textin;
// document.getElementById("submitbtn").onclick = function () {
//     textin = document.getElementById("typein").value;
//     document.getElementById("displayin").textContent = `NIGGA ${textin}`;
// }


/*-------------DATA TYPE CONVERSION--------------*/
// let x = "one"; //Not a Number (NaN)
// let y = "two";
// let z = "three";

// x = Number(x);
// y = String(y);
// z = Boolean(z);

// console.log(x, y, z, typeof x, typeof y, typeof z);



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


/*-------------DELAY DISPLAY--------------*/
// function logMessage() {
//     console.log("Message logged!");
//   }
//  
//   // Pass the function reference (not executed yet)
//   setTimeout(logMessage, 2000); // Waits 2 seconds, then executes logMessage
// 
//   // Call it immediately (executed immediately)
//   logMessage(); // Outputs: "Message logged!" right now


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






/*-------------SWITCH--------------*/



document.getElementById("sbmtres").addEventListener("click", function()
{
    let car = document.getElementById("inputcar").value.toLowerCase();
    let result;
        switch(car){
            case  "toyota":
                result = "NOT A LUXURY CAR";
                break;
            default:
                return "UNKNOWN CAR TYPE";
        }
        document.getElementById("carResult").innerText = result;
});

if(result == toyota){
    console.log("ee?")
}










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
