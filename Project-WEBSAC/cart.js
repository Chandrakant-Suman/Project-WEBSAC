// Retrieve cart products from localStorage
const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

// Function to display products in the cart
function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = ''; // Clear the cart container

    if (cartProducts.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

    // Display each product in the cart
    cartProducts.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('product-item');

        productDiv.innerHTML = `
            <h3>${product.name}</h3>
            <p>Price: $${product.price.toFixed(2)}</p>
            <p>${product.description}</p>
        `;

        cartContainer.appendChild(productDiv);
    });
}

// Event listener for "Go to Payment Page" button
document.getElementById('goToPayment').addEventListener('click', function() {
    window.location.href = 'paymentPage.html'; // Redirect to paymentPage.html
});

// Call displayCart when the page loads
displayCart();
