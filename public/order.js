// order.js
  console.log('Entro a function order.js')
    // Obtener los datos del localStorage
    const productsData = localStorage.getItem("cartItems");
    console.log('Vengo de order.js');
    // Parsear los datos a un array de objetos
    const products = JSON.parse(productsData);
    console.log(products);
  
    // Obtener el elemento ul donde se mostrarán los productos
    const productsList = document.querySelector(".product-in-cart .products");
  
    // Generar el contenido HTML para los productos
    let productListHTML = "";
    products.forEach((product) => {
      productListHTML += `<div class="product-list"><div class="product-image"><img class="image-order" src="${product.image}" alt="${product.title}"></div> <div class="product-text">
        <h5>Producto: ${product.title}</h5> <h5>Talla: ${product.size}</h5> <h5>Cantidad: ${product.quantity}</h5> <h5>Precio${product.price}</div></h4>
      </div>`;
    });
  
    // Mostrar los productos en el elemento ul
    productsList.innerHTML = productListHTML;

  console.log('Entró a order.js') 