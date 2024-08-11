// Function to validate the password
function validatePassword(password, confirmPassword) {
    if (password === confirmPassword) {
        console.log("Password Matched. Password validation Successful.");
    } else {
        console.log("Password didn't match. Password validation unsuccessful.");
    }
}


let password = prompt("enterPassword");
let confirmPassword = prompt("reEnterPassword");

validatePassword(password, confirmPassword);
