<?php
function CreateItem($name, $price, $src, $defaultQuantity) {
    //$onclick = "AddToCart(`$name`,$price,$defaultQuantity)"; feels like a security vulnerability so event listeneres are used instead in js
    return (
"<div class='Item'>
        <figure>
            <img class='ProductImage' src=$src>
            <div class = 'ProductCaption'>
                <figcaption class='ProductName'>
                    <a href='www.google.com'>$name</a>
                </figcaption>
                <figcaption class='ProductPrice'>
                    <a href='www.google.com'>$price</a>
                </figcaption>
            </div>    
        </figure>
        <div class='ShowOnHover'>
            <img src='../images/icons/cart_black.png'>
        </div>
    </div>");
}
?>