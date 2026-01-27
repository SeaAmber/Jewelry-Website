



// 1. Get the ID from the URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));

    2. //Find the matching product in your products array
    // (Assuming your products array is available globally)
    const product = productsList.find(product=> product.id === productId);

    // 3. Fill in the placeholders
    const reviewWrapper = document.getElementById("review-wrapper");
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("average-rating").textContent = product.averageRating + "★";


    

   const productReviewContainer = document.getElementById("product-reviews");


    productReviewContainer.innerHTML = "";

    // 4. Insert review stars (simple example)
product.reviews.forEach(review => {
    const reviewElement = document.createElement("div");
    reviewElement.classList.add("review");

    reviewElement.innerHTML = `
        <div class="review-box">
        <div class="review-wrapper">
            <div class="review-card">
                        <img class="review-image" src="${review.image}">
                <p class="review-text">${review.text}</p>
                 <div class="review-stars">${"★".repeat(review.stars)}</div>
                <p class="review-author">- ${review.author}</p>
            </div>
        </div>
        </div>        
    `;
   productReviewContainer.appendChild(reviewElement);

});


 const addToCartBtn = document.getElementById("add-to-cart-btn");

//  addToCartBtn.addEventListener("click", () => {
//      storeInCart(productId)
// });


// function storeInCart(productId) {
//     console.log("adding products:", productId);
//     let cart = JSON.parse(localStorage.getItem('gemaura_cart')) || [];
//     const existingItem = cart.find(item => item.id === productId);

//     if (existingItem) {
//         existingItem.quantity += 1;
//     } else {
//         cart.push({
//             id: product.id, 
//             name:product.name,
//             price: product.price,
//             image: product.image,
//             quantity: 1
//         });
//     }
//     localStorage.setItem('gemaura_cart', JSON.stringify(cart));
//     cartBadgeUpdate(cart);
// }



// function cartLoad() {
//     const saveCart = localStorage.getItem("cart");
//     const cart = JSON.parse(saveCart) || [];
//     return cart;
// }



