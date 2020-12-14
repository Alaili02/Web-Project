items = [
    { 
        "name": "Bulbasaur",
        "price": 20,
        "src": "images/Pokemon/Bulbasaur.png"
    },
    {
        "name": "Charmander",
        "price": 10,
        "src": "images/Pokemon/Charmander.png"
    },
    {
        "name": "Squirtle",
        "price": 20,
        "src": "images/Pokemon/Squirtle.png"
    },
    {
        "name": "Caterpie",
        "price": 10,
        "src": "images/Pokemon/Caterpie.png"
    },
    {
        "name": "Rattata",
        "price": 120,
        "src": "images/Pokemon/Rattata.png"
    },
    {
        "name": "Weedle",
        "price": 25,
        "src": "images/Pokemon/Weedle.png"
    },
    {
        "name": "Pidgeotto",
        "price": 15,
        "src": "images/Pokemon/Pidgeotto.png"
    },
    {
        "name": "Pikachu",
        "price": 100,
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
        
        this.cartContent = [];
        this.currentTotal = 0;

        let that = this;  
        this.cartBtn.addEventListener("click", function(){that.Toggle();}, false);
        this.cartCheckoutBtn.addEventListener("click", function(){that.Checkout();}, false);

        this.open = false;
    }

    RefreshCartTotal() {
        this.currentTotal = 0;
        // iterate over whole cart to recalculate total
        for (let i = 0; i < this.cartContent.length; i++) {
            this.currentTotal += this.cartContent[i].price * this.cartContent[i].quantity;
        }
        this.total.innerHTML="Total: " + this.currentTotal + "$";
    }

    Add(name, price) {
        let AllDuplicates = this.cartContent.filter(function(item) {return item.name == name;});
        // Check if the item already exists in cart, if its not => add it to the cart
        if (AllDuplicates.length > 0) {
            console.log(AllDuplicates[0].name + " already exists in cart so it wasnt added");
            return; //item already exists in cart so do nothing and gtfo
        } else {
            // item not already in cart so push it and refresh cart
            this.cartContent.push({
                "name": name,
                "price": price,
                "quantity": 1
            });
            this.RefreshCartTotal();
            console.log("Added " + name + " to cart contents");
        }

        let that = this;
        let row = this.tbody.insertRow(-1);

        let cell0 = row.insertCell(0);    
        cell0.innerHTML = name;

        let cell1 = row.insertCell(1);
        let cell2 = row.insertCell(2);
        cell2.innerText=price;

        let input=document.createElement("input");
        input.setAttribute("type","number");
        input.setAttribute("value","1");
        input.setAttribute("min","1");
        input.setAttribute("max","999");
        // input.setAttribute("onkeydown","return false;");
        // this.UpdateTotal(price,1);
        // var  value=1
        input.addEventListener("input",function(){
            // if (!input.value) input.value = 1;
            let inputQuantity = (input.value)? parseFloat(input.value):0;
            // replace the modified item with the updated item
            let newCartContent = [];
            for (let i = 0; i < that.cartContent.length; i++) {
                if (that.cartContent[i].name == name) {
                    newCartContent.push({
                        "name": name,
                        "price": price,
                        "quantity": parseFloat(inputQuantity)
                    });
                } else {
                    newCartContent.push(that.cartContent[i]);
                }
            }
            that.cartContent = newCartContent;
            that.RefreshCartTotal();
            console.log(that.cartContent);
        }, false);
        input.addEventListener("blur", function(event) {
            // this events occurs when the user presses out of the input, if the value he left was empty
            // or the value is 0 => delete the row, remove it from the cart, and refresh the cart
            if (event.target.value == "" || event.target.value == 0) {
                console.log("Quantity entered is NaN so item was removed");
                row.remove();
                that.cartContent = that.cartContent.filter(function(item) {return item.name != name});
                that.RefreshCartTotal();
            }
        }, false)

        cell1.appendChild(input);
        let cell3 = row.insertCell(3);
        let clearImage = document.createElement("img");
        clearImage.src = './images/icons/clear_black.png';
        clearImage.classList.add("cartItemClear");

        
        clearImage.addEventListener("click", function() {
            row.remove();
            that.cartContent = that.cartContent.filter(function(item) {return item.name != name});
            that.RefreshCartTotal();
        }, false);
        cell3.appendChild(clearImage);
    }

    Checkout(){
        alert("The total is " + this.currentTotal + "$");

        this.cartContent = [];
        this.RefreshCartTotal();

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
            //let quantity = window.prompt("how much?","1");
           // if (quantity != null && quantity > 0) {
                myCart.Add(items[i].name, items[i].price);
                if (!myCart.open) myCart.Toggle();
           // }
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
