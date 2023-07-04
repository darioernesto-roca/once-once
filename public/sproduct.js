//File sproduct.js

// Gets the element img with the class main-img
const $mainImg = document.getElementById("main-img");
// TGets an HTML Collection of elements with the class small-img
const $smallImg = document.getElementsByClassName("small-img");

// Sets the onclick event handler for the small images
// That means when clicking an small-image change the source for main-img
// $smallImg[0].onclick = function() {
//     $mainImg.src = $smallImg[0].src;
// }
// $smallImg[1].onclick = function() {
//     $mainImg.src = $smallImg[1].src;
// }
// $smallImg[2].onclick = function() {
//     $mainImg.src = $smallImg[2].src;
// }
// $smallImg[3].onclick = function() {
//     $mainImg.src = $smallImg[3].src;
// }

// Sets the onclick event handler for the small images
// The same as above but with a for loop

for (let i = 0; i < $smallImg.length; i++) {
  $smallImg[i].onclick = function() {
    $mainImg.src = $smallImg[i].src;
  };
}

document.addEventListener('DOMContentLoaded', () => {
    // Gets the element button with the id addToCartBtn
    const addToCartBtn = document.getElementById('addToCartBtn');
    // When click in addToCartBtn executes the function addToCart
    addToCartBtn.addEventListener('click', addToCart);

  });
  
  
  function addToCart(event) {
    // Get the quantity chose by user in input quantity
    const quantity = document.getElementById('quantity').value;

    // Get the product details from the clicked button's data attributes
    const title = event.target.dataset.title;
    console.log(title);
    const price = event.target.dataset.price;
    const image = event.target.dataset.image;

    
    // Get selected size of the product
    const sizeSelect = document.getElementById('sizeSelect');
    const selectedSize = sizeSelect.value;

    // Check if a size has been selected
    if (selectedSize === 'Selecciona la talla') {
      const sizeError = document.getElementById('sizeError');
      sizeError.style.display = 'block'; // Show the error message
      return; // Don't proceed with adding the product to the cart
    }

   
    // Logic to add the product to the cart
    // Here I can use my own implementation or send a request to the server
  
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
  
    // Show a success message or redirect to the cart page
    alert('El producto se ha agregado al carrito');
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
  