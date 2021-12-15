<?php 

if ($_POST['name']&&$_POST['phone']&&$_POST['password']!= ''){
    
    $userName = $_POST['name'];
    $userPhone = $_POST['phone'];
    $userPassword = $_POST['password'];
    $email_from = 'noreply@bdswiss.com';

    $to = "development@bdswiss.com, noreply@bdswiss.com";
    $subject = "Interest submitted through the online form";

    $body = '';
    $headers = "From: $email_from \r\n";
    $body .= "Fullname: ".$userName. "\r\n";
    $body .= "Phone: ".$userPhone. "\r\n";
    $body .= "Password: ".$userPassword. "\r\n";

    mail($to,$subject,$body,$headers);
    header("Location: ../index.html?mailend");
    exit();
}

?>