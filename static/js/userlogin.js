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

//! Password show checkbox
let pswdCheck = document.getElementById("pswd-check");
let pswdInput = document.getElementById("pswd-input");

pswdCheck.onclick = function(){
  if(pswdInput.type === "password"){
    pswdInput.type = "text";
  }else{
    pswdInput.type = "password";
  }
}