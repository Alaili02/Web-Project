<?php
 $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=webproject','root','');
 $stmt = $pdo->prepare('INSERT INTO usersinfo (username,email,password,telephone ,gender ,FirstName,LastName,country) VALUES  (:username,:email,:password,:tel,:gender,:FirstName,:LastName,:Country)');

 $stmt->execute(array(
    'username' => $_POST["username"],
    'email' => $_POST["email"],
    'password' => $_POST["password"],
    'tel' => $_POST["tel"],
    'gender' => $_POST["Gender"],
    'FirstName' => $_POST["FName"],
    'LastName' => $_POST["LName"],
    'Country' => $_POST["country"],
 ));
 header('location: ProductsPage.php');
?> 