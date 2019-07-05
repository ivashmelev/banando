<?php
function gen_auth($merchantId, $secret)
{
  $reqid = time() ."_". microtime(true) ."_". rand();
  $hash = hash("sha256", $merchantId ."-". $reqid ."-". $secret);
  return $merchantId ."-".$hash ."-". $reqid;
}

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://secure.mandarinpay.com/api/card-bindings",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "Content-Type: application/json",
    // "postman-token: 0484b7ab-099d-d03a-ba32-6c96edf77073",
    "X-Auth: 2359-0b43e98e3f8cb0eafb42b48b93fc24f621bae7ecd0a20079fdb064a7e7d91fdc-1562341359_1562341359.1146_110033762"
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  print_r($response);
}

// print_r(gen_auth(2359, 'p4LukmZj4Z'));
?>