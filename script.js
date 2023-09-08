document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("newsletter-form");
    const emailInput = document.getElementById("email");
    const successMessage = document.getElementById("success-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        const email = emailInput.value;
        setTimeout(function() {
            form.style.display = "none";
            successMessage.style.display = "block";
        }, 1000);
    });
});
