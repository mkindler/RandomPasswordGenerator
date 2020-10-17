// Assignment Code
let passwordText = document.querySelector("#password");
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

// Possible Values for Password
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);


// Function Used to Generate a Random Password, and Write the Password to the Page
function writePassword() {

  let newPassword = "";
  let passwordCharset = "";

  let passwordLengthInput = prompt("How many characters would you like your password to be?");

  if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
  alert("Sorry, please enter a number between 8 and 128.");
  return;
  }

    let lowercaseCharactersInput = confirm("Would you like lowercase letters to be included in your password?");

    if (lowercaseCharactersInput) {
      passwordCharset += lowercaseCharacters;
    }

    let uppercaseCharactersInput = confirm("Would you like uppercase letters to be included in your password?");

    if (uppercaseCharactersInput) {
      passwordCharset += uppercaseCharacters;
    }

    let numericalCharactersInput = confirm("Would you like numbers to be included in your password?");

    if (numericalCharactersInput) {
          passwordCharset += numericalCharacters;
    }

    let specialCharactersInput = confirm("Would you like special characters to be included in your password?");

    if (specialCharactersInput) {
      passwordCharset += specialCharacters;
    }

  if (passwordCharset === "") {
    alert("Please select at least one type of character you would like to include!");
  }

  if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
    for (let i = 0; i < passwordLengthInput; i++) {
      newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
    localStorage.setItem("password", newPassword);
    let password = localStorage.getItem("password");
    passwordText.value = password;
  };
};

// Function Used to Copy Password to Clipboard
function copyPassword() {

  passwordText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard.")

};