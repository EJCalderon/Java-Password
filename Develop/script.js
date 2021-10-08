// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
function makeid(length) {
  let result = 'password';
  const characters1 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const characters2 = 'abcdefghijklmnopqrstuvwxyz';
  const characters3 = "U+0020"
  const randomNumber = (Math.floor(Math.random() * 9)); 
  
}

var result= function(min,max){

var value = Math.floor(Math.random() * (128 + 8) -8 );
return value;
};



// Write password to the #password input
function writePassword() {
  var password = generatePassword(characters1, characters2, characters3, randomNumber);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
