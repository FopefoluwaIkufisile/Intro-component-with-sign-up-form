const claim = document.querySelector("#free");
const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const email = document.getElementById("email");
const password = document.getElementById("password");
const fnameError = document.querySelector(".fname-error");
const lnameError = document.querySelector(".lname-error");
const emailError = document.querySelector(".email-error");
const passwordError = document.querySelector(".password-error");

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


function validateInput(input, errorElement, isEmail = false) {
    if (!input.value) {
        input.classList.add("with-icon");
        errorElement.style.display = "block";
        return false; 
    } 
    else if(isEmail && !emailRegex.test(input.value)){
        input.classList.add("with-icon");
        errorElement.style.display = "block";
        return false; 
    }
    else {
        input.classList.remove("with-icon");
        errorElement.style.display = "none";
        return true; 
    }
}

claim.addEventListener("click", (e) => {
    e.preventDefault();

    const isFnameValid = validateInput(fname, fnameError);
    const isLnameValid = validateInput(lname, lnameError);
    const isEmailValid = validateInput(email, emailError, true);
    const isPasswordValid = validateInput(password, passwordError);

    // Check if all fields are valid
    if (isFnameValid && isLnameValid && isEmailValid && isPasswordValid) {
        claim.value = `Hi ${fname.value}!!`;
    }
});
