var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailError = document.getElementById("email_error");

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


function validateSubmit(){
    if(!validateEmail()){
        alert("There is an error for submitting Your Email!!!")
        validateEmail();
        return false;
    }
    else{
        alert("Your Email successfully sent to the TORONTO FIRM's");
        return true;
    }
        
}