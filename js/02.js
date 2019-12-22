function createItem(imageSrc, productNameTxt, productPriceTxt) {
    var ItemE = document.createElement("div");
    var hoverDivE = document.createElement("div");
    var hoverSpanE = document.createElement("span");
    var figureContainerE = document.createElement("figure");
    var productImageE = document.createElement("img");
    var productNameE = document.createElement("figcaption");
    var productPriceE = document.createElement("figcaption");

    ItemE.classList.add("Item");
    hoverDivE.classList.add("ShowOnHover");
    hoverSpanE.setAttribute("onClick", "AddToCart()");
    hoverSpanE.innerText = "Add To Cart";

    productImageE.classList.add("ProductImage");
    productImageE.src = imageSrc;
    productNameE.classList.add("ProductName");
    productPriceE.classList.add("ProductPrice");

    productNameE.innerText = productNameTxt;
    productPriceE.innerText = productPriceTxt;

    document.getElementById("items").appendChild(ItemE);
    ItemE.appendChild(figureContainerE);
    ItemE.appendChild(hoverDivE);
    hoverDivE.appendChild(hoverSpanE);
    figureContainerE.appendChild(productImageE);
    figureContainerE.appendChild(productNameE);
    figureContainerE.appendChild(productPriceE);
}
createItem("images/Sayonara.png","Name Placeholder", "Price Placeholder");
createItem("images/HomuraSuffering.jpeg","Name Placeholder", "Price Placeholder");
createItem("images/HomuraIsSuffering.png","Name Placeholder", "Price Placeholder");
createItem("images/SmugSalter.png","Name Placeholder", "Price Placeholder");
createItem("images/square-placeholder.jpg","Name Placeholder", "Price Placeholder");
createItem("images/square-placeholder.jpg","Name Placeholder", "Price Placeholder");
createItem("images/square-placeholder.jpg","Name Placeholder", "Price Placeholder");
createItem("images/square-placeholder.jpg","Name Placeholder", "Price Placeholder");

function AddToCart() {
    alert("This is an alert");
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