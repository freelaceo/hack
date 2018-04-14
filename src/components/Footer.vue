<template>
	<footer class="main-footer">
		<div class="container-lg">
			<div class="row flex">
				<div class="col-md-3 text-center">
					<div class="cont-ext">
						<div class="cont-int">
							<locale-dropdown/>
						</div>
					</div>
				</div>
				<div class="col-md-3">
					<h6 class="footer-title mb-15">Hackathon.io</h6>
					<nav class="footer-links">
						<ul>
							<li><a href="#">About Us</a></li>
							<li><a href="#">Contact Us</a></li>
							<li><a href="#">Help</a></li>
							<li><a href="#">FAQs</a></li>
						</ul>
					</nav>
				</div>
				<div class="col-md-3">
					<h6 class="footer-title mb-15">Hackathons</h6>
					<nav class="footer-links">
						<ul>
							<li><a href="#">Manifesto</a></li>
							<li><a href="#">Search Participants</a></li>
							<li><a href="#">Search Projects</a></li>
							<li><a href="#">Search Organizers</a></li>
						</ul>
					</nav>
				</div>
				<div class="col-md-3">
					<h6 class="footer-title mb-15">Jobs</h6>
					<nav class="footer-links">
						<ul>
							<li><a href="#">Candidates</a></li>
							<li><a href="#">Employers</a></li>
							<li><a href="#">Get a quote</a></li>
						</ul>
					</nav>
				</div>
			</div>

			<div class="footer-legal">
				<div class="row flex">
					<div class="col-md-6">
						<div class="cont-ext">
							<div class="cont-int">
								<h2 class="link">Hackathon.io Inc. &copy;</h2>
							</div>
						</div>
					</div>
					<div class="col-md-6 text-right">
						<ul class="copy-menu">
							<li><a class="links" href="#">Terms</a></li>
							<li><a class="links"href="#">Privacy</a></li>
						</ul>
						<ul class="social">
							<li><a href="#"><img style="vertical-align:middle" src="https://png.icons8.com/color/29/000000/facebook.png"></a></li>
							<li><a href="#"><img style="vertical-align:middle" src="https://png.icons8.com/color/29/000000/twitter.png"></a></li>
							<li><a href="#"><img style="vertical-align:middle" src="https://png.icons8.com/nolan/29/000000/instagram-new.png"></a></li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script>
import LocaleDropdown from './LocaleDropdown'

export default {
	components: {
		LocaleDropdown
	},
	data: () => ({
		appName: window.config.appName
		}),
}
</script>

<style scoped>
	.main-footer{padding:30px 0;border-top:1px solid #ddd}
	.main-footer .footer-title{font-size:20px;color:#222;}
	.footer-links li{font-size:16px;display:block;}
	.footer-links li a{color:#4A4A4A;transition:all .3s ease;display:inline-block;}
	.footer-links li a:hover{opacity:.7;text-decoration:none;}
	.footer-legal{margin-top:30px;padding-top:15px;border-top:1px solid #eee}
	.footer-legal .copy-menu, .footer-legal .social{display:inline-block;vertical-align:middle;}
	.footer-legal .copy-menu{margin-right:30px;}
	.footer-legal .copy-menu li, .footer-legal .social li{display:inline-block;margin-right:15px;}
	.footer-legal .copy-menu li:last-of-type, .footer-legal .social li:last-of-type{margin-right:0}
</style>