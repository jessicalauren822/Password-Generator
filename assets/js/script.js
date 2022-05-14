// Assignment code here
var passwordLength = function() {
    passwordLength = (prompt("How many characters should the password have (between 8 - 128?"));
  
if (passwordLength >= 8 && passwordLength <=128){
  
}

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 - 128 characters.");
    return passwordLength();
  }

  if(passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordLength();
  }
  
  }
passwordLength();

var lowercase = window.confirm("Would you like your password to have lowercase letters?");
var uppercase = window.confirm("Would you like your password to have uppercase letters?");
var numeric = window.confirm("Would you like your password to have numbers?");
var special = window.confirm("Would you like your password to have special characters?");

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
