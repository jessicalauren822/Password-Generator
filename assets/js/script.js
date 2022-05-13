// Assignment code here
var length = Number(prompt("How many characters should the password have (between 8-128)?"));
var lowercase = confirm("Would you like your password to have lowercase letters?");
var uppercase = confirm("Would you like your password to have uppercase letters?");
var numeric = confirm("Would you like yourpassword to have numbers?");
var special = confirm("Would you like your password to have special characters?");

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
