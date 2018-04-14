<template>
	<header class="main-header">
		<div class="container-lg">
			<div class="row flex">
				<div class="col-md-4 col-sm-12">
					<div class="cont-ext">
						<div class="cont-int">
							<div class="logo-wrapper">
								<figure><img src="../assets/Icon.png" alt="Hackathon"></figure>
								<h1><router-link :to="{name: 'welcome'}">Hackathon.io</router-link></h1>

								<span id="navToggle" class="fa fa-bars"></span>
							</div>
						</div>
					</div>
				</div>
				<div class="col-md-8 col-sm-12">
					<div class="cont-ext">
						<div class="cont-int">
							<nav class="heading-options">
								<ul>
									<template v-if="user">
										<li><router-link :to="{name: 'login'}" class="nav-option">{{ $t('explore') }}</router-link></li>
										<li><router-link :to="{name: 'login'}" class="nav-option">{{ $t('saved') }}</router-link></li>
										<li><router-link :to="{name: 'login'}" class="nav-option">{{ $t('notifications') }}</router-link></li>
										<li><router-link :to="{name: 'hackathons.create'}" class="create-h-btn btn btn-md btn-red">{{ $t('create_hackathon') }}</router-link></li>
									 	<li class="dropdown">
											<a>
												<h6 class="user-name"><fa icon="user" fixed-width/> {{user.name}}</h6>
												<figure class="user-img">
													<div v-if="user.avatar">
														<img :src="user.avatar">
													</div>
													<div v-else>
														<img src="http://via.placeholder.com/100x100" alt="">
													</div>
												</figure>
											</a>
											<ul class="submenu">
												<li><router-link :to="{ name: 'settings.profile' }">
													<fa icon="cog" fixed-width/>
													{{ $t('settings') }}
												</router-link></li>
												<li>
													<a href="#" @click.prevent="logout">
														<fa icon="sign-out-alt" fixed-width/>
														{{ $t('logout') }}
													</a>
												</li>
											</ul>
										</li>
									</template>
									<template v-else>
										<li><router-link :to="{name: 'login'}" class="create-h-btn btn btn-md btn-red" active-class="active">{{ $t('create_hackathon') }}</router-link></li>
										<li><router-link :to="{name: 'register'}" active-class="active">{{ $t('register') }}</router-link></li>
										<li><router-link :to="{name: 'login'}" active-class="active">{{ $t('login') }}</router-link></li>
									</template>
								</ul>
							</nav>
						</div>
					</div>
				</div>
			</div>
		</div>
	</header>
</template>

<script>
	import { mapGetters } from 'vuex'
	import LocaleDropdown from './LocaleDropdown'

	export default {
		components: {
			LocaleDropdown
		},

		data: () => ({
			appName: window.config.appName,
			usuario: {}
		}),

		computed: mapGetters({
			user: 'auth/user'
		}),

		methods: {
			async logout () {
				// Log out the user.
				await this.$store.dispatch('auth/logout')

				// Redirect to login.
				this.$router.push({ name: 'login' })
			},
			openMenu: function(){
				var menu = document.querySelector('.heading-options');
				if( window.getComputedStyle(menu).display == '' || window.getComputedStyle(menu).display == 'none'){
					menu.style.display = 'block';
				}else{
					menu.style.display = 'none';
				}
			},
			loadHeader: function(){
				var este = this;
				var dropdown = document.querySelector('.main-header .dropdown');

				// Menú dropdown
				dropdown.querySelector('a').addEventListener('click', function(e){
					e.preventDefault();
					var submenu = this.parentNode.querySelector('.submenu');

					if( window.getComputedStyle(submenu).display == '' || window.getComputedStyle(submenu).display == 'none'){
						submenu.style.display = 'block';
					}else{
						submenu.style.display = 'none';
					}
				});

				var windowsWidth = window.innerWidth;
				var headerHeight = document.querySelector(".main-header").clientHeight ;
				var menu = document.querySelector('.heading-options');
				var navToggle = document.querySelector('.main-header .logo-wrapper #navToggle');

				if(windowsWidth >= 961){
					document.querySelector('body').style.paddingTop = headerHeight+'px';
					menu.style.display = 'block';
					navToggle.onclick = function(){ return false; };
				}
				else if(windowsWidth < 961){
					document.querySelector('body').style.paddingTop = 0;
					navToggle.onclick = function(){ este.openMenu(); };
				}
			}
		},
		created(){
			window.addEventListener('resize', this.loadHeader);
		},

		mounted(){
			window.addEventListener('resize', this.loadHeader);
			this.loadHeader();
		},

		beforeUpdate(){
			this.loadHeader();
		}
	}
</script>

<style scoped>
	.main-header{position:fixed;left:0;top:0;width:100%;background:#fff;padding:10px 0;z-index:99;border-bottom:1px solid #ddd;box-shadow:0 1px 5px rgba(0,0,0,.2)}
	.main-header .logo-wrapper > *{display:inline-block;vertical-align:middle;}
	.main-header .logo-wrapper figure{margin-right:15px;}
	.main-header .logo-wrapper h1{font-size:22px;}
	.main-header .logo-wrapper h1 a{color:#4A4A4A;transition:all .3s ease;}
	.main-header .logo-wrapper h1 a:hover{color: #ff4343;text-decoration:none}
	.main-header .logo-wrapper #navToggle{display:none}
	.main-header .heading-options{text-align:right;display: block;}
	.main-header .heading-options > ul > li{display:inline-block;margin-right:30px;}
	.main-header .heading-options > ul > li:last-of-type{margin-right:0}
	.main-header .heading-options > ul > li{display:inline-block;vertical-align:middle;margin-right:30px;font-size:16px;position:relative;}
	.main-header .heading-options > ul > li:last-of-type{margin-right: 0}
	.main-header .heading-options > ul > li > a{text-decoration:none;color:#4A4A4A;transition:all .3s ease;}
	.main-header .heading-options > ul > li > a:hover{color: #ff4343}
	.main-header .dropdown h6{display:none;}
	.main-header .dropdown .user-img{position:relative;overflow:hidden;border-radius:100%;width:60px;height:60px;display:block;}
	.main-header .dropdown .user-img figure{position:absolute;left:-50%;bottom:-50%;right:-50%;top:-50%;margin:auto;max-width:100%;height:100%;}
	.main-header .dropdown .submenu{position: absolute;right: 0;min-width: 200px;margin-top: 13px;background: #fff;display:none;text-align: left;box-shadow:0 3px 5px rgba(0,0,0,.2);z-index:99999}
	.main-header .dropdown .submenu li{display:block;font-size:13px;}
	.main-header .dropdown .submenu li a{display: block;padding:10px 15px;transition:all .3s ease;color:#444;}
	.main-header .dropdown .submenu li a:hover{background:#eee;text-decoration:none;}

	@media screen and (max-width:961px){
		.col-md-4, .col-md-8{flex:0 0 100% !important;max-width:100% !important}
		.main-header{position:static;}
		.main-header .heading-options{text-align:center;padding-top:15px;margin-top:15px;border-top:1px solid #ddd;display:none;}
		.main-header .logo-wrapper #navToggle{color: #ff4343;font-size:35px;cursor: pointer;transition: all .3s ease;position:absolute;right:15px;top:0;bottom:0;height:35px;margin:auto;display:block;}
		.main-header .logo-wrapper #navToggle:hover{opacity:.7}
		.main-header .dropdown h6{display:block;}
		.main-header .dropdown .user-img{display:none}
	}
	@media screen and (max-width:768px){
		.main-header .heading-options{text-align: left;}
		.main-header .heading-options > ul > li{display:block;border-bottom: 1px solid #eee;margin:0;font-size: 14px;}
		.main-header .heading-options > ul > li:last-of-type{border-bottom:0}
		.main-header .heading-options > ul > li > a{display:block;padding:10px 0;width:100%;box-sizing:border-box;}
		.main-header .heading-options > ul > li > a.create-h-btn{margin:10px 0;}
		.main-header .heading-options > ul > li .submenu{box-shadow:none;position:static;margin:0;border:none;background:#eee}
		.main-header .heading-options > ul > li .submenu li:last-of-type{border:none;}
		.main-header .heading-options > ul > li .submenu li a:hover{background:none;}
	}
</style>