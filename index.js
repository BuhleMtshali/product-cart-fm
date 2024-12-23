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
                         <img src = "${item.image.desktop}" class= "img-menu"/>
                         <button class="add-to-cart">
                         <img src = "assets/icon-add-to-cart.svg"/>
                         Add to Cart
                         </button>
                        <div class = "decriptions">
                        <p class="catergory">${item.category}</p>
                        <p class="name">${item.name}</p>
                        <p class="price">$ ${item.price}</p>
                        </div>
                        
                        `
                        menuItemsContainer.appendChild(menuItem)

    //function for adding the items to the cart
function addToCat(renderMenu) {
    let cartArray = [];  //array to add to cart
    menuItemsContainer.addEventListener('click', (e) => {
        console.log(e.target.id)
    })

}
addToCat()

})
}

renderMenu()

