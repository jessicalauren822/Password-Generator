// Assignment code here
var password = function() {
    passwordLength = (window.prompt("How many characters should the password have (between 8 - 128?"));

  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("Password must be between 8 - 128 characters.");
    return password();
  }

  if(passwordLength === "" || passwordLength === null) {
    window.alert("You need to provide a valid answer! Please try again.");
    return password();
  }
    
  if (passwordLength >= 8 && passwordLength <=128){
    var lowercase = function () {
      var lowerInput = window.prompt("Would you like your password to have lowercase letters? Please enter YES or NO.");
      lowerInput = lowerInput.toLowerCase();
      console.log(lowerInput);

      if (lowerInput === "" || lowerInput === null) {
       window.alert("You need to provide a valid answer! Please try again.");
       
     }
     if (lowerInput === "yes" || lowerInput === "YES") {
       return true; 
     }
     else if (lowerInput === "no" || lowerInput === "NO") {
       return false;
     }
    }

      var uppercase = function() {
      window.prompt("Would you like your password to have uppercase letters? Please enter YES or NO.");
    }

      var numeric =  function() {
        window.prompt("Would you like your password to have numbers? Please enter YES or NO.");
        }

      var special = function() {
        window.prompt("Would you like your password to have special characters? Please enter YES or NO.");
        }     

  }
}
password();


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
