<template>
	<main>
		<Banner val="Publish" type="success" :event="publish" :save="update" :hackid="idHack" :edit="true"/>
		<section class="seccion">
			<div class="container-lg">
				<div class="row">
					<div id="aside" class="col-md-3">
						<div class="user_img mb-15">
							<figure class="full text-center">
								<img :src="hack.info.photoPerfil" alt="Nombre usuario">
								<span class="caption" @click="upload()">{{$t('change-image')}}</span>
							</figure>
							<input type="file" name="file" id="file">
						</div>
						
						<div class="user_info">
							<h2 class="subtitle mb-15">{{$t('Organizers')}}</h2>
							<p class="asidep">{{this.hack.user.name}}</p>
							<!--a href="" class="btn btn-sm btn-red mt-15">Contact Organizers</a-->
						</div>

						<div class="hack-section mt-60">
							<h2 class="subtitle mb-15 subtitle-add">{{$t('Hackers')}} <!--span>{{$t('See_all')}}</span--></h2>
							<div class="row total">
								<div class="col-md-4">
									<figure class="hacker rounded">
										<img src="http://via.placeholder.com/73x73" alt="Usuario">
									</figure>
								</div>
							</div>
						</div>

						<div class="hack-section mt-60">
							<h2 class="subtitle mb-15 subtitle-add">{{$t('Projects')}} <!--span>{{$t('See_all')}}</span--></h2>
							<div class="row total">
								<div class="col-md-4">
									<figure class="hacker rounded">
										<img src="http://via.placeholder.com/73x73" alt="Usuario">
									</figure>
								</div>
							</div>
						</div>
					</div>

					<div id="content" class="col-md-9">
						<h2 class="subtitle mb-15">{{$t('mainInfo')}}</h2>
						<div class="inputs-box">
							<input type="text" class="form-control" :value="hack.info.title" placeholder="Nombre del evento">
							<div id="event-data">
								<!--li><span class="icon-calendar"></span>October 21-22, 2017</li-->
								<div class="cont">
									<span class="fa fa-clock"></span>
									<!--input type="text" class="form-control" :value="hack.info.date" placeholder="Fecha"-->
									<input type="datetime-local" class="form-control" :value="hack.info.date" placeholder="Fecha">
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
								<h2 class="subtitle mb-15">{{$t('Overvies')}}</h2>
								<textarea name="" class="form-control" id="" cols="30" rows="10" :value="hack.info.overvies"></textarea>
							</div>

							<div class="event-desc mt-30">
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Schedule')}} <span class="btn btn-red mt20min" @click="newShedule();">{{$t('add')}}</span></h2>			
								<div class="row" id="days">
									<div class="col-md-4 border-day" v-for="(item,index) in shedule" :key="index">
										<h3 class="headtitle subtitle-add">{{item.title}}<span class="btn mt20min" @click="newHour(index);">{{$t('add')}}</span></h3>
										<ul id="event-program">
											<li v-for="(time, ind) in item.hours" :key="ind"><span class="time"><input type="time" placeholder="Hour" v-model="shedule[index].hours[ind].hour"> | </span><input type="text" placeholder="Description" v-model="shedule[index].hours[ind].description"></li>
										</ul>
									</div>						
								</div>
							</div>

							<div class="mt-30" id="prizes">
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Prizes')}} <span class="btn btn-red mt20min" @click="newPrize();">{{$t('add')}}</span></h2>
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
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Challenges')}} <span class="btn btn-red mt20min" @click="newChallenge()">{{$t('add')}}</span></h2>

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
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Judges')}}</h2>
								<br>
								<multiselect v-model="judge" placeholder="Find Judges" label="title" track-by="title" :multiple="true" :options="judges" :option-height="5" :custom-label="customLabel" :show-labels="false">
									<template slot="singleLabel" slot-scope="props"><img class="option__image" :src="props.option.img" alt="No Man’s Sky"><span class="option__desc"><span class="option__title">{{ props.option.title }}</span></span></template>
									<template slot="option" slot-scope="props"><img class="option__image" :src="props.option.img" alt="No Man’s Sky">
									<div class="option__desc"><span class="option__title">{{ props.option.title }}</span>   |  <span class="option__small">{{ props.option.desc }}</span></div>
									</template>
								</multiselect>
							</div>

							<div class="mt-30" id="judging-criteria">
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Judging_Criteria')}} <span class="btn btn-red mt20min" @click="newCriteria()">{{$t('add')}}</span></h2>
								<ul class="criterial">
									<li class="criterial-item" v-for="(c,index) in critrials" :key="index">
										<input type="text" name="criterial-1" v-model="critrials[index].text" class="form-control small" placeholder="Criteria name">
									</li>
								</ul>
							</div>

							<div class="mt-30" id="tags">
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Tags')}}</h2>
							</div>

							<multiselect v-model="skills" tag-placeholder="Add this as new tag" placeholder="Search or add a tag" label="name" track-by="code" :options="tags" :multiple="true" :taggable="false" @tag="addTag"></multiselect>

							<div class="mt-30" id="sponsor">
								<h2 class="subtitle mb-15 subtitle-add">{{$t('Sponsors')}}</h2>
								<br>
								<multiselect v-model="sponsors" placeholder="Find Sponsor" label="title" track-by="title" :multiple="true" :options="sponsor" :option-height="5" :custom-label="customLabel" :show-labels="false">
									<template slot="singleLabel" slot-scope="props"><img class="option__image" :src="props.option.img" alt="No Man’s Sky"><span class="option__desc"><span class="option__title">{{ props.option.title }}</span></span></template>
									<template slot="option" slot-scope="props"><img class="option__image" :src="props.option.img" alt="No Man’s Sky">
									<div class="option__desc"><span class="option__title">{{ props.option.title }}</span>   |  <span class="option__small">{{ props.option.desc }}</span></div>
									</template>
								</multiselect>
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
import Maps from '../../components/maps'

export default {
	middleware: 'auth',
	components:{
		Banner,
		VueTagsInput,
		Multiselect,
	},
	metaInfo () {
		return { title: this.$t('home') }
	},
	data(){
		return {
			date:'',
			idHack:'',
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
			sponsor:[],
			sponsors:[],
			judge:[],
			datetime:'',
			patners:[],
			shedule:[]

		}
	},
	created(){
	 	this.load();
	},
	methods:{
		load: async function(){
			const { data } = await axios('/auth/hackathon/url/'+this.$route.params.id,{method:"GET"});
			this.hack.info = data.data;

			if( this.creatorVerify(data.data.userId) === false){
				this.$router.push({name:'welcome'});
			}

			this.idHack = data.data._id;
			this.skills = data.data.type.map(e => {
				return {
					name: e,
					code: e.substring(0, 2) + Math.floor((Math.random() * 10000000))
				}
			});
			this.judge = data.data.judges;
			this.hack.tags = this.hack.info.type[0].split(",");
			const user = await axios('/auth/user/'+this.hack.info.userId,{method:"GET"})
			this.hack.user = user.data;
			this.prizes = data.data.prizes;
			this.challenges = data.data.challenge;
			this.critrials = data.data.critrials;
			const us = await axios("auth/users",{method:"GET"});
			const jud = us.data.filter(a => {
				if(a.role === 'judge'){
					return a;
				}
			})
			this.judges = jud.map(j => {
				return {
					title: j.name,
					desc: j.job,
					img: j.avatar,
					idJudge: j._id
				}
			});

			const spon = us.data.filter(a => {
				if(a.role === 'sponsor'){
					return a;
				}
			})
			this.sponsor = spon.map(j => {
				return {
					title: j.name,
					desc: j.job,
					img: j.avatar,
					idJudge: j._id
				}
			})
			const tags = await axios("auth/types",{method:"GET"});	
			this.tags = tags.data.map(e => {
				return {
					name: e.types[0],
					code: e.types[0].substring(0, 2) + Math.floor((Math.random() * 10000000))
				}
			});
			
		},
		addTag (newTag) {
		this.tags.push(newTag);
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
			this.update();
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

		newShedule(){
			this.shedule.push({
				title: this.$t('day') + " " + (this.shedule.length + 1),
				hours:[]
			});
		},

		newHour(index){
			this.shedule[index].hours.push({hour:'',description:''});
		},
		async updateImageProfilhackathon(){
			var img = new FormData();
			img.append('photoPerfil', this.files)
			const { data } = await axios('/auth/hackathon/update/photo/'+this.hack.info._id,{method:"PUT",data:img})

			if(data.success){
				this.load();
			}
		},

		creatorVerify(id){
            let user = JSON.parse(window.localStorage.getItem('user'))._id;
            if(user === id){
                return true;
            } else {
                return false;
            }
		},
		
		test(){
			console.log(this.shedule)
		},

		async update(){
			let t = this.skills.map(t => t.name);
			var f = new FormData();
			f.append('place',this.hack.info.place);
			f.append('title',this.hack.info.title);
			f.append('address',this.hack.info.address);
			f.append('date',this.hack.info.date);
			f.append('linkreserv',this.hack.info.linkreserv);
			f.append('overvies',this.hack.info.overvies);
			f.append('shedule',JSON.stringify(this.shedule));
			f.append('type',t);
			f.append('judges',JSON.stringify(this.judge));
			f.append('prizes',JSON.stringify(this.prizes));
			f.append('challenge',JSON.stringify(this.challenges));
			f.append('critrials',JSON.stringify(this.critrials));
			f.append('sponsor',JSON.stringify(this.sponsors));

			const { data } = await axios('auth/hackathon/update/info/'+this.hack.info._id,{method:"PUT",data:f});
			console.log(data);
		}
	}
}
</script>
<style scoped>
	span.time input{text-align: center; padding-left: 2px;}
	figure.rounded{border-radius:100% !important;overflow:hidden;position: relative;}
	figure.rounded img{width:100%;height:auto;display:block;}
	#event-program li input[type=text]{min-width: 180px;}
	#event-program li {border:1px solid rgba(0,0,0,.2);border-radius: 3px;margin-bottom:2px;}
	#event-program input{border:none;}
	#days{padding: 15px;}
	#days h3{margin-bottom: 20px;margin-top: 20px;}
	.border-day{border:1px solid rgba(10,10,10,.2); padding: 10px; border-radius: 3px; min-height: 300px;}
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
 