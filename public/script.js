//Menu interactivity

(function(){
    const listElements = document.querySelectorAll('.menu__item--show');
    const list = document.querySelector('.menu__links');
    const menu = document.querySelector('.menu__hamburger');
    const close = document.querySelector('.close'); 

    const addMouseEnter = () => {
        listElements.forEach(element => {
          element.addEventListener('mouseenter', () => {
            let subMenu = element.children[1];
            let height = 0;
            element.classList.add('menu__item--active');
      
            if (subMenu.clientHeight === 0) {
              height = subMenu.scrollHeight;
            }
      
            subMenu.style.height = `${height}px`;
          });
        });
      };

    const removeMouseEnter = () => {
    listElements.forEach(element => {
        element.removeEventListener('mouseenter', null);
    });
    };

    const deleteStyleHeight = ()=>{
        listElements.forEach(element=>{

            if(element.children[1].getAttribute('style')){
                element.children[1].removeAttribute('style');
                element.classList.remove('menu__item--active');
            }

        });
    }


    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
          deleteStyleHeight();
          if (list.classList.contains('menu__links--show')) {
            list.classList.remove('menu__links--show');
          }
        } else {
          removeMouseEnter();
          addMouseEnter();
        }
      });
      
      if (window.innerWidth <= 800) {
        removeMouseEnter();
        addMouseEnter();
      }

    menu.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));
    close.addEventListener('click', ()=> list.classList.toggle('menu__links--show'));
})();

const BREAK_POINT_TABLET_IN_PX = 800;
const homePatterns = /^\/$|^\/inicio$|^\/#$/;

if (window.innerWidth >= BREAK_POINT_TABLET_IN_PX) {
  const header = document.querySelector('.header');

  if (homePatterns.test(window.location.pathname)) {
    // Apply class for the homepage
    header.classList.add('header');
  } else {
    // Apply class for other pages
    header.classList.add('header-not-home');
  }

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0 && homePatterns.test(window.location.pathname)) {
      header.classList.add('header-scroll');
    } else if (window.scrollY <= 0 && homePatterns.test(window.location.pathname)) {
      header.classList.remove('header-scroll');
    }
  });
}

//Changing cart color when mouse over

const productContainers = document.querySelectorAll('.feature-products .product');

// Función para cambiar el color del ícono al pasar el mouse sobre el contenedor
function changeColorOnHover(event) {
  const target = event.currentTarget.querySelector('.cart-icon path');
  target.setAttribute('fill', '#fff');
}

// Función para restaurar el color original del ícono al quitar el mouse del contenedor
function restoreColorOnLeave(event) {
  const target = event.currentTarget.querySelector('.cart-icon path');
  target.setAttribute('fill', '#a03037'); // Restaurar el color original (el color actual puede variar según el código SVG)
}

// Agregar eventos a cada contenedor
productContainers.forEach(container => {
  container.addEventListener('mouseenter', changeColorOnHover);
  container.addEventListener('mouseleave', restoreColorOnLeave);
});




