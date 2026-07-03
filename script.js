const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const submitBtn = document.getElementById("submitBtn");

function validateForm(){

let valid = true;

// Name Validation
if(nameInput.value.trim() === ""){
    document.getElementById("nameError").innerHTML="Name is required";
    valid=false;
}else{
    document.getElementById("nameError").innerHTML="";
}

// Email Validation
let emailPattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

if(!emailInput.value.match(emailPattern)){
    document.getElementById("emailError").innerHTML="Invalid Email";
    valid=false;
}else{
    document.getElementById("emailError").innerHTML="";
}

// Password Validation
if(passwordInput.value.length<6){
    document.getElementById("passwordError").innerHTML="Password must be at least 6 characters";
    valid=false;
}else{
    document.getElementById("passwordError").innerHTML="";
}

// Enable Button
submitBtn.disabled=!valid;
}

nameInput.addEventListener("input",validateForm);
emailInput.addEventListener("input",validateForm);
passwordInput.addEventListener("input",validateForm);

document.getElementById("form").addEventListener("submit",function(e){
e.preventDefault();
document.getElementById("successmessage").innerHTML = "Registration Successful🎉";
alert("Registration Successful!");
});