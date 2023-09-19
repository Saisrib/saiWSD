function validateName() {
    const fullName = document.getElementById("Name").value;
    const fullNameError = document.getElementById("Name-error");
    

    if (NamePattern.test(Name)) {
        NameError.textContent = "";
        return true;
    } else {
        NameError.textContent = "A Name must contain at least 8 characters.";
        return false;
    }
}

function validateEmail() {
    const email = document.getElementById("Email").value;
    const emailError = document.getElementById("Email-error");

    if (emailPattern.test(email)) {
        emailError.textContent = "";
        return true;
    } else {
        emailError.textContent = "Invalid Email format.";
        return false;
    }
}

function validateComment() {
    const email = document.getElementById("Comment").value;
    const emailError = document.getElementById("Comment-error");

    if (emailPattern.test(email)) {
        emailError.textContent = "";
        return true;
    } else {
        emailError.textContent = "Please Enter Comment";
        return false;
    }
}

function validateForm(event) {
    const isValidName = validateName();
    const isValidEmail = validateEmail();
    const isValidComment = validateComment();

    

    if (!(isValidName && isValidEmail && isValidComment)) {
        event.preventDefault();
    }
}

document.getElementById("Name").addEventListener("input", validateName);
document.getElementById("Email").addEventListener("input", validateEmail);
document.getElementById("Comment").addEventListener("input", validateEmail);


document.getElementById("Leave A Comment").addEventListener("submit", validateForm);



