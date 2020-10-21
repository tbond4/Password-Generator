// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword(){

  // get password length
  var charLength=prompt("How many characters would you like in your password?");
  var passwordArr=[];
      if(charLength >= 8 && charLength<=128){
        passwordArr.length = charLength;
      }else {
        alert("Try again!, Between 8-128 charcters")
      }

      //create arrays
      var lowerCaseArr=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
      var upperCaseArr=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
      var numArr=["0","1","2","3","4","5","6","7","8","9"];
      var specialCharArr=["!","$","%","#","*"];
      var password="";
      var chartypes =[];

      // get character type preferneces
      var lowerCase= confirm("would you like to have lowercase letters in your password?");
      var upperCase= confirm("would you like to have upperrcase letters in your password?");
      var numeric= confirm("would you like to have numeric characters in your password?");
      var specialChar= confirm("would you like to have special characters in your password?");

      //create main array to draw from 
      if(lowerCase){ chartypes.push(lowerCaseArr);}
      if(upperCase){chartypes.push(upperCaseArr);}
      if(numeric){chartypes.push(numArr);}
      if(specialChar){chartypes.push(specialCharArr);}

      
      //create password array
      for(var j=0; j< passwordArr.length; j++){
        var arrNum = Math.floor(Math.random() *chartypes.length);
        passwordArr[j]=chartypes[arrNum][Math.floor(Math.random() * chartypes[arrNum].length)];
      }
    
      //translate password array to string
    for(var i=0;i<passwordArr.length;i++){

      password+=passwordArr[i];
    }
    return password;


}


  