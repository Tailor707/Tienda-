document.addEventListener("DOMContentLoaded", function () {
    // Inicializar el carrito de compras vacío
    let cart = [];

    // Actualizar el ícono del carrito en el encabezado
    function updateCartIcon() {
        const cartIcon = document.querySelector(".cart-icon");
        const cartItemCount = cart.reduce((total, item) => total + item.quantity, 0);
        cartIcon.textContent = cartItemCount.toString();
    }

    // Agregar un producto al carrito
    function addToCart(product) {
        const existingItem = cart.find(item => item.product.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cart.push({ product, quantity: 1 });
        }

        updateCartIcon();
    }

    // Evento para agregar producto al carrito al hacer clic en un botón
    const addToCartButtons = document.querySelectorAll(".add-to-cart-button");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", () => {
            const productId = button.getAttribute("data-product-id");
            const productName = button.getAttribute("data-product-name");
            const productPrice = parseFloat(button.getAttribute("data-product-price"));

            const product = {
                id: productId,
                name: productName,
                price: productPrice,
            };

            addToCart(product);
        });
    });
});
