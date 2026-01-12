

const brandLink = document.querySelector('.nav-brand');

if (location.pathname === '/index.html' || location.pathname === '/') {
    brandLink.addEventListener('click', function(event) {
        event.preventDefault();
    });
}



// 1. SELECT ELEMENTS (from MDN querySelector)
const searchInput = document.querySelector('.search-input');
const searchIcon = document.querySelector('.search-icon');

// 2. LIST OF VALID PRODUCTS (you can expand this)
const products = ["necklace", "bracelet", "ring", "earrings","brooch","bangle","choker", "hair jewelry",  ];

// 3. FUNCTION TO RUN SEARCH
function runSearch() {

    // 3A. GET USER INPUT (from MDN input.value + trim())
    const userInput = searchInput.value.trim().toLowerCase();
//This is a special case for this product hair jewelry
if (userInput === "hair jewelry") {
    location.href = "hair-jewelry.html";
    return;
}

    // 3B. VALIDATE INPUT (from MDN if/else + includes())
    if (products.includes(userInput)) {

        // 3C. REDIRECT TO PRODUCT PAGE (from MDN location.href)
        location.href = `${userInput}.html`;

    } else {

        // 3D. SHOW ERROR (from MDN alert())
        alert("Please enter a valid jewelry item.");
    }
}

// 4. CLICK EVENT (from MDN addEventListener click)
searchIcon.addEventListener('click', runSearch);

// 5. ENTER KEY SUPPORT (from MDN keydown event)
searchInput.addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        runSearch();
    }
});
