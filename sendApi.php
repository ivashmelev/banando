<?php

$curl = curl_init();

$arrParams = $_POST;

curl_setopt_array($curl, array(
    CURLOPT_URL => 'https://api.3lida.ru/v1/raw/',
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_POST => true,
    CURLOPT_POSTFIELDS => http_build_query($arrParams)
));
$response = curl_exec($curl);
curl_close($curl);

echo ($response);



?>