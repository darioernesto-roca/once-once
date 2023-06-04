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
    // Get the product details from the clicked button's data attributes
    const title = event.target.dataset.title;
    const price = event.target.dataset.price;
    const image = event.target.dataset.image;
  
    // Logic to add the product to the cart
    // Here I can use my own implementation or send a request to the server
  
    // Example: store the product in local storage
    const product = {
      title: title,
      price: price,
      image: image
    };
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push(product);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  
    // Show a success message or redirect to the cart page
    alert('El producto se ha agregado al carrito');
  }


  