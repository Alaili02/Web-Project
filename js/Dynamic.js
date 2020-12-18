let SideButton = document.getElementById("SideButton");
let SideButtonImage = document.querySelector("#SideButton img");
let MainContent = document.getElementById("MainContent");
let Navbar = document.getElementById("NavBar");
let SideMenu = document.getElementById("SideMenu");
let CartElement = document.getElementById("cart");

SideButton.addEventListener('click', toggleSideMain);

function toggleSideMain() {
    if(CartElement.classList.contains("updatedcart")) {
        MainContent.classList.remove("CartShift");
        CartElement.classList.remove("updatedcart");
        CartElement.classList.add("cart");
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
    if (username !== "") {
        document.getElementById("Username").innerHTML = username;
    }
}
