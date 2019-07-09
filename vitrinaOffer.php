<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="/css/style.css">
  <link rel="stylesheet" href="/css/vitrina.css">
  <title>Витрина</title>
  <!-- Yandex.Metrika counter -->
<script type="text/javascript" >
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(54075076, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
<noscript><div><img src="https://mc.yandex.ru/watch/54075076" style="position:absolute; left:-9999px;" alt="" /></div></noscript>
</head>
<body>
<?php require_once("header.php"); ?>
<?php

$geo = "data=".$_GET["geo"];
// $geo = 'data={"geo":{},"get_offers":true,"ref_link_kwargs":{}}';

$curl = curl_init();

curl_setopt_array($curl, array(
  CURLOPT_URL => "https://lk.3lida.ru/showcase/srochniy.credit/?hide=2403",
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => "",
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => "POST",
  CURLOPT_POSTFIELDS => $geo,
  CURLOPT_HTTPHEADER => array(
    "cache-control: no-cache",
    "content-type: application/x-www-form-urlencoded",
  ),
));

$response = curl_exec($curl);
$err = curl_error($curl);

curl_close($curl);

if ($err) {
  echo "cURL Error #:" . $err;
} else {
  $response = json_decode($response, True);
  print_r($response["offers"]);
}
?>
<script>
  const normalizeUrl = () => {
   const images = document.querySelectorAll(".img-fluid");

    for(let img of images){
      let source = img.src.split("/");
      source.splice(0, 3);
      source = source.join("/");
      img.src = `https://vitrina.money/${source}`;
    }
  }

  const styleElement = () => {
    const mainBlock = document.querySelector(".ak-loan-box");
    const offerBlocks = document.querySelectorAll(".ak-loan-item");
    const innerOfferBlock = document.querySelectorAll(".ak-loan-item > div");
    const images = document.querySelectorAll(".img-fluid");
    const moneyTexts = document.querySelectorAll(".ak-money > div:nth-child(1)");
    const descs = document.querySelectorAll(".ak-desc");
    const times = document.querySelectorAll(".ak-time");
    const features = document.querySelectorAll(".ak-feature");
    const buttons = document.querySelectorAll(".ak-button > a");
    const labels = document.querySelectorAll(".ak-label");
    const rates = document.querySelectorAll(".ak-rate");
    const periods = document.querySelectorAll(".ak-rate-period");
    const heading = document.querySelector(".elementor-heading-title");
    const headingText = document.querySelector(".elementor-text-editor");

    mainBlock.classList.add("main-block-offers");
    heading.classList.add("offer-heading");
    headingText.classList.add("offer-heading-text");

    for(let block of offerBlocks){
      block.classList.add("block-offer");
    }

    for(let i=0; i<3; i++){
      const paragraph = document.createElement("p");
      paragraph.innerText = 'Уже одобрен займ!';
      innerOfferBlock[i].append(paragraph);
      innerOfferBlock[i].style.fontFamily = "Roboto";
      innerOfferBlock[i].style.fontWeight = "600";
    }

    for(let img of images){
      img.classList.add("img-offer");
    }

    for(let text of moneyTexts){
      text.classList.add("offer-money-text");
    }

    for(let desc of descs){
      desc.classList.add("offer-desc");
    }

    for(let time of times){
      time.classList.add("offer-time");
      time.innerText = time.innerText.toUpperCase();
    }

    for(let feature of features){
      feature.classList.add("offer-feature");
    }

    for(let button of buttons){
      button.classList.add("offer-button");
    }

    for(let label of labels){
      label.classList.add("star");
    }

    for(let rate of rates){
      rate.classList.add("offer-rate");
    }

    for(let period of periods){
      period.classList.add("offer-rate-period");
    }
  }

  normalizeUrl();
  styleElement();
</script>

<section class="footer" style="font-family: Roboto">
  <?php require_once("footer.php"); ?>
</section>
</body>
</html>

