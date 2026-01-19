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
    averageRating: 5.0,
description:"Elegant and timeless, this necklace adds a touch of sophistication to any look.",
     reviews:[
        {stars:4, text:"Beautiful necklace—simple and elegant!", author:"Lena"},
        {stars: 4, text:"Great quality and perfect for everyday wear.", author:"Carlos"},
        {stars:4, text:"Love it! Goes with everything I own.", author:"Fatima"}
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
        {stars:4, text:"This ring is absolutely stunning! The design is elegant and it fits perfectly.", author:"Sophia"},
        {stars: 4, text:"I bought this ring as a gift and it exceeded my expectations. The craftsmanship is excellent and it looks even better in person.", author:"Marcus"},
        {stars:4, text:"I love how versatile this ring is. It's comfortable for daily wear and adds a touch of sophistication to any outfit.", author:"Hannah"}
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
        {stars:4, text:"This bangle is absolutely gorgeous! It's lightweight, comfortable.", author:"Samantha"},
        {stars: 4, text:"I'm so impressed with the quality and design of this bangle.", author:"Nia"},
        {stars:4, text:"A perfect gift! I bought this bangle for my sister, and she adores it.", author:"Lucas"}
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
        {stars:4, text:"This choker is absolutely stunning! It's comfortable to wear and instantly elevates any outfit.", author:"Lila"},
        {stars: 4, text:"I love the modern yet classic look of this choker. The quality is excellent.", author:"Jasmine"},
        {stars:4, text:"Beautifully crafted and very stylish! I’ve worn it both alone and layered with other necklaces, and it always looks amazing", author:"Ava"}
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
        {stars:4, text:"This hair jewelry is absolutely gorgeous! It added the perfect sparkle to my updo for a wedding.", author:"Emily"},
        {stars: 4, text:"I love how versatile and elegant these pieces are. They stay in place all day and instantly elevate my hairstyle.", author:"Maya"},
        {stars:4, text:"Beautiful craftsmanship and stunning design! The hair jewelry made my look unique and memorable. Highly recommended for anyone wanting to stand out", author:"Zara"}
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
        {stars:4, text:"These cufflinks are the perfect finishing touch for my suits.", author:"James"},
        {stars: 4, text:"I bought these as a gift for my husband, and he absolutely loves them.", author:"Sophia"},
        {stars:4, text:"Great value for the price! The cufflinks look very sophisticated and feel durable.", author:"Arjun"}
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
        {stars:4, text:"This brooch is absolutely stunning! The craftsmanship is top-notch, and it adds the perfect finishing touch to my blazers.", author:"Olivia"},
        {stars: 4, text:"I love how versatile this brooch is. I've worn it on my scarf and even on my handbag, and it always stands out.", author:"Priya"},
        {stars:5, text:"A beautiful accessory that exceeded my expectations. The quality is excellent, and it arrived in lovely packaging.", author:"Daniel"}
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
        {stars:5, text:"“I absolutely love this pendant! The design is elegant and versatile.", author:"Angelica"},
        {stars: 5, text:"The quality is outstanding, and I've received so many compliments every time I wear it", author:"Carrie"},
        {stars:5, text:"My birthday is coming up and I'm going to order another pendant.", author:"Maria"}
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
        {stars:4, text:"This anklet is so cute, and I wear it all the time around the house and out in public.", author:"Ella"},
        {stars: 5, text:"I ordered the anklet, and I really love this. I always love to wrap this around my anke when I get dressed up", author:"Sallie"},
        {stars:4, text:"I am going to order another anklet for my niece. This is so cute.",author:"Mary"}
    ]
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

