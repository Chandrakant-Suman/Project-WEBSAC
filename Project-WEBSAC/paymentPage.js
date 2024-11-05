document.addEventListener('DOMContentLoaded', () => {
    const paymentMethods = document.querySelectorAll('.method');
    const creditCardForm = document.getElementById('credit-card-form');
    const netBankingForm = document.getElementById('net-banking-form');
    const upiForm = document.getElementById('upi-form');
    const errorMessage = document.getElementById("error-message");

    showForm('credit-card');

    paymentMethods.forEach(method => {
        method.addEventListener('click', () => {
            paymentMethods.forEach(item => item.classList.remove('active'));
            method.classList.add('active');

            showForm(method.id);
        });
    });

    function showForm(methodId) {
        creditCardForm.classList.add('hidden');
        netBankingForm.classList.add('hidden');
        upiForm.classList.add('hidden');

        if (methodId === 'credit-card') {
            creditCardForm.classList.remove('hidden');
        } else if (methodId === 'net-banking') {
            netBankingForm.classList.remove('hidden');
        } else if (methodId === 'upi') {
            upiForm.classList.remove('hidden');
        }
    }

function completePurchase() {
    localStorage.removeItem('cart'); 
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
            errorMessage.textContent = ""; 
            alert("Do not back.");
            window.location.href = "paymentSuccessful.html"; // Redirect to payment successful page
        }
    };
});
