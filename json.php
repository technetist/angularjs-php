<?php
	$countries = [
		['name' => 'Austria'],
		['name' => 'Canada']
	];

	$json = json_encode($countries);
	echo $json;
	echo "<br>";
	var_dump(json_decode($json));
?>