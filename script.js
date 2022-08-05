// Assignment Code
var generateBtn = document.querySelector("#generate");
var AlphabetAll      = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
var AlphabetLower       = "abcdefghijklmnopqrstuvwxyz";
var AlphabetNumber       = "0123456789";
var AlphabetSymbol       = "!@#$%^&*";

// Write password to the #password input
function writePassword() {
  var password = randoNumberAll();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function randoNumberAll() {
  //Ask passwords length
  var length = prompt("how long is the password? numbers only");
  //Ask user what the want
  var PasswordLower = prompt("Does the password have lower case? yes/no only");
  var PasswordCapitals = prompt("Does the password have captials? yes/no only");
  var PasswordNumbers = prompt("Does the password have number? yes/no only");
  var PasswordSymbols = prompt("Does the password have symbols? yes/no only");

  var result           = '';
  var Alphabet       = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
  var AlphabetLength = Alphabet.length;
  

 if (PasswordCapitals === "yes" && PasswordLower === "yes" && PasswordNumbers === "yes" && PasswordSymbols === "yes") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
}else if (PasswordCapitals === "yes" && PasswordLower === "yes" && PasswordNumbers === "no" && PasswordSymbols === "no") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
}else if (PasswordCapitals === "yes" && PasswordLower === "yes" && PasswordNumbers === "yes" && PasswordSymbols === "no") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
}else if (PasswordCapitals === "yes" && PasswordLower === "yes" && PasswordNumbers === "no" && PasswordSymbols === "yes") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*";
}else if (PasswordCapitals === "yes" && PasswordLower === "no" && PasswordNumbers === "yes" && PasswordSymbols === "no") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
}else if (PasswordCapitals === "yes" && PasswordLower === "no" && PasswordNumbers === "no" && PasswordSymbols === "no") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}else if (PasswordCapitals === "yes" && PasswordLower === "no" && PasswordNumbers === "no" && PasswordSymbols === "yes") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*";
}else if (PasswordCapitals === "yes" && PasswordLower === "no" && PasswordNumbers === "yes" && PasswordSymbols === "yes") {
  Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*";
}
else if (PasswordCapitals === "no" && PasswordLower === "yes" && PasswordNumbers === "yes" && PasswordSymbols === "yes") {
    Alphabet = "abcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*";
}else if (PasswordCapitals === "no" && PasswordLower === "yes" && PasswordNumbers === "no" && PasswordSymbols === "no") {
  Alphabet = "abcdefghijklmnopqrstuvwxyz";
}else if (PasswordCapitals === "no" && PasswordLower === "yes" && PasswordNumbers === "yes" && PasswordSymbols === "no") {
  Alphabet = "abcdefghijklmnopqrstuvwxyz0123456789";
}else if (PasswordCapitals === "no" && PasswordLower === "yes" && PasswordNumbers === "no" && PasswordSymbols === "yes") {
  Alphabet = "abcdefghijklmnopqrstuvwxyz!@#$%^&*";
}else if (PasswordCapitals === "no" && PasswordLower === "no" && PasswordNumbers === "yes" && PasswordSymbols === "no") {
  Alphabet = "0123456789";
}else if (PasswordCapitals === "no" && PasswordLower === "no" && PasswordNumbers === "no" && PasswordSymbols === "yes") {
  Alphabet = "!@#$%^&*";
}else if (PasswordCapitals === "no" && PasswordLower === "no" && PasswordNumbers === "yes" && PasswordSymbols === "yes") {
  Alphabet = "0123456789!@#$%^&*";
}
else{
console.log("It failed")
}
for ( var i = 0; i < length; i++ ) {
  result += Alphabet.charAt(Math.floor(Math.random() * AlphabetLength));
}
return result;
}


