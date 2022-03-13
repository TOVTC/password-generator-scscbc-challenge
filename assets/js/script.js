// Assignment code here

//add code that links event to initiation of questions (welcome, answer questions to get your customized password - then hit password)
window.alert("Welcome to password generator! Answer the following questions to tailor your password.");
debugger;
var password = function(){
  //generate prompt to enter a value between 8 and 128
  var passwordLength = window.prompt("How many characters should your password have? Enter a value between 8 and 128.")
  //if the user entered an invalid length, self-invoke function
  if (passwordLength < 8 || passwordLength > 128) {
    window.alert("ERROR - You must enter a value between 8 and 128.")
    password()
  }
  //confirm whether user wants different types of characters
  var lowercaseConfirm = window.confirm("Should your password include lowercase letters?")
  var uppercaseConfirm = window.confirm("Should your password include uppercase letters?")
  var numericalConfirm = window.confirm("Should your password include numerical digits?")
  var specialConfirm = window.confirm("Should your password include special characters?")
  //if the user answered no to all character types, a password cannot be generated, so self-invoke the function
  if (!lowercaseConfirm && !uppercaseConfirm && !numericalConfirm && !specialConfirm) {
    window.alert("ERROR - You must select at least one character type");
    password();
  }
  console.log(passwordLength, lowercaseConfirm, uppercaseConfirm, numericalConfirm, specialConfirm);
}

//generate a randomizer to determine whether the digit will be lowercase, uppercase, numeric, or special characters
//generate for loop for the length of the selected password to pick a random value
//use Math.random() and then use if value is ><= to separate into four categories, each representing one character type
//then use and && operator conditional to skip through the options
//record each of the values in an array(?) that can be printed

//bonus - if they hit cancel for the number of characters, exit the loop

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

//start generating!
password();