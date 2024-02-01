const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const passError = document.getElementById('passError');

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();

    if(validateName() && validateEmail() && validatePassword()) {
        alert("Form submitted successfully");
    }
});

function validateName(){
    let name = document.getElementById('name').value;
    
    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    if(!name.match(/^[a-zA-Z]+ [a-zA-Z]+$/)){
        nameError.innerHTML = "Write Full Name";
        nameError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    // Clear error message and show checkmark if name is valid
    nameError.innerHTML = "";
    nameError.previousElementSibling.classList.remove('fa-xmark');
    nameError.previousElementSibling.classList.add('fa-check');

    return true;
}

function validateEmail() {
    let email = document.getElementById('email').value;

    if (email.length == 0) {
        emailError.innerHTML = "Email is required";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    let emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email.match(emailRegex)) {
        emailError.innerHTML = "Enter valid email address";
        emailError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    // Clear error message and show checkmark if email is valid
    emailError.innerHTML = "";
    emailError.previousElementSibling.classList.remove('fa-xmark');
    emailError.previousElementSibling.classList.add('fa-check');

    return true;
}

function validatePassword(){
    let password = document.getElementById('password').value;
    
    if(password.length == 0){
        passError.innerHTML = "Password is required";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,20}$/;

    if(!password.match(passwordRegex)){
        passError.innerHTML = "Enter valid password. ";
        passError.previousElementSibling.classList.add('fa-xmark');
        return false;
    }

    // Clear error message and show checkmark if password is valid
    passError.innerHTML = "";
    passError.previousElementSibling.classList.remove('fa-xmark');
    passError.previousElementSibling.classList.add('fa-check');

    return true;
}
