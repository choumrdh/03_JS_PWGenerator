// Assignment Code
var generateBtn = document.querySelector("#generate");
var lastPassword = document.querySelector("#lastPassword");
var passwordLengthDiv = document.querySelector("#length")
var password = undefined;

// Write password to the #password input
function writePassword() {
  if(password){
    var previouspword = document.createElement("div")
    previouspword.innerHTML = password
    lastPassword.appendChild(previouspword)
  }

  password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  passwordLengthDiv.innerHTML = password.length;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var master = [];
  var password = '';

  var passwordLength = 0;

  var passwordUpperCase = false;
  var passwordLowerCase = false;
  var passwordNumber = false;
  var passwordSpecialCharacter = false; 

  while(passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Enter a number between 8~128");
  }

  while(passwordUpperCase === false && passwordLowerCase === false && passwordNumber === false && passwordSpecialCharacter === false){
    passwordUpperCase = confirm("Does your password need to contain uppercase?");
    passwordLowerCase = confirm("Does your password need to contain lowercase?");
    passwordNumber = confirm("Does your passowrd need to contain number?");
    passwordSpecialCharacter = confirm("Does your password need to contain special character?");
  }

  var letterUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u","v","w", "x", "y", "z"]
  var number = ["0","1","2","3","4","5","6","7","8","9"] ;
  var special = ["`","~", "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "+", ".", "?"];

  if (passwordUpperCase === true){
    for(var i=0; i < letterUpper.length; i++ ){
      master.push(letterUpper[i])
    }
  } 
  
  if (passwordLowerCase === true){
    for(var i=0; i < letterLower.length; i++){
      master.push(letterLower[i])
    }
  } 
  
  if (passwordNumber === true){
    for(var i=0; i < number.length; i++){
      master.push(number[i])
    }
  }

  if(passwordSpecialCharacter === true) {
    for(var i=0; i < special.length; i++){
      master.push(special[i])
    }
  }
  
  for(var i = 0; i < parseInt(passwordLength); i++){
    var randomIndex = Math.floor( Math.random()* (master.length -1))
    password = password + master[randomIndex]
  }
  console.log(password);
  return password;
};
  