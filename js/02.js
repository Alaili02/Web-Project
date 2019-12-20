//document.write("MOSH MOSH");
function AddToCart() {
    alert("This is an alert");
}
function ShowLogin() {
    var blanket = document.createElement("div");
    blanket.id = "blanket"
    //blanket.classList.add("blanket");
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