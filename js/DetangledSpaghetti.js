items = [
    { 
        "name": "Bulbasaur",
        "price": "20",
        "src": "images/Pokemon/Bulbasaur.png"
    },
    {
        "name": "Charmander",
        "price": "10",
        "src": "images/Pokemon/Charmander.png"
    },
    {
        "name": "Squirtle",
        "price": "20",
        "src": "images/Pokemon/Squirtle.png"
    },
    {
        "name": "Caterpie",
        "price": "10",
        "src": "images/Pokemon/Caterpie.png"
    },
    {
        "name": "Rattata",
        "price": "120",
        "src": "images/Pokemon/Rattata.png"
    },
    {
        "name": "Weedle",
        "price": "25",
        "src": "images/Pokemon/Weedle.png"
    },
    {
        "name": "Pidgeotto",
        "price": "15",
        "src": "images/Pokemon/Pidgeotto.png"
    },
    {
        "name": "Pikachu",
        "price": "100",
        "src": "images/Pokemon/Pikachu.png"
    }
];

class item {
    constructor(nameI, priceI, srcI, container) {
        this.name = nameI;
        this.price = priceI;
        this.src = srcI;
        this.ClickListenerElement;
        this.createItem(container);
    }

    createItem(container) {
        var nameE=this.name;
        var priceE=this.price;

        var ItemE = document.createElement("div");
        var hoverDivE = document.createElement("div");
        var hoverImgE = document.createElement("img");

        var figureContainerE = document.createElement("figure");
        var figureCaptionContainer = document.createElement("div");
        var productImageE = document.createElement("img");
        var productNameE = document.createElement("figcaption");
        var productPriceE = document.createElement("figcaption");
        var nameLinkE = document.createElement("a");
        var pricelinkE = document.createElement("a");
        

        ItemE.classList.add("Item");
        hoverDivE.classList.add("ShowOnHover");
        hoverImgE.src="./images/icons/cart_black.png";

        this.ClickListenerElement = hoverDivE;

        figureCaptionContainer.classList.add("ProductCaption");
        productImageE.classList.add("ProductImage");
        productImageE.src = this.src;
        productNameE.classList.add("ProductName");
        productPriceE.classList.add("ProductPrice");
    
        nameLinkE.href = "www.google.com";
        nameLinkE.innerText = this.name;
        pricelinkE.href = "www.google.com";
        pricelinkE.innerText = this.price + "$";
    
        container.appendChild(ItemE);
        ItemE.appendChild(figureContainerE);
        ItemE.appendChild(hoverDivE);
        hoverDivE.appendChild(hoverImgE);

        figureContainerE.appendChild(productImageE);

        productNameE.appendChild(nameLinkE);
        productPriceE.appendChild(pricelinkE);
        
        figureCaptionContainer.appendChild(productNameE);
        figureCaptionContainer.appendChild(productPriceE);
        figureContainerE.appendChild(figureCaptionContainer);
    }
}

class Cart {
    constructor() {
        this.cart = document.getElementById("cart");
        this.tbody = document.getElementById("ProductsCartBody");
        this.mainContent = document.getElementById("MainContent");
        this.total = document.getElementById("total");
        this.cartBtn = document.getElementById("CartBtn");
        this.cartCheckoutBtn = document.querySelector("td#CheckOut button");
        
        this.currentTotal = 0;

        let that = this;  
        this.cartBtn.addEventListener("click", function(){that.Toggle();}, false);
        this.cartCheckoutBtn.addEventListener("click", function(){that.Checkout();}, false);

        this.open = false;
    }

    Add(name, price, quantity) {
        let row = this.tbody.insertRow(-1);    
        let cell0 = row.insertCell(0);    
        cell0.innerHTML = name; 

        let cell1 = row.insertCell(1);
        cell1.innerHTML = quantity; 
        //cell1.innerHTML = "<input type='number' value='"+quantity+"'/>"; 

        let cell2 = row.insertCell(2);
        cell2.innerHTML = parseFloat(price)*quantity;

        let cell3 = row.insertCell(3);
        let clearImage = document.createElement("img");
        clearImage.src = './images/icons/clear_black.png';
        clearImage.classList.add("cartItemClear");

        let that = this;
        clearImage.addEventListener("click", function() {
            row.remove();
            that.UpdateTotal(price, -quantity);
        }, false);
        cell3.appendChild(clearImage);

        this.UpdateTotal(price, quantity);
    }

    UpdateTotal(price, quantity) {   
        this.currentTotal = this.currentTotal + (price * quantity);
        this.total.innerHTML="Total: " + this.currentTotal + "$";
    }

    Checkout(){
        alert("The total is " + this.currentTotal + "$");
        this.UpdateTotal(this.currentTotal, -1); // Zero the current total
        while(this.tbody.rows.length > 0) {                  
            this.tbody.deleteRow(0);
        }
        this.Toggle();
       }

    Toggle() {    
        if(this.open) {
            this.open = false;
            this.mainContent.classList.remove("CartShift");
            this.cart.classList.remove("updatedcart");
            this.cart.classList.add("cart");
            this.cartBtn.classList.remove("active");
        } else {
            this.open = true;
            this.mainContent.classList.add("CartShift");
            this.cart.classList.add("updatedcart");
            this.cartBtn.classList.add("active");
        }
    }
}

document.addEventListener("load", start(), false);
function start() {
    let myCart = new Cart();
    let itemsContainer = document.getElementById("Items");
    for (let i = 0; i < items.length; i++) {
        items[i] = new item(items[i].name, items[i].price, items[i].src, itemsContainer);
        items[i].ClickListenerElement.addEventListener("click", function() {
            let quantity = window.prompt("how much?","1");
            if (quantity != null && quantity > 0) {
                myCart.Add(items[i].name, items[i].price, quantity);
                if (!myCart.open) myCart.Toggle();
            }
        })
    }
}

function ShowLogin() {
    var blanket = document.createElement("div");
    blanket.id = "blanket"
    document.body.appendChild(blanket);
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("loginBox").style.opacity = "1";
    document.getElementById("loginBox").style.zIndex = "200";
    blanket.addEventListener("click", function() {HideLogin()}, false);
}

function HideLogin() {
    document.getElementById("loginBox").style.display = "hidden";
    document.getElementById("loginBox").style.opacity = "0";
    setTimeout(function(){document.getElementById("loginBox").style.zIndex = "-200";},250);
    document.body.removeChild(blanket);
}

function Login() {
    HideLogin();
    var username = document.getElementById("UsernameInput").value;
    if (username != "") {
        document.getElementById("Username").innerHTML = username;
    }
}
