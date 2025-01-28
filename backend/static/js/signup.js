document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("signupForm");
    const password = document.getElementById("password");
    const confirmPassword = document.getElementById("confirmPassword");
    const passwordError = document.getElementById("passwordError");

    form.addEventListener("submit", function (event) {
        if (password.value.length < 8) {
            passwordError.textContent = "Password must be at least 8 characters!";
            event.preventDefault();
            return;
        }

        if (password.value !== confirmPassword.value) {
            passwordError.textContent = "Passwords do not match!";
            event.preventDefault();
            return;
        }
    });

    password.addEventListener("input", () => {
        passwordError.textContent = "";
    });

    confirmPassword.addEventListener("input", () => {
        passwordError.textContent = "";
    });
});