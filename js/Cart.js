const cart = [
    { 
        "name": "Rem",
        "price": 1000,
        "quantity": 1
    },
    {
        "name": "Ganyu",
        "price": 80,
        "quantity": 1
    },
    {
        "name": "Mona",
        "price": 80,
        "quantity": 1
    }
]

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
    }

    RefreshCartTotal() {
        this.currentTotal = 0;
        // iterate over whole cart to recalculate total
        for (let i = 0; i < this.cartContent.length; i++) {
            this.currentTotal += this.cartContent[i].price * this.cartContent[i].quantity;
        }
        this.total.innerHTML="Total: " + this.currentTotal + "$";
        localStorage.setItem("cart", JSON.stringify(this.cartContent));
    }

    Add(name, price, quantity = 1) {
        let AllDuplicates = this.cartContent.filter(function(item) {return item.name === name;});
        // Check if the item already exists in cart, if its not => add it to the cart
        if (AllDuplicates.length > 0) {
            console.log(AllDuplicates[0].name + " already exists in cart so it wasnt added");
            return; //item already exists in cart so do nothing and gtfo
        } else {
            // item not already in cart so push it and refresh cart
            this.cartContent.push({
                "name": name,
                "price": price,
                "quantity": quantity
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
        input.setAttribute("value",quantity.toString());
        input.setAttribute("min","1");
        input.setAttribute("max","999");
        // input.setAttribute("onkeydown","return false;");
        // this.UpdateTotal(price,1);
        // var  value=1
        input.addEventListener("keydown",function(event){
            // REJECT INPUT THATS NOT A NUMBER
            switch (event.key) {
                case "-":
                case "+":
                case ".":
                    console.log("Rejected invalid input");
                    event.preventDefault();
                    break;
                default:
                    break;
            }
        })
        // NO PASTING VALUES EITHER
        input.addEventListener("paste", function(){event.preventDefault();});

        input.addEventListener("input",function(){
            // if the input value doesnt exist then assume its 0 so total looks right
            let inputQuantity = (input.value)? parseFloat(input.value):0;
            // replace the modified item with the updated item
            let newCartContent = [];
            for (let i = 0; i < that.cartContent.length; i++) {
                if (that.cartContent[i].name === name) {
                    newCartContent.push({
                        "name": name,
                        "price": price,
                        "quantity": parseFloat(inputQuantity)
                    });
                } else {
                    newCartContent.push(that.cartContent[i]);
                }
            }
            // Alternative way of doing the above using map
            // let newCartContent = that.cartContent.map((item) => {
            //     if (item.name == name) {
            //         return {
            //             "name": name,
            //             "price": price,
            //             "quantity": parseFloat(inputQuantity)
            //         }
            //     } else { return item; }
            // });

            that.cartContent = newCartContent;
            that.RefreshCartTotal();
            cell2.innerText = price * parseFloat(inputQuantity);
            console.log(that.cartContent);
        }, false);
        input.addEventListener("blur", function(event) {
            // this events occurs when the user presses out of the input, if the value he left was empty
            // or the value is 0 => delete the row, remove it from the cart, and refresh the cart
            if (event.target.value === "" || event.target.value <= 0) {
                console.log("Quantity entered is NaN or less than or equal to 0 so item was removed");
                row.remove();
                that.cartContent = that.cartContent.filter(function(item) {return item.name !== name});
                that.RefreshCartTotal();
            }
        }, false)

        cell1.appendChild(input);
        let cell3 = row.insertCell(3);
        let clearImage = document.createElement("img");
        clearImage.src = '../images/icons/clear_black.png';
        clearImage.classList.add("cartItemClear");

        
        clearImage.addEventListener("click", function() {
            row.remove();
            that.cartContent = that.cartContent.filter(function(item) {return item.name !== name});
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

    isOpen() { return this.cart.classList.contains("updatedcart");}
    Toggle() {    
        if(this.isOpen()) {
            this.mainContent.classList.remove("CartShift");
            this.cart.classList.remove("updatedcart");
            this.cart.classList.add("cart");
            this.cartBtn.classList.remove("active");
        } else {
            this.mainContent.classList.add("CartShift");
            this.cart.classList.add("updatedcart");
            this.cartBtn.classList.add("active");
        }
    }
}

let myCart = new Cart();
document.addEventListener("load", start(), false);
function start() {
    //Add Events Listeners to all items you find
    let items = document.getElementsByClassName("Item");
    for (let i = 0; i < items.length; i++) {
        let ClickTarget = items[i].children[1]; // hover div
        let name = items[i].children[0].children[1].children[0].innerText;
        let price = items[i].children[0].children[1].children[1].innerText;
        ClickTarget.addEventListener("click", (event) => {AddToCart(name, price, 1);})
    }

    // Get cart content from local storage
    if (localStorage.getItem("cart")) {
        JSON.parse(localStorage.getItem("cart")).map((item) => {
            myCart.Add(item.name, item.price, item.quantity);
        });
    }
}

function AddToCart(name, price, quantity) {
    myCart.Add(name, price, quantity);
    if (!myCart.isOpen()) myCart.Toggle();
}