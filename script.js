// 1. INITIALIZE CART FROM LOCALSTORAGE
let cart = JSON.parse(localStorage.getItem('gemaura_cart')) || [];

// 2. DOM ELEMENTS
const cartCountElements = document.querySelectorAll('.cart-count');
const addButtons = document.querySelectorAll('.add-btn');
const cartContainer = document.querySelector('.cart-items-container');
const subtotalElement = document.querySelector('.cart-subtotal');

// 3. UPDATE CART COUNT BADGE
function updateCartUI() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalItems);
    localStorage.setItem('gemaura_cart', JSON.stringify(cart));
    
    // If we are on the cart page, re-render the list
    if (window.location.pathname.includes('cart.html')) {
        renderCart();
    }
}

// 4. ADD TO CART FUNCTIONALITY
addButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const card = e.target.closest('.product-card');
        const name = card.querySelector('.product-name').textContent;
        const priceText = card.querySelector('.product-price').textContent;
        const price = parseFloat(priceText.replace('$', ''));
        const image = card.querySelector('.product-image').getAttribute('src');

        const existingItem = cart.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            cart.push({
                name: name,
                price: price,
                image: image,
                quantity: 1
            });
        }

        updateCartUI();
        
        // Visual Feedback
        button.textContent = "Added!";
        button.style.background = "#C5A059";
        setTimeout(() => {
            button.textContent = "Add to Cart";
            button.style.background = "";
        }, 1000);
    });
});

// 5. RENDER CART ITEMS (ONLY FOR CART.HTML)
function renderCart() {
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

        cartHTML += `
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
                    </div>
                </div>
                <div class="item-total-price" style="font-weight:700;">$${itemTotal.toFixed(2)}</div>
            </div>
        `;
    });

    cartContainer.innerHTML = cartHTML;
    if (subtotalElement) subtotalElement.textContent = `$${total.toFixed(2)}`;
}

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
}

// 7. SEARCH FUNCTIONALITY (Existing logic preserved and cleaned)
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
// const productsList = ["necklace", "bracelet", "ring", "earrings", "brooch", "bangle", "choker", "hair jewelry", "cufflinks", "pendant","anklet" ];


const productsList = [
  {
    id: 1,
    name: "necklace",
    price: 25,
    image: "assets/necklace.jpg",
    reviews: 5
  },
  {
    id: 2,
    name: "ring",
    price: 22,
    image: "assets/ring.jpg",
    reviews: 4
  },
  {
    id:3,
    name:"bracelet",
    price: 32,
    image: "assets/bracelet.jpg",
    reviews: 5
  },
  {
   id:4,
    name:"bangle",
    price: 25,
    image: "assets/bangles.jpg",
    reviews: 5 
  },
  {
    id:5,
    name:"choker",
    price: 19,
    image: "assets/choker.jpg",
    reviews: 5 
  },
  {
    id:6,
    name:"hair jewelry",
    price: 24,
    image: "assets/hair-jewelry.jpg",
    reviews: 5 
  },
  {
    id:7,
    name:"cufflinks",
    price: 19,
    image: "assets/cufflinks.jpg",
    reviews: 5 
  },
  {
     id:8,
    name:"brooch",
    price:22 ,
    image: "assets/brooch.jpg",
    reviews: 5 
  },
  {
    id:9,
    name:"pendant",
    price: 17,
    image: "assets/pendant.jpg",
    reviews: 5 
  },
  {
    id:10,
    name:"anklet",
    price:24 ,
    image: "assets/anklet.jpg",
    reviews: 4 
  }
]




function runSearch() {
    if (!searchInput) return;
    const userInput = searchInput.value.trim().toLowerCase();
    
    if (userInput === "hair jewelry") {
        location.href = "hair-jewelry.html";
        return;
    }

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
    updateCartUI();
})

