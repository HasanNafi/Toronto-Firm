var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailError = document.getElementById("email_error");
var passwordError = document.getElementById("password_error");

//validating email
function validateEmail(){
    var email_address = document.getElementById("email_address").value.trim();

    if (email_address.length == 0 || email_address == "") {
        emailError.innerHTML='Email is required';
        //alert("Email is required")
        return false;
    }
    else if (!email_address.match(mailformat)) {
        emailError.innerHTML='Invalid email address';
        //alert("Invalid email address")
        return false;
    }
    else {
        emailError.innerHTML='';
        return true;
    }
}

//password validation
function validatePassword(){
    var password = document.getElementById("password").value.trim();

    if (password.length == 0 || password == "") {
        passwordError.innerHTML='Password is required';
        //alert("Password is required");
        return false;
    }
    else if(password.length < 8){
        passwordError.innerHTML="Password must be more than 8 character";
        //alert("Password must be more than 8 character");
        return false;
    }
    else {
        passwordError.innerHTML="";
        return true;
    }
}


function validateSubmit(){
    if(!validateEmail() || !validatePassword()){
        alert("There is an error for submitting the form!!!")
        submit_error.innerHTML = "Please field all the mandatory fields";
        validateEmail();
        validatePassword();
        return false;
    }
    else{
        alert("Login succesful");
        return true;
    }
        
}