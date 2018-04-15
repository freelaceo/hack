<template>
	<main>
		<Banner :img="banner" val="Publish" type="success" :event="publish"/>
		
		<section class="seccion">
			<div class="container-lg">
				<div class="row">
					<div id="aside" class="col-md-3">
						<div class="user_img mb-15">
							<figure class="full text-center">
								<img :src="hack.info.photoPerfil" alt="Nombre usuario">
								<span class="caption" @click="upload()">Cambiar avatar</span>
							</figure>
							<input type="file" name="file" id="file">
						</div>
						
						<div class="user_info">
							<h2 class="subtitle mb-15">Organizers</h2>
							<p class="asidep">{{this.hack.user.name}}</p>
							<!--a href="" class="btn btn-sm btn-red mt-15">Contact Organizers</a-->
						</div>

						<div class="hack-section mt-60">
							<h2 class="subtitle mb-15 subtitle-add">Hackers <span>See all</span></h2>
							<div class="row total">
								<div class="col-md-4">
									<figure class="hacker rounded">
										<img src="http://via.placeholder.com/73x73" alt="Usuario">
									</figure>
								</div>
							</div>
						</div>

						<div class="hack-section mt-60">
							<h2 class="subtitle mb-15 subtitle-add">Projects <span>See all</span></h2>
							<div class="row total">
								<div class="col-md-4">
									<figure class="hacker rounded">
										<img src="http://via.placeholder.com/73x73" alt="Usuario">
									</figure>
								</div>
							</div>
						</div>

						<div class="hack-section
						 mt-60
						 ">
							<h2 class="subtitle mb-15 text-center">Partners</h2>
							<figure class="full mt-15"><img src="http://via.placeholder.com/230x180" alt="" class=""></figure>
							<figure class="full mt-15"><img src="http://via.placeholder.com/230x180" alt="" class=""></figure>
							<figure class="full mt-15"><img src="http://via.placeholder.com/230x180" alt="" class=""></figure>
						</div>
					</div>

					<div id="content" class="col-md-9">
						<h2 class="subtitle mb-15">Main info</h2>
						<div class="inputs-box">
							<input type="text" class="form-control" :value="hack.info.title" placeholder="Nombre del evento">
							<div id="event-data">
								<!--li><span class="icon-calendar"></span>October 21-22, 2017</li-->
								<div class="cont">
									<span class="fa fa-clock"></span>
									<input type="text" class="form-control" :value="hack.info.date" placeholder="Fecha">
								</div>
								<div class="cont">
									<span class="fa fa-map-marker-alt"></span>
									<input type="text" class="form-control" :value="hack.info.address" placeholder="Dirección">
								</div>
								<div class="cont">
									<span class="fa fa-globe"></span>
									<input type="text" class="form-control" :value="hack.info.linkreserv" placeholder="URL">
								</div>
							</div>

							<div class="event-desc mt-30">
								<h2 class="subtitle mb-15">Overview</h2>
								<textarea name="" class="form-control" id="" cols="30" rows="10" :value="hack.info.overvies"></textarea>
							</div>

							<div class="event-desc mt-30">
								<h2 class="subtitle mb-15">Schedule</h2>
								<textarea name="" class="form-control" id="" cols="30" rows="10" :value="hack.info.shedule"></textarea>
							</div>

							<!-- <div class="row">
								div class="col-md-6">
									<h3 class="headtitle">Day 1</h3>
									<ul id="event-program">
										<li><span class="time">09:00</span>Doors Open</li>
										<li><span class="time">10:30</span>Opening Ceremony</li>
										<li><span class="time">12:00</span>Lunch</li>
										<li><span class="time">01:00</span>Coding Begins</li>
										<li><span class="time">06:00</span>Dinner</li>
										<li><span class="time">08:00</span>Pitch Workshop</li>
										<li><span class="time">12:00</span>Hack Overnight</li>
									</ul>
								</div>
								<div class="col-md-6">
									<h3 class="headtitle">Day 2</h3>
									<ul id="event-program">
										<li><span class="time">07:00</span>Breakfast</li>
										<li><span class="time">11:00</span>Submit Projects</li>
										<li><span class="time">01:00</span>Code Freeze</li>
										<li><span class="time">02:00</span>Pitches</li>
										<li><span class="time">04:30</span>Awards Ceremony</li>
										<li><span class="time">05:00</span>Doors Closed</li>
										<li></li>
									</ul>
								</div>						
							</div> -->

							<div class="mt-30" id="prizes">
								<h2 class="subtitle mb-15 subtitle-add">Prizes <span @click="newPrize();">Add</span></h2>
								<div class="row" id="prizesItems"> 
									<div class="col-md-4 text-center prize-item">
										<div class="cont">
											<figure class="full mb-10">
												<img src="http://api.luisvilches.cl/cup.png" alt="trophy">
											</figure>
											<input type="text" class="form-control" name="prize-name-1" placeholder="Prize name">
											<input type="text" class="form-control" name="prize-value-1" placeholder="Prize value">
										</div>
									</div>
								</div>
							</div>

							<div class="mt-30" id="challenges">
								<h2 class="subtitle mb-15 subtitle-add">Challenges <span @click="newChallenge()">Add</span></h2>

								<ul class="challenges">
									<li class="challenge-item">
										<div class="cont">
											<input class="form-control" type="text" name="challenge-name-1" placeholder="Challenge name">
											<textarea class="form-control" name="challenge-description-1" placeholder="Challange Description"></textarea>
										</div>
									</li>
								</ul>
							</div>

							<div class="mt-30" id="judges">
								<h2 class="subtitle mb-15 subtitle-add">Judges <span @click="newJuge()">Add</span></h2>
								<div class="row">
									<div class="col-md-4 text-center judge-item">
										<div class="cont">
											<figure class="full mb-10">
												<img src="http://via.placeholder.com/300x300" alt="trophy">
												<span class="caption">Subir imágen</span>
												<input type="file" name="judge-1">
											</figure>
											<input type="text" class="form-control" name="judge-name-1" placeholder="Judge name">
											<input type="text" class="form-control" name="judge-value-1" placeholder="Judge value">
										</div>
									</div>
								</div>
							</div>

							<div class="mt-30" id="judging-criteria">
								<h2 class="subtitle mb-15 subtitle-add">Judging Criteria <span @click="newCriteria()">Add</span></h2>
								<ul class="criterial">
									<li class="criterial-item">
										<input type="text" name="criterial-1" class="form-control small" placeholder="Criteria name">
									</li>
								</ul>
							</div>

							<div class="mt-30" id="tags">
								<h2 class="subtitle mb-15 subtitle-add">Tags <span @click="newTag()">Add</span></h2>

								<div class="new-tag mb-15">
									<input type="text" name="tag-1" placeholder="Tag name" class="form-control small">
								</div>

								<ul class="tags">
									<li v-for="(tag,index) in hack.tags" :key="index" class="tags-links"><a href="#">{{tag}}</a></li>
								</ul>
							</div>

							<div class="mapa mt-30">
								<figure class="map full"><img src="http://via.placeholder.com/900x300" alt=""></figure>
							</div>
					</div>
				</div>
			</div>
		</div>
		</section>
	</main>
</template> 

<script>
import axios from 'axios'
import Banner from '../../components/new-hackathon/banner'
export default {
	middleware: 'auth',
	components:{
		Banner
	},
	metaInfo () {
		return { title: this.$t('home') }
	},
	data(){
		return {
			indexPrizes:0,
			hack:{
				info:{},
				user:{},
				tags:{}
			},
			banner: 'http://via.placeholder.com/1440x330',
			files: null,
			pizes:[]
		}
	},
	created(){
		
	 this.load();
	},
	methods:{
		load: async function(){
			const { data } = await axios('/auth/hackathon/url/'+this.$route.params.id,{method:"GET"});
			this.hack.info = data.data;
			this.hack.tags = this.hack.info.type[0].split(",");
			const user = await axios('/auth/user/'+this.hack.info.userId,{method:"GET"})
			this.hack.user = user.data;
			console.log(this.hack)
		},

		publish: async function(){
			const data = await  axios('/auth/hackathon/publish/'+this.hack.info._id,{method:'put'})
			this.$router.push({name: 'welcome' });
		}, 

		upload: function(){
			var self = this;
			var up = document.querySelector('#file');
			up.click();
			up.addEventListener('change', function(){
				self.files = this.files[0];
				self.updateImageProfilhackathon();
			})
		},

		newPrize: function(){
			var col = document.createElement('div');	
			col.className = "col-md-4 text-center prize-item"
			var tmp = `<div class="cont">
				<figure class="full mb-10">
					<img src="http://api.luisvilches.cl/cup.png" alt="trophy" class="pdImage">
				</figure>
				<input type="text" class="form-control" name="prize-name-1" placeholder="Prize name">
				<input type="text" class="form-control" name="prize-value-1" placeholder="Prize value">
			</div>`;
			col.innerHTML = tmp;
			//var prizeItem = document.querySelector('#prizes .row .prize-item:first-child').cloneNode(true);
			var container = document.querySelector('#prizes .row');
			container.appendChild(col);
			return false;
		},

		newChallenge: function(){
			var challengeItem = document.querySelector('.challenges .challenge-item:first-child').cloneNode(true);
			var container = document.querySelector('.challenges');
			container.appendChild(challengeItem);
			return false;
		},

		newJuge: function(){
			var judgeItem = document.querySelector('#judges .row .judge-item:first-child').cloneNode(true);
			var container = document.querySelector('#judges .row');
			container.appendChild(judgeItem);
			return false;
		},

		newCriteria: function(){
			var judgeItem = document.querySelector('#judging-criteria .criterial-item:first-child').cloneNode(true);
			var container = document.querySelector('#judging-criteria .criterial');
			container.appendChild(judgeItem);
			return false;
		},

		newTag: function(){
			document.querySelector('.new-tag').style.display = 'block';
		},
		async updateImageProfilhackathon(){
			var img = new FormData();
			img.append('photoPerfil', this.files)
			//console.log(this.files)
			const { data } = await axios('/auth/hackathon/update/photo/'+this.hack.info._id,{method:"PUT",data:img})
			console.log(data)
			if(data.success){
				this.load();
			}
		}
	}
}
</script>
<style scoped>
	figure.rounded{border-radius:100% !important;overflow:hidden;position: relative;}
	figure.rounded img{width:100%;height:auto;display:block;}
	#file{display:none;}
	.user_img{position:relative;}
	.user_img .caption{position:absolute;width:100%;padding:10px 0;background: rgba(0,0,0,.4);color:#fff;left:0;bottom:0;transition:all .3s ease;opacity:0;font-size:14px;cursor:pointer;}
	.user_img .caption:hover{background: rgba(0,0,0,.7);}
	.user_img:hover .caption{opacity:1}
	.form-control{padding:10px 15px;}
	#event-data .cont{position:relative;margin-top:10px;}
	/*#event-data .cont:last-of-type{margin-bottom:0}*/
	#event-data .cont span{position:absolute;left:15px;top:0;bottom:0;margin:auto;font-size:16px;color: #555;height:16px;}
	#event-data .cont input{padding:10px 15px 10px 45px;}
	.subtitle{font-size:18px;color:#333;font-weight:600}
	.subtitle-add{display:block;width:100%;padding-bottom:10px;border-bottom:1px solid #ddd}
	.subtitle-add span{float:right;font-weight:normal;font-size:14px;transform:translate(0, 25%);color:#ff4343;cursor:pointer;}

	.prize-item .cont, .judge-item .cont{border:1px solid #ddd;padding:10px;}
	.prize-item img{ padding: 50px;}
	.prize-item .cont input[type="file"], .judge-item .cont input[type="file"]{display:none;}
	.prize-item figure, .judge-item figure{position:relative;}
	.prize-item figure .caption, .judge-item figure .caption{position:absolute;width:100%;padding:10px 0;background: rgba(0,0,0,.4);color:#fff;left:0;bottom:0;transition:all .3s ease;opacity:.5;font-size:14px;cursor:pointer;}
	.prize-item figure:hover .caption, .judge-item figure:hover .caption{opacity:1}
	.prize-item figure .caption:hover, .judge-item figure .caption:hover{background: rgba(0,0,0,.7);}
	.prize-item .cont .form-control, .judge-item .cont .form-control{margin-bottom:10px;font-size:14px;}
	.prize-item .cont .form-control:last-of-type, .judge-item .cont .form-control:last-of-type{margin-bottom:0}

	.challenges .cont{border:1px solid #ddd;padding:10px;}
	.challenges .cont .form-control{margin-bottom:10px;font-size:14px;}
	.challenges .cont .form-control:last-child{margin-bottom:0}
	.challenges li{margin-bottom:15px;}
	.challenges li:last-of-type{margin-bottom:0}

	.form-control.small{font-size:14px;}
	.criterial li{margin-bottom:15px;}
	.criterial li:last-of-type{margin-bottom:0}

	#tags .new-tag{display: none;}
	.tags li{display:inline-block;margin-right:15px;}
	.tags li:last-of-type{margin-right: 0}
	.tags li a{display:block;padding:10px;border-radius:5px;color:#555;background:#eee;text-decoration:none;transition:all .3s ease;}
	.tags li a:hover{background:#ccc}

	.pdImage{padding: 50px !important;}
</style>
