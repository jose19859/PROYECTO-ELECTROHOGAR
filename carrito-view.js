document.addEventListener('DOMContentLoaded', () => {
    const listContainer = document.getElementById('lista-productos-carrito');
    const totalElement = document.getElementById('total-carrito');
    const vaciarButton = document.getElementById('boton-vaciar');
    const finalizarButton = document.querySelector('.boton-finalizar'); 
    // 1. OBTENER EL ELEMENTO DEL CONTADOR
    const countElement = document.querySelector('.carrito-count'); 
    
    // Obtener el carrito de LocalStorage
    const cartString = localStorage.getItem('shoppingCart');
    let cart = cartString ? JSON.parse(cartString) : [];
    let totalPrice = 0; 

    // --- FUNCIONES DE SOPORTE ---

    // Función para actualizar el contador del carrito en el header
    function updateCartCount() {
        const itemCount = cart.length; 
        if (countElement) {
            countElement.textContent = itemCount;
        }
    }

    // Función para renderizar el carrito
    function renderCart() {
        listContainer.innerHTML = ''; 

        if (cart.length === 0) {
            listContainer.innerHTML = '<p class="carrito-vacio-msg">Tu carrito está vacío. ¡Añade algunas ofertas!</p>';
            totalElement.textContent = 'Total: $0';
            vaciarButton.style.display = 'none';
            finalizarButton.disabled = true; 
        } else {
            totalPrice = 0;
            vaciarButton.style.display = 'block';
            finalizarButton.disabled = false; 

            //  Iterar sobre los productos y crear el HTML
            cart.forEach(item => {
                // Se asume que item.price es un número y que cada ítem representa 1 unidad para el contador
                totalPrice += item.price;
                
                const productDiv = document.createElement('div');
                productDiv.classList.add('item-carrito');
                
                const formattedPrice = item.price.toLocaleString('es-ES'); 
                
                productDiv.innerHTML = `
                    <p class="nombre-item">📦 ${item.name}</p>
                    <p class="precio-item">Precio: $${formattedPrice}</p>
                `;
                listContainer.appendChild(productDiv);
            });

            //  Actualizar el total
            const formattedTotal = totalPrice.toLocaleString('es-ES');
            totalElement.textContent = `Total: $${formattedTotal}`;
        }
        
        // 3. LLAMAR A LA FUNCIÓN DE ACTUALIZACIÓN DEL CONTADOR
        updateCartCount(); 
    }

    // confirmación ANTES de vaciar
    function clearCart() {
        
        const confirmacion = confirm("ALERTA: Estás a punto de vaciar tu Carrito. Perderás todas tus compras. ¿Deseas continuar?");
        
        
        if (confirmacion) {
            cart = []; 
            localStorage.setItem('shoppingCart', JSON.stringify(cart)); 
            renderCart(); // Renderiza y actualiza el contador
        }
    }
    
    // Función para simular la finalización de la compra
    function finalizePurchase() {
        if (cart.length === 0) {
            alert("Tu carrito está vacío. ¡Agrega productos antes de finalizar!");
            return;
        }
        
        alert(`🎉 ¡Compra Finalizada con éxito! Total pagado: $${totalPrice.toLocaleString('es-ES')}.\nGracias por tu compra en ElectroCasa.`);

        // Vacía el carrito después de la "compra"
        cart = []; 
        localStorage.setItem('shoppingCart', JSON.stringify(cart)); 
        renderCart(); // Renderiza y actualiza el contador
    }

    // --- ASIGNACIÓN DE EVENTOS ---
    vaciarButton.addEventListener('click', clearCart);
    finalizarButton.addEventListener('click', finalizePurchase); 

    // Renderizar la vista al cargar la página (esto también inicializa el contador)
    renderCart();
});