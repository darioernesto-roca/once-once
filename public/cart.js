// Obtener la referencia al contenedor del carrito
const cartContainer = document.getElementById('cartContainer');

// Obtener los productos del localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Generar el HTML para cada producto y agregarlo al contenedor del carrito
cartItems.forEach(product => {
  const { title, price, image } = product;

  // Generar el HTML para un producto
  const productHTML = `
    <div class="cart-product">
      <img src="${image}" alt="${title}">
      <div class="cart-description">
        <h5>${title}</h5>
        <h4>COP $${price}</h4>
      </div>
      <div class="cart-quantity">
        <input type="number" value="1">
        <button class="normal">Actualizar</button>
      </div>
      <div class="cart-remove">
        <button class="normal">Eliminar</button>
      </div>
    </div>
  `;

  // Agregar el producto al contenedor del carrito
  cartContainer.insertAdjacentHTML('beforeend', productHTML);
});
