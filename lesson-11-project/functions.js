const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout  
});

// Added operation parameter and improved function name
function calculate(num1, num2, operation) {
    // Added switch statement for better readability and error handling
    switch (operation) {
        case '+': return num1 + num2;
        case '-': return num1 - num2;
        case '/': return num2 !== 0 ? num1 / num2 : 'Error: Division by zero';
        case '*': return num1 * num2;
        default: return 'Error: Invalid operation';
    }
}

rl.question("The first number: ", (firstNum) => {
    rl.question("Operation (+, -, /, *):", (operation) => {
        rl.question("The second number: ", (secondNum) => {
            // Added radix parameter to parseInt
            firstNum = parseInt(firstNum, 10);
            secondNum = parseInt(secondNum, 10);

            // Changed variable name from sum to result
            let result = calculate(firstNum, secondNum, operation);
            
            // Updated output message and added error handling
            if (typeof result === 'number') {
                console.log(`The result is: ${result}`);
            } else {
                console.log(result); // Print error message
            }

            rl.close();
        });
    });
});
