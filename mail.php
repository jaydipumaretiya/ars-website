<?php
    $to = 'actrightllc@gmail.com';
    // $firstname = "hi";
    // $text= "this is testing emails.";
    // $phone= "news";
    $firstname = $_POST["fname"];
    $email= $_POST["email"];
    $text= $_POST["message"];
    $lname= $_POST["lname"];

    $subject = "Contact Me";
    if(isset($_POST['start_date']) && !empty($_POST['start_date'])) {
        $start_date = $_POST['start_date'];
        $subject = "Hire Me";
    }
    if(isset($_POST['end_date']) && !empty($_POST['end_date'])) {
        $end_date = $_POST['end_date'];
        $subject = "Hire Me";
    }
    if(isset($_POST['number_of_guard']) && !empty($_POST['number_of_guard'])) {
        $number_of_guard = $_POST['number_of_guard'];
    }
    if(isset($_POST['armed']) && !empty($_POST['armed'])) {
        $armed = $_POST['armed'];
    }
    if(isset($_POST['unarmed']) && !empty($_POST['unarmed'])) {
        $unarmed = $_POST['unarmed'];
    }
    


    $headers = 'MIME-Version: 1.0' . "\r\n";
    $headers .= "From: " . $email . "\r\n"; // Sender's E-mail
    $headers .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";

    $message ='<table style="width:100%">
        <tr>
            <td>'.$firstname.' '.$lname.'</td>
        </tr>
        <tr><td>Email: '.$email.'</td></tr>';
        
        if(!empty($start_date)) {
            $message .= '<tr><td>Start Date : '.$start_date.'</td></tr>';
        }
        if(!empty($end_date)) {
            $message .= '<tr><td>End Date : '.$end_date.'</td></tr>';
        }
        if(!empty($number_of_guard)) {
            $message .= '<tr><td>Number of Guard: '.$number_of_guard.'</td></tr>';
        }
        if(!empty($armed)) {
            $message .= '<tr><td>Armed: '.$armed.'</td></tr>';
        }
        if(!empty($unarmed)) {
            $message .= '<tr><td>Unarmed: '.$unarmed.'</td></tr>';
        }

        $message .= '<tr><td>Text: '.$text.'</td></tr>
        
    </table>';

    if (@mail($to, $subject, $message, $headers))
    {
        echo json_encode(array("status"=>1,"message"=>"The message has been sent."));
    }else{
        echo json_encode(array("status"=>2,"message"=>"Something went wrong. Please try again later."));
    }
