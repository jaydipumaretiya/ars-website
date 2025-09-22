<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
require 'PHPMailer/PHPMailerAutoload.php';

    $name=$_POST['name'];
    $email=$_POST['email'];
    $subject=$_POST['subject'];
    $message=$_POST['message'];
    $start_date=$_POST['start_date'];
    $end_date=$_POST['end_date'];
    $mobile_no=$_POST['mobile_no'];
        $mail = new PHPMailer;
        $mail->isSMTP();                                     
        $mail->Host = 'smtp.gmail.com';          
        $mail->SMTPAuth = true;                              
        $mail->Username = 'hetal.qodit@gmail.com';                
        $mail->Password = 'hetal123';                          
        $mail->SMTPSecure = 'tls';                           
        $mail->Port = 587;                                  

        $mail->From = 'hetal.qodit@gmail.com';
        $mail->FromName = 'Mailer';  
        $mail->addAddress('actrightteam@gmail.com');              

        $mail->isHTML(true);                      

        $mail->Subject = 'New Message';
        $mail->Body    = "Name:-".$name."<br>Email:-".$email."<br>Subject:-".$subject."<br>Message:-".$message."<br>Start Date:-".$start_date."<br>End Date:-".$end_date."<br>Mobile No:-".$mobile_no;
        $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

        if(!$mail->send()) {
            echo 'Message could not be sent.';
            echo 'Mailer Error: ' . $mail->ErrorInfo;
        } else {
            echo 'Message has been sent';
        }
      header("Location: index.php?message=success");
?>