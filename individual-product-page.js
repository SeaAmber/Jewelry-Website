

// 1. Get the ID from the URL
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");

    2. //Find the matching product in your products array
    // (Assuming your products array is available globally)
    const product = productsList.find(item=> item.id == id);

    // 3. Fill in the placeholders
    document.getElementById("product-image").src = product.image;
    document.getElementById("product-name").textContent = product.name;
    document.getElementById("product-price").textContent = `$${product.price}`;
    document.getElementById("product-description").textContent = product.description;
    document.getElementById("average-rating").textContent = product.averageRating + "★";
    

   const productReviewContainer = document.getElementById("product-reviews");


    productReviewContainer.innerHTML = "";

    // 4. Insert review stars (simple example)
    // document.getElementById("product-reviews").textContent = `${product.reviews} ★`;
product.reviews.forEach(review =>{
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");


  reviewElement.innerHTML = `
  <div class="review-wrapper">
  <div class="review-section">
  <img class="review-image" src="${review.image}">
   <p class="review-text">${review.text}</p>
   <div class="review-stars">${"★".repeat(review.stars)}</div>
   <p class="review-author">-${review.author}</p>
  </div>
  </div>
  `;
  productReviewContainer.appendChild(reviewElement);

})
