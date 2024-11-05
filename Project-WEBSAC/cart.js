
const cartProducts = JSON.parse(localStorage.getItem('cart')) || [];

function displayCart() {
    const cartContainer = document.getElementById('cart');
    cartContainer.innerHTML = '';

    if (cartProducts.length === 0) {
        cartContainer.innerHTML = '<p>Your cart is empty.</p>';
        return;
    }

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

document.getElementById('goToPayment').addEventListener('click', function() {
    window.location.href = 'paymentPage.html';
});

// Call displayCart when the page loads
displayCart();
