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
  var lowerCaseArr=[a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z];
  var upperCaseArr=[A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z];
  var numArr=["0","1","2","3","4","5","6","7","8","9"];
  var specialCharArr=["!","$","%","#","*"];
  var passwordArr=[];
  var password="";
  
      if(charLength >= 8 && charLength<=128){
        passwordArr.length =charLength;
      }else {
        alert("Try again!, Between 8-128 charcters")
      }
      // get character type preferneces
      var lowerCase= confirm("would you like to have lowercase letters in your password?");
      var upperCase= confirm("would you like to have upperrcase letters in your password?");
      var numeric= confirm("would you like to have numeric characters in your password?");
      var specialChar= confirm("would you like to have special characters in your password?");
      
      //create password
      var counter=0;

    while(counter<passwordArr.length){
      // create random lowercase letter in random position
      if(lowerCase){
       password.Arr[Math.floor(Math.random()*passwordArr.length)]=lowerCaseArr[Math.floor(Math.random()*lowerCaseArr.length)];
      counter++;
      }
      //create random uppercase letter in random position
      if(upperCase){
        password.Arr[Math.floor(Math.random()*passwordArr.length)]=upperCaseArr[Math.floor(Math.random()*upperCaseArr.length)];
      counter++;
      }
      //create random number in random position
      if(numeric){
        password.Arr[Math.floor(Math.random()*passwordArr.length)]=numArr[Math.floor(Math.random()*numArr.length)];
      counter++;
      }
      //create random special character in random position
      if(specialChar){
        password.Arr[Math.floor(Math.random()*passwordArr.length)]=specialCharArr[Math.floor(Math.random()*specialCharArr.length)];
      counter++;
      }
    }
    for(var i=0;i<passwordArr.length-1;i++){
      password+=password.Arr[i];
    }
    alert(password);


}