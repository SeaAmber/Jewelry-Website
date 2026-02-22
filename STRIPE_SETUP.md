# Stripe Setup Guide - Step by Step Instructions

**IMPORTANT:** Follow these steps **in order**. Don't skip any step. Read each step completely before doing it.

---

## Step 1: Sign Up for Stripe Account

1. Create an account at: **https://dashboard.stripe.com/register**
2. You should now be logged into your Stripe Dashboard

**What you should see:** A page that says "Dashboard" at the top, with a menu on the left side.

---

## Step 2: Make Sure You're in Test Mode

**Why:** Test mode lets you test payments without using real money.

1. Look at the **top right** of your Stripe Dashboard page
2. You should see a toggle switch that says **"Test mode"** or **"Live mode"**
3. Make sure it says **"Test mode"** (it should be blue/on)
4. If it says "Live mode", click it to switch to Test mode

**What you should see:** The toggle should be ON/blue and say "Test mode"

---

## Step 3: Get Your Publishable Key

**What is this?** This is like a password that lets your website talk to Stripe. You'll copy it and paste it into your code.

1. In the Stripe Dashboard, look at the **left side menu**
2. Find and click on **"Developers"** (it might have a code icon)
3. A submenu will appear. Click on **"API keys"**
4. You'll see two keys:
   - **Publishable key** (starts with `pk_test_...`) - This is the one you need ✅
   - **Secret key** (starts with `sk_test_...`) - **DO NOT USE THIS ONE** ❌
5. Find the **Publishable key** (the one starting with `pk_test_`)
6. Click the **"Reveal"** or **"Copy"** button next to it
7. The key will be copied to your clipboard (it looks like: `pk_test_51ABC123xyz...`)

**What you should have:** A long string of text starting with `pk_test_` copied to your clipboard

---

## Step 4: Add Your Publishable Key to Your Code

1. Open your project folder in your code editor (VS Code, Cursor, etc.)
2. Find and open the file called **`script.js`**
3. Look at the **very top** of the file (around line 1-5)
4. You should see a line that looks like this:
   ```javascript
   const STRIPE_PUBLISHABLE_KEY = 'pk_test_REPLACE_WITH_YOUR_KEY';
   ```
5. **Delete** the text `pk_test_REPLACE_WITH_YOUR_KEY` (but keep the quotes `""`)
6. **Paste** your actual publishable key that you copied in Step 3
7. It should now look like this (but with YOUR key):
   ```javascript
   const STRIPE_PUBLISHABLE_KEY = 'pk_test_51ABC123xyz...';
   ```
8. **Save** the file (Ctrl+S or Cmd+S)

**⚠️ WARNING:**

- Make sure you pasted the **Publishable key** (starts with `pk_test_`)
- **NEVER** paste the Secret key (starts with `sk_test_`) - that's dangerous!

**What you should see:** Your `script.js` file now has your real publishable key instead of the placeholder text.

---

## Step 5: Enable Client-Only Checkout (If Needed)

**Note:** Some Stripe accounts already have this enabled. Try this step, but if you don't see these options, that's okay - continue to Step 6.

1. In the Stripe Dashboard, look at the **left side menu**
2. Click on **"Settings"** (it has a gear icon)
3. Click on **"Checkout"** in the settings menu
4. Look for any option that says **"Client-only integration"** or **"Client-side checkout"**
5. If you see it, make sure it's **enabled** or **turned on**
6. If you don't see this option, that's fine - continue to the next step

**What you should see:** Either the option is enabled, or you don't see the option (both are okay)

---

## Step 6: Create Your First Product in Stripe

You need to create a product in Stripe for each item you sell. Let's start with the first one: **Necklace**.

1. In the Stripe Dashboard, look at the **left side menu**
2. Click on **"Product catalog"** (or just **"Products"**)
3. Click the big **"Add product"** button (usually at the top right)
4. You'll see a form. Fill it out:
   - **Name:** Type `Necklace` (exactly as it appears in your website)
   - **Description:** (Optional) You can type something like "Elegant and timeless necklace"
   - **Image:** (Optional) You can skip this for now
5. Scroll down to the **"Pricing"** section
6. Make sure **"One time"** is selected (not "Recurring")
7. In the **"Price"** field, type `25.00`
8. Make sure **"USD"** is selected for currency
9. Click the **"Save product"** or **"Add product"** button at the bottom

**What you should see:** A page showing your new product, and a **Price ID** that looks like `price_1ABC123xyz...`

---

## Step 7: Copy the Price ID for Necklace

1. On the product page you just created, look for a section that says **"Price"** or **"Pricing"**
2. You should see a **Price ID** - it's a long string starting with `price_` (like `price_1ABC123xyz...`)
3. **Click** on the Price ID text to select it
4. **Copy** it (Ctrl+C or Cmd+C)

**What you should have:** A Price ID starting with `price_` copied to your clipboard

---

## Step 8: Add Necklace Price ID to Your Code

1. Go back to your code editor and open **`script.js`**
2. Press **Ctrl+F** (or Cmd+F on Mac) to open the search box
3. Type: `id: 1` and press Enter
4. You should find the necklace product (it should say `name: "necklace"`)
5. Look for the line that says:
   ```javascript
   stripePriceId: "price_REPLACE_WITH_STRIPE_PRICE_ID",
   ```
6. **Delete** the text `price_REPLACE_WITH_STRIPE_PRICE_ID` (but keep the quotes)
7. **Paste** the Price ID you copied in Step 7
8. It should now look like this (but with YOUR Price ID):
   ```javascript
   stripePriceId: "price_1ABC123xyz...",
   ```
9. **Save** the file

**What you should see:** The necklace product now has a real Price ID instead of the placeholder

---

## Step 9: Create Products for ALL Your Other Items

You need to repeat Steps 6-8 for **every single product** in your store. Here's the list:

1. ✅ Necklace (you just did this one)
2. Ring - Price: $22.00
3. Bracelet - Price: $32.00
4. Bangle - Price: $25.00
5. Choker - Price: $19.00
6. Hair jewelry - Price: $24.00
7. Cufflinks - Price: $19.00
8. Brooch - Price: $22.00
9. Pendant - Price: $17.00
10. Anklet - Price: $24.00

**For each product:**

1. Go to Stripe Dashboard → Products → Add product
2. Enter the name (exactly as shown above)
3. Set the price (match the price shown above)
4. Save the product
5. Copy the Price ID
6. Find that product in `script.js` (search for `id: 2` for Ring, `id: 3` for Bracelet, etc.)
7. Replace the `stripePriceId` placeholder with the real Price ID
8. Save the file

**⚠️ IMPORTANT:** Make sure each product's Price ID matches the correct product in your code. Double-check the prices match too!

**What you should have:** All 10 products created in Stripe, and all 10 `stripePriceId` fields in `script.js` filled with real Price IDs

---

## Step 10: Set Up Allowed Domains (For Testing)

**Why:** Stripe needs to know which websites are allowed to use your checkout. For now, we'll add your local testing URL.

1. In the Stripe Dashboard, go to **Settings** → **Checkout**
2. Scroll down to find **"Allowed domains"** or **"Allowed URLs"**
3. Click **"Add domain"** or **"Add URL"**
4. Type: `http://localhost:3000` (or whatever port your local server uses)
5. Click **"Add"** or **"Save"**

**Note:** If you're not sure what URL to use, that's okay - you can add this later when you test. For now, continue to Step 11.

---

## Step 11: Test Your Setup

**Before testing:** Make sure you've completed ALL previous steps, especially:

- ✅ Your publishable key is in `script.js`
- ✅ All 10 products have real Price IDs in `script.js`

1. **Start a local server** (you can't just open the HTML file directly):
   - Open your terminal/command prompt
   - Navigate to your project folder: `cd path/to/Jewelry-Website`
   - Run: `npx serve .` (or `python -m http.server 8000` or your usual method)
   - Note the URL it gives you (like `http://localhost:3000`)

2. **Open your website** in a browser using that URL (not by double-clicking the HTML file)

3. **Add items to cart:**
   - Click on products to add them to your cart
   - Go to the cart page

4. **Click "Proceed to Checkout"**

5. **What should happen:**
   - You should be redirected to a Stripe checkout page
   - If you see an error instead, check:
     - Is your publishable key correct?
     - Are all Price IDs filled in?
     - Are you using a local server (not opening file directly)?

6. **Test payment:**
   - On the Stripe checkout page, use this test card number: `4242 4242 4242 4242`
   - Expiry date: Any future date (like 12/25)
   - CVC: Any 3 digits (like 123)
   - Postal code: Any 5 digits (like 12345)
   - Click **"Pay"**

7. **After payment:**
   - You should be redirected back to your cart page
   - You should see a green message saying "Thank you! Your payment was successful."

**What you should see:** A successful payment flow from your cart → Stripe → back to your cart with success message
