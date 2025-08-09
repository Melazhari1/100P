  document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Remove previous error messages
    document.querySelectorAll(".error-text").forEach(el => el.remove());

    // Email validation
    const email = document.getElementById("email");
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
      showError(email, "Please enter a valid email address");
      isValid = false;
    }

    // Password validation (min 6 chars)
    const password = document.getElementById("password");
    if (password.value.trim().length < 6) {
      showError(password, "Password must be at least 6 characters");
      isValid = false;
    }

    if (isValid) {
      this.submit();
    }
  });

  function showError(input, message) {
    const error = document.createElement("div");
    error.className = "error-text";
    error.textContent = message;
    input.parentNode.appendChild(error);
  }