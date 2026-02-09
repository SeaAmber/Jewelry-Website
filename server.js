




const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");


//Fake database temporarily
const users = [];


const app = express(); 
app.use(cors()); 
app.use(express.json());


app.post("/api/signup", async (req, res) => {
    const { name, email, password } = req.body;
    // Validate name
    if (!name || name.trim().length < 2) {
        return res.json({ success: false, message: "Please enter your full name." });
    }

    // Validate email format
    if (!email || !email.includes("@")) {
        return res.json({ success: false, message: "Please enter a valid email address." });
    }

    // Validate password
    if (!password || password.length < 8) {
        return res.json({ success: false, message: "Password must be at least 8 characters." });
    }

    // Check if email already exists
    const existingUser = users.find(user => user.email === email);
    if (existingUser) {
        return res.json({ success: false, message: "An account with this email already exists." });
    }

    // Hash password
    const passwordHash = await bcrypt.hash(password, 10);

    // Save user
    users.push({ name, email, passwordHash });

    return res.json({ success: true });
});


app.post("/api/signin", async (req, res) => {
    const { email, password } = req.body;

    // Find user by email
    const user = users.find(user => user.email === email);
    if (!user) {
        return res.json({ success: false, message: "Incorrect email or password." });
    }

    // Compare password with stored hash
    const match = await bcrypt.compare(password, user.passwordHash);
    if (!match) {
        return res.json({ success: false, message: "Incorrect email or password." });
    }

    // Success
    return res.json({ success: true });
});




app.listen(3000, () => {
     console.log("Server running on port 3000");
     });