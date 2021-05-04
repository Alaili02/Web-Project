class item {
    constructor(nameI,priceI,srcI) {
        this.name = nameI;
        this.price = priceI;
        this.src=srcI;
        this. createItem();
      }
    createItem() {
        var nameE=this.name;
        var priceE=this.price;
        var ItemE = document.createElement("div");
        var hoverDivE = document.createElement("div");

        // var hoverSpanE = document.createElement("span");
        var hoverImgE = document.createElement("img");

        var figureContainerE = document.createElement("figure");
        var productImageE = document.createElement("img");
        var productNameE = document.createElement("figcaption");
        var productPriceE = document.createElement("figcaption");
        var nameLinkE = document.createElement("a");
        var pricelinkE = document.createElement("a");
    
        ItemE.classList.add("Item");
        hoverDivE.classList.add("ShowOnHover");
        hoverImgE.addEventListener("click", function(){AddToCart(nameE,priceE)}, false);
        hoverImgE.src="./images/icons/cart_black.png";
    
        productImageE.classList.add("ProductImage");
        productImageE.src = this.src;
        productNameE.classList.add("ProductName");
        productPriceE.classList.add("ProductPrice");
    
        nameLinkE.href = "www.google.com";
        nameLinkE.innerText = this.name;
        pricelinkE.href = "www.google.com";
        pricelinkE.innerText = this.price;
    
        document.getElementById("Items").appendChild(ItemE);
        ItemE.appendChild(figureContainerE);
        ItemE.appendChild(hoverDivE);
        hoverDivE.appendChild(hoverImgE);
        figureContainerE.appendChild(productImageE);
        figureContainerE.appendChild(productNameE);
        productNameE.appendChild(nameLinkE);
        figureContainerE.appendChild(productPriceE);
        productPriceE.appendChild(pricelinkE);
    }

}
document.addEventListener("load", start(), false);
function start() {
    let item1=new item ("Samsung Galaxy S9","10","images/phones/phone1.jpg");
    let item2=new item ("Samsung Galaxy S9","20","images/phones/phone1.jpg");
    let item3=new item ("Samsung Galaxy S9","30","images/phones/phone1.jpg");
    let item5=new item ("Samsung Galaxy S9","999","images/phones/phone1.jpg");
    let item6=new item ("Samsung Galaxy S9","999","images/phones/phone1.jpg");
    let item4= new item ("Samsung Galaxy S9","999","images/phones/phone1.jpg");
    let item7= new item ("Samsung Galaxy S9","999","images/phones/phone1.jpg");
    let item8= new item ("Samsung Galaxy S9","999","images/phones/phone1.jpg");   
    //loadItems();
}
var sum=0;
var counter=1;
var table=document.getElementById("cart1"); 
// var CdropDown1 = document.getElementById("Category1");
// var CC1 = document.getElementById("Category1Container");
// var CdropDown2 = document.getElementById("Category2");
// var CC2 = document.getElementById("Category2Container");
// var CdropDown3 = document.getElementById("Category3");
// var CC3 = document.getElementById("Category3Container");
// var CdropDown4 = document.getElementById("Category4");
// var CC4 = document.getElementById("Category4Container");

// var f1,f2,f3,f4;

// CdropDown1.addEventListener("click", function() {ToggleDisplay(CC1,CdropDown1);hide(CC2,CdropDown2);hide(CC3,CdropDown3);hide(CC4,CdropDown4)}, false);
// CdropDown2.addEventListener("click", function() {ToggleDisplay(CC2,CdropDown2);hide(CC1,CdropDown1);hide(CC3,CdropDown3);hide(CC4,CdropDown4)}, false);
// CdropDown3.addEventListener("click", function() {ToggleDisplay(CC3,CdropDown3);hide(CC2,CdropDown2);hide(CC1,CdropDown1);hide(CC4,CdropDown4)}, false);
// CdropDown4.addEventListener("click", function() {ToggleDisplay(CC4,CdropDown4);hide(CC2,CdropDown2);hide(CC3,CdropDown3);hide(CC1,CdropDown1)}, false);

// function ToggleDisplay(e, parent) {
//     if (e.classList.contains("hidden")) {
//         e.classList.remove("hidden");
//         e.classList.add("visible");
//         parent.classList.add("active");
//     } else {
//         e.classList.remove("visible");
//         e.classList.add("hidden");
//         parent.classList.remove("active");
//     }
// }
// function hide(e,parent) {
//     if (e.classList.contains("visible")) {
//         e.classList.remove("visible");
//         e.classList.add("hidden");
//         parent.classList.remove("active");
//     }
// }
function CartToggle() {
    var cart = document.getElementById("cart");
    var mainContent = document.getElementById("MainContent");
    if(cart.classList.contains("updatedcart")) {
        mainContent.classList.remove("CartShift");
        cart.classList.remove("updatedcart");
        cart.classList.add("cart");
        document.getElementById("CartBtn").classList.remove("active");
    } else {
        mainContent.classList.add("CartShift");
        cart.classList.add("updatedcart");
        document.getElementById("CartBtn").classList.add("active");
    }
}

let tbody = document.getElementById("ProductsCartBody");
function AddToCart(name,price) {
    if(cart.classList.contains("updatedcart")){}
   else{ CartToggle();} 
   let promptQuantity= window.prompt("how much?","1"); 
   if (promptQuantity!=null && promptQuantity>0){
        var row = tbody.insertRow(-1);    
        var cell1 = row.insertCell(0);    
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        //var cell5 = row.insertCell(4);
        cell1.innerHTML = name;    
        cell2.innerHTML = promptQuantity;
        cell3.innerHTML = parseFloat(price)*promptQuantity;
        //cell4.innerHTML = counter;

        // cell5.innerHTML ="<button onclick='removeRow("+counter+")'class='buttonremove'>remove</button>" ;
        // cell5.innerHTML = "<img onclick = 'removeRow("+counter+")' class = 'cartItemClear' src='./images/icons/clear_black.png'/>";
        let clearImage = document.createElement("img");
        clearImage.src = './images/icons/clear_black.png';
        clearImage.classList.add("cartItemClear");
        clearImage.addEventListener("click", function() {
            row.remove();
            updatetotale(parseFloat(price), -promptQuantity);
        }, false);
        cell4.appendChild(clearImage);
        // counter++;
        updatetotale(promptQuantity, parseFloat(price));    
    }
    else {
        return;
    }

}
// function removeRow(numberOfRows) {
//     counter--;
//     console.log(numberOfRows);
//     var p =table.rows[numberOfRows].cells[2].innerText;  //price
//     var counter2 =parseFloat(table.rows[numberOfRows].cells[3].innerText);
//     table.deleteRow(numberOfRows);
//     for (counter2; counter2 < table.rows.length-1; counter2++ ){
//         table.rows[numberOfRows].cells[3].innerText=counter2;
//         // table.rows[numberOfRows].cells[4].innerHTML="<button onclick='removeRow("+counter2+")'class='buttonremove'>remove</button>";
//         table.rows[numberOfRows].cells[4].innerHTML="<img onclick = 'removeRow("+counter2+")' class = 'cartItemClear' src='./images/icons/clear_black.png'/>";
//     }
//     updatetotale(parseFloat(p),-1);
// }

function updatetotale(x,y){   
    sum=sum +(x*y);
   var total=document.getElementById("total");
   total.innerHTML="Total:"+sum+"$";
   //saveItems();
}
function checkout(){
    alert("the total is "+sum+"$");
    sum=0; 
    // var counter3=table.rows.length-1; 
     for (var i=0; i < tbody.length; i++){                  
        tbody.delete(-1);
     }
    CartToggle();
    counter=1; //useless
    updatetotale(0,0);
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
    //document.getElementById("loginBox").style.zIndex = "-200";
    document.body.removeChild(blanket);
}

function Login() {
    HideLogin();
    var username = document.getElementById("UsernameInput").value;
    if (username != "") {
        document.getElementById("Username").innerHTML = username;
    }
}
/*function saveItems() {
    var items = [];
    var table=document.getElementById("cart1"); 
    for (var i = 1, n = table.rows.length-1; i < n; i++) {
        items.push(
          { 
              itemName: table.rows[i].cells[0].innerHTML,
              quantity: table.rows[i].cells[1].innerHTML,
              price: table.rows[i].cells[2].innerHTML,
              id: table.rows[i].cells[3].innerHTML ,
              remove: table.rows[i].cells[4].innerHTML,

          });
    }
    localStorage.setItem("lastRows",table.rows[table.rows.length-1].cells[0].innerHTML);
    localStorage.setItem("items", JSON.stringify(items));
    localStorage.setItem("Counter", counter);
    localStorage.setItem("sum",sum);
}
function loadItems() {
    if(window.localStorage.length == 0) {
        return 
    }
    sum=localStorage.getItem("sum");
   counter = localStorage.getItem("Counter");
    var table=document.getElementById("cart1"); 
    retrievedData = localStorage.getItem("items")
    data = JSON.parse(retrievedData)
  
    for (var i = 1; i < data.length; i++) {
        var row = table.insertRow(i);  
        var itemName = row.insertCell(0);
        var quantity = row.insertCell(1);
        var price = row.insertCell(2);
        var id = row.insertCell(3);
        var remove = row.insertCell(4);
  
        itemName.innerHTML = data[i].itemName;
        quantity.innerHTML = data[i].quantity;
        price.innerHTML = data[i].price;
        id.innerHTML = data[i].id;
        remove.innerHTML = data[i].remove;
    }
    
    table.rows[table.rows.length-1].cells[0].innerHTML=localStorage.getItem("lastRows");
  }*/