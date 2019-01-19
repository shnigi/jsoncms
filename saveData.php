<?php
$jsonData = file_get_contents('php://input');
$database = fopen("database.json", "w") or die("Unable to open file!");
fwrite($database, $jsonData);
fclose($database);
echo json_encode('success');
?>