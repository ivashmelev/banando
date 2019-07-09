<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="/node_modules/jquery/dist/jquery.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <link href="https://cdn.jsdelivr.net/npm/suggestions-jquery@19.4.2/dist/css/suggestions.min.css" rel="stylesheet" />
    <script src="https://cdn.jsdelivr.net/npm/suggestions-jquery@19.4.2/dist/js/jquery.suggestions.min.js"></script>
    <script src="https://widget.cloudpayments.ru/bundles/cloudpayments"></script>
    <script src="/js/maskedinput.js"></script>
    <link rel="stylesheet" href="/css/calc.css">
    <link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="/css/style.css">
    <title>Регистрация</title>
</head>

<body>
    <div class="wrapper">
        <?php require_once("../header.php"); ?>
        <script>ym(54075076, 'reachGoal', 'form_start');</script>
        <div class="reg_content">
            <div class="block_form"></div>
            <div class="timer">
                <span class="calc__min"></span>:
                <span class="calc__sec"></span>
            </div>
        </div>

        <?php require_once("../footer.php"); ?>
    </div>
</body>
<link rel="stylesheet" href="/css/reg.css">
<script src="/js/dadata.js"></script>
<script src="/js/form.js"></script>
<script src="/js/timer.js"></script>
<script src="/js/payment.js"></script>
</html>