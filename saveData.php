<?php
include 'settings.php';

$referer = $_SERVER['HTTP_REFERER'];
$domain = parse_url($referer); 

if(in_array( $domain['host'], $allowedDomains)) {
    session_start();
    $jsonData = file_get_contents('php://input');
    $database = fopen("database.json", "w") or die("Unable to open file!");
    fwrite($database, $jsonData);
    fclose($database);
    echo json_encode('success');
} else {
    echo json_encode("Restricted access");
    exit();
}
?>



