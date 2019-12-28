function createItem(imageSrc, productNameTxt, productPriceTxt) {
    var ItemE = document.createElement("div");
    var hoverDivE = document.createElement("div");
    var hoverSpanE = document.createElement("span");
    var figureContainerE = document.createElement("figure");
    var productImageE = document.createElement("img");
    var productNameE = document.createElement("figcaption");
    var productPriceE = document.createElement("figcaption");
    var nameLinkE = document.createElement("a");
    var pricelinkE = document.createElement("a");

    ItemE.classList.add("Item");
    hoverDivE.classList.add("ShowOnHover");
    hoverSpanE.addEventListener("click", function(){AddToCart(productNameTxt,productPriceTxt)}, false);
    hoverSpanE.innerText = "Add To Cart";

    productImageE.classList.add("ProductImage");
    productImageE.src = imageSrc;
    productNameE.classList.add("ProductName");
    productPriceE.classList.add("ProductPrice");

    nameLinkE.href = "www.google.com";
    nameLinkE.innerText = productNameTxt;
    pricelinkE.href = "www.google.com";
    pricelinkE.innerText = productPriceTxt;

    document.getElementById("items").appendChild(ItemE);
    ItemE.appendChild(figureContainerE);
    ItemE.appendChild(hoverDivE);
    hoverDivE.appendChild(hoverSpanE);
    figureContainerE.appendChild(productImageE);
    figureContainerE.appendChild(productNameE);
    productNameE.appendChild(nameLinkE);
    figureContainerE.appendChild(productPriceE);
    productPriceE.appendChild(pricelinkE);
}

createItem("images/sayonara.png","Name Placeholder", "Price Placeholder");
createItem("images/HomuraSuffering.jpeg","Name Placeholder", "Price Placeholder");
createItem("images/HomuraisSuffering.png","Name Placeholder", "Price Placeholder");
createItem("images/SmugSalter.png","Name Placeholder", "Price Placeholder");
createItem("images/sayonara.png","Name Placeholder", "Price Placeholder");
createItem("images/HomuraSuffering.jpeg","Name Placeholder", "Price Placeholder");
createItem("images/HomuraisSuffering.png","Name Placeholder", "Price Placeholder");
createItem("images/SmugSalter.png","Name Placeholder", "Price Placeholder");
createItem("images/sayonara.png","Name Placeholder", "Price Placeholder");
createItem("images/HomuraSuffering.jpeg","Name Placeholder", "Price Placeholder");
createItem("images/HomuraisSuffering.png","Name Placeholder", "Price Placeholder");
createItem("images/SmugSalter.png","Name Placeholder", "Price Placeholder");

function AddToCart(name, price) {
    alert("You added "+name+" which costs "+price);
}
function ShowLogin() {
    var blanket = document.createElement("div");
    blanket.id = "blanket"
    document.body.appendChild(blanket);
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("loginBox").style.opacity = "1";

    blanket.onclick = function HideLogin() {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("loginBox").style.opacity = "0";
        document.body.removeChild(blanket);
    };
}

function Login() {
    document.getElementById("loginBox").style.display = "hidden";   
}