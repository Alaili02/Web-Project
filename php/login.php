<?php
function login ($username,$password){
$pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=webproject','root','');
    $stmt = $pdo->prepare("SELECT * FROM usersinfo where username = :user");
    $stmt->execute(['user' => $username]);   

    if ($stmt->rowCount() == 0) {
        $message = "username does not exist";
        echo "<script type='text/javascript'>alert('$message');</script>";
    } else {
        foreach($stmt as $row) {
            if ($password == $row['password']) {
                $message = "hello   ".$username;
                echo "<script type='text/javascript'>alert('$message');</script>";
            } else {
                $message = "wrong  password";
                echo "<script type='text/javascript'>alert('$message');</script>";               
                
            }
        }
    } }?>
    