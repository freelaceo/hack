<template>
	<section id="main-hackathon-search">
		<div class="container-lg">

			<div id="hackathon-input">
				<h2>{{$t('findHackathon')}}</h2>
				<div class="col-md-7 center">
					<div id="hackathon-input-wrapper" class="input-cont">
						<input :placeholder="$t('tryInput')">
						<i class="fas fa-search"></i>
						<button class="btn btn-xs btn-blue">{{$t('search')}}</button>
					</div>
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
	#main-hackathon-search{padding:120px 0;background: #4c5561}
	#hackathon-input h2{text-align:center;display:block;font-size:40px;color:#fff;margin-bottom:30px}
	#hackathon-input .input-cont{position:relative;}
	#hackathon-input-wrapper input{width:100%;padding:20px 30px 20px 50px;border-radius:5px;border:1px solid #ddd;line-height:normal;color:#555;}
	#hackathon-input-wrapper i{position:absolute;left:15px;top:0;bottom:0;font-size:20px;height:20px;margin:auto;color:#555;}
	#hackathon-input-wrapper button{position:absolute;right:15px;top:0;bottom:0;height:36px;margin:auto;padding:5px 15px}
</style>