
<?php
if($_POST["submit"]) {
    $recipient="your@email.address";
    $subject="Who donated to what and how much";
    $amount=$_POST["amount"];
    $specialprojects=$_POST["specialprojects"];
    $message=$_POST["message"];

    $mailBody="Name: $amount\nEmail: $specialprojects\n\n$message";

    mail($recipient, $subject, $mailBody, "From: $amount <$specialprojects>");

    $thankYou="<p>Thank you! Your donation is appeciated.</p>";
}

?>
