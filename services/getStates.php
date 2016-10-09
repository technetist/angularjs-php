<?php
	require '../classes/CountryRepository.php';
	header('Countent-type: application/json');
	echo ")]}'\n";

	if(isset($_GET['countryCode']) && is_string($_GET['countryCode'])) {
		$states = CountryRepository::getStates($_GET['countryCode']);
		echo json_encode($states);
	}


?>