import data from './data.js';
console.log(data)
//defining variables
let menuItemsContainer = document.getElementById('menu-container');
let cartCount = document.getElementById('cart-count');
let placeholderElement = document.getElementById('placeholder');


//function for rendering elements
function renderMenu() {
data.forEach((item) => {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
                         <img src = "${item.image.desktop}"/>  
                         <button>
                         <img src = "assets/icon-add-to-cart.svg"/>
                         Add to Cart
                         </button>
                        <p class="catergory">${item.category}</p>
                        <p class="name">${item.name}</p>
                        <p class="price">${item.price}</p>
                        `
                        menuItemsContainer.appendChild(menuItem)
})
}

renderMenu()