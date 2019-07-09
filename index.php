<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<meta name="yandex-verification" content="dff765a9c672d15a" />
	<meta http-equiv="X-UA-Compatible" content="ie=edge">
	<script src="/node_modules/jquery/dist/jquery.js"></script>
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap" rel="stylesheet">
	<link href="https://fonts.googleapis.com/css?family=Montserrat:400,800&display=swap" rel="stylesheet">
	<link rel="stylesheet" href="/css/style.css">
	<title>Срочный кредит</title>
</head>
<body>
	<div class="wrapper">
		<div class="background"></div>
		<?php require_once("header.php")?>
		<section class="content">
			<div class="title">
				<span class="title__text">Первый онлайн</span>
				<span class="title__text-yellow">займ под 0%</span>
			</div>
			
			<div class="calc_section">
				<?php require_once("calc.html"); ?>
			</div>
		</section>

		<section class="block_icon">
			<div class="icon">
				<img src="/img/icons8-money-80.png" alt="" class="icon__img">
				<span class="icon__text">Получение денег <br/>за 10 минут</span>
			</div>
			<div class="icon">
				<img src="/img/icons8-lock-64.png" alt="" class="icon__img">
				<span class="icon__text">Шифруем и защищаем <br/>ваши данные</span>
			</div>
			<div class="icon">
				<img src="/img/icons8-clock-64.png" alt="" class="icon__img">
				<span class="icon__text">Деньги без отказа и с любой <br/>кредитной историей</span>
			</div>
		</section>

		<section class="how_work">
			<div class="how_work__title">
				<span class="how_work__title__text">Как это <br/>работает</span>
			</div>
			<div class="how_work__wrapper_block_icon">
				<div class="how_work__row">
					<div class="how_work__block_icon">
						<div class="wrapper_icon__passport">
							<img src="/img/icons8-passport-50.png" alt="" class="how_work__icon">
						</div>
						<span class="how_work__text">Оставьте заявку в <br/>любом месте и в <br/>любое время: вам <br/>потребуется только <br/>паспорт и доступ в <br/>интернет</span>
					</div>
					<div class="how_work__block_icon">
						<div class="wrapper_icon__time">
							<img src="/img/icons8-time-64.png" alt="" class="how_work__icon">
						</div>
						<span class="how_work__text">Заполните анкету: <br/>это займет не <br/>больше трех минут.</span>
					</div>
				</div>

				<div class="how_work__row">
					<div class="how_work__block_icon" >
						<img src="/img/icons8-check-64.png" alt="" class="how_work__icon">
						<span class="how_work__text">Получите самое <br/>выгодное <br/>предложение.</span>
					</div>
					<div class="how_work__block_icon" >
						<img src="/img/icons8-card-50.png" alt="" class="how_work__icon">
						<span class="how_work__text">Получите деньги <br/>удобным <br/>способом.</span>
					</div>
				</div>
			</div>
		</section>

		<section class="get_money">
			<div class="get_money__title">
				<span class="get_money__title__text">Вы получите <br/>деньги на</span>
			</div>
			<div class="get_money__wrapper_block_card">
				<div class="card">
					<div class="card__title">
						<span class="card__title__text">Банк России</span>
					</div>
					<div class="card__bank">
						<img src="/img/mir-logo.png" alt="" class="card__bank__icon">
						<img src="/img/visa-logo.png" alt="" class="card__bank__icon">
						<img src="/img/mastercard-logo.png" alt="" class="card__bank__icon">
						<img src="/img/qiwi-logo.png" alt="" class="card__bank__icon">
						<img src="/img/yandexmoney-logo.png" alt="" class="card__bank__icon">
					</div>
					<div class="card__number">
						<span class="card__number__text">4276</span>
						<span class="card__number__text">3000</span>
						<span class="card__number__text">3248</span>
						<span class="card__number__text">1324</span>
					</div>
					<div class="card__period">
						<span class="card__period__text">12/26</span>
					</div>
				</div>
			</div>
		</section>

		<section class="about">
			<div class="about__title">
				<span class="about__title__text">О сервисе</span>
			</div>
			<div class="about__text">
				<span class="about__text__text">Сервис подбора микрозаймов Срочный кредит. Оставьте заявку на получение <br/>
												денег: работаем со всеми клиентами — не важно, какая у вас <br/>
												кредитная история и имеются ли текущие просрочки.</span>
			</div>

		</section>

		<?php require_once("footer.php"); ?>

	</div>
</body>
</html>