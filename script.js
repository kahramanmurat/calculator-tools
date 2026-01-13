// Utility functions for all calculators

// Format number with commas
function formatNumber(num) {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Round to specific decimal places
function roundTo(num, decimals) {
    return Math.round(num * Math.pow(10, decimals)) / Math.pow(10, decimals);
}

// Show result in result box
function showResult(elementId, value, label = "Result") {
    const resultBox = document.getElementById(elementId);
    if (resultBox) {
        resultBox.innerHTML = `
            <h3>${label}</h3>
            <div class="result-value">${value}</div>
        `;
        resultBox.style.display = 'block';
    }
}

// Validate numeric input
function validateNumber(value, fieldName = "This field") {
    if (value === '' || isNaN(value)) {
        alert(`${fieldName} must be a valid number`);
        return false;
    }
    return true;
}

// Add smooth scroll behavior
document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
