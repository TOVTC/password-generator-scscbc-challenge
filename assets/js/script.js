// Assignment code here
//password character arrays
lowercaseLetters = ["a", "b", "c", "c", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "v", "W", "X", "Y", "Z"]
numericalValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10"] //maybe can remove to just use randomNumber
specialCharacters = ["@", "%", "+", "/", "'", "!", "#", "$", "^", "?", ":", ",", "~", "-", "_", "."]


//add code that links event to initiation of questions
window.alert("Welcome to password generator! Answer the following questions to tailor your password.");
var passwordGenerator = function(){
  //generate prompt to enter a value between 8 and 128
  var passwordLength = window.prompt("How many characters should your password have? Enter a value between 8 and 128.")
  //if the user entered an invalid length, self-invoke function
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("ERROR - You must enter a value between 8 and 128.")
    passwordGenerator()
  }
  //confirm whether user wants different types of characters
  var lowercaseConfirm = window.confirm("Should your password include lowercase letters?")
  var uppercaseConfirm = window.confirm("Should your password include uppercase letters?")
  var numericalConfirm = window.confirm("Should your password include numerical digits?")
  var specialConfirm = window.confirm("Should your password include special characters?")
  //if the user answered no to all character types, a password cannot be generated, so self-invoke function
  if (!lowercaseConfirm && !uppercaseConfirm && !numericalConfirm && !specialConfirm) {
    window.alert("ERROR - You must select at least one character type");
    passwordGenerator();
  }
  //create an array to hold the password
  var password = []
  //loop through generating a value for each character in the password
  var characterLoop = function() {
    characterType = randomNumber(1, 4);
    if (characterType === 1 && lowercaseConfirm) {
      index = randomNumber(1, 26);
      value = lowercaseLetters[index];
      password[i] = value;
    } else if (characterType === 2 && uppercaseConfirm) {
      index = randomNumber(1, 26);
      value = uppercaseLetters[index];
      password[i] = value;
    } else if (characterType === 3 && numericalConfirm) {
      index = randomNumber(1, 10);
      value = uppercaseLetters[index];
      password[i] = value;
    } else if (characterType === 4 && specialConfirm) {
      index = randomNumber(1, specialCharacters.length);
      value = uppercaseLetters[index];
      password[i] = value;
    } else {
      characterLoop();
    };
  }
      //loop me!
    for (var i = 0; i < passwordLength; i++) {
      characterLoop();
      console.log(password);
    }
  }

//generate a randomizer to determine whether the digit will be lowercase, uppercase, numeric, or special characters
//generate for loop for the length of the selected password to pick a random value
//then use and && operator conditional to skip through the options
//use randomNumber and include min max values per character type to select the character to be added from the existing arrays

  //loop through generating a value for each character in the password
//    for (var i = 0; i < passwordLength; i++) {
//      number = randomNumber(1, 4);
//      password[i] = number;
//    }
//    console.log(password)
//}

//bonus - if they hit cancel for the number of characters, confirm if they want to exit the loop

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

//generate a random value between two numbers
var randomNumber = function(min, max){
  var number = Math.floor(Math.random() * (max - min + 1) + min);
  return number;
}

//start generating!
passwordGenerator();