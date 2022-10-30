//! Email validation
let emailInput = document.getElementById("email-input");
let emailError = document.getElementById("email-error");
let emailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

emailInput.oninput = function(){
  if(emailInput.value.match(emailFormat)){
    emailError.innerHTML = "";
  }else{
    emailError.innerHTML = "Please enter a valid email";
  }
  //* Incase a user clears the text, the badge is hidden again
  if(emailInput.value.length !== 0){
    emailError.style.display = "block";
  }
  else{
    emailError.style.display = "none";
  }
}

//! Passwors strength check
let pswdInput = document.getElementById("pswd-input");
let pswdStrength = document.getElementById("pswd-strength");
let strongpswd = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})');
// a strong level password that has at least one lowercase letter (?=.*[a-z]), one uppercase letter (?=.*[A-Z]), one digit (?=.*[0-9]), one special character (?=.*[^A-Za-z0-9]), and is at least eight characters long(?=.{8,}).
let mediumpswd = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}))|((?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,}))');
// If the password is at least six characters long and meets all the other requirements, or has no digit but meets the rest of the requirements.
//  If the password entered does not meet the strong or medium-level requirements, then it is deemed weak
let message = document.getElementById("message")

//* When the user clicks on the password field, show the message box
pswdInput.onfocus = function() {
  message.style.display = "block";
}

//* When the user clicks outside of the password field, hide the message box
pswdInput.onblur = function() {
  message.style.display = "none";
}

pswdInput.onkeyup = function(){
  if(pswdInput.value.match(strongpswd)){
    pswdStrength.innerHTML = "Password is strong";
    pswdStrength.style.color = "green";
  }else if(pswdInput.value.match(mediumpswd)){
    pswdStrength.innerHTML = "Password is medium";
    pswdStrength.style.color = "yellow";
  }else{
    pswdStrength.innerHTML = "Password is weak";
    pswdStrength.style.color = "red";
  }
  // Incase a user clears the text, the badge is hidden again
  if(pswdInput.value.length !== 0){
    pswdStrength.style.display = "block";
  }
  else{
    pswdStrength.style.display = "none";
  }
}


//! Password show checkbox
let pswdCheck = document.getElementById("pswd-check");
//! let pswdInput = document.getElementById("pswd-input");
//* Password inputfield is already mentioned above
let cpswdInput = document.getElementById("cpswd-input");

pswdCheck.onclick = function(){
  if(pswdInput.type && cpswdInput.type === "password"){
    pswdInput.type = "text";
    cpswdInput.type = "text";
  }else{
    pswdInput.type = "password";
    cpswdInput.type = "password";
  }
}
