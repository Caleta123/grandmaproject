<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $submit = $_POST["submit"];


    $to = "stipecaleta8@gmail.com";
    $subject = "New Comment Submitted";
    $message = "Comment: $submit\n";


    if (mail($to, $subject, $message)) {
        echo "Comment submitted succesfully.";
    } else {
        echo "Error: Unable to send email notification.";
    }
}

?>