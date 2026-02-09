

document.addEventListener("DOMContentLoaded", () => {
    console.log("Sign In JS loaded");
  const form = document.querySelector("#sign-in-form");
console.log("Form found:", form);

  const emailInput = document.querySelector("#signin-email");
  const passwordInput = document.querySelector("#signin-password");
  const errorBox = document.querySelector(".errorMessage2");

  form.addEventListener("submit", async (event) => {
      console.log("Form submitted");
    event.preventDefault();

    // Clear previous errors
    errorBox.textContent = "";

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
console.log("Email entered:", email);
console.log("Password entered:", password);

    try {
        console.log("Sending request to backend...");

      const response = await fetch("http://localhost:3000/api/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });

      const data = await response.json();
console.log("Backend responded:", data);
      if (!data.success) {
        // Show backend error message
        errorBox.textContent = data.message;
        errorBox.style.display = "block"; // Make the error visible.
        return;
      }

      // Success → redirect to homepage or dashboard
      window.location.href = "index.html";

    } catch (error) {
      console.error("Error:", error);
      errorBox.textContent = "Something went wrong. Please try again.";
    }
  });
});


