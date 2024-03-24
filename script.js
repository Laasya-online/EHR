// Dummy login credentials
const validUsername = "daves";
const validPassword = "drdave";

function validateLogin() {
    // Get input values
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Check if the username and password match the valid credentials
    if (username === validUsername && password === validPassword) {
        alert("Login successful!");
        // Redirect to the dashboard page
        window.location.href = "dashboard.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password. Please try again.");
        return false; // Prevent form submission
    }
}
