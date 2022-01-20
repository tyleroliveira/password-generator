var generateBtn = document.querySelector("#generate");
function generatePassword() {
  // TODO: add code to generate the password here
  // // initialize variables
  var passwordLength
  var allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var allUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var allNumbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  var allSpecialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "-", "_", "+", "=", "~", "`", "|", "{", "}", "[", "]", ";", ":", "'", "\"", ",", "<", ".", ">", "/", "?"];
  var userSelectedCharacters = [];
  var useLower
  var useUpper
  var useNumbers
  var useSpecial
  var randomCharacter
  var password = ""
  var checkLowerCase
  var checkUpperCase
  var checkNumbers
  var checkSpecialCharacters
  passwordLength = prompt("How many characters would you like your password to be?");
  if (passwordLength >= 8 && passwordLength <= 128) {
  } else {
    alert("Please enter a number in the range of 8 and 128") ? "" : location.reload();
    return;
  }
  useLower = confirm("Would you like to use lowercase letters?\n Click Ok for yes or Cancel for no.");
  if (useLower === true) {
    userSelectedCharacters = userSelectedCharacters.concat(allLowerCase)
  }
  useUpper = confirm("Would you like to use uppercase letters?\n Click Ok for yes or Cancel for no.");
  if (useUpper === true) {
    userSelectedCharacters = userSelectedCharacters.concat(allUpperCase)
  }
  useNumbers = confirm("Would you like to use numbers?\n Click Ok for yes or Cancel for no.");
  if (useNumbers === true) {
    userSelectedCharacters = userSelectedCharacters.concat(allNumbers)
  }
  useSpecial = confirm("Would you like to use special characters?\n Click Ok for yes or Cancel for no.");
  if (useSpecial === true) {
    userSelectedCharacters = userSelectedCharacters.concat(allSpecialCharacters)
  }
  if (userSelectedCharacters.length === 0) {
    alert("Please select at least one character type.")
  }
  for (let i = 0; i < passwordLength; i++) {
    randomCharacter = userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)];
    password = password + randomCharacter;
  }
  function checkPassword(input, words) {
    return words.some(word => input.includes(word));
  }
  for (i = 0; i < 100; i++) { passwordInsurance() }

  checkLowerCase = checkPassword(allLowerCase, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
  checkUpperCase = checkPassword(allUpperCase, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
  checkNumbers = checkPassword(allNumbers, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
  checkSpecialCharacters = checkPassword(allSpecialCharacters, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
  if (checkLowerCase === false && useLower === true) {
    alert("Your password might not contain at least one lowercase letter. Please try again.") ? "" : location.reload();
    return;
  }
  if (checkUpperCase === false && useUpper === true) {
    alert("Your password might not contain at least one uppercase letter. Please try again.") ? "" : location.reload();
    return;
  }
  if (checkNumbers === false && useNumbers === true) {
    alert("Your password might not contain at least one number. Please try again.") ? "" : location.reload();
    return;
  }
  if (checkSpecialCharacters === false && useSpecial === true) {
    alert("Your password might not contain at least one special character. Please try again.") ? "" : location.reload();
    return;
  }
  return password;

  function passwordInsurance() {
    checkLowerCase = checkPassword(allLowerCase, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
    checkUpperCase = checkPassword(allUpperCase, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
    checkNumbers = checkPassword(allNumbers, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
    checkSpecialCharacters = checkPassword(allSpecialCharacters, [password[0], password[1], password[2], password[3], password[4], password[5], password[6], password[7]]);
    if (checkLowerCase === false && useLower === true) {
      password = "";
      for (let i = 0; i < passwordLength; i++) {
        randomCharacter = userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)];
        password = password + randomCharacter;
      }
    }
    if (checkUpperCase === false && useUpper === true) {
      password = "";
      for (let i = 0; i < passwordLength; i++) {
        randomCharacter = userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)];
        password = password + randomCharacter;
      }
    }
    if (checkNumbers === false && useNumbers === true) {
      password = "";
      for (let i = 0; i < passwordLength; i++) {
        randomCharacter = userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)];
        password = password + randomCharacter;
      }
    }
    if (checkSpecialCharacters === false && useSpecial === true) {
      password = "";
      for (let i = 0; i < passwordLength; i++) {
        randomCharacter = userSelectedCharacters[Math.floor(Math.random() * userSelectedCharacters.length)];
        password = password + randomCharacter;
      }
    }
  }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);