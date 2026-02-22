
//This file I'm keeping.//

console.log("Signup route reached");


// Select the form element on the page.
// This lets us listen for when the user submits the Create Account form.
const form = document.querySelector(".create-account-form");

// Select the error message <p> element.
// We will use this to show backend validation errors to the user.
const errorBox = document.querySelector(".errorMessage");


// Listen for the form submission event.
form.addEventListener("submit", async (e) => {
    // Prevent the page from refreshing when the form is submitted.
    e.preventDefault();

    // Get the user's full name from the input field.
    // .trim() removes extra spaces at the beginning or end.
    const name = document.querySelector("#signup-name").value.trim();

    // Get the user's email from the input field.
    const email = document.querySelector("#signup-email").value.trim();

    // Get the user's password from the input field.
    const password = document.querySelector("#signup-password").value;

    try {
        // Send the user's data to your backend API route (/api/signup).
        // This is how the frontend communicates with the backend.
        const res = await fetch("http://localhost:3000/api/signup", {
            method: "POST", // We are sending data, so we use POST.
            headers: { "Content-Type": "application/json" }, // Tell backend we are sending JSON.
            body: JSON.stringify({ name, email, password }) // Convert JS object to JSON string.
        });

        // Convert the backend response into a JavaScript object.
        const data = await res.json();

        // If the backend says success: false, show the error message.
        if (!data.success) {
            errorBox.textContent = data.message; // Show backend message (e.g., "Email already exists").
            errorBox.style.display = "block"; // Make the error visible.
            return; // Stop the function here.
        }

        // If success is true, redirect the user to the Sign In page.
        window.location.href = "signin.html";

    } catch (err) {
        // If something goes wrong (server down, no connection, etc.)
        console.error("Error connecting to server:", err);

        // Show a general error message to the user.
        errorBox.textContent = "Something went wrong. Please try again.";
        errorBox.style.display = "block";
    }
});
