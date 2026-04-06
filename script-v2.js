
console.log("SUCCESS PAGE: localStorage cart =", localStorage.getItem('gemaura_cart'));

const productsList = [
  {
    id: 1,
    name: "necklace",
    price: 25,
    paymentLink: "https://buy.stripe.com/test_6oUeVc9zV9YP8gd6YlcZa09",
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
    paymentLink:"https://buy.stripe.com/test_3cI9AS7rN0of1RP96tcZa08",
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
    paymentLink: "https://buy.stripe.com/test_6oUdR88vRfj9541fuRcZa07",
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
    paymentLink: "https://buy.stripe.com/test_8x23cu13p1sjbsp82pcZa06",
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
    paymentLink: "https://buy.stripe.com/test_14A7sK8vR0of0NL0zXcZa05",
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
    paymentLink: "https://buy.stripe.com/test_14AfZg27tfj97c94QdcZa04",
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
    paymentLink: "https://buy.stripe.com/test_eVqfZgeUf2wncwtbeBcZa03",
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
    paymentLink: "https://buy.stripe.com/test_aFaaEWeUf9YPgMJ82pcZa02",
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
    paymentLink: "https://buy.stripe.com/test_bJe8wO13p9YP9kh96tcZa01",
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
    paymentLink: "https://buy.stripe.com/test_00weVcdQbgndaolfuRcZa00",
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
    // 5. If it exists, increase quantity
    existing.quantity++;
  } else {
    // 5. If it's new, add it with quantity 1
    cart.push({
      ...product,
      quantity: 1,
    });
  }

  // 6. Update localStorage
   localStorage.setItem('gemaura_cart', JSON.stringify(cart));

  // 7. Re-render UI
 
  updateCartUI();//This is the new change. We replace the other 3 function calls with this because
  //updateCartUI code saves to localStorage, calls the badge, and re-render cart page, and re-render saved for later. 

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




// 7. SEARCH FUNCTIONALITY (Existing logic preserved and cleaned)
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');
const suggestionsSearch = document.querySelector('.suggestionsSearch');


if (searchInput && searchIcon && suggestionsSearch) {
   function searchSuggestion() {
   const searchQuery = searchInput.value.toLowerCase();
    //clear old suggestions
     suggestionsSearch.innerHTML = "";

    if (searchQuery.length === 0) {
        showDefaultSearch();
        return;
    }


//     //Filter Products
    const filter = productsList.filter(product => product.name.toLowerCase().includes(searchQuery));
//     //if no matches hide suggestions
    if (filter.length === 0) {
        suggestionsSearch.innerHTML = "";
    suggestionsSearch.style.display = "none";
    return;
    }


//     //Render Suggestions
    filter.forEach(product => {
    const div = document.createElement("div");
     div.classList.add("suggestions"); 
    div.textContent = product.name;

//     //When clicking a suggestion
     div.addEventListener("click", () => { 


       searchInput.value = product.name; 
         suggestionsSearch.style.display = "none"; 
        location.href = `product?id=${product.id}`;

    });
       suggestionsSearch.appendChild(div);
    });

    suggestionsSearch.style.display = "block";
 }

function showDefaultSearch() {
   const suggestionsHtml = productsList
     .map(product => `<div class="suggestionItems">${product.name}</div>`)
    .join("");

  suggestionsSearch.innerHTML = suggestionsHtml;
  suggestionsSearch.style.display = "block";



const suggestionItems = document.querySelectorAll(".suggestionItems");


// //Click Handler for the clicking on the search suggestions
suggestionItems.forEach(item => {
  item.addEventListener("click", () => {

    const name = item.textContent.trim();
     const product = productsList.find(p => p.name === name);


//     // Fill the search bar
    searchInput.value = name;

//     // Hide dropdown
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


 

// // //this is where the new updated code go for the search bar and search icon to match the object structure because at first I had a string structure with the const product, but now the array is an object, so I had to refactor the code for the search bar and icon here to match the updated object array structure.

 const productMatch = productsList.find(item=> 
 item.name.toLowerCase().includes(userInput)
 )

 

if (productMatch) {
  location.href = `product?id=${productMatch.id }`;
return;
}  else {
    alert("Please enter a valid product like ring, necklace,or one of the products.")
}}

 

   // 2. EVENT LISTENERS
    searchInput.addEventListener("input", searchSuggestion);

    searchInput.addEventListener("focus", () => {
        if (searchInput.value.trim().length === 0) {
            showDefaultSearch();
        }
    });

    searchInput.addEventListener("keydown", (e) => {
        if (e.key === "Enter") runSearch();
    });

    searchIcon.addEventListener("click", runSearch);
  




document.addEventListener("click", (event) => {
  const clickedInsideInput = searchInput.contains(event.target);
  const clickedInsideDropdown = suggestionsSearch.contains(event.target);

  if (!clickedInsideInput && !clickedInsideDropdown) {
    suggestionsSearch.style.display = "none";
  }
});


} 















//adding a function for the search suggestion drop down for the search bar.
// function searchSuggestion() {
//     const searchQuery = searchInput.value.toLowerCase();
//     //clear old suggestions
//     suggestionsSearch.innerHTML = "";

//     if (searchQuery.length === 0) {
//         showDefaultSearch();
//         return;
//     }


//     //Filter Products
//     const filter = productsList.filter(product => product.name.toLowerCase().includes(searchQuery));
//     //if no matches hide suggestions
//     if (filter.length === 0) {
//         suggestionsSearch.innerHTML = "";
//     suggestionsSearch.style.display = "none";
//     return;
//     }


//     //Render Suggestions
//     filter.forEach(product => {
//     const div = document.createElement("div");
//     div.classList.add("suggestions"); 
//     div.textContent = product.name;

//     //When clicking a suggestion
//     div.addEventListener("click", () => { 


//         searchInput.value = product.name; 
//         suggestionsSearch.style.display = "none"; 
//        location.href = `product?id=${product.id}`;

//     });
//        suggestionsSearch.appendChild(div);
//     });

//     suggestionsSearch.style.display = "block";
// }



//   //adding the JavaScript code for the search suggestion for the search bar
// searchInput.addEventListener("input", searchSuggestion);
// // Redundant productsList removed
// //Refactoring the search bar to show before users type


//   searchInput.addEventListener("focus", () => {
//     if (searchInput.value.trim().length === 0) {
//      showDefaultSearch();
//     }
// })


// // DEFAULT SUGGESTIONS HELPER
// function showDefaultSearch() {
//   const suggestionsHtml = productsList
//     .map(product => `<div class="suggestionItems">${product.name}</div>`)
//     .join("");

//   suggestionsSearch.innerHTML = suggestionsHtml;
//   suggestionsSearch.style.display = "block";



// const suggestionItems = document.querySelectorAll(".suggestionItems");


// //Click Handler for the clicking on the search suggestions
// suggestionItems.forEach(item => {
//   item.addEventListener("click", () => {

//     const name = item.textContent.trim();
//      const product = productsList.find(p => p.name === name);


//     // Fill the search bar
//     searchInput.value = name;

//     // Hide dropdown
//     suggestionsSearch.style.display = "none";

//  if (product) {
//     window.location.href = `product?id=${product.id}`;
//     return; // stop here so runSearch() doesn't override the redirect
//   }

//     // Redirect or run your search logic
//     runSearch();

//   });
// });

// }






//  function runSearch() {

//     if (!searchInput) return;
//     const userInput = searchInput.value.trim().toLowerCase();


 

// // //this is where the new updated code go for the search bar and search icon to match the object structure because at first I had a string structure with the const product, but now the array is an object, so I had to refactor the code for the search bar and icon here to match the updated object array structure.

// const productMatch = productsList.find(item=> 
// item.name.toLowerCase().includes(userInput)
// )

 

// if (productMatch) {
//   location.href = `product?id=${productMatch.id }`;
// return;
// }  else {
//     alert("Please enter a valid product like ring, necklace,or one of the products.")
// }
 
 
//    }

// if (searchIcon) {
//     searchIcon.addEventListener('click', runSearch);
// }

// if (searchInput) {
//     searchInput.addEventListener('keydown', (e) => {
//         if (e.key === "Enter") runSearch();
//     });
// }




// document.addEventListener("click", (event) => {
//   const clickedInsideInput = searchInput.contains(event.target);
//   const clickedInsideDropdown = suggestionsSearch.contains(event.target);

//   if (!clickedInsideInput && !clickedInsideDropdown) {
//     suggestionsSearch.style.display = "none";
//   }
// });




//Stripe Payment Link Code
const checkoutButton = document.querySelector(".checkout-btn")
if (checkoutButton) {
 checkoutButton.addEventListener("click",() => {
    const productsList = cart[0]; 
    window.location.href = productsList.paymentLink;
 })
}
 
// 8. INITIAL LOAD
document.addEventListener('DOMContentLoaded', () => {
   cartBadgeUpdate(); // Ensure badge is correct on load
    updateCartUI();
    })
  

  

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
