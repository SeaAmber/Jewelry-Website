

//This file I'm keeping.//


document.addEventListener("DOMContentLoaded", () => {

console.log("individual-product-page.js loaded");



// 1. Get the ID from the URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));

<<<<<<< HEAD
    // 2. Find the matching product in your products array
=======
    2. //Find the matching product in your products array
>>>>>>> b216250f3ca446fb8efae5efa9b207d993eade88
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

   addToCartBtn.addEventListener("click", () => {
    console.log("clicked");
     storeInCart(productId)
 });



 })
