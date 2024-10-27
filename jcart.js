const cartButtons = document.querySelectorAll('.add-to-cart');
const cartIcon = document.querySelector('.cart-icon');
let cartCount = 0;

// Function to save cart to localStorage
function saveCartToLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(cartItems));
}

cartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = {
            name: button.parentElement.querySelector('h3').innerText,
            image: button.parentElement.querySelector('img').src,
            price: parseFloat(button.parentElement.querySelector('p').innerText.replace('$', '')),
            quantity: 1
        };

        // Retrieve current cart from localStorage or initialize a new cart
        const currentCart = JSON.parse(localStorage.getItem('cart')) || [];
        
        // Check if the product is already in the cart
        const existingProductIndex = currentCart.findIndex(item => item.name === product.name);
        if (existingProductIndex >= 0) {
            // Increase quantity if product already exists
            currentCart[existingProductIndex].quantity += 1;
        } else {
            // Add new product to the cart
            currentCart.push(product);
        }
        
        // Save updated cart to localStorage
        saveCartToLocalStorage();

        cartCount++;
        alert('Item added to cart! Total items in cart: ' + cartCount);
        
        // Add the animation class for the bounce effect
        cartIcon.classList.add('clicked');
        
        // Remove the animation class after the animation is done
        setTimeout(() => {
            cartIcon.classList.remove('clicked');
        }, 500); // Duration matches the animation duration in CSS
    });
});