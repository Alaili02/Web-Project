<?php
 $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=webproject','root','');
 $stmt = $pdo->prepare('INSERT INTO usersinfo (username,email,password,telephone ,gender ,FirstName,LastName,country) VALUES  (:username,:email,:password,:tel,:gender,:FirstName,:LastName,:Country)');  



 $stmt->execute(array(
    'username' => $_GET["username"],
    'email' => $_GET["email"],
    'password' => $_GET["Pword"],
    'tel' => $_GET["tel"],
    'gender' => $_GET["Gender"],
    'FirstName' => $_GET["FName"],
    'LastName' => $_GET["LName"],
    'Country' => $_GET["country"],
    
));
?> 