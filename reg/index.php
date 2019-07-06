<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <script src="/node_modules/jquery/dist/jquery.js"></script>
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
<script src="/js/form.js"></script>
<script src="/js/timer.js"></script>
</html>