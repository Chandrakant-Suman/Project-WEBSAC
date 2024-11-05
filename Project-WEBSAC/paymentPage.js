document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('.method');
    const creditCardForm = document.getElementById('credit-card-form');
    const netBankingForm = document.getElementById('net-banking-form');
    const upiForm = document.getElementById('upi-form');
    const errorMessage = document.getElementById("error-message");

    // Initial setup
    showForm('credit-card');

    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(item => item.classList.remove('active'));
            method.classList.add('active');

            // Show relevant form based on selected method
            showForm(method.id);
        });
    });

    function showForm(methodId) {
        // Hide all forms initially
        creditCardForm.classList.add('hidden');
        netBankingForm.classList.add('hidden');
        upiForm.classList.add('hidden');

        // Show the selected form
        if (methodId === 'credit-card') {
            creditCardForm.classList.remove('hidden');
        } else if (methodId === 'net-banking') {
            netBankingForm.classList.remove('hidden');
        } else if (methodId === 'upi') {
            upiForm.classList.remove('hidden');
        }
    }

    // Call this function upon successful payment completion
function completePurchase() {
    localStorage.removeItem('cart'); // Clear cart data from localStorage
    alert("Thank you for your purchase!");
    window.location.href = "paymentSuccessful.html"; // Redirect to payment successful page
}


    // Password validation function
    window.validatePasswords = function (event) {
        event.preventDefault(); // Prevent link navigation
        const password = document.getElementById("password").value;
        const confirmPassword = document.getElementById("confirm-password").value;

        if (password !== confirmPassword) {
            errorMessage.textContent = "Passwords do not match!";
        } else {
            errorMessage.textContent = ""; // Clear error
            alert("Do not back.");
            window.location.href = "paymentSuccessful.html"; // Redirect to payment successful page
        }
    };
});
