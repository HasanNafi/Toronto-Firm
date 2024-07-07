var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var emailError = document.getElementById("email_error");
var messageError = document.getElementById("message_error");
var submitError = document.getElementById("submit_error");
//validating email
function validateEmail() {
    var email_address = document.getElementById("email").value.trim();

    if (email_address.length == 0 || email_address == "") {
        emailError.innerHTML = 'Email is required';
        //alert("Email is required")
        return false;
    }
    else if (!email_address.match(mailformat)) {
        emailError.innerHTML = 'Invalid email address';
        //alert("Invalid email address")
        return false;
    }
    else {
        emailError.innerHTML = '';
        return true;
    }
}
function validateMessage() {
    var message = document.getElementById('message').value.trim();

    if (message.length == 0 || message == "") {
        messageError.innerHTML = 'Message is required';
        //alert("User name is required")
        return false;
    }
    else if(message.length < 10){
        messageError.innerHTML = 'Message have to be at least 10 characters';
        //alert("User name is required")
        return false;
    }
    else {
        messageError.innerHTML = "";
        return true;
    }
}
function validateSubmit() {
    if (!validateEmail() || !validateMessage()) {
        alert("There is an error for submitting the form!!!")
        submitError.innerHTML = "Please field all the mandatory fields";
        validateEmail();
        validateMessage()
        return false;
    }
    else {
        alert("Your message was sent to Toronto's Farm succesfully");
        return true;
    }

}