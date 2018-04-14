<template>
	<main>
		<Banner :img="banner" val="Publish" type="success" :event="publish"/>
		
		<section class="seccion">
			<div class="container-lg">
				<div class="row">
					<div id="aside" class="col-md-3 text-center">
						<div class="user_img">
							<figure class="full">
								<img src="http://via.placeholder.com/230x230" alt="Nombre usuario">
								<span class="caption" @click="upload()">Cambiar avatar</span>
							</figure>
							<input type="file" name="file" id="file">
						</div>
						
						<div class="user_info">
							<h2 class="subtitle mb-10 text-center">Organizers</h2>
							<p class="asidep">{{this.hack.user.name}}</p>
							<a href="" class="btn btn-sm btn-red mt-15">Contact Organizers</a>
						</div>

						<div class="hack-section mt-30">
							<h2 class="subtitle mb-10">Hackers</h2>
							<div class="row">
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
							</div>
							<div class="text-right mt-10"><a href="" class="seeAll">See all</a></div>
						</div>

						<div class="hack-section mt-30">
							<h2 class="subtitle mb-10 text-center">Projects</h2>
							<div class="row">
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
								<div class="col-md-4"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></div>
							</div>
							<div class="text-right mt-10"><a href="" class="seeAll">See all</a></div>
						</div>

						<div class="hack-section mt-30">
							<h2 class="subtitle mb-10 text-center">Partners</h2>
							<figure class="full mt-15"><img src="http://via.placeholder.com/230x180" alt="" class=""></figure>
							<figure class="full mt-15"><img src="http://via.placeholder.com/230x180" alt="" class=""></figure>
							<figure class="full mt-15"><img src="http://via.placeholder.com/230x180" alt="" class=""></figure>
						</div>
					</div>

					<div id="content" class="col-md-9">
						<div class="inputs-box">
							<input type="text" class="form-control" :value="hack.info.title">
							<ul id="event-data">
								<!--li><span class="icon-calendar"></span>October 21-22, 2017</li-->
								<li>
									<span class="icon-time"></span>
									<input type="text" class="form-control" :value="hack.info.date">
								</li>
								<li>
									<span class="icon-location"></span>
									<input type="text" class="form-control" :value="hack.info.address">
								</li>
								<li>
									<span class="icon-clip"></span>
									<input type="text" class="form-control" :value="hack.info.linkreserv">
								</li>
							</ul>

							<div class="event-desc mt-30">
								<h2 class="subtitle mb-10">Overview</h2>
								<textarea name="" class="form-control" id="" cols="30" rows="10" :value="hack.info.overvies"></textarea>
							</div>

							<div class="event-desc mt-30">
								<h2 class="subtitle mb-10">Schedule</h2>
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

							<div class="prizes mt-30">
								<h2 class="subtitle mb-10">Prizes</h2>

								<div class="row">
									<div class="col-md-4 text-center">
										<figure class="full"><img src="http://via.placeholder.com/163x163" alt="trophy"></figure>
										<h4 class="place">First Place</h4>
										<p class="price">50,000 HKD</p>
										<a href="" class="bArrow fas fa-chevron-down mt-10"><figure></figure></a>
									</div>
								</div>
							</div>

							<div class="challenges mt-30">
								<h2 class="subtitle mb-10">Challenges</h2>

								<h4 class="headp">Smart Workplace</h4>
								<p class="pbody">Develop intelligent and user friendly solutions to make workplaces more efficient.  Ideas can range from the transportation to work, parking, booking of different facilities to information communication & sharing.</p>
								<h4 class="headp">Smart Property Management</h4>
								<p class="pbody">Develop ideas & solutions to disrupt traditional property management into a whole new operation that saves manpower and allows for proactive & predictive services.</p>
							</div>

							<div class="judges mt-30">
								<h2 class="subtitle mb-10">Judges</h2>
								<div class="row">
									<div class="col-md-4 text-center">
										<figure class="full"><img src="http://via.placeholder.com/163x163" alt="Usuario"></figure>
										<p class="name">Adi Abili</p>
										<p class="profesion">#Boss</p>
									</div>
								</div>
							</div>

							<div class="judging-criteria mt-30">
								<h2 class="subtitle mb-10">Judging Criteria</h2>
								<ol class="criterial">
									<li>Impact - Are you changing the world</li>
									<li>UX/UI - Is your app pretty? How’s the usability?</li>
									<li>Tech Chops - How solid is the tech?</li>
									<li>Execution - Is your team bad ass or what?</li>
								</ol>
							</div>

							<div class="tags mt-30">
								<h2 class="subtitle mb-10">Tags</h2>
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
			hack:{
				info:{},
				user:{},
				tags:{}
			},
			banner:'http://via.placeholder.com/1440x330'
		}
	},
	created(){
		
	 this.load();
	},
	methods:{
		load: async function(){
			const data = await axios('/auth/hackathon/url/'+this.$route.params.id,{method:"GET"});
			this.hack.info = data.data.data;
			this.hack.tags = this.hack.info.type[0].split(",");
			const user = await axios('/auth/user/'+this.hack.info.userId,{method:"GET"})
			this.hack.user = user.data;
		},
		publish: async function(){
			const data = await  axios('/auth/hackathon/publish/'+this.hack.info._id,{method:'put'})
			this.$router.push({name: 'welcome' });
		}, 
		upload: function(){
			document.querySelector('#file').click();
		}
	}
}
</script>
<style scoped>
	#file{display:none;}
	.user_img{position:relative;}
	.user_img .caption{position:absolute;width:100%;padding:10px 0;background: rgba(0,0,0,.4);color:#fff;left:0;bottom:0;transition:all .3s ease;opacity:0;font-size:14px;cursor:pointer;}
	.user_img .caption:hover{background: rgba(0,0,0,.7);}
	.user_img:hover .caption{opacity:1}
</style>
