// Assignment code here
    var userChoice = "";
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvqxyz"; 
    var numbers = "0123456789";
    var special = "!#$%&'()*+,-./:;<=>?@_`{|}~";

function generatePassword () {
    var pwLength = window.prompt("Enter between 8 - 128 characters for your password?");



    // confirm password criteria 
    var upperConfirm = window.confirm("Include uppercase letters?");
    var lowerConfirm = window.confirm("Include lowercase letters?");
    var numbersConfirm = window.confirm("Include numbers?");
    var specialConfirm = window.confirm("Include special characters?");
    

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
  
