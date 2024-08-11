// Function to perform a calculation
function calculator(num1, num2, operator) {
    let result;

    // Convert num1 and num2 to numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                console.log("Error: Division by zero is not allowed.");
                return;
            }
            break;
        default:
            console.log("Invalid operator");
            return;
    }

    console.log(`Result: ${result}`);
}

// Get user input
let num1 = prompt("Enter first number:");
let operator = prompt("Enter operator (+, -, *, /):");
let num2 = prompt("Enter second number:");

// Call the calculator function
calculator(num1, num2, operator);
