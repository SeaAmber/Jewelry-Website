
//This file I'm keeping.//


document.addEventListener("DOMContentLoaded", () => {



// // 1. Get the ID from the URL
    const params = new URLSearchParams(window.location.search);
    const productId = parseInt(params.get("id"));

console.log("URL ID:", productId);
    console.log("Products list:", productsList);

    // 2. Find the matching product in your products array
    // (Assuming your products array is available globally)

 

    const product = productsList.find(product=> product.id === productId);
        console.log("Product found:", product);

if (!product) {
    console.error("No product found for ID:", productId);
    document.getElementById("product-name").textContent = "Product not found.";
    return;
}




   // 3. Fill in the placeholders
    const reviewWrapper = document.getElementById("review-wrapper");
     document.getElementById("product-image").src = product.image;
        document.getElementById("product-image").alt = product.name;

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
    storeInCart(productId);
   
 });


 })













