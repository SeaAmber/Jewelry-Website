// //  Cart Modal Logic for Shop Page 
console.log(products);
 function getCartItems() {
    return JSON.parse(localStorage.getItem('cartItems') || '[]');
    }
            
        
function setCartItems(items) {
    localStorage.setItem('cartItems', JSON.stringify(items));
}
function addCartItem(product) {
    let items = getCartItems();
    let found = items.find(i => i.name === product.name);
    if (found) {
        found.qty += product.qty || 1;
    } else {
        items.push({ ...product, qty: product.qty || 1 });
    }
    setCartItems(items);
}
function renderCartModal() {
        let modalItems = document.getElementById('cart-modal-items');
        if (!modalItems) return;
        let items = getCartItems();
        if (items.length === 0) {
                modalItems.innerHTML = '<div class="cart-empty">Your cart is empty.</div>';
                return;
        }
        modalItems.innerHTML = items.map((item, idx) => `
            <div class="cart-item" style="display:flex;align-items:center;justify-content:space-between;margin-bottom:10px;">
                <div style="display:flex;align-items:center;gap:10px;">
                    <img src="${item.img}" alt="${item.name}" style="width:38px;height:38px;object-fit:cover;border-radius:6px;">
                    <span>${item.name}</span>
                </div>
               <div style="display:flex;align-items:center;gap:8px;">
                    <button class="cart-qty-btn" data-cart-idx="${idx}" data-action="decrease" style="background:#eee;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;font-size:1.1em;">-</button>
                   <span style="font-weight:bold;min-width:24px;text-align:center;display:inline-block;">${item.qty}</span>
                   <button class="cart-qty-btn" data-cart-idx="${idx}" data-action="increase" style="background:#eee;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;font-size:1.1em;">+</button>
                   <button class="remove-cart-item-btn" data-cart-idx="${idx}" style="background:#ffd7d7;color:#a00;border:none;border-radius:4px;padding:2px 8px;cursor:pointer;font-size:1em;">Remove</button>
               </div>
         </div>
       `).join('');
//         // Add event listeners for remove buttons
        modalItems.querySelectorAll('.remove-cart-item-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                const idx = parseInt(btn.getAttribute('data-cart-idx'));
                let items = getCartItems();
                items.splice(idx, 1);
                setCartItems(items);
                renderCartModal();
            });
        });
//         // Add event listeners for quantity buttons
        modalItems.querySelectorAll('.cart-qty-btn').forEach(function(btn) {
            btn.addEventListener('click', function(e) {
                const idx = parseInt(btn.getAttribute('data-cart-idx'));
                const action = btn.getAttribute('data-action');
                let items = getCartItems();
                if (action === 'increase') {
                    items[idx].qty += 1;
                } else if (action === 'decrease' && items[idx].qty > 1) {
                    items[idx].qty -= 1;
                }
                setCartItems(items);
                renderCartModal();
            });
        });
 }
document.addEventListener('DOMContentLoaded', function() {
    const cartBtn = document.getElementById('cart-modal-btn');
    const cartModal = document.getElementById('cart-modal');
    const closeModal = document.getElementById('close-cart-modal');
    if (cartBtn && cartModal) {
        cartBtn.addEventListener('click', function(e) {
            e.preventDefault();
            cartModal.style.display = 'flex';
            renderCartModal();
        });
    }
    if (closeModal && cartModal) {
        closeModal.addEventListener('click', function() {
            cartModal.style.display = 'none';
        });
    }
    //Close modal on outside click
    if (cartModal) {
        cartModal.addEventListener('click', function(e) {
            if (e.target === cartModal) cartModal.style.display = 'none';
        });
    }
 });
// Add to Cart functionality for individual product pages
document.addEventListener("DOMContentLoaded", function() {
    // Only run on product detail pages (not shop.html)
    if (!window.location.pathname.endsWith('shop.html')) {
        const cartCountEl = document.getElementById("cart-count");
        let cartCount = parseInt(localStorage.getItem("cartCount") || "0");
        function updateCartDisplay() {
            if (cartCountEl) {
                cartCountEl.textContent = cartCount;
                cartCountEl.style.display = cartCount > 0 ? "inline-block" : "none";
            }
        }
        updateCartDisplay();
        document.querySelectorAll(".add-to-cart-btn").forEach(function(btn) {
            btn.addEventListener("click", function(e) {
                e.preventDefault();
                cartCount += 1;
                localStorage.setItem("cartCount", cartCount);
                updateCartDisplay();
            });
        });
    }
});
// Shop page logic: only run if on shop.html
document.addEventListener("DOMContentLoaded", function() {
  if (window.location.pathname.endsWith('shop.html')) {
    // Quantity and cart count logic for shop page
    const cartCountEl = document.getElementById("cart-count");
    let cartCount = parseInt(localStorage.getItem("cartCount") || "0");
    function updateCartDisplay() {
        if (cartCountEl) {
            cartCountEl.textContent = cartCount;
            cartCountEl.style.display = cartCount > 0 ? "inline-block" : "none";
        }
    }
   updateCartDisplay();
    document.querySelectorAll(".quantity-controls").forEach(function(qtyGroup) {
         const minus = qtyGroup.querySelector(".minus");
         const plus = qtyGroup.querySelector(".plus");
        const input = qtyGroup.querySelector(".qty-input");
         minus.addEventListener("click", function(e) {
           e.stopPropagation();
            let val = parseInt(input.value) || 1;
            if (val > 1) input.value = val - 1;
        });
        plus.addEventListener("click", function(e) {
           e.stopPropagation();
           let val = parseInt(input.value) || 1;
            input.value = val + 1;
        });
     input.addEventListener("click", function(e) {
            e.stopPropagation();
        });
    });
    document.querySelectorAll(".add-to-cart-btn").forEach(function(btn) {
        btn.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            const qtyInput = btn.parentElement.querySelector(".qty-input");
            let qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
            const name = btn.parentElement.querySelector('h3')?.textContent?.trim() || 'Product';
            const price = btn.parentElement.querySelector('span')?.textContent?.replace(/[^\d.]/g, '') || '0.00';
            const img = btn.parentElement.parentElement.querySelector('img')?.src || '';
            addCartItem({ name, price, img, qty });
            cartCount += qty;
            localStorage.setItem("cartCount", cartCount);
            updateCartDisplay();
            renderCartModal();
        });
    });
    document.querySelectorAll(".featured-card").forEach(function(card) {
        card.addEventListener("click", function() {
            const link = card.getAttribute("data-link");
            if (link) {
                window.location.href = link;
            }
        });
   });
  }
 });
// Image sliders for all product pages
 document.addEventListener("DOMContentLoaded", function() {
      //Gold Hoop Earrings
    const goldHoopSlider = document.getElementById("sliderImage");
     if (goldHoopSlider) {
         const images = [
            "images/gold-hoop-1.jpg",
            "images/gold-hoop-2.jpg",
            "images/gold-hoop-3.jpg"
         ];
        let current = 0;
        const leftBtn = goldHoopSlider.parentElement.querySelector(".slider-btn-left");
        const rightBtn = goldHoopSlider.parentElement.querySelector(".slider-btn-right");
        function showImage(idx) { goldHoopSlider.src = images[idx]; }
        leftBtn.addEventListener("click", function() { current = (current - 1 + images.length) % images.length; showImage(current); });
        rightBtn.addEventListener("click", function() { current = (current + 1) % images.length; showImage(current); });
    }
    // Rose Gold Bracelet
    const roseGoldSlider = document.getElementById("sliderImage-rose-gold");
    if (roseGoldSlider) {
        const images = [
            "images/rose-gold-1.jpg",
           "images/rose-gold-2.jpg",
           "images/rose-gold-3.jpg"
       ];
       let current = 0;
        
        const leftBtn = roseGoldSlider.parentElement.querySelector(".slider-btn-left");
         const rightBtn = roseGoldSlider.parentElement.querySelector(".slider-btn-right");
        function showImage(idx) { roseGoldSlider.src = images[idx]; }
        leftBtn.addEventListener("click", function() { current = (current - 1 + images.length) % images.length; showImage(current); });
        rightBtn.addEventListener("click", function() { current = (current + 1) % images.length; showImage(current); });
    
// Classic Sterling Silver Necklace
    const classicSlider = document.getElementById("sliderImage-classic");
    if (classicSlider) {
        const images = [
            "images/classic-1.jpg",
            "images/classic-2.jpg",
            "images/classic-3.jpg"
        ];
        let current = 0;
        const leftBtn = classicSlider.parentElement.querySelector(".slider-btn-left");
        const rightBtn = classicSlider.parentElement.querySelector(".slider-btn-right");
        function showImage(idx) { classicSlider.src = images[idx]; }
        leftBtn.addEventListener("click", function() { current = (current - 1 + images.length) % images.length; showImage(current); });
        rightBtn.addEventListener("click", function() { current = (current + 1) % images.length; showImage(current); });
    }
// //     // Heart Pendant Sterling Silver
    const heartSlider = document.getElementById("sliderImage-heart");
    if (heartSlider) {
         const images = [
             "images/heart-1.jpg",
            "images/heart-2.jpg",
             "images/heart-3.jpg"
         ];
         let current = 0;
         const leftBtn = heartSlider.parentElement.querySelector(".slider-btn-left");
         const rightBtn = heartSlider.parentElement.querySelector(".slider-btn-right");
        function showImage(idx) { heartSlider.src = images[idx]; }
        leftBtn.addEventListener("click", function() { current = (current - 1 + images.length) % images.length; showImage(current); });
        rightBtn.addEventListener("click", function() { current = (current + 1) % images.length; showImage(current); });
    }
// // //     // Infinity Sterling Silver Necklace
    const infinitySlider = document.getElementById("sliderImage-infinity");
    if (infinitySlider) {
       const images = [
           "images/infinity-1.jpg",
           "images/infinity-2.jpg",
           "images/infinity-3.jpg"
       ];
        let current = 0;
       const leftBtn = infinitySlider.parentElement.querySelector(".slider-btn-left");
       const rightBtn = infinitySlider.parentElement.querySelector(".slider-btn-right");
       function showImage(idx) { infinitySlider.src = images[idx]; }
       leftBtn.addEventListener("click", function() { current = (current - 1 + images.length) % images.length; showImage(current); });
        rightBtn.addEventListener("click", function() { current = (current + 1) % images.length; showImage(current); });
     }
};

// // // Image slider for Gold Hoop Earrings product page
document.addEventListener("DOMContentLoaded", function() {
    const sliderImage = document.getElementById("sliderImage");
    const leftBtn = document.querySelector(".slider-btn-left");
    const rightBtn = document.querySelector(".slider-btn-right");
    if (sliderImage && leftBtn && rightBtn) {
        // Add your actual image filenames here
        const images = [
            "images/gold-hoop.jpg",
            "images/gold-hoop-2.jpg",
            "images/gold-hoop-3.jpg"
        ];
        let current = 0;
        function showImage(idx) {
            sliderImage.src = images[idx];
        }
         leftBtn.addEventListener("click", function() {
             current = (current - 1 + images.length) % images.length;
             showImage(current);
         });
         rightBtn.addEventListener("click", function() {
            current = (current + 1) % images.length;
            showImage(current);
        });
     }
 });
// // // Simple search functionality for GemAura Jewelry
// // // Add product names and their corresponding page URLs here




function searchProduct(query) {
    query = query.trim().toLowerCase();
    return products.find(product => product.name.toLowerCase().includes(query));
 }

 document.addEventListener("DOMContentLoaded", function() {
//  //Support multiple search bars on different pages
     document.querySelectorAll("#searchInput").forEach(function(searchInput) {
        const searchIcon = searchInput.parentElement.querySelector(".search-icon");

        function handleSearch() {
            const query = searchInput.value;
            const result = searchProduct(query);
            if (result) {
                window.location.href = result.url;
            } else {
               alert("Product not found. Please try another search.");
           }
     }

        searchInput.addEventListener("keydown", function(e) {
            if (e.key === "Enter") {
                e.preventDefault();
                handleSearch();
            }
        });

        if (searchIcon) {
            searchIcon.addEventListener("click", handleSearch);
        }
    });
});
// Navbar interactivity for GemAura

document.addEventListener('DOMContentLoaded', function() {
            // Dropdown click-to-toggle for Necklaces
            const necklacesDropdown = document.getElementById('necklacesDropdown');
            const dropdownLi = necklacesDropdown ? necklacesDropdown.parentElement : null;
            if (necklacesDropdown && dropdownLi) {
                necklacesDropdown.addEventListener('click', function(e) {
                    e.preventDefault();
                    dropdownLi.classList.toggle('open');
                });
            
                // Optional: close dropdown when clicking outside
                document.addEventListener('click', function(e) {
                    if (!dropdownLi.contains(e.target)) {
                        dropdownLi.classList.remove('open');
                    }
                });
            }
        const brandName = document.getElementById('brandName');
            if (brandName) {
                brandName.addEventListener('click', function(e) {
                    e.preventDefault();
                    location.reload();
                });
            }
        })
     })

    