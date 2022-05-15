// Assignment code here
var generatePassword = function() {
    passwordLength = (window.prompt("How many characters should the password have (between 8 - 128?"));
    console.log(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 - 128 characters.");
    return password();
  }

  if(passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return password();
  }
    
  if (passwordLength >= 8 && passwordLength <=128){
    var characterOptions = function() {
      var lowercase = confirm ("Would you like your password to have lowercase letters? Please select 'Ok' for yes or 'Cancel' for no.");
      console.log(lowercase);

      var uppercase = confirm ("Would you like your password to have uppercase letters? Please select 'Ok' for yes or 'Cancel' for no.");
      console.log(uppercase);

      var numeric = confirm ("Would you like your password to have numbers? Please select 'Ok' for yes or 'Cancel' for no.");
      console.log(numeric);

      var special = confirm ("Would you like you password to have special characters? Please select 'Ok' for yes or 'Cancel' for no.");
    
    while (!lowercase && !uppercase && !numeric && !special) {
      window.alert("You must say yes to at least one character type.");
      return characterOptions();
  
    }
  }
}
  
  characterOptions();
}

function generatePassword() {
  var password = "";

  var allowed = {};
  if (lowercase) password += random(allowed.lowercase = "abcdefghijklmnopqrstuvwxyz");
  if (uppercase) password += random(allowed.uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ");
  if (numeric) password += (Math.floor(Math.random() * 10));
  if (special) password += random(allowed.special = "!@#$%^&*()");

  for (var i = passwordLength.length; i < passwordLength; i++) password += random(random(allowed).value);

}

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

writePassword();