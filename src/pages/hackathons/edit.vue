<template>
	<main>
		<Banner :img="banner" val="Publish" type="success" :event="publish" :save="update"/>
		
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
							<h2 class="subtitle mb-15 subtitle-add">Patners <span class="btn btn-red mt20min" @click="newPatner()">Add</span></h2>
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
									<!--datetime type="datetime" v-model="datetime" format="DD MM YYYY" class="theme-orange"></datetime-->
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
								<h2 class="subtitle mb-15 subtitle-add">Prizes <span class="btn btn-red mt20min" @click="newPrize();">Add</span></h2>
								<div class="row" id="prizesItems"> 
									<div class="col-md-4 text-center prize-item" v-for="(cup,index) in prizes" :key="index">
										<div class="cont">
											<figure class="full mb-10">
												<img src="../../assets/trophy.png" alt="trophy">
											</figure>
											<input type="text" class="form-control" v-model="prizes[index].title" name="prize-name-1" placeholder="Prize name">
											<input type="text" class="form-control" v-model="prizes[index].description" name="prize-value-1" placeholder="Prize value">
										</div>
									</div>
								</div>
							</div>

							<div class="mt-30" id="challenges">
								<h2 class="subtitle mb-15 subtitle-add">Challenges <span class="btn btn-red mt20min" @click="newChallenge()">Add</span></h2>

								<ul class="challenges">
									<li class="challenge-item" v-for="(item,index) in challenges" :key="index">
										<div class="cont">
											<input class="form-control" type="text" v-model="challenges[index].title" name="challenge-name-1" placeholder="Challenge name">
											<textarea class="form-control" v-model="challenges[index].description" name="challenge-description-1" placeholder="Challange Description"></textarea>
										</div>
									</li>
								</ul>
							</div>

							<div class="mt-30" id="judges">
								<h2 class="subtitle mb-15 subtitle-add">Judges <span class="btn btn-red mt20min" @click="newJuge()">Add</span></h2>
								<!--div class="row">
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
								</div-->

								<!--multiselect v-model="skills" tag-placeholder="Add this as new Judge" placeholder="Search or add a Judge" label="name" track-by="code" :options="tags" :multiple="true" :taggable="false" @tag="addTag"></multiselect-->
								<multiselect v-model="judge" placeholder="Fav No Man’s Sky path" label="title" track-by="title" :multiple="true" :options="judges" :option-height="5" :custom-label="customLabel" :show-labels="false">
									<template slot="singleLabel" slot-scope="props"><img class="option__image" :src="props.option.img" alt="No Man’s Sky"><span class="option__desc"><span class="option__title">{{ props.option.title }}</span></span></template>
									<template slot="option" slot-scope="props"><img class="option__image" :src="props.option.img" alt="No Man’s Sky">
									<div class="option__desc"><span class="option__title">{{ props.option.title }}</span>   |  <span class="option__small">{{ props.option.desc }}</span></div>
									</template>
								</multiselect>
							</div>

							<div class="mt-30" id="judging-criteria">
								<h2 class="subtitle mb-15 subtitle-add">Judging Criteria <span class="btn btn-red mt20min" @click="newCriteria()">Add</span></h2>
								<ul class="criterial">
									<li class="criterial-item" v-for="(c,index) in critrials" :key="index">
										<input type="text" name="criterial-1" v-model="critrials[index].text" class="form-control small" placeholder="Criteria name">
									</li>
								</ul>
							</div>

							<div class="mt-30" id="tags">
								<h2 class="subtitle mb-15 subtitle-add">Tags</h2>
							</div>

							<multiselect v-model="skills" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="tags" :multiple="true" :taggable="false" @tag="addTag"></multiselect>

							<div class="mapa mt-30">
								<figure class="map full">
									<!--img src="http://via.placeholder.com/900x300" alt=""-->
									<!--Maps/-->
								</figure>
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
import { stringify } from 'querystring';
import VueTagsInput from '@johmun/vue-tags-input';
import Multiselect from 'vue-multiselect'
import datetime from 'vuejs-datetimepicker';
import Maps from '../../components/maps'

export default {
	middleware: 'auth',
	components:{
		Banner,
		VueTagsInput,
		Multiselect,
		datetime,
		Maps
	},
	metaInfo () {
		return { title: this.$t('home') }
	},
	data(){
		return {
			filterValue:'',
			hack:{
				info:{},
				user:{},
				tags:{}
			},
			prizes:[],
			banner: 'http://via.placeholder.com/1440x330',
			files: null,
			challenges:[],
			tagSend:[],
			tags:[],
			skills:[],
			critrials:[],
			judges:[],
			judge:[],
			datetime:'',
			patners:[]
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
			const tags = await axios("auth/types",{method:"GET"});	
			this.tags = tags.data.map(e => {
				console.log(e.types[0])
				return {
					name: e.types[0],
					code: e.types[0].substring(0, 2) + Math.floor((Math.random() * 10000000))
				}
			});
			const jud = await axios("auth/users",{method:"GET"});
			this.judges = jud.data.map(j => {
				return {
					title: j.name,
					desc: j.description,
					img: j.avatar,
					id: j._id
				}
			})
		},
		addTag (newTag) {
		const tag = {
			name: newTag,
			code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
		}
		this.tags.push(tag)
		this.ta.push(tag)
		},

		customLabel({ title, desc }) {
			return `${title} – ${desc}`
		},

		updateTag(newTags) {
			this.autocompleteItems = this.tags;
			this.skills = newTags;
			this.tagSend = this.skills.map(e => e.text);
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
			this.prizes.push({title:'',description:''});
		},

		newChallenge: function(){
			this.challenges.push({title:'',description:''});
		},

		newCriteria: function(){
			this.critrials.push({text:''});
		},

		newPatner(){

		},
		async updateImageProfilhackathon(){
			var img = new FormData();
			img.append('photoPerfil', this.files)
			const { data } = await axios('/auth/hackathon/update/photo/'+this.hack.info._id,{method:"PUT",data:img})

			if(data.success){
				this.load();
			}
		},

		async update(){
			console.log(this.$data)
			var f = new FormData();
			f.append('place',this.hack.info.place);
			f.append('title',this.hack.info.title);
			f.append('address',this.hack.info.address);
			f.append('date',this.hack.info.date);
			f.append('linkreserv',this.hack.info.linkreserv);
			f.append('overvies',this.hack.info.overvies);
			f.append('shedule',this.hack.info.shedule);
			f.append('type',JSON.stringify(this.skills));
			f.append('judges',JSON.stringify(this.judges));
			f.append('prizes',JSON.stringify(this.prizes));
			f.append('challenge',JSON.stringify(this.challenges));
			//f.append('patnerts',this.patners);

			const { data } = await axios('auth/hackathon/update/info/'+this.hack.info._id,{method:"PUT",data:f});
			console.log(data);
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

	.prize-item .pdImage{ padding:50px!important;}
	.mt20min{margin-top: -20px;}
	.option__image{max-width: 30px; float: left; margin-right:10px;position: relative;top:-7px; border-radius: 50px;}

	
	.theme-orange{
		z-index: 9999;
	}

	.theme-orange .vdatetime-popup__header,
	.theme-orange .vdatetime-calendar__month__day--selected > span > span,
	.theme-orange .vdatetime-calendar__month__day--selected:hover > span > span {
	background: #FF9800;
	}

	.theme-orange .vdatetime-year-picker__item--selected,
	.theme-orange .vdatetime-time-picker__item--selected,
	.theme-orange .vdatetime-popup__actions__button {
	color: #ff9800;
	}
</style>
 