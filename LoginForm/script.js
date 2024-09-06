// JavaScript for form validation
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("form");
  const usernameInput = document.querySelector('input[name="text"]');
  const passwordInput = document.querySelector('input[name="password"]');

  form.addEventListener("submit", function (event) {
    if (
      usernameInput.value.trim() === "" ||
      passwordInput.value.trim() === ""
    ) {
      alert("Please fill in both username and password.");
      event.preventDefault(); // Prevent form submission
    }
  });
});
