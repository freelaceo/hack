<template>
	<main>
		<Banner :img="banner" val="Publish" type="success"  :event="publish"/>
			<section class="seccion">
				<div class="container-lg">
					<div class="row">
						<div id="aside" class="col-md-3">

							<div class="user_img mb-15">
								<figure class="full"><img src="http://via.placeholder.com/230x230" alt="" class=""></figure>
							</div>

							<div class="user_info">
								<h2 class="subtitle mb-15">Organizers</h2>
								<p class="asidep">{{this.hack.user.name}}</p>
								<a href="" class="btn btn-sm btn-red mt-15">Contact Organizers</a>
							</div>

							<div class="hack-section mt-60">
								<h2 class="subtitle mb-15 subtitle-add">Hackers <span>See all</span></h2>
								<div class="row total">
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
								</div>
							</div>

							<div class="hack-section mt-60">
								<h2 class="subtitle mb-15 subtitle-add">Projects <span>See all</span></h2>
								<div class="row total">
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
									<div class="col-md-4">
										<figure class="full rounded">
											<img src="http://via.placeholder.com/100x100" alt="Usuario">
										</figure>
									</div>
								</div>
							</div>

							<div class="hack-section mt-60">
								<h2 class="subtitle mb-10 text-center">Partners</h2>
								<figure class="full mt-15"><img src="http://via.placeholder.com/300x150" alt="" class=""></figure>
								<figure class="full mt-15"><img src="http://via.placeholder.com/300x150" alt="" class=""></figure>
								<figure class="full mt-15"><img src="http://via.placeholder.com/300x150" alt="" class=""></figure>
							</div>
						</div>
						
						<div id="content" class="col-md-9">
								<h2 class="title-2 mb-15">{{hack.info.title}}</h2>

								<ul class="event-data">
									<!--li><span class="icon-calendar"></span>October 21-22, 2017</li-->
									<li>
										<span class="fa fa-clock"></span>
										{{hack.info.date}}
									</li>
									<li>
										<span class="fa fa-map-marker-alt"></span>
										{{hack.info.address}}  <a href="map" class="map">(See Map)</a>
									</li>
									<li>
										<span class="fa fa-globe"></span>
										<a :href="hack.info.linkreserv" target="_blank">{{hack.info.linkreserv}}</a>
									</li>
								</ul>

								<div class="event-desc mt-30">
									<h2 class="subtitle mb-15">Overview</h2>
									<p class="pbody">{{hack.info.overvies}}</p>
								</div>

								<div class="event-desc mt-30">
									<h2 class="subtitle mb-15">Schedule</h2>
									<p class="pbody">{{hack.info.shedule}}</p>
								</div>

								<div class="prizes mt-30">
									<h2 class="subtitle mb-15">Prizes</h2>
									<div class="prizes row">
										<div class="col-md-4 prize-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/300x300" alt="trophy">
												</figure>
												<h3>First Place</h3>
												<p class="price">50,000 HKD</p>
											</div>
										</div>
										<div class="col-md-4 prize-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/300x300" alt="trophy">
												</figure>
												<h3>Second Place</h3>
												<p class="price">25,000 HKD</p>
											</div>
										</div>
										<div class="col-md-4 prize-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/300x300" alt="trophy">
												</figure>
												<h3>Third Place</h3>
												<p class="price">10,000 HKD</p>
											</div>
										</div>
									</div>
								</div>

								<div class="mt-30" id="challenges">
									<h2 class="subtitle mb-15">Challenges</h2>

									<ul class="challenges">
										<li class="challenge-item">
											<h4>Smart Workplace</h4>
											<p class="pbody">Develop intelligent and user friendly solutions to make workplaces more efficient.  Ideas can range from the transportation to work, parking, booking of different facilities to information communication & sharing.</p>
										</li>
										<li>
											<h4>Smart Property Management</h4>
											<p class="pbody">Develop ideas & solutions to disrupt traditional property management into a whole new operation that saves manpower and allows for proactive & predictive services.</p>
										</li>
									</ul>
								</div>

								<div class="mt-30 judges">
									<h2 class="subtitle mb-15">Judges</h2>

									<div class="row total">
										<div class="col-md-4 judge-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/163x163" alt="Usuario">
												</figure>
												<h3>Adi Abili</h3>
												<p class="profesion">#Boss</p>
											</div>
										</div>
										<div class="col-md-4 judge-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/163x163" alt="Usuario">
												</figure>
												<h3>Jacob Clarke</h3>
												<p class="profesion">Managing Director, <br/>LA Capital</p>
											</div>
										</div>
										<div class="col-md-4 judge-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/163x163" alt="Usuario">
												</figure>
												<h3>Brian Collins</h3>
												<p class="profesion">Where to even begin…</p>
											</div>
										</div>
										<div class="col-md-4 judge-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/163x163" alt="Usuario">
												</figure>
												<h3>Sabeen Ali</h3>
												<p class="profesion">47th President of <br/>the United States <br/>of America</p>
											</div>
										</div>
										<div class="col-md-4 judge-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/163x163" alt="Usuario">
												</figure>
												<h3>Sabeen Ali</h3>
												<p class="profesion">Art Director, Pixar</p>
											</div>
										</div>
										<div class="col-md-4 judge-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="http://via.placeholder.com/163x163" alt="Usuario">
												</figure>
												<h3>Simon Machete</h3>
												<p class="profesion">The Most Dangerous <br/>Man Alive</p>
											</div>
										</div>
									</div>
								</div>

								<div class="judging-criteria mt-30">
									<h2 class="subtitle mb-15">Judging Criteria</h2>

									<ol class="criterial">
										<li>Impact - Are you changing the world</li>
										<li>UX/UI - Is your app pretty? How’s the usability?</li>
										<li>Tech Chops - How solid is the tech?</li>
										<li>Execution - Is your team bad ass or what?</li>
									</ol>
								</div>

								<div class="mt-30" id="tags">
									<h2 class="subtitle mb-15">Tags</h2>
									<ul class="tags">
										<li v-for="(tag,index) in hack.tags" :key="index" class="tags-links"><a href="#">{{tag}}</a></li>
									</ul>
								</div>

								<div class="map mt-30">
									<figure class="full"><img src="http://via.placeholder.com/800x400" alt=""></figure>
								</div>
						</div>
					</div>
				</div>
			</section>
		</main>
</template> 

<script>
import axios from 'axios'
import Banner from '../components/new-hackathon/banner'
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
			const {data} = await axios('/auth/hackathon/url/'+this.$route.params.id,{method:"GET"});
			this.hack.info = data.data;
			this.hack.tags = this.hack.info.type[0].split(",");
			const user = await axios('/auth/user/'+this.hack.info.userId,{method:"GET"})
			this.hack.user = user.data;
		},
		publish: async function(){
			const data = await  axios('/auth/hackathon/publish/'+this.hack.info._id,{method:'put'})
			this.$router.push({name: 'welcome' });
		}
	}
}
</script>
<style >
	figure.rounded{border-radius:100% !important;overflow:hidden;position: relative;}
	figure.rounded img{width:100%;height:auto;display:block;}
	.subtitle{font-size:18px;color:#333;font-weight:600}
	.subtitle-add{display:block;width:100%;padding-bottom:10px;border-bottom:1px solid #ddd}
	.subtitle-add span{float:right;font-weight:normal;font-size:14px;transform:translate(0, 25%);color:#ff4343;cursor:pointer;}
	.event-data li{display:block;margin-bottom:5px;}
	.event-data li span{margin-right:10px}
	.event-data li:last-of-type{margin-bottom:0}
	.prize-item .cont{border:1px solid #ddd;padding:10px;text-align:center;}
	.judge-item .cont{text-align:center;}
	.prize-item .cont h3, .judge-item .cont h3{font-weight:600}
	.tags li{display:inline-block;margin-right:15px;}
	.tags li:last-of-type{margin-right: 0}
	.tags li a{display:block;padding:10px;border-radius:5px;color:#555;background:#eee;text-decoration:none;transition:all .3s ease;}
	.tags li a:hover{background:#ccc}
</style>
