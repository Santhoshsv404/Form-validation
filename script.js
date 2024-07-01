function validateForm() {
    var name = document.getElementById("text");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var mobile = document.getElementById("number");

    var nameError = document.getElementById("nameError");
    var emailError = document.getElementById("emailError");
    var passwordError = document.getElementById("passwordError");
    var mobileError = document.getElementById("mobileError");

    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    mobileError.textContent = "";

    var isValid = true;

    if (name.value === "") {
        nameError.textContent = "Name must be filled out";
        isValid = false;
    }

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.match(emailPattern)) {
        emailError.textContent = "Invalid email address";
        isValid = false;
    }

    if (password.value.length < 6) {
        passwordError.textContent = "Password must be at least 6 characters";
        isValid = false;
    }

    var mobilePattern = /^\d{10}$/;
    if (!mobile.value.match(mobilePattern)) {
        mobileError.textContent = "Invalid mobile number";
        isValid = false;
    }

    if (isValid) {
        alert("Successfully submitted");

        
        name.value = "";
        email.value = "";
        password.value = "";
        mobile.value = "";
    }

    return isValid;
}
