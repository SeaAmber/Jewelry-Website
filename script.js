
//This file I'm keeping.//

// Stripe publishable key (use test key pk_test_... from https://dashboard.stripe.com/apikeys)
//const STRIPE_PUBLISHABLE_KEY = "pk_test_51T2C6hD5bVR2klV1YKU8CyCjzCmK0kEuKYbYssTHOWCzR7x0BBP2AcvT8LBZXCrQwVVA4dbvL48eNFCtzItNzAI000a4BQBqdR";

const productsList = [
  {
    id: 1,
    name: "necklace",
    price: 25,
    stripePriceId: "price_1T4FnDD5bVR2klV1hyc4v5eR",
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
    stripePriceId: "price_1T4GFZD5bVR2klV1OglLsaTF",
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
    id: 3,
    name: "bracelet",
    price: 32,
    stripePriceId: "price_1T4GIxD5bVR2klV16CEcAJRL",
    image: "assets/bracelet.jpg",
    averageRating: 5.0,
description:"Elegant and versatile, this polished bracelet adds a touch of sophistication to any outfit.",
     reviews:[
        {stars:4, text:"This bracelet is absolutely lovely! The design is delicate and elegant, making it perfect for both everyday wear and special occasions.", author:"Amelia", image:"assets/amelia.png"},
        {stars: 4, text:"This bracelet adds a subtle sparkle to my wrist and matches everything in my wardrobe.", author:"Riya", image:"assets/riya.jpg"},
        {stars:4, text:"I bought this bracelet as a gift for my wife, and she was thrilled.", author:"Ethan", image:"assets/ethan.png"}
    ]


  },
  {
    id: 4,
    name: "bangle",
    price: 25,
    stripePriceId: "price_1T4GLsD5bVR2klV16ksspy9m",
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
    id: 5,
    name: "choker",
    price: 19,
    stripePriceId: "price_1T4GOAD5bVR2klV1e7gjm9sF",
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
    id: 6,
    name: "hair jewelry",
    price: 24,
    stripePriceId: "price_1T4Gs8D5bVR2klV15gOT1zsz",
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
    id: 7,
    name: "cufflinks",
    price: 19,
    stripePriceId: "price_1T4Gu6D5bVR2klV1hdLFzJ16",
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
    id: 8,
    name: "brooch",
    price: 22,
    stripePriceId: "price_1T4Gw5D5bVR2klV1GqWwH9bp",
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
    id: 9,
    name: "pendant",
    price: 17,
    stripePriceId: "price_1T4GxVD5bVR2klV1scQa3Hyk",
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
    id: 10,
    name: "anklet",
    price: 24,
    stripePriceId: "price_1T4GzSD5bVR2klV1KCHkbjuo",
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








//Helpers: save + badge + subtotal
function saveCart() {
  localStorage.setItem('gemaura_cart', JSON.stringify(cart));
}

function saveSavedForLater() {
  localStorage.setItem('savedForLater', JSON.stringify(savedForLater));
}

function cartBadgeUpdate() {
  const badge = document.querySelector('.cart-count');
  if (!badge) return;

  const count = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);
  badge.textContent = count;
  badge.style.display = count > 0 ? 'flex' : 'none';
}

function updateCartTotal() {
  const subtotalElement = document.querySelector('.cart-subtotal');
  if (!subtotalElement) return;

  const total = cart.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0
  );
  subtotalElement.textContent = `$${total.toFixed(2)}`;
}











//RenderCart items(Cart page)
function renderCart() {

  const container = document.querySelector('.cart-items-container');
  console.log("renderCart is running", cart);

  if (!container) return;

  if (!cart || cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart-message">
        <p>Your cart is empty.</p>
        <a href="products.html" class="cta-btn">Go Shopping</a>
      </div>
    `;
    updateCartTotal();
    return;
  }

  let html = '';

  cart.forEach(item => {
    const qty = item.quantity || 1;
    const itemTotal = item.price * qty;

    html += `
      <div class="cart-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="cart-item-image" />

        <div class="cart-item-details">
          <h2 class="cart-item-title">${item.name}</h2>
          <p class="cart-item-price">$${item.price.toFixed(2)}</p>

          <div class="cart-item-actions">
            <button class="qty-btn decrease" data-id="${item.id}">-</button>
            <span class="item-qty">${qty}</span>
            <button class="qty-btn increase" data-id="${item.id}">+</button>
          </div>

          <div class="cart-item-links">
            <button class="remove-item" data-id="${item.id}">Remove</button>
            <button class="save-for-later-btn" data-id="${item.id}">Save for Later</button>
          </div>
        </div>

        <div class="item-total-price">$${itemTotal.toFixed(2)}</div>
      </div>
    `;
  });

  container.innerHTML = html;
  updateCartTotal();
}












//RenderSavedForLater Section
function renderSavedForLater() {
  const container = document.querySelector('.saved-for-later-container');
  if (!container) return;

  if (!savedForLater || savedForLater.length === 0) {
    container.innerHTML = `
      <p class="empty-saved-message">No items saved for later.</p>
    `;
    return;
  }

  let html = '';

  savedForLater.forEach(item => {
    html += `
      <div class="saved-item" data-id="${item.id}">
        <img src="${item.image}" alt="${item.name}" class="saved-item-image" />

        <div class="saved-item-details">
          <h3 class="savedTitle">${item.name}</h3>
          <p class="savedPrice">$${item.price.toFixed(2)}</p>
        </div>

        <div class="saved-item-actions">
          <button class="move-back-btn" data-id="${item.id}">Move Back to Cart</button>
          <button class="remove-saved-btn" data-id="${item.id}">Remove</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}











// Quantity, remove, save for later, move back
function changeQuantity(id, delta) {
  const item = cart.find(i => String(i.id) === String(id));
  if (!item) return;

  const newQty = (item.quantity || 1) + delta;

  if (newQty <= 0) {
    cart = cart.filter(i => String(i.id) !== String(id));
  } else {
    item.quantity = newQty;
  }

  saveCart();
  updateCartUI();
}

function removeFromCart(id) {
  cart = cart.filter(i => String(i.id) !== String(id));
  saveCart();
  updateCartUI();
}

function saveForLater(id) {
  const item = cart.find(i => String(i.id) === String(id));
  if (!item) return;

  cart = cart.filter(i => String(i.id) !== String(id));

  const existing = savedForLater.find(i => String(i.id) === String(id));
  if (!existing) {
    savedForLater.push({ ...item });
  }

  saveCart();
  saveSavedForLater();
  updateCartUI();
}

function moveBackToCart(id) {
  const item = savedForLater.find(i => String(i.id) === String(id));
  if (!item) return;

  const existing = cart.find(i => String(i.id) === String(id));
  if (existing) {
    existing.quantity = (existing.quantity || 1) + 1; // or existing.quantity++;
  } else {
    cart.push({ ...item, quantity: 1 });
  }

  savedForLater = savedForLater.filter(i => String(i.id) !== String(id));

  saveCart();
  saveSavedForLater();
  updateCartUI();
}

function removeSaved(id) {
  savedForLater = savedForLater.filter(i => String(i.id) !== String(id));
  saveSavedForLater();
  renderSavedForLater();
}














//Central When cart Changes System
function updateCartUI() {
  cartBadgeUpdate();
  saveCart();

  if (window.location.pathname.includes('cart')) {
    renderCart();
    renderSavedForLater();
  }
}







///Event Delegation on the cart page
if (window.location.pathname.includes('cart')) {
  // Initial render on cart page load
  renderCart();
  renderSavedForLater();
  cartBadgeUpdate();

  document.addEventListener('click', (e) => {

    const increaseBtn = e.target.closest('.increase');
    const decreaseBtn = e.target.closest('.decrease');
    const removeBtn   = e.target.closest('.remove-item');
    const saveBtn     = e.target.closest('.save-for-later-btn');
    const moveBackBtn = e.target.closest('.move-back-btn');
    const removeSavedBtn = e.target.closest('.remove-saved-btn');

    if (increaseBtn) {
      const id = increaseBtn.dataset.id;
      changeQuantity(id, +1);
      return;
    }

    if (decreaseBtn) {
      const id = decreaseBtn.dataset.id;
      changeQuantity(id, -1);
      return;
    }

    if (removeBtn) {
      const id = removeBtn.dataset.id;
      removeFromCart(id);
      return;
    }

    if (saveBtn) {
      const id = saveBtn.dataset.id;
      saveForLater(id);
      return;
    }

    if (moveBackBtn) {
      const id = moveBackBtn.dataset.id;
      moveBackToCart(id);
      return;
    }

    if (removeSavedBtn) {
      const id = removeSavedBtn.dataset.id;
      removeSaved(id);
      return;
    }
  });
}











// ===============================
// ADD TO CART — FINAL REFERENCE
// ===============================
function storeInCart(id) {
  // 1. Normalize ID (dataset always gives strings)
  const normalizedId = String(id);

  // 2. Find the product in your main product list
  const product = productsList.find((product) => String(product.id) === normalizedId);

  // 3. SAFETY CHECK: Prevents null/undefined from entering the cart
  if (!product) {
    console.warn("Add to Cart Error: Product not found for id:",id);
    return;
  };

  // 4. Check if product already exists in cart
   const existing = cart.find((product) => String(product.id) === normalizedId);
  if (existing) {
    // 5A. If it exists, increase quantity
    //  existing.quantity = (existing.quantity || 1) + 1;
    existing.quantity++;
  } else {
    // 5B. If it's new, add it with quantity 1
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  // 6. Update localStorage
   localStorage.setItem('gemaura_cart', JSON.stringify(cart));

  // 7. Re-render UI
  // saveCart();
  // cartBadgeUpdate();
  //  renderCart();
  updateCartUI();//This is the new change. We replace the other 3 function calls with this because
  //updateCartUI code saves to localStorage, calls the badge, and re-render cart page, and re-render saved for later. 

}

// function renderCart() {
//   const container = document.querySelector(".cart-items");
//   if (!container) return;

//   if (cart.length === 0) {
//     container.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
//     updateCartTotal();
//     return;
//   }

//   container.innerHTML = cart.map(item => `
//     <div class="cart-item" data-id="${item.id}">
//       <img src="${item.image}" alt="${item.name}" class="cart-item-image">

//       <div class="cart-info">
//         <h3 class="cart-item-name">${item.name}</h3>
//         <p class="cart-item-price">$${item.price}</p>

//         <div class="quantity-controls">
//           <button class="decrease" data-id="${item.id}">-</button>
//           <span class="quantity-value">${item.quantity}</span>
//           <button class="increase" data-id="${item.id}">+</button>
//         </div>

//         <div class="cart-actions">
//           <button class="save-for-later" data-id="${item.id}">Save for later</button>
//           <button class="remove" data-id="${item.id}">Remove</button>
//         </div>
//       </div>
//     </div>
//   `).join("");

// updateCartTotal();
// }


  

// function updateCartTotal() {
//   const totalElement = document.querySelector(".cart-total");
//   if (!totalElement) return;

//   const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
//   totalElement.textContent = `$${total.toFixed(2)}`;
// }


// function removeFromCart(id) {
//   cart = cart.filter(item => item.id !== id);
//   localStorage.setItem("cart", JSON.stringify(cart));
//   renderCart();
//   cartBadgeUpdate();
// }



// function increaseQuantity(id) {
//   const item = cart.find(i => i.id === id);
//   if (!item) return;

//   item.quantity++;
//   localStorage.setItem("cart", JSON.stringify(cart));
//   renderCart();
//   cartBadgeUpdate();
// }

// function decreaseQuantity(id) {
//   const item = cart.find(i => i.id === id);
//   if (!item) return;

//   if (item.quantity > 1) {
//     item.quantity--;
//   } else {
//     cart = cart.filter(i => i.id !== id);
//   }

//   localStorage.setItem("cart", JSON.stringify(cart));
//   renderCart();
//   cartBadgeUpdate();
// }


// function saveForLater(id) {
//   const item = cart.find(i => i.id === id);
//   if (!item) return;

//   saved.push(item);
//   cart = cart.filter(i => i.id !== id);

//   localStorage.setItem("cart", JSON.stringify(cart));
//   localStorage.setItem("saved", JSON.stringify(saved));

//   renderCart();
//   renderSaved();
//   cartBadgeUpdate();
// }


// function renderSaved() {
//   const container = document.querySelector(".saved-items");
//   if (!container) return;

//   if (saved.length === 0) {
//     container.innerHTML = `<p class="empty-saved">No items saved for later.</p>`;
//     return;
//   }

//   container.innerHTML = saved.map(item => `
//     <div class="saved-item" data-id="${item.id}">
//       <img src="${item.image}" alt="${item.name}" class="saved-item-image">

//       <div class="saved-info">
//         <h3 class="saved-item-name">${item.name}</h3>
//         <p class="saved-item-price">$${item.price}</p>

//         <button class="move-back" data-id="${item.id}">Move back to cart</button>
//       </div>
//     </div>
//   `).join("");
// }


// function moveBackToCart(id) {
//   const item = saved.find(i => i.id === id);
//   if (!item) return;

//   const existing = cart.find(i => i.id === id);

//   if (existing) {
//     existing.quantity += item.quantity;
//   } else {
//     cart.push({ ...item });
//   }

//   saved = saved.filter(i => i.id !== id);

//   localStorage.setItem("cart", JSON.stringify(cart));
//   localStorage.setItem("saved", JSON.stringify(saved));

//   renderCart();
//   renderSaved();
//   cartBadgeUpdate();
// }




//Refactoring the function that updates the badge
//This the version that isnt loading in browser.
// function cartBadgeUpdate() {
//     const badge = document.querySelector('.cart-count');
//     console.log("badge element:", badge);
//     if (!badge) return;

//     const totalAll = totalQuantity(cart);

//     badge.textContent = totalAll;

//     badge.style.display = totalAll > 0 ? "flex" : "none";

// }

// //This is part of the refactoring the badge like the helper function.
// function totalQuantity() {
//     return cart
//     .filter(item => item && typeof item.quantity === "number")
//     .reduce((sum, item) => sum + item.quantity, 0 );
// }







//Delete the badge function and count update that was at first right here in this spot. It is not here, but before the visual feedback of add to cart.


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










// PATTERN: Main render function (UI builder)
// DATA FLOW: Read cart array → build HTML string → inject into DOM → attach events → update totals
// function renderCart() {
//   // PATTERN: DOM lookup
//   // DATA FLOW: Find container where cart items will be rendered
//   const container = document.querySelector(".cart-items-container");
//   if (!container) return; // PLAIN ENGLISH: If container doesn't exist, do nothing

//   // PATTERN: UI buffer
//   // DATA FLOW: Start with empty HTML string
//   let html = "";

// // PATTERN: Iterate over data
//   // DATA FLOW: For each item in cart, append a UI block to html
//   cart.forEach(item => {

//     html += `
//      <div class="cart-item" data-id="${item.id}">
//     <img src="${item.image}" alt="${item.name}" class="cart-item-image">

//     <div class="cart-item-details">
//       <h3 class="cart-item-title">${item.name}</h3>
//       <p class="cart-item-price">$${item.price}</p>

//       <div class="quantity-controls">
//         <button class="decrease" data-id="${item.id}">-</button>
//         <span class="quantity-number">${item.quantity}</span>
//         <button class="increase" data-id="${item.id}">+</button>
//       </div>

//       <button class="remove-item-btn" data-id="${item.id}">Remove</button>
//       <button class="save-for-later-btn" data-id="${item.id}">Save for later</button>
//     </div>
//   </div>

//     `;
//   });

//   // PATTERN: DOM write (replace content)
//   // DATA FLOW: Inject built HTML into container
//   container.innerHTML = html;
// // PATTERN: Event wiring
//   // DATA FLOW: Connect all ".increase" buttons to increaseQuantity()
//  document.addEventListener("click", (e) => {
//   // Increase quantity
//   const increase = e.target.closest(".increase");

//   if (increase) {
//     const id = Number(increase.dataset.id);
//     const item = cart.find(i => i.id === id);
//     item.quantity++;
//     saveCart();
//     renderCart();
//     cartBadgeUpdate();
//     updateCartTotal();
//     return; // stop here so it doesn't fall through
//   }

//   // Decrease quantity
//   const decrease = e.target.closest(".decrease");
//   if (decrease) {
//     const id = Number(decrease.dataset.id);
//     const item = cart.find(i => i.id === id);
//     if (item.quantity > 1) item.quantity--;
//     saveCart();
//     renderCart();
//     cartBadgeUpdate();
//     updateCartTotal();
//     return;
//   }

//   // Remove item
//   const remove = e.target.closest(".remove-item-btn");
//   if (remove) {
//     const id = Number(remove.dataset.id);
//     cart = cart.filter(i => i.id !== id);
//     saveCart();
//     renderCart();
//     cartBadgeUpdate();
//      updateCartTotal();
//     return;
//   }
// });





//  document.querySelectorAll(".save-for-later-btn").forEach(btn => {
//     btn.addEventListener("click", () => {
//       saveItemForLater(btn.dataset.id);
//     });
//   });


//   cartBadgeUpdate();


// }
 






















 // 5. RENDER CART ITEMS (ONLY FOR CART.HTML)
// function renderCart() {
//     console.log("CART CONTENTS:", cart);

//     const cartContainer = document.querySelector('.cart-items-container');
//     if (!cartContainer) return;

//     if (cart.length === 0) {
//         cartContainer.innerHTML = `
//             <div class="empty-cart-message" style="text-align:center; padding: 40px;">
//                 <p>Your cart is empty.</p>
//                 <a href="products.html" class="cta-btn" style="margin-top:20px;">Go Shopping</a>
//             </div>
//         `;
//         if (subtotalElement) subtotalElement.textContent = "$0.00";
//         return;
//     }

//     let cartHTML = '';
//     let total = 0;

//     cart.forEach((item, index) => {
//          const itemTotal = item.price * item.quantity;
//         total += itemTotal;


//         cartHTML +=  `
//             <div class="cart-item">
//                 <img src="${item.image}" alt="${item.name}" class="cart-item-image">
//                 <div class="cart-item-details">
//                     <h2 class="cart-item-title">${item.name}</h2>
//                    <p class="cart-item-price">$${item.price.toFixed(2)}</p>
                     
//                     <div class="cart-item-actions">
//                         <button class="qty-btn" onclick="changeQty(${index}, -1)">-</button>
//                         <span class="item-qty">${item.quantity}</span>
//                         <button class="qty-btn" onclick="changeQty(${index}, 1)">+</button>
//                     </div>

//                     <div class="cart-item-links">
//                         <button class="remove-item" onclick="removeItem(${index})">Remove</button>
//                        <button class="save-for-later-btn" data-id="${item.id}">Save for Later</button>
//                     </div>
//                 </div>
//                 <div class="item-total-price" style="font-weight:700;">$${itemTotal.toFixed(2)}</div>
//             </div>
//         `;
//     });

//     cartContainer.innerHTML = cartHTML;
//     if (subtotalElement) subtotalElement.textContent = `$${total.toFixed(2)}`;
// }






//This is the refactored cart sytem
// function saveCart() {
//   localStorage.setItem('', JSON.stringify(cart));

// }

// function renderCart() {
//   const container = document.querySelector(".cart-items-container");
//   if (!container) return;

//   container.innerHTML = "";

//   if (cart.length === 0) {
//     container.innerHTML = `<p class="empty-cart">Your cart is empty.</p>`;
//     updateCartTotal();
//     return;
//   }

//   cart.forEach(item => {
//     container.innerHTML += `
//       <div class="cart-item">
//       <img src="${item.image}" alt="${item.name}"class="cart-item-image">
//         <h3>${item.name}</h3>
//         <p>$${item.price}</p>

//         <div class="quantity-controls">
//           <button class="decrease" data-id="${item.id}">-</button>
//           <span>${item.quantity}</span>
//           <button class="increase" data-id="${item.id}">+</button>
//         </div>

//         <button class="remove-saved" data-id="${item.id}">Remove</button>
//         <button class="save-for-later-container" data-id="${item.id}">Save for Later</button>
//       </div>
//     `;
//   });
//   updateCartTotal();
// }

// function increaseQuantity(id) {
//   const item = cart.find(i => i.id == id);
//   if (!item) return;

//   item.quantity++;
//   saveCart();
//   renderCart();
// }

// function decreaseQuantity(id) {
//   const item = cart.find(i => i.id == id);
//   if (!item) return;

//   if (item.quantity > 1) {
//     item.quantity--;
//   } else {
//     cart = cart.filter(i => i.id != id);
//   }

//   saveCart();
//   renderCart();
// }

// function removeFromCart(id) {
//   cart = cart.filter(i => i.id != id);
//   saveCart();
//   renderCart();
// }

// function updateCartTotal() {
//   const totalEl = document.querySelector(".cart-subtotal");
//   if (!totalEl) return;

//   const total = cart.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );

//   totalEl.textContent = `$${total.toFixed(2)}`;
// }



// function saveSaved() {
//   localStorage.setItem("saved", JSON.stringify(saved));
// }

// function renderSaved() {
//   const container = document.querySelector(".saved-for-later-container");
//   if (!container) return;

//   container.innerHTML = "";

//   if (saved.length === 0) {
//     container.innerHTML = `<p class="empty-saved">No items saved for later.</p>`;
//     return;
//   }

//   saved.forEach(item => {
//     container.innerHTML += `
//       <div class="saved-item">
//         <img src="${item.image}" alt="${item.name}">
//         <h3>${item.name}</h3>
//         <p>$${item.price}</p>

//         <button class="move-back" data-id="${item.id}">Move Back to Cart</button>
//         <button class="remove-saved" data-id="${item.id}">Remove</button>
//       </div>
//     `;
//   });
// }

// function saveForLater(id) {
//   const item = cart.find(i => i.id == id);
//   if (!item) return;

//   saved.push(item);
//   cart = cart.filter(i => i.id != id);

//   saveCart();
//   savedForLater();

//   renderCart();
//   renderSavedForLater();
// }

// function moveBackToCart(id) {
//   const item = saved.find(i => i.id == id);
//   if (!item) return;

//   cart.push(item);
//   saved = saved.filter(i => i.id != id);

//   saveCart();
//   savedForLater();

//   renderCart();
//   renderSavedForLater();
// }

// function removeSaved(id) {
//   saved = saved.filter(i => i.id != id);
//   savedForLater();
//   renderSavedForLater();
// }





// document.addEventListener("click", function (e) {
//   const id = e.target.dataset.id;

//   if (e.target.classList.contains("increase")) {
//     increaseQuantity(id);
//   }

//   if (e.target.classList.contains("decrease")) {
//     decreaseQuantity(id);
//   }

//   if (e.target.classList.contains("remove")) {
//     removeFromCart(id);
//   }

//   if (e.target.classList.contains("saved-for-later-container")) {
//     saveForLater(id);
//   }

//   if (e.target.classList.contains("move-back")) {
//     moveBackToCart(id);
//   }

//   if (e.target.classList.contains("remove-saved")) {
//     removeSaved(id);
//   }
// });



// renderCart();
// renderSaved();






















//Original Stripe Code
// Stripe client-only checkout: redirect to Stripe Checkout with cart line items
// function getCheckoutSuccessUrl() {
//   const path = window.location.pathname.replace(/\?.*$/, "") || "/cart.html";
//   return window.location.origin + path + "?checkout=success";
// }
// function getCheckoutCancelUrl() {
//   const path = window.location.pathname.replace(/\?.*$/, "") || "/cart.html";
//   return window.location.origin + path;
// }

// async function proceedToStripeCheckout() {
//   if (cart.length === 0) {
//     alert("Your cart is empty.");
//     return;
//   }
//   const placeholder = "price_REPLACE_WITH_STRIPE_PRICE_ID";
//   const lineItems = [];
//   for (const item of cart) {
//     const priceId = item.stripePriceId;
//     if (!priceId || priceId === placeholder) {
//       alert(
//         "Stripe is not set up yet. Please add your Stripe Price IDs to the products and your publishable key in script.js. See STRIPE_SETUP.md for steps."
//       );
//       return;
//     }
//     lineItems.push({ price: priceId, quantity: item.quantity || 1 });
//   }
//   if (typeof stripe === "undefined") {
//     alert("Stripe failed to load. Check your connection.");
//     return;
//   }
//   if (!STRIPE_PUBLISHABLE_KEY || STRIPE_PUBLISHABLE_KEY.includes("REPLACE")) {
//     alert(
//       "Please set your Stripe publishable key in script.js (STRIPE_PUBLISHABLE_KEY). See STRIPE_SETUP.md."
//     );
//     return;
//   }
//   const stripe = stripe(STRIPE_PUBLISHABLE_KEY);
//   const successUrl = getCheckoutSuccessUrl();
//   const cancelUrl = getCheckoutCancelUrl();
//   const { error } = await stripe.redirectToCheckout({
//     lineItems,
//     mode: "payment",
//     successUrl,
//     cancelUrl,
//   });
//   if (error) {
//     alert(error.message || "Checkout failed.");
//   }
// }



const STRIPE_PUBLISHABLE_KEY = "pk_test_51T2C6hD5bVR2klV1YKU8CyCjzCmK0kEuKYbYssTHOWCzR7x0BBP2AcvT8LBZXCrQwVVA4dbvL48eNFCtzItNzAI000a4BQBqdR"
const stripe = Stripe(STRIPE_PUBLISHABLE_KEY);

async function proceedToStripeCheckout() {
if (!cart || cart.length === 0) {
    alert("Your cart is empty.");
    return;
  }

  // B. Convert your cart into Stripe line items
  const lineItems = cart.map(item => ({
    price: item.stripePriceId,   // Stripe Price ID from your dashboard
    quantity: item.quantity || 1
  }));


   // C. Redirect to Stripe Checkout
  const { error } = await stripe.redirectToCheckout({
    lineItems,
    mode: "payment", // One‑time payment
    successUrl: "https://your-production-url.com/success.html",
    cancelUrl: "https://your-production-url.com/cancel.html"
  });

  // D. Show error if Stripe fails
  if (error) {
    alert(error.message || "Checkout failed.");
  }}


















//Refactoring Saved for Later and testing this change.

//This is a function for saving save for alter item in the localStorage
// function savedLocalStorage() {
//   localStorage.setItem("savedForLater", JSON.stringify(savedForLater));
// }



// function saveItemForLater(id) {
//   const item = cart.find(i => i.id === id);
//   if (!item) return;

//   saved.push({ ...item });

//   cart = cart.filter(i => i.id !== id);

//   saveCart();
//   savedLocalStorage(); //This is saving the save for later items on the cart page to localStorage
//  renderCart();
//   renderSavedForLater(); //This is for showing the items in saved for later
//   cartBadgeUpdate();
// }

// function moveBackToCart(id) {
//   const item = saved.find(i => i.id === id);
//   if (!item) return;

//   const existing = cart.find(i => i.id === id);

//   if (existing) {
//     existing.quantity += item.quantity;
//   } else {
//     cart.push({ ...item });
//   }

//   saved = saved.filter(i => i.id !== id);

//   saveCart();
//   savedLocalStorage();//This is the function that saves the save for later items on the cart page.
//   renderCart();
//   renderSavedForLater(); //This shows the saved item on the cart page
//   cartBadgeUpdate();
// }


// function removeSaved(id) {
//   saved = saved.filter(i => i.id !== id);

//   savedLocalStorage(); //This saved the save for later items in the array
// renderSavedForLater(); //This shows the save for later items on the cart. 
// }










//Displaying Saved Items on the cart page.
// function renderSavedForLater() {
//     const savedContainer = document.querySelector('.saved-for-later-container');
//     console.log("saved for later")
//     if (!savedContainer) return;

//     if (savedForLater.length === 0) {
//         savedContainer.innerHTML = `
//             <p class="empty-saved-message">No items saved for later.</p>
//         `;
//         return;
//     }

//     let savedHTML = '';

//     savedForLater.forEach((item, index) => {
//         savedHTML += `
//             <div class="saved-item">
//                 <img src="${item.image}" alt="${item.name}" class="saved-item-image">
//                 <div class="saved-item-details">
//                     <h3 class="savedTitle">${item.name}</h3>
//                     <p class="savedPrice">$${item.price.toFixed(2)}</p>
//                     </div>

//                    <div class="updateBtn">
//                     <button class="move-back-btn" data-id="${item.id}">
//                         Move Back to Cart
//                     </button>

//                     <button class="remove-saved-btn" data-id="${item.id}">
//                         Remove
//                     </button>
//                    </div>
//                 </div>
//             </div>
//         `;
//     });

//     savedContainer.innerHTML = savedHTML;
// }




//Commenting ou saved for later to refactor and test some changes.
//Function to save items for later

// function saveItemForLater(id) {
//     // 1. Find the item in the cart
//     const item = cart.find(product => product.id == id);
//     if (!item) return;

//     // 2. Add it to savedForLater only if not already there
//     if (!savedForLater.some(product => product.id == id)) {
//         savedForLater.push(item);
//     }

//     // 3. Remove it from the cart array
//     cart = cart.filter(product => product.id != id);
 

//     // 4. Save both arrays back to localStorage
//     localStorage.setItem("gemaura_cart", JSON.stringify(cart));
//     localStorage.setItem("savedForLater", JSON.stringify(savedForLater));

//     // 5. Re-render the cart
    
//     updateCartUI();
//     renderSavedForLater();
//      renderCart();
// }



// //Adding event listener to the save later

// document.addEventListener("click", function(e) {
//     if (e.target.classList.contains("save-for-later-btn")) {
//         const id = e.target.dataset.id;
//         saveItemForLater(id);
//     }
// });



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



//Commenting out the Saved For later Section to refactor somewhere else and test changes. 
//Refactored Save for Later 
// const saveForLaterButtons = document.querySelectorAll(".saved-for-later-container");

// if (saveForLaterButtons.length > 0) {
//   saveForLaterButtons.forEach(btn => {
//     btn.addEventListener("click", (e) => {

// //  // 1. MOVE BACK TO CART
//      if (e.target.classList.contains("move-back-btn")) {
//        const id = e.target.dataset.id; // Find the item 


// //         //Normalize ID type (HTML dataset always gives strings)
//           const normalId = String(id);

// // //     // Find the item in savedForLater
//     const item = savedForLater.find((product) => String(product.id) === normalId);

// // //    // SAFETY CHECK: Prevents null/undefined from entering the cart
//    if (!item) {
//       console.warn("Move Back Error: Item not found for id:", id); 
//       return; 
//    }
// }
//   })
// })

// //  // Update storage 
//    localStorage.setItem("savedForLater", JSON.stringify(savedForLater));
//   localStorage.setItem('gemaura_cart', JSON.stringify(cart)); 
// // //   // Re-render UI 
//    renderSavedForLater();
//     renderCart(); 
//  }



 /***************************************
 * MOVE BACK TO CART (saved → cart)
 ***************************************/ //Commenting  out to refactr move back to cart
//  const savedForLaterContainer = document.querySelector(".saved-for-later-container");

//  if (savedForLaterContainer) {
//    savedForLaterContainer.addEventListener("click", (e) => {

// //     // Only run if the Move Back button was clicked
//     if (e.target.classList.contains("move-back-btn")) {

//       const id = e.target.dataset.id;
//       const normalId = String(id);

// //       // Find the item in savedForLater
//       const item = savedForLater.find(product => String(product.id) === normalId);

// //       // SAFETY CHECK — prevents null/undefined from entering the cart
//      if (!item) {
//         console.warn("Move Back Error: Item not found for id:", id);
//         return;
//       }

// //       // Move saved → cart
//       const existing = cart.find(product => String(product.id) === normalId);
//        if (existing) { 
// //         // Increase quantity
//          existing.quantity = (existing.quantity || 1) + 1; 
//         } else {
// //              // Add new item with quantity 1 
//              item.quantity = item.quantity || 1; 
//              cart.push(item);
//              }

// //       // Remove from savedForLater
//       savedForLater = savedForLater.filter(product => String(product.id) !== normalId);

// //       // Save both arrays
//       localStorage.setItem('gemaura_cart', JSON.stringify(cart));
//       localStorage.setItem("savedForLater", JSON.stringify(savedForLater));

// //       // UI updates (safe on all pages)
//       if (typeof renderCart === "function") renderCart();
//       if (typeof renderSavedForLater === "function") renderSavedForLater();

//       cartBadgeUpdate(cart);
//         renderCart();
//     }
//   });
// }








/********************************************
 * REMOVE SAVED ITEM (saved → delete)
 ********************************************///Commenting out the remove from saved for later to refactor and test some changes.
//  const removeButton = document.querySelector(".saved-for-later-container");

// if (savedForLaterContainer) {
//    savedForLaterContainer.addEventListener("click", (e) => {

// //     // Only run if the Remove button was clicked
//    if (e.target.classList.contains("remove-saved-btn")) {

//       const id = e.target.dataset.id;
//       const normalId = String(id);

// //       // Remove the item from savedForLater
//        savedForLater = savedForLater.filter(product => String(product.id) !== normalId);

// //       // Save updated list
//       localStorage.setItem("savedForLater", JSON.stringify(savedForLater));

// //       // Update UI (safe on all pages)
//       if (typeof renderSavedForLater === "function") {
//         renderSavedForLater();
//       }
//     }
//   });
// }













// 7. SEARCH FUNCTIONALITY (Existing logic preserved and cleaned)
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const suggestionsSearch = document.querySelector('.suggestionsSearch');



//adding a function for the search suggestion drop down for the search bar.
function searchSuggestion() {
    const searchQuery = searchInput.value.toLowerCase();
    //clear old suggestions
    suggestionsSearch.innerHTML = "";

    if (searchQuery.length === 0) {
        showDefaultSearch();
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
       location.href = `product?id=${product.id}`;

    });
       suggestionsSearch.appendChild(div);
    });

    suggestionsSearch.style.display = "block";
}






//adding the JavaScript code for the search suggestion for the search bar
searchInput.addEventListener("input", searchSuggestion);



// Redundant productsList removed
//Refactoring the search bar to show before users type
searchInput.addEventListener("focus", () => {
    if (searchInput.value.trim().length === 0) {
     showDefaultSearch();
    }
})

// DEFAULT SUGGESTIONS HELPER
function showDefaultSearch() {
  const suggestionsHtml = productsList
    .map(product => `<div class="suggestionItems">${product.name}</div>`)
    .join("");

  suggestionsSearch.innerHTML = suggestionsHtml;
  suggestionsSearch.style.display = "block";



const suggestionItems = document.querySelectorAll(".suggestionItems");


//Click Handler for the clicking on the search suggestions
suggestionItems.forEach(item => {
  item.addEventListener("click", () => {

    const name = item.textContent.trim();
     const product = productsList.find(p => p.name === name);


    // Fill the search bar
    searchInput.value = name;

    // Hide dropdown
    suggestionsSearch.style.display = "none";

 if (product) {
    window.location.href = `product?id=${product.id}`;
    return; // stop here so runSearch() doesn't override the redirect
  }

    // Redirect or run your search logic
    runSearch();

  });
});

}









 function runSearch() {

    if (!searchInput) return;
    const userInput = searchInput.value.trim().toLowerCase();


 

// //this is where the new updated code go for the search bar and search icon to match the object structure because at first I had a string structure with the const product, but now the array is an object, so I had to refactor the code for the search bar and icon here to match the updated object array structure.

const productMatch = productsList.find(item=> 
item.name.toLowerCase().includes(userInput)
)

 

if (productMatch) {
  location.href = `product?id=${productMatch.id }`;
return;
}  else {
    alert("Please enter a valid product like ring, necklace,or one of the products.")
}
 
 
   }

if (searchIcon) {
    searchIcon.addEventListener('click', runSearch);
}

if (searchInput) {
    searchInput.addEventListener('keydown', (e) => {
        if (e.key === "Enter") runSearch();
    });
}








document.addEventListener("click", (event) => {
  const clickedInsideInput = searchInput.contains(event.target);
  const clickedInsideDropdown = suggestionsSearch.contains(event.target);

  if (!clickedInsideInput && !clickedInsideDropdown) {
    suggestionsSearch.style.display = "none";
  }
});





// 8. INITIAL LOAD
document.addEventListener('DOMContentLoaded', () => {
    cartBadgeUpdate(); // Ensure badge is correct on load
    updateCartUI();

    // Show success message if returning from Stripe with ?checkout=success
    const params = new URLSearchParams(window.location.search);
    if (params.get("checkout") === "success") {
      const msg = document.getElementById("checkout-success-message");
      if (msg) msg.style.display = "block";
    }

    // Checkout button: redirect to Stripe (client-only checkout)
    const checkoutBtn = document.querySelector('.checkout-btn');
    if (checkoutBtn) {
      checkoutBtn.addEventListener('click', function () {
        proceedToStripeCheckout();
      });
    }
});


//Problems in npx serve mode that need to be refactored
//1. The individual Product page. When you type the products in search bar it goes to blank
//image and no reviews or anything only the add to cart button shows.
//When you click add to cart button on individual product page it doesn't add to cart.
//2. On cart page, the quanity + and - when clicking updates the badge  number
//, but not the quantity number.
//3. On the cart page, when clicking remove on the products, the cart badge number disappears from the cart
//, but the product still stays there and the quantity number stays the same 
//in between the + and -. 
//4. On the cart page, when clicking the proceed to checkout, it won't go to Checkout or do 
//anything. The only time the proceed to checkout will do something is when 
//the cart is empty and there are no products on the cart page.
// , and then it will show an pop up or alert at the top, that says,
//"Your cart is empty."