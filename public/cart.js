// Obtener la referencia al contenedor del carrito
const cartContainer = document.getElementById('cartContainer');

// Obtener los productos del localStorage
const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

// Variable para almacenar la suma de las cantidades
let totalQuantity = 0;

// Variable para almacenar la suma total de precios
let totalPrice = 0;

// Generar el HTML para cada producto y agregarlo al contenedor del car
cartItems.forEach(product => {
  const { title, price, image } = product;

    // Convierte el precio a un número de punto flotante
    const productPrice = parseInt(price);

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
        <button class="normal update-btn">Actualizar</button>
      </div>
      <div class="cart-remove">
        <button class="normal">Eliminar</button>
      </div>
    </div>
  `;

  // Agregar el producto al contenedor del carrito
  cartContainer.insertAdjacentHTML('beforeend', productHTML);

  // Obtener la referencia al botón "Actualizar" del producto recién agregado
  const updateBtn = cartContainer.querySelector('.update-btn');

  // Agregar el evento click al botón "Actualizar"
  updateBtn.addEventListener('click', () => {
    // Obtener el valor del input de cantidad correspondiente
    const quantityInput = updateBtn.previousElementSibling;
    const quantity = parseInt(quantityInput.value);

    // Llamar a la función updateQuantity con el valor de cantidad
    updateQuantity(quantity);
  });

  // Actualizar las cantidades y precios totales
  totalQuantity += 1;
  totalPrice += productPrice;
});

  // Función para actualizar la cantidad
  function updateQuantity(quantity) {
  // Actualizar la variable totalQuantity
  totalQuantity = parseInt(quantity);

  // Actualizar la vista del total de productos
  const totalProductsElement = document.getElementById('totalProducts');
  totalProductsElement.innerText = totalQuantity.toString();

  // Actualizar el total a pagar
  const totalAmountElement = document.getElementById('totalAmount');
  totalAmountElement.innerText = `COP $${totalPrice * totalQuantity}`;
  }
