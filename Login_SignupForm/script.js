document.addEventListener("DOMContentLoaded", function () {
  // Getting the checkbox that toggles between Login and Sign Up
  const toggleCheckbox = document.getElementById("reg-log");

  // Selecting form fields for validation
  const loginEmail = document.getElementById("logemail");
  const loginPassword = document.getElementById("logpass");
  const signupName = document.getElementById("logname");
  const signupEmail = document.querySelector('input[name="logemail"]'); // Only the first one (from signup)
  const signupPassword = document.querySelector('input[name="logpass"]'); // Only the first one (from signup)

  // Button selectors
  const loginButton = document.querySelector(".card-front .btn");
  const signupButton = document.querySelector(".card-back .btn");

  // Form submit event listeners
  loginButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateLogin()) {
      alert("Login successful");
    }
  });

  signupButton.addEventListener("click", function (e) {
    e.preventDefault();
    if (validateSignup()) {
      alert("Signup successful");
    }
  });

  // Validation function for Login
  function validateLogin() {
    let valid = true;

    // Basic email validation
    if (!validateEmail(loginEmail.value)) {
      valid = false;
      alert("Please enter a valid login email.");
    }

    // Password validation
    if (loginPassword.value.length < 6) {
      valid = false;
      alert("Login password must be at least 6 characters.");
    }

    return valid;
  }

  // Validation function for Sign Up
  function validateSignup() {
    let valid = true;

    // Name validation
    if (signupName.value.trim() === "") {
      valid = false;
      alert("Please enter your full name.");
    }

    // Basic email validation
    if (!validateEmail(signupEmail.value)) {
      valid = false;
      alert("Please enter a valid signup email.");
    }

    // Password validation
    if (signupPassword.value.length < 6) {
      valid = false;
      alert("Signup password must be at least 6 characters.");
    }

    return valid;
  }

  // Email validation using regular expression
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
});
