const $mainImg = document.getElementById("main-img");
const $smallImg = document.getElementsByClassName("small-img");

$smallImg[0].onclick = function() {
    $mainImg.src = $smallImg[0].src;
}
$smallImg[1].onclick = function() {
    $mainImg.src = $smallImg[1].src;
}
$smallImg[2].onclick = function() {
    $mainImg.src = $smallImg[2].src;
}
$smallImg[3].onclick = function() {
    $mainImg.src = $smallImg[3].src;
}

console.log('Vengo de sproduct.js');

document.addEventListener('DOMContentLoaded', () => {
    console.log('Vengo del addEvent Listener de sproduct.js');
    const addToCartBtn = document.getElementById('addToCartBtn');
    addToCartBtn.addEventListener('click', addToCart);
    console.log('Vengo de sproduct.js dentro del DOMContentLoaded');
  });
  

  
  function addToCart(event) {
    console.log('Hiciste click en el botón agregar al carrito')
    // Obtener los detalles del producto
    const title = event.target.dataset.title;
    const price = event.target.dataset.price;
    const image = event.target.dataset.image;
  
    // Lógica para agregar el producto al carrito
    // Aquí puedes usar tu propia implementación o enviar una solicitud al servidor
  
    // Ejemplo: almacenar el producto en el almacenamiento local (localStorage)
    const product = {
      title: title,
      price: price,
      image: image
    };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Mostrar un mensaje de éxito o redirigir a la página del carrito
    alert('El producto se ha agregado al carrito');
  }


  