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
    var characterOptions = function() {

    var lowercase = function () {
      var lowerInput = window.prompt("Would you like your password to have lowercase letters? Please enter YES or NO.");
      lowerInput = lowerInput.toLowerCase();
      console.log(lowerInput);

      if (lowerInput === "" || lowerInput === null) {
       window.alert("You need to provide a valid answer! Please try again.");
       return lowercase();
       
     }
     if (lowerInput === "yes" || lowerInput === "YES") {
       return true; 
     }

     else if (lowerInput === "no" || lowerInput === "NO") {
       return false;
     }
    }
    lowercase();

      var uppercase = function() {
        var upperInput = window.prompt("Would you like your password to have uppercase letters? Please enter YES or NO.");
        upperInput = upperInput.toLowerCase();
        console.log(upperInput);

        if (upperInput === "" || upperInput === null) {
          window.alert("You need to provide a valid answer! Please try again.");
          return uppercase();
        }

        if (upperInput === "yes" || upperInput === "YES") {
          return true;
        }

        else if (upperInput === "no" || upperInput === "NO") {
          return false;
        }
    }
    uppercase();

      var numeric =  function() {
        var numericInput = window.prompt("Would you like your password to have numbers? Please enter YES or NO.");
        numericInput = numericInput.toLowerCase();
        console.log(numericInput);

        if( numericInput === "" || numericInput === null) {
          window.alert("You need to provide a valid answer! Please try again.");
          return numeric();
        }

        if (numericInput === "yes" || numericInput === "YES") {
          return true;
        }

        else if (numericInput === "no" || numericInput === "NO") {
          return false;
        }
        }
        numeric();

      var special = function() {
        var specialInput = window.prompt("Would you like your password to have special characters? Please enter YES or NO.");
        specialInput = specialInput.toLowerCase();
        console.log(specialInput);

        if (specialInput === "" || specialInput === null) {
          window.alert ("You need to provide a valid answer! Please try again.");
          return special();
        }

        if (specialInput === "yes" || specialInput === "YES") {
          return true;
        }

        else if (specialInput === "no" || specialInput === "NO") {
          return false;
        }
        }   
        special();

        while (!(lowercase === false && uppercase === false && numeric === false && special === false)) {
          window.alert("You must say yes to at least one character type.");
          return characterOptions();
        }

        }
        }
        characterOptions();
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
