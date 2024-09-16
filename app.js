let listProductHTML = document.querySelector(".listProduct");
let listProducts = [];
let URLparams = new URLSearchParams(window.location.search);
let productID = URLparams.get("id");

const addDataToHTML = () => {
    //Banner
    document.getElementById("banner-image").src = `./Banner/${productID}.webp`
    //Products
    listProductHTML.innerHTML = "";
    if (listProducts.length > 0) {
        listProducts.forEach(product => {
            if (productID === product.class) {
                let newProduct = document.createElement('div');
                newProduct.classList.add("item");
                newProduct.innerHTML = `
            <img src="${product.image}" alt="" class="pro_img">
            <div class="itemTitle"><span>${product.name}</span></div>
            <div class="price">₹${product.price}</div>
            <button type="button">Add To Cart</button>
            `;
                listProductHTML.appendChild(newProduct);
            }
        })
    }
}

const initApp = () => {
    fetch("product.json")
        .then(response => response.json())
        .then(data => {
            listProducts = data;
            addDataToHTML();
        })
}
initApp()