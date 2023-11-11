// Assignment Code
var generateBtn = document.querySelector("#generate");
// variables for password options
let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let special = "!@#$%^&*()_+";



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  

  passwordText.value = password;

}

// function to generate password based on user input and return's password
function generatePassword() {
    // variables for password
    let password = "";
    let passwordOptions = "";
    // variables for password options
    let passwordLength = prompt("How many characters would you like your password to be? (8-128)");
    let passwordLowercase; 
    let passwordUppercase;
    let passwordNumbers;
    let passwordSpecial;
// checks if password length is between 8 and 128 and if not, alerts user to enter a number between 8 and 128
    if (passwordLength < 8 || passwordLength > 128) {
        alert("Please enter a number between 8 and 128.");
        return;
    } else {
        passwordLowercase = confirm("Would you like to include lowercase letters?");
        passwordUppercase = confirm("Would you like to include uppercase letters?");
        passwordNumbers = confirm("Would you like to include numbers?");
        passwordSpecial = confirm("Would you like to include special characters?");
    }

    if (passwordLength < 8 || passwordLength > 128) {
    }

    if (!passwordLowercase && !passwordUppercase && !passwordNumbers && !passwordSpecial) {
        alert("Please select at least one character type.");
        return;
    } else {
        if (passwordLowercase) {
            passwordOptions += lowercase;
        }
        if (passwordUppercase) {
            passwordOptions += uppercase;
        }
        if (passwordNumbers) {
            passwordOptions += numbers;
        }
        if (passwordSpecial) {
            passwordOptions += special;
        }
    
    }

    // Generate password based on user input
    for (let i = 0; i < passwordLength; i++) {
        password += passwordOptions.charAt(Math.floor(Math.random() * passwordOptions.length));
    }
        
    return password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

writePassword();