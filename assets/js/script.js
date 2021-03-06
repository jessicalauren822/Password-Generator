// Assignment code here

var passwordOptions = function() {
    passwordLength = (window.prompt("How many characters should the password have (between 8 - 128?"));
    console.log(passwordLength);

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 - 128 characters.");
    return passwordOptions();
  }

  if(passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return passwordOptions();
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
  var chars = {};
    if (lowercase = true) {
      const chars = "abcdefghijklmnopqrstuvwxyz";
    };

    if (uppercase = true) {
      const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    };

    if (numeric = true) {
      const chars = "1234567890";
    };

    if (special = true) {
      const chars = "!@#$%^&*()";
    };

  var charactersLength = chars.length;
  for (var i = 0; i < passwordOptions; i++) {
    password += generatePassword(Math.floor(Math.random() * charactersLength));
  }
}
console.log (generatePassword());
document.querySelector("#password").value = generatePassword;


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

passwordOptions();
generatePassword();
writePassword();