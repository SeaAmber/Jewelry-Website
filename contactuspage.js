

document.addEventListener("DOMContentLoaded", () => {
  const contactForm = document.getElementById("contact-form");
  const contactInput = document.getElementById("contactName");
  const contactEmail = document.getElementById("contactEmail");
  const contactMessage = document.getElementById("contactMessage");
  const messageContactBox = document.getElementById("contact-message-box");

  function showMessage(text, type) {
    messageContactBox.textContent = text;
    messageContactBox.className = type; // "success" or "error"
    setTimeout(() => {
      messageContactBox.textContent = "";
      messageContactBox.className = "";
    }, 4000);
  }

  function isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }

  function isFakeEmail(email) {
    const fakePatterns = ["test@", "fake@", "example@", "abc@", "123@"];
    return fakePatterns.some(pattern => email.includes(pattern));
  }

  function isDisposableDomain(email) {
    const disposableDomains = ["mailinator.com", "tempmail.com", "10minutemail.com"];
    const domain = email.split("@")[1];
    return disposableDomains.includes(domain);
  }

  contactForm.addEventListener("submit", (e) => {
    const name = contactInput.value.trim();
    const email = contactEmail.value.trim();
    const message = contactMessage.value.trim();

    if (name.length < 2) {
      e.preventDefault();
      showMessage("Please enter your full name.", "error");
      return;
    }

    if (!isValidEmail(email)) {
      e.preventDefault();
      showMessage("Please enter a valid email address.", "error");
      return;
    }

    if (isFakeEmail(email)) {
      e.preventDefault();
      showMessage("Please enter a real email address.", "error");
      return;
    }

    if (isDisposableDomain(email)) {
      e.preventDefault();
      showMessage("Disposable email addresses are not allowed.", "error");
      return;
    }

    if (message.length < 5) {
      e.preventDefault();
      showMessage("Your message is too short.", "error");
      return;
    }

    // If validation passes, the form submits normally to Formspree
    showMessage("Sending your message...", "success");
  });
});
