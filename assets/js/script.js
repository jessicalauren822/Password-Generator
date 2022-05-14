// Assignment code here
var length = function() {
    length = (prompt("How many characters should the password have (between 8 - 128?"));
  
  if(length === "" || length === null) {
    length();
  }
  
  }
length();

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
