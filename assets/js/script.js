// Assignment code here
    var userChoice = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvqxyz"; 
    var numbers = "0123456789";
    var special = "!#$%&'()*+,-./:;<=>?@_`{|}~";
    var userChoice = "";

function generatePassword () {

    var pwLength = window.prompt("Enter between 8 - 128 characters for your password?");
      if (pwLength < 8 || pwLength > 128 || isNaN(parseInt(pwLength))) {
        window.alert("Stay between 8 and 128.");
      } else {


    // confirm password criteria 
    var upperConfirm = window.confirm("Include uppercase letters?");
      if (upper) {
        userChoice += upper;
    };

    var lowerConfirm = window.confirm("Include lowercase letters?");
      if (lower) {
        userChoice += lower;
    };

    var numbersConfirm = window.confirm("Include numbers?");
      if (numbers) {
        userChoice += numbers;
    };

    var specialConfirm = window.confirm("Include special characters?");
      if (special) {
        userChoice += special;
    };

    if (upperConfirm === false && lowerConfirm === false && numbersConfirm === false &&
      specialConfirm === false)
      window.alert("Choose at least one character type.");
  }
  
    var pw = "";
      for (let i = 0; i < pwLength; i++) {
        pw += userChoice[Math.floor(Math.random() * userChoice.length)]
      }

      return pw;
}

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
  
