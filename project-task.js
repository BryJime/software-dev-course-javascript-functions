/*
===========================================
🔁 Function Refactoring Activity
===========================================

🎯 Objective:
Students will identify repetitive or poorly organized code in a given script
and refactor it by creating programmer-defined functions.

This activity reinforces:
- Writing functions with no, single, and multiple parameters
- Using return statements effectively
- Improving code reusability and modularity

---
🧭 Instructions:

1️⃣ Analyze the provided script, which performs a series of repetitive tasks.

2️⃣ Identify sections of code that can be improved using functions.

3️⃣ Write reusable functions with appropriate parameters and return statements.

4️⃣ Refactor the original code to use your new functions.

5️⃣ Test the refactored script to ensure it produces the same output as the original.

---
*/

// ============================================
// ❌ Original Code (Before Refactoring)
// ============================================

// Script 1 - Greeting multiple users
console.log("Welcome, Alice!");
console.log("Welcome, Bob!");
console.log("Welcome, Charlie!");

console.log(" ");

// Our code with function
function greet(name){
   console.log("Welcome, " + name + "!");
}
greet("Alice");
greet("Bob");
greet("Charlie");

console.log(" ");


// Script 2 - Sum calculation
let num1 = 5, num2 = 10;
let sum = num1 + num2;
console.log("The sum of 5 and 10 is " + sum);

// Our Code
console.log(" ");

function sumOfNum(num1, num2){
let sum = num1 + num2;
console.log("The sum of " + num1 + " and " + num2 + " is " + sum);
}

sumOfNum(30, 60);

console.log(" ");

// Script 3 - Product calculation
let product = num1 * num2;
console.log("The product of 5 and 10 is " + product);

// Our Code
console.log(" ");

function productOfNum(num1, num2){
   let product = num1 * num2;
   console.log("The product of " + num1 + " and " + num2 + " is " + product);
   }
   
   productOfNum(5, 10);
   
   console.log(" ");



// Script 4 - Print names from a list
let names = ["Alice", "Bob", "Charlie"];
console.log("Names in the list:");
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Our Code

console.log(" ");

names = ["Alice", "Bob", "Charlie"];

function printNames(names){
   console.log("Names in the list:");
   for (let i = 0; i < names.length; i++) {
       console.log(names[i]);
   }
}

printNames(names);


/*
===========================================
🛠️ Steps for Refactoring
===========================================

🔹 Break Down Tasks into Functions:
   - Identify repetitive patterns (e.g., greetings, calculations, list printing)
   - Define separate functions for each task

🔹 Write Functions with Parameters and Return Values:
   - Parameterize functions for flexibility (e.g., pass in name, numbers, arrays)
   - Use return statements where necessary

🔹 Refactor the Original Code:
   - Replace repeated code with meaningful function calls
   - Keep your code clean, readable, and easy to maintain
*/

// ✅ Your refactored code goes below this line!



/* COMMENTS FOR Practice Solution: Functions and Scope - 1

- For the first function, it looks pretty much the same except the solution uses 
a more efficient method by calling the name by using ${ } instead of using + to add 
strings and the variable. Using ${ } is much more efficient in terms of readability 
and convenience. 

- The second function solution is much simpler and cleaner compared to mine. 
I declared a variable that sums the two numbers and used console.log within the function. 
Mine works but adds more things that don't really need to be in there to get the job 
done. 

- Same goes for the third function solution as the second function. 
The solution provides a much cleaner approach to the function. 

- The last function solution is pretty much the same as my original. 
Only thing that's different the parameter name. 

- Overall I the solution code provides a way for me to perhaps consider ways to make 
my code cleaner and simpler to complete the same thing but making it more efficient. 


*/




