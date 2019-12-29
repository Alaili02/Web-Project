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

createItem("images/sayonara.png","Name Placeholder", "50$");
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
var x=0;
var pricevalue=0;
function AddToCart(name, price) {
    var newcart = document.getElementById("cart");
     newcart.classList.add("updatedcart");
      var table = document.getElementById("cart1");    
      var row = table.insertRow(1);    
      var cell1 = row.insertCell(0);    
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      x=window.prompt("how many?","1");
      cell1.innerHTML = name;
      cell2.innerHTML =x;
      cell3.innerHTML = price;
      pricevalue=parseFloat(price);    
      cell4.innerHTML ="<button onclick='deleteRow()'class='buttonremove'>remove</button>"
      updatetotale(x,pricevalue);
     
}
function deleteRow() {
    var index, table = document.getElementById("cart1");
    for(var i = 1; i < table.rows.length; i++)
    {
        table.rows[i].cells[3].onclick = function()
        {
            var c = confirm("do you want to remove this item");
            if(c === true)
            {
                index = this.parentElement.rowIndex;
                table.deleteRow(index);
            }            
        };            
    }
    updatetotale(-x,pricevalue);
}
var sum=0;
function updatetotale(x,y){    
    sum=sum +(x*y);
   var total=document.getElementById("total");
   total.innerHTML="Total:"+sum+"$  <button id='b1'onclick='checkout()'>checkout</button>";
}
function checkout(){
    alert("the total is "+sum+"$");
    sum=0;
    updatetotale(0,0);
    var newcart = document.getElementById("cart");
     newcart.classList.add("updatedcart");   
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