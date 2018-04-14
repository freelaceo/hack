<template>
	<section class="banner">
		<div class="container-lg">
			<div class="col-md-9 center">
				<h2 class="title-2 txt-white mb-30">{{$t('bannerTitle')}}</h2>
				<ul class="banner-list">
					<li>- {{$t('WhiteGlobeService')}}</li>
					<li>- {{$t('Analytics')}}</li>
					<li>- {{$t('AccessBestPractices')}}</li>
					<li>- {{$t('GroupMessaging')}}</li>
					<li>- {{$t('TargetedMarketing')}}</li>
				</ul>
				<div class="btn-holder mt-30">
					<button class="btn btn-lg btn-red">{{$t('GoPremium')}}</button>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
	export default {
	  data: () => ({
		appName: window.config.appName
	  }),
	}
</script>

<style scoped>
	.banner{background-image: url("../assets/Header.jpg");background-size: cover;background-repeat: no-repeat;background-position: center;padding:60px 0;}
	.banner-list li{display:block;color:#fff;font-size:16px;margin-bottom:5px;}
	.banner-list li:last-of-type{margin-bottom: 0}
</style>