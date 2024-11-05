// Function to navigate to the cart page
function goToCart() {
  window.location.href = "cart.html"; // Redirects to cart.html
}

// Sample products
const products = [
{ id: 1, name: "T-shirt", price: 19.99, description: "Comfortable cotton t-shirt." },
{ id: 2, name: "Jeans", price: 39.99, description: "Stylish denim jeans." },
{ id: 3, name: "Jacket", price: 49.99, description: "Warm winter jacket." }
];

// Function to add product to cart
function addToCart(productId) {
// Retrieve existing cart from localStorage or create an empty array if none exists
const cart = JSON.parse(localStorage.getItem('cart')) || [];

// Find product by ID and add it to the cart
const product = products.find(p => p.id === productId);
if (product) {
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart)); // Save updated cart to localStorage
    alert(`${product.name} has been added to your cart.`);
}
}

// Function to display products with "Add to Cart" button
function displayProducts() {
const productContainer = document.getElementById('product-list');
productContainer.innerHTML = '';

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.classList.add('product-item');

    productDiv.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: $${product.price.toFixed(2)}</p>
        <p>${product.description}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;

    productContainer.appendChild(productDiv);
});
}

// Call this function when Homepage.html loads
displayProducts();
