<template>
	<main>
		<Banner val="Publish" type="success"  :event="publish" :edit="false"/>
			<section class="seccion">
				<div class="container-lg">
					<div class="row">
						<div id="aside" class="col-md-3">

							<div class="user_img mb-15">
								<figure class="full"><img :src="hack.info.photoPerfil" alt="" class=""></figure>
							</div>

							<div class="user_info">
								<h2 class="subtitle mb-15">{{$t('Organizers')}}</h2>
								<p class="asidep">{{this.hack.user.name}}</p>
								<a href="" class="btn btn-sm btn-red mt-15 btn-organizer">{{$t('Contact_Organizers')}}</a>
							</div>

							<div class="hack-section mt-60" v-if="hackers.length != 0">
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Hackers')}} <span>{{$t('See_all')}}</span></h2>
								<div class="row total">
									<div class="col-md-4" v-for="(item,index) in hackers" :key="index">
										<figure class="full rounded">
											<img :src="item.avatar" :alt="item.name">
										</figure>
									</div>
								</div>
							</div>

							<div class="hack-section mt-60" v-if="projects.length != 0">
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Projects')}} <span>{{$t('See_all')}}</span></h2>
								<div class="row total">
									<div class="col-md-4" v-for="(item,index) in projects" :key="index">
										<figure class="full rounded">
											<img :src="item.avatar" :alt="item.name">
										</figure>
									</div>
								</div>
							</div>
						</div>
						
						<div id="content" class="col-md-9">
								<h2 class="title-2 mb-15">{{hack.info.title}}</h2>

								<ul class="event-data">
									<li>
										<span class="fa fa-clock"></span>
										{{hack.info.date}}
									</li>
									<li>
										<span class="fa fa-map-marker-alt"></span>
										{{hack.info.address}}
									</li>
									<li>
										<span class="fa fa-globe"></span>
										<a :href="hack.info.linkreserv" target="_blank">{{hack.info.linkreserv}}</a>
									</li>
								</ul>
								<hr>
								<div class="event-desc mt-30">
									<h2 class="subtitle mb-15">{{$t('Overvies')}}</h2>
									<p class="pbody">{{hack.info.overvies}}</p>
								</div>
								<hr>
								<div class="event-desc mt-30">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Schedule')}}</h2>
									
									<div class="row">
										<div class="col-md-4" v-for="(item,index) in hack.info.shedule" :key="index" >
										<br>
										<h2>{{item.title}}</h2>
										<hr v-if="!hack.info.shedule.length == 0">
										<ul>
											<li v-for="(time, ind) in item.hours" :key="ind">{{time.hour}} - {{time.description}}</li>
										</ul>
									</div>
									</div>
								</div>
								<br>
								<br>
								<div class="prizes mt-30 minH">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Prizes')}}</h2>
									<div class="prizes row">
										<div v-for="(prize,index) in hack.info.prizes" :key="index" class="col-md-4 prize-item">
											<div class="cont">
												<figure class="full mb-15">
													<img src="../assets/trophy.png" alt="trophy">
												</figure>
												<h3>{{prize.title}}</h3>
												<p class="price">{{prize.description}}</p>
											</div>
										</div>
									</div>
								</div>
								
								
								<div class="hack-section mt-60">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Sponsors')}} {{$t('Primarys')}}</h2>
									<figure class="full mt-15 col-md-4" v-for="(item,index) in hack.info.sponsors" :key="index"><img :src="item.img" :alt="item.title" :title="item.title" class="sponImg"><h2 class="text-center"><b>{{item.title}}</b></h2></figure>
								</div>

								<div class="hack-section mt-60">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Sponsors')}} {{$t('Secondarys')}}</h2>
									<figure class="full mt-15 col-md-4" v-for="(item,index) in hack.info.sponsors" :key="index"><img :src="item.img" :alt="item.title" :title="item.title" class="sponImg"><h2 class="text-center"><b>{{item.title}}</b></h2></figure>
								</div>

								<div class="hack-section mt-60">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Others')}} {{$t('Sponsors')}}</h2>
									<figure class="full mt-15 col-md-4" v-for="(item,index) in hack.info.sponsors" :key="index"><img :src="item.img" :alt="item.title" :title="item.title" class="sponImg"><h2 class="text-center"><b>{{item.title}}</b></h2></figure>
								</div>
								<br>
								<br>
								<div class="mt-30 minH" id="challenges">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Challenges')}}</h2>
									<br>
									<ul class="challenges ">
										<li class="challenge-item" v-for="(challenge,index) in hack.info.challenge" :key="index">
											<h4><i class="fas fa-circle"></i> <b>{{challenge.title}}</b></h4>
											<p class="pbody">{{challenge.description}}</p>
										</li>
									</ul>
								</div>
								<br>
								<br>
								<div class="mt-30 judges minH">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Judges')}}</h2>
									<br>
									<div class="row total">
										<div class="col-md-4 judge-item" v-for="(judges,index) in hack.info.judges" :key="index"><!--  -->
											<div class="cont">
												<figure class="full mb-15">
													<img :src="judges.img" alt="Usuario">
												</figure>
												<h3>{{judges.title}}</h3>
												<p class="profesion">{{judges.desc}}</p>
											</div>
										</div>
									</div>
								</div>
								<br>
								<br>
								<div class="judging-criteria mt-30 minH">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Judging_Criteria')}}</h2>
									<br>
									<ol class="criterial">
										<li v-for="(item,index) in hack.info.critrials" :key="index"><i class="fas fa-circle"></i> {{item.text}}</li>
									</ol>
								</div>
								<br>
								<br>
								<div class="mt-30" id="tags">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Tags')}}</h2>
									<br>
									<ul class="tags">
										<li v-for="(tag,index) in hack.tags" :key="index" class="tags-links">{{tag}}</li>
									</ul>
								</div>
								<br>
								<br>
								<div class="map mt-30">
									<h2 class="subtitle mb-15 subtitle-add">{{$t('Maps')}}</h2>
									<br>
									<GmapMap
										:center="{lat:Number(latitud), lng:Number(longitud)}"
										:zoom="15"
										map-type-id="terrain"
										style="width: 100%; height: 300px"
										>
										<GmapMarker
											:key="index"
											v-for="(m, index) in markers"
											:position="m.position"
											:clickable="true"
											:draggable="true"
											@click="center=m.position"
										/>
									</GmapMap>
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
			markers:[],
			latitud:null,
			longitud:null,
			hack:{
				info:{},
				user:{},
				tags:{}
			},
			hackers:[],
			projects:[]
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
			this.latitud = data.data.coordinates[0].latitude;
			this.longitud = data.data.coordinates[0].longitude
			this.markers.push({position:{lat:data.data.coordinates[0].latitude,lng:data.data.coordinates[0].longitude}})

			this.chargerHackers();
			this.chargerProjects();
		},
		publish: async function(){
			const data = await  axios('/auth/hackathon/publish/'+this.hack.info._id,{method:'put'})
			this.$router.push({name: 'welcome' });
		},

		chargerHackers: async function(){
			this.hack.info.hackers.map(e => {
				axios('/auth/user/' + e).then(r => this.hackers.push(r.data));
			});
		},

		chargerProjects: async function(){
			console.log('id =>',this.hack.info._id)
			const {data} = await axios('/auth/project/id/'+this.hack.info._id)
			this.projects = data.data;
			console.log('==!">',data,data.data);
			/*data.data.map(e => {
				axios('/auth/user/' + e).then(r => this.projects.push(r.data));
			});*/
		}
	}
}
</script>
<style >
	#content{border-left: 1px solid rgba(0,0,0,.1);padding-left: 40px;}
	figure.rounded{border-radius:100% !important;overflow:hidden;position: relative;}
	figure.rounded img{width:100%;height:auto;display:block;}
	.subtitle{font-size:18px;color:#333;font-weight:600}
	.subtitle-add{display:block;width:100%;padding-bottom:10px;border-bottom:1px solid #ddd}
	.subtitle-add span{float:right;font-weight:normal;font-size:14px;transform:translate(0, 25%);color:#ff4343;cursor:pointer;}
	.event-data li{display:block;margin-bottom:5px;}
	.event-data li span{margin-right:10px}
	.event-data li:last-of-type{margin-bottom:0}
	.prize-item .cont{padding:40px;text-align:center;}
	.judge-item .cont{text-align:center;margin-bottom: 30px;}
	.judge-item img {border-radius: 100%;max-width: 200px; margin:0 auto;margin-bottom: 30px;}
	.prize-item .cont h3, .judge-item .cont h3{font-weight:600}
	.tags li{display:inline-block;margin-right:15px;padding:10px;border-radius:5px;color:#555;background:#eee;text-decoration:none;transition:all .3s ease;}
	.tags li:last-of-type{margin-right: 0}
	.challenge-item{margin-bottom: 30px;}
	.challenge-item h4{font-size: 15px;}
	.challenge-item p{font-size: 15px;}
	.criterial li{margin-bottom: 20px;}
	.criterial{margin-bottom: 60px;}
	.btn-organizer{padding: 20px 60px;}
	.minH{min-height: 80px; margin-bottom: 60px;}
	.user_info{text-align: center;}
	.fa-circle{font-size: 5px; position: relative; top:-3px; margin-right: 5px;}
	.sponImg{ padding: 30px!important;}
</style>
