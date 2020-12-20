<?php

if (isset($_POST["username"], $_POST["Password"])) {
    $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=webproject','root','');
    $stmt = $pdo->prepare("SELECT * FROM usersinfo where username = :user");
    $stmt->execute(['user' => $_POST["username"]]);

    if($stmt->rowCount() == 0) {
        // error checking maybe
    } else {
        foreach($stmt as $row) {
            if ($_POST["Password"] == $row['password']) {
                $cookie_name = 'LoggedIn';
                $cookie_value = $_POST["username"];
                setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/");
            } else {
                // error checking maybe
            }
        }
    }
    header('location: ProductsPage.php');
}
?>

    