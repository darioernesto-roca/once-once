// Gets the element img with the class main-img
const $mainImg = document.getElementById("main-img");
// Gets an HTML Collection of elements with the class small-img
const $smallImg = document.getElementsByClassName("small-img");

// Sets the onclick event handler for the small images
// That means when clicking a small-image, change the source for main-img
for (let i = 0; i < $smallImg.length; i++) {
  $smallImg[i].onclick = function() {
    $mainImg.src = $smallImg[i].src;
  };
}

document.addEventListener('DOMContentLoaded', () => {
  // Gets the element button with the id addToCartBtn
  const addToCartBtn = document.getElementById('addToCartBtn');
  // When clicked on addToCartBtn, execute the function addToCart
  addToCartBtn.addEventListener('click', addToCart);
});

function addToCart(event) {
  // Get the quantity chosen by the user in the input quantity
  const quantity = document.getElementById('quantity').value;

  // Get the product details from the clicked button's data attributes
  const title = event.target.dataset.title;
  console.log(title);
  const price = event.target.dataset.price;
  const image = event.target.dataset.image;

  // Get the selected size of the product
  const sizeSelect = document.getElementById('sizeSelect');
  const selectedSize = sizeSelect.value;

  // Check if a size has been selected
  if (selectedSize === 'Selecciona la talla') {
    const sizeError = document.getElementById('sizeError');
    sizeError.style.display = 'block'; // Show the error message
    return; // Don't proceed with adding the product to the cart
  }

  // Logic to add the product to the cart
  // Here you can use your own implementation or send a request to the server

  // Example: store the product in local storage
  const product = {
    title: title,
    price: price,
    image: image,
    size: selectedSize,
    quantity: quantity
  };
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.push(product);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Show the success modal instead of the alert
  const successModal = document.getElementById('success-modal');
  const successMessage = document.getElementById('success-message');
  successMessage.textContent = 'El producto se ha agregado al carrito'; // Update the success message if needed
  successModal.style.display = 'block';
}

// Customize WhatsApp Message

document.addEventListener('DOMContentLoaded', () => {
  // Obtener el elemento "Compra directa"
  const compraDirectaLink = document.getElementById('whatsapp-message');
  console.log(compraDirectaLink);
  // Obtener el nombre del producto desde el servidor (asumiendo que se pasa como variable)
  const productName = document.getElementById('product-name').innerHTML;
  console.log(productName);

  // Agregar el evento click al enlace "Compra directa"
  compraDirectaLink.addEventListener('click', (event) => {
    // Actualizar el mensaje de WhatsApp con el nombre del producto
    const message = `Hola, quisiera preguntar por el producto ${productName}`;
    const encodedMessage = encodeURIComponent(message);
    console.log(encodedMessage);
    const whatsappLink = "https://api.whatsapp.com/send?phone=573043761576&amp;text=" + message;
    console.log(whatsappLink);
    compraDirectaLink.href = whatsappLink;
    console.log(compraDirectaLink.href);
  });
});

// Closing modal
document.addEventListener('DOMContentLoaded', () => {
  const successModal = document.getElementById('success-modal');
  const closeIcon = document.getElementById('close-icon');
  
  // Close the modal when clicking on the close icon
  closeIcon.addEventListener('click', () => {
    successModal.style.display = 'none';
  });
  
  // Close the modal when clicking outside of it
  window.addEventListener('click', (event) => {
    if (event.target === successModal) {
      successModal.style.display = 'none';
    }
  });
});
