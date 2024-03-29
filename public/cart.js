// Obtener la referencia al contenedor del carrito
const cartContainer = document.getElementById('cartContainer');

// Obtener los productos del localStorage
let cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

let totalProductsElement;
let totalAmountElement;

// Función para eliminar un producto del carrito
function removeProduct(index) {
  // Eliminar el producto del array cartItems
  cartItems.splice(index, 1);

  // Actualizar el localStorage con el nuevo array de productos
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Vaciar el contenido del contenedor del carrito
  cartContainer.innerHTML = '';

  // Volver a generar el HTML para cada producto
  cartItems.forEach((product, index) => {
    const { title, price, image, quantity, size, countInStock } = product;

    const productHTML = `
      <div class="cart-product">
        <img src="${image}" alt="${title}">
        <div class="cart-description">
          <h5>${title}</h5>
          <h5>Talla: ${size}</h5>
          <h5>${price}</h5>
        </div>
        <div class="cart-quantity">
          <input type="number" value="${quantity}" min="1" max="${countInStock}">
          <button class="normal update-btn">Actualizar</button>
        </div>
        <div class="cart-remove">
          <button class="normal btn-remove">Eliminar</button>
        </div>
      </div>
    `;

    cartContainer.insertAdjacentHTML('beforeend', productHTML);

    const updateBtn = cartContainer.querySelector(`.cart-product:nth-child(${index + 1}) .update-btn`);

    updateBtn.addEventListener('click', () => {
      const quantityInput = updateBtn.previousElementSibling;
      const quantity = parseInt(quantityInput.value);
      updateQuantity(index, quantity);
    });

    const removeBtn = cartContainer.querySelector(`.cart-product:nth-child(${index + 1}) .btn-remove`);

    removeBtn.addEventListener('click', () => {
      removeProduct(index);
    });
  });

  updateTotals();
}

// Función para actualizar la cantidad
function updateQuantity(index, quantity) {
  // Actualizar la cantidad del producto en el array cartItems
  cartItems[index].quantity = quantity;

  // Actualizar el localStorage con el nuevo array de productos
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateTotals();
}

// Función para actualizar las cantidades y los totales
function updateTotals() {
  let totalQuantity = 0;
  let totalPrice = 0;

  cartItems.forEach((product) => {
    const { price, quantity } = product;
    const productPrice = parseFloat(price.replace(/[^\d.-]/g, ''));
    const productQuantity = parseInt(quantity);
    totalQuantity += productQuantity;
    totalPrice += productPrice * productQuantity;
  });

  totalProductsElement = document.getElementById('totalProducts'); // Assign the value here
  totalProductsElement.innerText = totalQuantity.toString();

  totalAmountElement = document.getElementById('totalAmount');
  totalAmountElement.innerText = `${totalPrice}`;
}

// Generar el HTML para cada producto y agregarlo al contenedor del carrito
cartItems.forEach((product, index) => {
  const { title, price, image, quantity, size } = product;

  const productHTML = `
    <div class="cart-product">
      <img src="${image}" alt="${title}">
      <div class="cart-description">
        <h5>${title}</h5>
        <h5>Talla: ${size}</h5>
        <h4>${price}</h4>
      </div>
      <div class="cart-quantity">
        <input type="number" value="${quantity}" min="0" max="${product.countInStock}">
        <button class="normal update-btn">Actualizar</button>
      </div>
      <div class="cart-remove">
        <button class="normal btn-remove">Eliminar</button>
      </div>
    </div>
  `;

  cartContainer.insertAdjacentHTML('beforeend', productHTML);

  const updateBtn = cartContainer.querySelector(`.cart-product:nth-child(${index + 1}) .update-btn`);

  updateBtn.addEventListener('click', () => {
    const quantityInput = updateBtn.previousElementSibling;
    const quantity = parseInt(quantityInput.value);
    updateQuantity(index, quantity);
  });

  const removeBtn = cartContainer.querySelector(`.cart-product:nth-child(${index + 1}) .btn-remove`);

  removeBtn.addEventListener('click', () => {
    removeProduct(index);
  });
});

// Obtener el botón de pago
const checkoutBtn = document.querySelector('.checkout-btn');

// Function to create the order and navigate to the order view
async function createOrder() {
  const totalProductsElement = document.getElementById('totalProducts'); // Add this line here

  const order = {
    products: cartItems,
    totalQuantity: parseInt(totalProductsElement.innerText),
    totalPrice: parseFloat(totalAmountElement.innerText)
  };

  console.log("order:", JSON.stringify(order));

  await fetch('/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
    .then(response => response.json())
    .then(data => {
      // Aquí se puede manejar la respuesta del servidor si es necesario
      console.log('Orden creada:', data);
      // Redirigir al usuario a la página de pago
      window.location.href = "/order";
    })
    .catch(error => {
      // Manejo de errores
      console.error('Error al crear la orden:', error);
    });
}

// Agregar evento de clic al botón de pago
checkoutBtn.addEventListener('click', createOrder);

updateTotals();
