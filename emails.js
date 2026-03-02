

const form = document.getElementById("subscribe-form");
const emailInput = document.getElementById("subscriber-email");
const messageBox = document.getElementById("subscribe-message");

form.addEventListener("submit", function(e) {
  e.preventDefault();

const dateEnrolled = new Date().toLocaleString();

// const emailInput = document.getElementById("email"); 
 const emailValidation = emailInput.value.trim();


const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
if (!emailPattern.test(emailValidation)) {
     messageBox.textContent = "Please enter a valid email address."; 
     return; 
    }

// 2. Fake‑pattern detection
const fakePatterns = ["asdf", "test", "fake", "qwerty"];
const lower = emailValidation.toLowerCase();

if (fakePatterns.some(word => lower.includes(word))) {
  messageBox.textContent = "Please enter a real email address.";

setTimeout(() => { messageBox.textContent = ""; 

},3000)

 return;
}


// 3. Disposable‑domain detection
const disposableDomains = [
  "mailinator.com",
  "tempmail.com",
  "10minutemail.com",
  "guerrillamail.com"
];

const domain = emailValidation.split("@")[1];

if (disposableDomains.includes(domain)) {
  messageBox.textContent = "Disposable email addresses are not allowed.";

  setTimeout(() => { 
    messageBox.textContent = "";
 }, 3000);
  
  return;
}







  emailjs.send("service_ycdwbjg", "template_ghq369w", {
    user_email: emailInput.value,
    date: dateEnrolled
  })
  .then(() => {
    messageBox.textContent = "Subscribed successfully!";
    form.reset();


    setTimeout(() => {
        messageBox.textContent = "";
    }, 3000)
    })
  .catch(() => {
    messageBox.textContent = "Something went wrong. Try again.";
  });
});


