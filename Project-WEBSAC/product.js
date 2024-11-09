let cart = [];
        
        function addToCart(id, name, price) {
            const existingItem = cart.find(item => item.id === id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                cart.push({ id, name, price, quantity: 1 });
            }
            updateCart();
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            updateCart();
        }

        function updateCart() {
            const cartItemsContainer = document.getElementById("cart-items");
            cartItemsContainer.innerHTML = '';
            let total = 0;

            cart.forEach(item => {
                total += item.price * item.quantity;
                cartItemsContainer.innerHTML += `
                    <div class="cart-item">
                        <span>${item.name} x${item.quantity}</span>
                        <span>₹${item.price * item.quantity}</span>
                        <button onclick="removeFromCart(${item.id})">Remove</button>
                    </div>
                `;
            });

            document.getElementById("cart-total").innerText = total.toFixed(2);
            document.getElementById("cart-count").innerText = cart.length;
        }

        function toggleCart() {
            const cart = document.getElementById("cart");
            cart.style.display = cart.style.display === "none" ? "block" : "none";
        }

        function checkout() {
            if (cart.length === 0) {
                alert("Your cart is empty!");
                return;
            }
            alert("Your Payment Process Begins!");
            window.location.href = 'paymentPage.html';
            // cart = [];
            updateCart();
            toggleCart();
        }

        // Initialize cart display as hidden
        document.getElementById("cart").style.display = "none";