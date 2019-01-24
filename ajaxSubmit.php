<?php

$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

$header = "Form:" .$email . "\r\n";
$header .= "X-Mailer: PHP /" . phpversion() . "\r\n";
$header .= "Mime Version: 1.0 \r\n";
$header .= "Content Type: text/plain";

$comment = "This message has been sent by " .$name . "\r\n";
$comment .= "E-Mail it's: " .$email . "\r\n";
$comment .= "His message is: " .$message . "\r\n";

$for = "OnickAhmed@gmail.com";
$subject = "Content from WebSite";

mail($subject, utf8_decode($comment), $header);

echo json_encode(array(
'Message' => sprintf("Your Message has been Sent %s", $name)
));