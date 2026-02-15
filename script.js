
//This file I'm keeping.//

const productsList = [
  {
    id: 1,
    name: "necklace",
    price: 25,
    image: "assets/necklace.jpg",
    averageRating: 5.0,
description:"Elegant and timeless, this necklace adds a touch of sophistication to any look.",
     reviews:[
        {stars:4, text:"Beautiful necklace—simple and elegant!", author:"Lena", image:"assets/lena.png"},
        {stars: 4, text:"Great quality and perfect for everyday wear.", author:"Carlos", image:"assets/carlos.png"},
        {stars:4, text:"Love it! Goes with everything I own.", author:"Fatima", image:"assets/fatima.png"}
    ]



  },
  {
    id: 2,
    name: "ring",
    price: 22,
    image: "assets/ring.jpg",
    averageRating: 4.0,
description:"Make a statement with our beautifully crafted ring, designed to capture attention with its elegant and timeless style.",
     reviews:[
        {stars:4, text:"This ring is absolutely stunning! The design is elegant and it fits perfectly.", author:"Sophia", image:"assets/sophia.png"},
        {stars: 4, text:"I bought this ring as a gift and it exceeded my expectations. The craftsmanship is excellent and it looks even better in person.", author:"Marcus", image:"assets/marcus.png"},
        {stars:4, text:"I love how versatile this ring is. It's comfortable for daily wear and adds a touch of sophistication to any outfit.", author:"Hannah", image:"assets/hannah.png"}
    ]




},
  {
    id:3,
    name:"bracelet",
    price: 32,
    image: "assets/bracelet.jpg",
    averageRating: 5.0,
description:"Elegant and versatile, this polished bangle adds a touch of sophistication to any outfit.",
     reviews:[
        {stars:4, text:"This bracelet is absolutely lovely! The design is delicate and elegant, making it perfect for both everyday wear and special occasions.", author:"Amelia", image:"assets/amelia.png"},
        {stars: 4, text:"This bracelet adds a subtle sparkle to my wrist and matches everything in my wardrobe.", author:"Riya", image:"assets/riya.jpg"},
        {stars:4, text:"I bought this bracelet as a gift for my wife, and she was thrilled.", author:"Ethan", image:"assets/ethan.png"}
    ]


  },
  {
   id:4,
    name:"bangle",
    price: 25,
    image: "assets/bangles.jpg",
    averageRating: 5.0,
description:"Add a touch of timeless elegance to your look with our beautifully crafted bangle.",
     reviews:[
        {stars:4, text:"This bangle is absolutely gorgeous! It's lightweight, comfortable.", author:"Samantha", image:"assets/samantha.png"},
        {stars: 4, text:"I'm so impressed with the quality and design of this bangle.", author:"Nia", image:"assets/nia.png"},
        {stars:4, text:"A perfect gift! I bought this bangle for my sister, and she adores it.", author:"Lucas", image:"assets/lucas.png"}
    ]



  },
  {
    id:5,
    name:"choker",
    price: 19,
    image: "assets/choker.jpg",
    averageRating: 5.0,
description:"Make a bold statement with our elegant choker.",
     reviews:[
        {stars:4, text:"This choker is absolutely stunning! It's comfortable to wear and instantly elevates any outfit.", author:"Lila", image:"assets/lila.png"},
        {stars: 4, text:"I love the modern yet classic look of this choker. The quality is excellent.", author:"Jasmine", image:"assets/jasmine.png"},
        {stars:4, text:"Beautifully crafted and very stylish! I've worn it both alone and layered with other necklaces, and it always looks amazing", author:"Ava", image:"assets/ava.png"}
    ]

  },
  {
    id:6,
    name:"hair jewelry",
    price: 24,
    image: "assets/hair-jewelry.jpg",
    averageRating: 5.0,
description:"Transform your look with our stunning hair jewelry, designed to make every moment unforgettable.",
     reviews:[
        {stars:4, text:"This hair jewelry is absolutely gorgeous! It added the perfect sparkle to my updo for a wedding.", author:"Emily", image:"assets/emily.png"},
        {stars: 4, text:"I love how versatile and elegant these pieces are. They stay in place all day and instantly elevate my hairstyle.", author:"Maya",image:"assets/maya.png"},
        {stars:4, text:"Beautiful craftsmanship and stunning design! The hair jewelry made my look unique and memorable. Highly recommended for anyone wanting to stand out", author:"Zara", image:"assets/zara.png"}
    ]


  },
  {
    id:7,
    name:"cufflinks",
    price: 19,
    image: "assets/cufflinks.jpg",
    averageRating: 5.0,
description:"Expertly crafted to add a refined touch to any dress shirt.",
     reviews:[
        {stars:4, text:"These cufflinks are the perfect finishing touch for my suits.", author:"James", image:"assets/james.png"},
        {stars: 4, text:"I bought these as a gift for my husband, and he absolutely loves them.", author:"Sophia", image:"assets/sophia2.png"},
        {stars:4, text:"Great value for the price! The cufflinks look very sophisticated and feel durable.", author:"Arjun", image:"assets/arjun.png"}
    ]



  },
  {
     id:8,
    name:"brooch",
    price:22 ,
    image: "assets/brooch.jpg",
    averageRating: 5.0,
 description:"Add a touch of vintage charm to your ensemble with our exquisite brooch.",
     reviews:[
        {stars:4, text:"This brooch is absolutely stunning! The craftsmanship is top-notch, and it adds the perfect finishing touch to my blazers.", author:"Olivia", image:"assets/olivia.png"},
        {stars: 4, text:"I love how versatile this brooch is. I've worn it on my scarf and even on my handbag, and it always stands out.", author:"Priya", image:"assets/priya.png"},
        {stars:5, text:"A beautiful accessory that exceeded my expectations. The quality is excellent, and it arrived in lovely packaging.", author:"Daniel", image:"assets/daniel.png"}
    ]

  },
  {
    id:9,
    name:"pendant",
    price: 17,
    image: "assets/pendant.jpg",
    averageRating: 5.0,
    description:"Elevate your style with our elegant pendant, expertly crafted to add a touch of sophistication to any outfit.",
     reviews:[
        {stars:5, text:"“I absolutely love this pendant! The design is elegant and versatile.", author:"Angelica", image:"assets/angelica.png"},
        {stars: 5, text:"The quality is outstanding, and I've received so many compliments every time I wear it", author:"Carrie", image:"assets/carrie.png"},
        {stars:5, text:"My birthday is coming up and I'm going to order another pendant.", author:"Maria", image:"assets/maria.png"}
    ]
  },
  {
    id:10,
    name:"anklet",
    price:24 ,
    image: "assets/anklet.jpg",
    averageRating: 4.0,
    description: "An anklet that wraps around your ankle comfortably.",

    reviews:[
        {stars:4, text:"This anklet is so cute, and I wear it all the time around the house and out in public.", author:"Ella", image:"assets/ella.png"},
        {stars: 5, text:"I ordered the anklet, and I really love this. I always love to wrap this around my anke when I get dressed up", author:"Sallie", image:"assets/sallie.png"},
        {stars:4, text:"I am going to order another anklet for my niece. This is so cute.",author:"Mary", image:"assets/mary.png"}
    ]
  }
]







// 1. INITIALIZE CART FROM LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem('gemaura_cart')) || [];
//saving the items the users saved for later on cart page in local storage.
let savedForLater = JSON.parse(localStorage.getItem("savedForLater")) || [];


// 2. DOM ELEMENTS
const cartCountElements = document.querySelectorAll('.cart-count');
const addButtons = document.querySelectorAll(".add-btn");
const cartContainer = document.querySelector('.cart-items-container');
const subtotalElement = document.querySelector('.cart-subtotal');
const saveProducts = document.querySelector('.saved-for-later-container');

const productCards = document.querySelectorAll(".product-card");


//This is the add to cart logic

function storeInCart(productId){
console.log("storeInCart() was called with:", productId);
     const product = productsList.find(product => product.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity +=1;
    } else {
        cart.push({
             id: product.id,
            name: product.name,
           price:product.price,
           image: product.image,
            quantity: 1
       });
     }
   localStorage.setItem('gemaura_cart', JSON.stringify(cart));
    cartBadgeUpdate();
    updateCartUI();
}



//Refactoring the function that updates the badge
function cartBadgeUpdate() {
    const badge = document.querySelector('.cart-count');
    console.log("badge element:", badge);
    if (!badge) return;

    const totalAll = totalQuantity(cart);

    badge.textContent = totalAll;

    badge.style.display = totalAll > 0 ? "flex" : "none";

}

//This is part of the refactoring the badge like the helper function.
function totalQuantity() {
    return cart
    .filter(item => item && typeof item.quantity === "number")
    .reduce((sum, item) => sum + item.quantity, 0 );
}




3. //UPDATE CART COUNT BADGE
function updateCartUI() {
     cartBadgeUpdate();
     localStorage.setItem('gemaura_cart', JSON.stringify(cart));

    
//     // If we are on the cart page, re-render the list
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
        renderSavedForLater();
    }
}
addButtons.forEach(button => {
     button.addEventListener('click', () => { 
        const card = button.closest('.product-card');
        const id = parseInt(card.dataset.id); 
        storeInCart(id); 

        // Visual Feedback
        button.textContent = "Added!";
        button.style.background = "#C5A059";
        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.background = "";
        }, 1000);
    }); 
});






// 4. ADD TO CART FUNCTIONALITY - (Simplified and moved above)

 // 5. RENDER CART ITEMS (ONLY FOR CART.HTML)
function renderCart() {
    console.log("CART CONTENTS:", cart);

    const cartContainer = document.querySelector('.cart-items-container');
    if (!cartContainer) return;

    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart-message" style="text-align:center; padding: 40px;">
                <p>Your cart is empty.</p>
                <a href="products.html" class="cta-btn" style="margin-top:20px;">Go Shopping</a>
            </div>
        `;
        if (subtotalElement) subtotalElement.textContent = "$0.00";
        return;
    }

    let cartHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
         const itemTotal = item.price * item.quantity;
        total += itemTotal;


        cartHTML +=  `
            <div class="cart-item">
                <img src="${item.image}" alt="${item.name}" class="cart-item-image">
                <div class="cart-item-details">
                    <h2 class="cart-item-title">${item.name}</h2>
                   <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                     
                    <div class="cart-item-actions">
                        <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
                        <span class="item-qty">${item.quantity}</span>
                        <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
                    </div>

                    <div class="cart-item-links">
                        <button class="remove-item" onclick="removeItem(${index})">Remove</button>
                       <button class="save-for-later-btn" data-id="${item.id}">Save for Later</button>
                    </div>
                </div>
                <div class="item-total-price" style="font-weight:700;">$${itemTotal.toFixed(2)}</div>
            </div>
        `;
    });

    cartContainer.innerHTML = cartHTML;
    if (subtotalElement) subtotalElement.textContent = `$${total.toFixed(2)}`;
}

//Displaying Saved Items on the cart page.
function renderSavedForLater() {
    const savedContainer = document.querySelector('.saved-for-later-container');
    console.log("saved for later")
    if (!savedContainer) return;

    if (savedForLater.length === 0) {
        savedContainer.innerHTML = `
            <p class="empty-saved-message">No items saved for later.</p>
        `;
        return;
    }

    let savedHTML = '';

    savedForLater.forEach((item, index) => {
        savedHTML += `
            <div class="saved-item">
                <img src="${item.image}" alt="${item.name}" class="saved-item-image">
                <div class="saved-item-details">
                    <h3 class="savedTitle">${item.name}</h3>
                    <p class="savedPrice">$${item.price.toFixed(2)}</p>
                    </div>

                   <div class="updateBtn">
                    <button class="move-back-btn" data-id="${item.id}">
                        Move Back to Cart
                    </button>

                    <button class="remove-saved-btn" data-id="${item.id}">
                        Remove
                    </button>
                   </div>
                </div>
            </div>
        `;
    });

    savedContainer.innerHTML = savedHTML;
}





//Function to save items for later

function saveItemForLater(id) {
    // 1. Find the item in the cart
    const item = cart.find(product => product.id == id);
    if (!item) return;

    // 2. Add it to savedForLater only if not already there
    if (!savedForLater.some(product => product.id == id)) {
        savedForLater.push(item);
    }

    // 3. Remove it from the cart array
    cart = cart.filter(product => product.id != id);
 

    // 4. Save both arrays back to localStorage
    localStorage.setItem("gemaura_cart", JSON.stringify(cart));
    localStorage.setItem("savedForLater", JSON.stringify(savedForLater));

    // 5. Re-render the cart
    
    updateCartUI();
    renderSavedForLater();
     renderCart();
}



//Adding event listener to the save later

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("save-for-later-btn")) {
        const id = e.target.dataset.id;
        saveItemForLater(id);
    }
});



// 6. CART ACTIONS (Global because of onclick in HTML string)
window.changeQty = function(index, delta) {
    cart[index].quantity += delta;
    if (cart[index].quantity < 1) {
        removeItem(index);
    } else {
        updateCartUI();
    }
}

window.removeItem = function(index) {
      cart.splice(index, 1);
    updateCartUI();
    updateSaveForLaterUI()
}

//Data Flow: Users click the move back to cart button
// 1. EVENT DELEGATION ON THE SAVED-FOR-LATER CONTAINER
// This listener sits in shared.js because savedForLater is global state.
// It listens for clicks on dynamically created buttons inside the saved list.

if (saveProducts) {

saveProducts.addEventListener("click", function(event) {

    // 2. IDENTIFY WHICH BUTTON WAS CLICKED
    // Use event.target + closest() to detect the Move Back to Cart button.
    const moveBackBtn = event.target.closest(".move-back-btn");
    if (!moveBackBtn) return; // If it's not the right button, exit.

    // 3. GET THE ITEM ID FROM THE BUTTON
    // The button has a data-id attribute added during rendering.
    const itemId = Number(moveBackBtn.dataset.id);

    // 4. FIND THE ITEM IN savedForLater ARRAY
    // Use array.find() to get the actual object.
    const itemToMove = savedForLater.find(item => item.id === itemId);

    // 5. REMOVE THE ITEM FROM savedForLater
    // Use filter() or splice() to remove it.
    savedForLater = savedForLater.filter(item => item.id !== itemId);

    // 6. ADD THE ITEM BACK INTO THE CART ARRAY
    // Use push() to add the object back.
    console.log("ITEM TO MOVE:", itemToMove);

    cart.push(itemToMove);

    // 7. UPDATE LOCAL STORAGE
    // Save both arrays back to localStorage.
    localStorage.setItem("savedForLater", JSON.stringify(savedForLater));
    localStorage.setItem('gemaura_cart', JSON.stringify(cart));

    // 8. RE-RENDER BOTH UIs
    // Clear and rebuild the cart and saved-for-later sections.
    renderCart();
    renderSavedForLater();

    // 9. UPDATE THE CART BADGE
    // Use textContent to update the badge number.
     cartBadgeUpdate();
});
}










// 7. SEARCH FUNCTIONALITY (Existing logic preserved and cleaned)
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const suggestionsSearch = document.querySelector('.suggestionsSearch');

//adding a function for the search suggestion drop down for the search bar.
function searchSuggestion() {
    const searchQuery = searchInput.value.toLowerCase();
    //clear old suggestions
    suggestionsSearch.innerHTML = "";

    //if the input is empty,hide the suggestions.
    if (searchQuery === "") {
        suggestionsSearch.style.display = "none";
        return;
    }

    //Filter Products
    const filter = productsList.filter(product => product.name.toLowerCase().includes(searchQuery));
    //if no matches hide suggestions
    if (filter.length === 0) {
        suggestionsSearch.innerHTML = "";
    suggestionsSearch.style.display = "none";
    return;
    }


    //Render Suggestions
    filter.forEach(product => {
    const div = document.createElement("div");
    div.classList.add("suggestions"); 
    div.textContent = product.name;

    //When clicking a suggestion
    div.addEventListener("click", () => { 
        searchInput.value = product.name; 
        suggestionsSearch.style.display = "none"; 
        location.href = `product.html?id=${product.id}`;
    });
       suggestionsSearch.appendChild(div);
    });

    suggestionsSearch.style.display = "block";
}

//adding the JavaScript code for the search suggestion for the search bar
searchInput.addEventListener("input", searchSuggestion);



// Redundant productsList removed




function runSearch() {
    if (!searchInput) return;
    const userInput = searchInput.value.trim().toLowerCase();
    
   

//this is where the new updated code go for the search bar and search icon to match the object structure because at first I had a string structure with the const product, but now the array is an object, so I had to refactor the code for the search bar and icon here to match the updated object array structure.

const productMatch = productsList.find(item=> 
    item.name.toLowerCase() === userInput
);

if (productMatch) {
    location.href = `product.html?id=${productMatch.id }`
}  else {
    alert("Please enter a valid product like ring, necklace,or one of the products.")
}
}


if (searchIcon) searchIcon.addEventListener('click', runSearch);
if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter") runSearch();
    });
}



// 8. INITIAL LOAD
document.addEventListener('DOMContentLoaded', () => {
    cartBadgeUpdate(); // Ensure badge is correct on load
    updateCartUI();
});

