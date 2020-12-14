let SideButton = document.getElementById("SideButton");
let SideButtonImage = document.querySelector("#SideButton img");
let MainContent = document.getElementById("MainContent");
let Navbar = document.getElementById("NavBar");
let SideMenu = document.getElementById("SideMenu");
var CartBtn = document.getElementById("cart");

SideButton.addEventListener('click', toggleSideMain);
function toggleSideMain() {
    if(CartBtn.classList.contains("updatedcart")) {
        MainContent.classList.remove("CartShift");
        cart.classList.remove("updatedcart");
        cart.classList.add("cart");
        document.getElementById("CartBtn").classList.remove("active");
    }
    if (!MainContent.classList.contains("Shifted")) {
        MainContent.classList.add("Shifted");
        SideMenu.classList.add("Shifted");
        Navbar.classList.add("Shifted");
        SideButtonImage.classList.add("pressed");
    } else {
        MainContent.classList.remove("Shifted");
        SideMenu.classList.remove("Shifted");
        Navbar.classList.remove("Shifted");
        SideButtonImage.classList.remove("pressed");
    }
}