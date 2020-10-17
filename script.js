// Select ID's from HTML
let passwordText = document.querySelector("#password");
let generateBtn = document.querySelector("#generate");
let copyBtn = document.querySelector("#copy");

// Possible Values for Password
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numericalCharacters = "0123456789";
const specialCharacters = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";

// When employee clicks the Generate Password or Copy Password to Clipboard buttons...
generateBtn.addEventListener("click", writePassword);
copyBtn.addEventListener("click", copyPassword);


// Function Used to Generate a Random Password, and Write the Password to the Page
function writePassword() {

  let newPassword = "";
  let passwordCharset = "";

  // Prompt employee to enter a character length for their password
  let passwordLengthInput = prompt("How many characters would you like your password to be?");

  // Analyzes employee input:  If the input is a number less than 8, greater than 128, or is anything other than a number, an alert will appear
  if (Number(passwordLengthInput < 8) | Number(passwordLengthInput > 128) | isNaN(passwordLengthInput)) {
  alert("Sorry, please enter a number between 8 and 128.");
  return;
  }

    // Confirmation statement that asks the employee whether or not they want lowercase letters in their password
    let lowercaseCharactersInput = confirm("Would you like lowercase letters to be included in your password?");

    if (lowercaseCharactersInput) {
      passwordCharset += lowercaseCharacters;
    }

    // Confirmation statement that asks the employee whether or not they want uppercase letters in their password
    let uppercaseCharactersInput = confirm("Would you like uppercase letters to be included in your password?");

    if (uppercaseCharactersInput) {
      passwordCharset += uppercaseCharacters;
    }

    // Confirmation statement that asks the employee whether or not they want numbers in their password
    let numericalCharactersInput = confirm("Would you like numbers to be included in your password?");

    if (numericalCharactersInput) {
          passwordCharset += numericalCharacters;
    }

    // Confirmation statement that asks the employee whether or not they want special characters in their password
    let specialCharactersInput = confirm("Would you like special characters to be included in your password?");

    if (specialCharactersInput) {
      passwordCharset += specialCharacters;
    }

  // Alert that appears if the employee does NOT select one of the character types.  The application will restart from the beginning, and the employee will be required to click the Generate Password button again.
  if (passwordCharset === "") {
    alert("Please select at least one type of character you would like to include!");
  }

  // If the employee enters a number that meets the character length criteria AND selects at least one of the character types, a random password will successfully be generated and written to local storage.
  if (Number(passwordLengthInput >= 8) && Number(passwordLengthInput <= 128)) {
    for (let i = 0; i < passwordLengthInput; i++) {
      newPassword += passwordCharset.charAt(Math.floor(Math.random() * passwordCharset.length));
    };
    localStorage.setItem("password", newPassword);
    let password = localStorage.getItem("password");
    passwordText.value = password;
  };
};

// Function Used to Copy Password to Clipboard.  This includes an alert to let the user know their password has been copied.
function copyPassword() {

  passwordText.select();
  document.execCommand("copy");
  alert("Password copied to clipboard.")

};