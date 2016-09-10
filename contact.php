<?php

$name - $_REQUEST['name'] ;
$email = $_REQUEST['email'] ;
$message = $_REQUEST['message'] ;


require 'phpmailer/PHPMailerAutoload.php';

$mail = new PHPMailer;

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'server13.cretaforce.gr';				// Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'info@tedxuniversityofmacedonia.com';                 // SMTP username
$mail->Password = 'TEDxinfo';                           // SMTP password
$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 587;                                    // TCP port to connect to

$mail->From = $email;
$mail->FromName = $name;	
$mail->addAddress("info.tedxuom@gmail.com");
$mail->AddBCC("kosmastsk@gmail.com", "ContactForm");

$mail->Subject = "New contact form response!";
$mail->Body    = $message;
$mail->AltBody = $message;


if(!$mail->send()) {
	echo "error";
} else {
	echo "sent";
	header( "Location " . $pfw_redirect );
	$pfw_redirect='index.html';
}

?>
