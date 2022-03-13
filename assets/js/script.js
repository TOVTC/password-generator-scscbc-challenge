// Assignment code here
//password character arrays
lowercaseLetters = ["a", "b", "c", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "v", "W", "X", "Y", "Z"];
numericalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", "~", "-", "_", "."];

//create an array to hold the password
var passwordArray = [];

//function to generate password
var passwordGenerator = function(){
  //generate prompt to enter a value between 8 and 128
  var passwordLength = window.prompt("How many characters should your password have? Enter a value between 8 and 128.");
  //if the user entered a value that is not an integer, generate error, self-invoke, then exit function
  if (isNaN(passwordLength)) {
    window.alert("ERROR - You must enter a numerical value");
    passwordGenerator();
    return;
  }
  //if the user entered an invalid length, generate error, self-invoke, then exit function
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("ERROR - You must enter a value between 8 and 128.");
    passwordGenerator();
    return;
  }
  //confirm whether user wants different types of characters
  var lowercaseConfirm = window.confirm("Should your password include lowercase letters?");
  var uppercaseConfirm = window.confirm("Should your password include uppercase letters?");
  var numericalConfirm = window.confirm("Should your password include numerical digits?");
  var specialConfirm = window.confirm("Should your password include special characters?");
  //if the user answered no to all character types, a password cannot be generated, generate error, self-invoke, then exit function
  if (!lowercaseConfirm && !uppercaseConfirm && !numericalConfirm && !specialConfirm) {
    window.alert("ERROR - You must select at least one character type");
    passwordGenerator();
    return;
  }
  //loop through generating a value for each character in the password
  var characterLoop = function() {
    //randomly select the type of character the loop should return
    characterType = randomNumber(1, 4);
    //if the character type has been selected and the user has confirmed they want that type of character, generate a random number and select from the corresponding array
    if (lowercaseConfirm && characterType === 1) {
      index = randomNumber(1, lowercaseLetters.length);
      value = lowercaseLetters[index];
      passwordArray[i] = value;
    } else if (uppercaseConfirm && characterType === 2) {
      index = randomNumber(1, uppercaseLetters.length);
      value = uppercaseLetters[index];
      passwordArray[i] = value;
    } else if (numericalConfirm && characterType === 3) {
      index = randomNumber(1, 10);
      value = numericalValues[index];
      passwordArray[i] = value;
    } else if (specialConfirm && characterType === 4) {
      index = randomNumber(1, specialCharacters.length);
      value = specialCharacters[index];
      passwordArray[i] = value;
    } else {
      characterLoop();
    }
  };
  //where variable i is index 0 in the array, for the cases at which the index number is less than the password length, execute the loop, and increase the value of i by 1 each time
  for (var i = 0; i < passwordLength; i++) {
    characterLoop();
  }
};
  // Get references to the #generate element ORIGINAL
  var generateBtn = document.querySelector("#generate");

  // Write password to the #password input
  function writePassword() {
    passwordArray.length = 0;
    passwordGenerator();
    var password = passwordArray.join("");
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }
  // Add event listener to generate button ORIGINAL
  generateBtn.addEventListener("click", writePassword);

  //generate a random value between two numbers
  var randomNumber = function(min, max){
    var number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}
