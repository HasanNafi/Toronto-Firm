
function termFunction() {
    alert("We build privacy that works for everyone. It’s a responsibility that comes with creating products and services that are free and accessible for all. We look to these principles to guide our products, our processes, and our people in keeping our users’ data private, safe, and secure.")
    // var term = document.getElementById("terms");
}




var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
var phoneno = /^[0-9]{10}$/;
var nameError = document.getElementById("name_error");
var emailError = document.getElementById("email_error");
var email2Error = document.getElementById("email2_error");
var passwordError = document.getElementById("password_error");
var password2Error = document.getElementById("password2_error");
var phoneError = document.getElementById("phone_error");
var submit_error = document.getElementById("submit_error");

//validating USer name
function validateName() {
    var user_name = document.getElementById('user_name').value.trim();

    if (user_name.length == 0 || user_name == "") {
        nameError.innerHTML = 'User name is required';
        //alert("User name is required")
        return false;
    }
    // else if(!user_name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
    //     nameError.innerHTML= "Write your full name";
    //     //alert("Write your full name");
    //     return false;
    // }
    else {
        nameError.innerHTML = "";
        return true;
    }
}

//validating email
function validateEmail() {
    var email_address = document.getElementById("email_address").value.trim();

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

//validating email2
function validateEmail2() {
    var email_address = document.getElementById("email_address").value.trim();
    var email_address2 = document.getElementById("email_address2").value.trim();

    if (email_address2.length == 0 || email_address2 == "") {
        email2Error.innerHTML = 'Email is required';
        //alert("Email is required");
        return false;
    }
    else if (!email_address2.match(mailformat)) {
        email2Error.innerHTML = 'Invalid email address';
        //alert("Invalid email address");
        return false;
    }
    else if (email_address != email_address2) {
        email2Error.innerHTML = 'Email does not match';
        //alert("Email does not match")
    }
    else {
        email2Error.innerHTML = '';
        return true;
    }
}

//password validation
function validatePassword() {
    var password = document.getElementById("password").value.trim();

    if (password.length == 0 || password == "") {
        passwordError.innerHTML = 'Password is required';
        //alert("Password is required");
        return false;
    }
    else if (password.length < 8) {
        passwordError.innerHTML = "Password must be more than 8 character";
        //alert("Password must be more than 8 character");
        return false;
    }
    else {
        passwordError.innerHTML = "";
        return true;
    }
}

//password 2 validation
function validatePassword2() {
    var password = document.getElementById("password").value.trim();
    var password2 = document.getElementById("password2").value.trim();

    if (password2.length == 0 || password2 == "") {
        password2Error.innerHTML = 'Password is required';
        //alert("Password is required");
        return false;
    }
    else if (password2.length < 8) {
        password2Error.innerHTML = "Password must be more than 8 character";
        //alert("Password must be more than 8 character");
        return false;
    }
    else if (password != password2) {
        password2Error.innerHTML = "Password does not match";
        //alert("Password does not match");
        return false;
    }
    else {
        password2Error.innerHTML = "";
        return true;
    }
}

//phone validation
function validatePhone() {
    var phone = document.getElementById("phone").value.trim();

    if (phone.length == 0 || phone == "") {
        phoneError.innerHTML = "Phone number is required";
        //alert("Phone number is required");
        return false;
    }
    else if (!phone.match(phoneno) || phone.length != 10) {
        phoneError.innerHTML = "Phone must be numbers only and 10 digit";
        //alert("Phone must be numbers only and 10 digit");
        return false;
    }
    else {
        phoneError.innerHTML = "";
        return true;
    }
}

function validateSubmit() {
    var checkbox = document.getElementById("checkbox");
    if (!validateName() || !validateEmail() || !validateEmail2() || !validatePassword() || !validatePassword2() || !validatePhone()) {
        alert("There is an error for submitting the form!!!")
        submit_error.innerHTML = "Please field all the mandatory fields";
        validateName();
        validateEmail();
        validateEmail2();
        validatePassword();
        validatePassword2();
        validatePhone();
        return false;
    }
    else if (checkbox.checked == false) {
        submit_error.innerHTML = "Checkbox must be checked";
        return false;
    }
    else {
        alert("Form submited succesfully");
        return true;
    }

}
