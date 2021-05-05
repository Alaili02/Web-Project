<?php
     $pdo = new PDO('mysql:host=127.0.0.1;port=3306;dbname=webproject','root','');
     $stmt = $pdo->prepare("INSERT INTO contactus(`Full Name`, `Phone Number`, `Email Address`, `Country`, `Message`) VALUES (:fname, :phone, :email, :country, :message)");

     $stmt->execute(array(
         'fname' => $_POST["fullname"],
         'phone' => $_POST["PhoneNumber"],
         'email' => $_POST["FromEmailAddress"],
         'country' => $_POST["country"],
         'message' => $_POST["subject"]
     ));
     header('location: ../Index.php');
 ?>