
// 1. SELECT THE BUTTON (The "When")
const subscribeButton = document.getElementById('subscribe-btn'); 

// 2. THE ACTION (The "What")
const emailSubscribe = (e) => {
    e.preventDefault();

    // Pull the data from your input field
    const userEmail = document.getElementById('email-input').value;

    const templateParams = {
        user_email: userEmail,
        date: new Date().toLocaleDateString()
    };

    // CALL THE PRIMARY TEMPLATE
    // (EmailJS handles the Auto-Reply link internally)
  emailjs.send('service_ycdwbjg', 'template_ghq369w', templateParams)
        .then((response) => {
            // Added 'response' inside the brackets above ^
            console.log('SUCCESS!', response.status, response.text);
            alert("✨ Welcome to the collection!");
            userEmailInput.value = ""; // Clears the box for a clean look
        })
        .catch((error) => {
            // Moved this INSIDE the .catch block
            console.log('FAILED...', error); 
            alert("Oops! Check the console for the error.");
        });
};

// 3. CONNECT THEM
const subscribe = document.getElementById('subscribe-btn');

if (subscribeButton) {
    subscribeButton.addEventListener('click', emailSubscribe);
}

//  subscribeButton.addEventListener('click',emailSubscribe);
