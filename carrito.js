
// DECLARACIÓN DE VARIABLES GLOBALES Y SELECCIÓN DE ELEMENTOS

let cart = [];
let totalPrice = 0;

// Selecciona el contador con la clase corregida que usaste en tu HTML.
const cartCountSpan = document.querySelector('.carrito-count'); 
const buyButtons = document.querySelectorAll('.boton-oferta');



//  FUNCIONES DE LÓGICA DEL CARRITO (Guardar y Cargar)


// Función ÚNICA: Actualizar el contador visual Y guardar el carrito en LocalStorage
function updateCartCount() {
    if (cartCountSpan) {
        cartCountSpan.textContent = cart.length; 
    }
    // Guarda el array actualizado en LocalStorage (JSON.stringify)
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
}

// Función para cargar el carrito guardado al iniciar la página
function loadInitialCart() {
    const savedCartString = localStorage.getItem('shoppingCart');
    
    // Si hay datos, los carga; si no, inicializa el carrito como vacío.
    cart = savedCartString ? JSON.parse(savedCartString) : [];
    
    // Recalcula el precio total
    totalPrice = cart.reduce((sum, item) => sum + item.price, 0);

    // Llama a la función principal para mostrar la cuenta inicial
    updateCartCount();
}


//  INICIALIZACIÓN Y EVENT LISTENERS


// Ejecutar la inicialización al cargar el script
loadInitialCart();


// Itera sobre cada botón para agregar el EventListener de "Comprar Ahora"
buyButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        
        const productCard = event.target.closest('.producto-card');
        const nameElement = productCard.querySelector('.nombre');
        const priceElement = productCard.querySelector('.precio');
        
        const productName = nameElement ? nameElement.textContent : 'Producto Desconocido';
        
        // --- Lógica de limpieza y conversión del precio ---
        let productPrice = 0;
        if (priceElement) {
            const priceText = priceElement.textContent;
            
            // Elimina TODOS los caracteres que NO son dígitos.
            const numericString = priceText.replace(/[^\d]/g, '').trim(); 
            
            if (numericString === '' || priceText.includes('¡Ver Precio!')) {
                productPrice = 0; 
            } else {
                productPrice = parseInt(numericString, 10);
            }
        }
        
        // --- Agregar al carrito ---
        if (productPrice > 0) {
            const product = {
                name: productName,
                price: productPrice
            };
    
            cart.push(product);
            totalPrice += productPrice;
        }

        //  Actualizar el contador y GUARDAR en LocalStorage
        updateCartCount();

        //  Mostrar el resultado en consola para verificación
        console.log('--- Producto Añadido ---');
        console.log('Artículo:', productName);
        console.log('Precio:', productPrice); 
        console.log('Carrito actual (cantidad):', cart.length);
        console.log('Total a pagar:', `$${totalPrice.toLocaleString('es-ES')}`);
    });
});