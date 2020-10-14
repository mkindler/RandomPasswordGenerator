// Assignment Code
let passwordText = document.querySelector("#password");
let generateButton = document.querySelector("#generate");
let copyButton = document.querySelector("#copy");

const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

generateButton.addEventListener("click", generatePassword);
copyButton.addEventListener("click", copyPassword);


// Write password to the #password input
function generatePassword() {

  let newPassword = "";
  let passwordCharset = "";

  let passwordLengthInput = prompt("How many characters would you like your password to be?");

  if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
    alert("Please enter a number between 8 and 128!");
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
    let newPasswordStr = localStorage.getItem("password");
    passwordText.textContent = newPasswordStr;
  };
};

function copyPassword() {
  passwordText.select();
  document.execCommand("copy");
  passwordText.innerHTML = "";
};

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

//   let password = generatePassword();
//   let passwordText = document.querySelector("#password");

//   passwordText.value = password;

//
