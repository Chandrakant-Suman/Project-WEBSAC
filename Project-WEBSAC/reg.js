document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;
    const errorMessage = document.getElementById("error-message");

    if (password !== confirmPassword) {
        errorMessage.textContent = "Passwords do not match!";
    } else {
        errorMessage.textContent = "";
        alert("Registration successful!");
        window.location.href = "Homepage.html"; // Redirect to Homepage.html
    }
});
