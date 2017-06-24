
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


<!DOCTYPE html>

<html>
<head>
    <meta charset="utf-8">

    <!-- STYLE SHEETS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

	<link rel="stylesheet" href="../css/housestyle.css">

	<!-- TYPOGRAPHY -->
	<link href="https://fonts.googleapis.com/css?family=Montserrat:300,400,700,800" rel="stylesheet">

</head>

<body>

    <?=$thankYou ?>

    <form method="post" action="donate.php">
	<input name="amount" type="number" class="center-block donate-form" placeholder="Other Amount">
	<select name="specialprojects" form="projectform" style="margin-top:35px">
		<option value="baseball">Baseball</option>
		  <option value="brooklyn">Brooklyn Tech/CCNY</option>
		  <option value="bronx">Bronx Science/CCNY</option>
		  <option value="levine">The Louis Levine-Gabriella de Beer Lecture in Genetics</option>
		  <option value="lamda">Lamda</option>
		  <option value="newera">New Era Scholarship</option>
		  <option value="professorships">Professorships</option>
		  <option value="professorships">ROTC</option>
		  <option value="professorships">Stuyvesant</option>
		  <option value="professorships">Zahn Innovation Center</option>
		</select>
	<div class="btn-center donate"><input type="submit" name="submit">Donate</div>
</form>


	<!-- JAVASCRIPT -->
	  <!-- jQUERY -->
	    <script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4=" crossorigin="anonymous"></script>

	  <!-- BOOTSTRAP JAVASCRIPT -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>

</body>

</html>

