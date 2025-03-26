document.addEventListener('DOMContentLoaded', () => {
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
    ];

    const cart = [];
    const productList = document.getElementById('product-list');
    const cartItems = document.getElementById('cart-items');
    const cartTotalMessage = document.getElementById('cart-total');
    const emptyCartMessage = document.getElementById('empty-cart');
    const totalPriceDisplay = document.getElementById('Total-price');
    const checkoutBtn = document.getElementById('checkout-btn');

    // Render products to the product list
    products.forEach(product => {
        const productDiv = document.createElement('div'); // Fixed: added quotes around 'div'
        productDiv.classList.add('product', 'p-4', 'border', 'rounded', 'shadow-md');
        productDiv.innerHTML = `
            <span>${product.name} - $${product.price.toFixed(2)}</span>
            <button data-id="${product.id}" class="ml-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Add to Cart</button>
        `;
        productList.appendChild(productDiv);
    });

    // Handle add-to-cart button clicks
    productList.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const productId = parseInt(e.target.getAttribute('data-id'), 10);
            const product = products.find(p => p.id === productId);
            if (product) {
                addToCart(product);
            }
        }
        console.log(cart);
    });

    // Add product to cart
    function addToCart(product) {
        cart.push(product);
        renderCart();
    }

    // Render the cart contents
    function renderCart() {
        cartItems.innerHTML = '';
        let totalPrice = 0;

        if (cart.length > 0) {
            emptyCartMessage.classList.add('hidden');
            cartTotalMessage.classList.remove('hidden');

            cart.forEach((item, index) => {
                totalPrice += item.price;
                const cartItem = document.createElement('div');
                cartItem.classList.add('p-2', 'border-b', 'flex', 'justify-between');

                cartItem.innerHTML = `
                    <span>${item.name} - $${item.price.toFixed(2)}</span>
                `;

                cartItems.appendChild(cartItem);
            });

            totalPriceDisplay.textContent = `$${totalPrice.toFixed(2)}`;
        } else {
            emptyCartMessage.classList.remove('hidden');
            cartTotalMessage.classList.add('hidden');
        }
    }

    // Handle checkout button clicks
    checkoutBtn.addEventListener('click', () => {
        if (cart.length > 0) {
            alert('Thank you for your purchase!');
            cart.length = 0;
            renderCart();
        }
    });
});