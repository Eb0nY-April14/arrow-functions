/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function (The normal JS that I know & is commonly used )
// function addTwoNumbers(a, b) {
//     // Code block
//     return a + b;
// }
// let sum = addTwoNumbers(3, 5);
// console.log(sum);

// Arrow Function With Parameters. 
// Arrow functions that run complex logic in a code block & use the return statement.
/* Arrow functions are defined as constants to ensure that they can't
   be overwritten or misused later. */
    const addTwoNumbers = (a, b) => {
        // Code block
        return a + b;
    }
    let sum = addTwoNumbers(3, 5);
    console.log(sum);

// Single Line Arrow Function With Parameters.  
/* For simple functions, the Arrow Function shown above can be further
   compressed/written into a single line as done below but for complex
   functions, we'll need the curly braces & a return statement. */
   /* const addTwoNumbers2 = (a, b) => (a + b);  This is valid as the one below it */
    const addTwoNumbers2 = (a, b) => a + b;
    let sum2 = addTwoNumbers2(6, 4); // This is the Calling function
    console.log(sum2);

//  Implicit Returns
/* For simpler functions that only take a single parameter, we can leave out the first set of parenthesis */
    const saySomething = message => console.log(message);
    saySomething('Hello there!!');  // This is the Calling function

/* For Arrow functions that take no parameter at all, we must use an empty set of parenthesis to tell JavaScript
that we are declaring a function */
    const sayHello = () => console.log('hello')
    sayHello(); // This is the Calling function

// Returning Multiple Lines.
/* If we need to return multiple lines of code, we must wrap whatever comes after the return keyword in parenthesis */
const returnMultipleLines = () => (
    `<p>
      This is a multiline string!
    </p>`
)
console.log(returnMultipleLines()); 
