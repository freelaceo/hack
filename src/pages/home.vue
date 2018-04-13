<template>
  <main>
    <Banner :img="banner" val="Publish" type="success"  :event="publish"/>
			<section class="section">
				<div class="container-lg">
					<div class="row">
						<div id="aside" class="col-md-3 text-center">
							<figure><img src="http://via.placeholder.com/230x230" alt="" class=""></figure>
							<h2 class="subtitle mb-10 text-center">Organizers</h2>
							<p class="asidep">{{this.hack.user.name}}</p>
							<div class="text-center">
								<a href="" class="btn btn-lg btn-red mt-20">Contact Organizers</a>
							</div>
							<h2 class="subtitle mb-10 text-center mt-30">Hackers</h2>
							<div class="bubles">
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<div class="text-right mt-10"><a href="" class="seeAll">See all</a></div>
							</div>
							<h2 class="subtitle mb-10 text-center">Projects</h2>
							<div class="bubles">
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<a href="" class="radius"><figure class="hacker"><img src="http://via.placeholder.com/73x73" alt="Usuario"></figure></a>
								<div class="text-right mt-10"><a href="" class="seeAll">See all</a></div>
							</div>
							<h2 class="subtitle mb-10 text-center">Partners</h2>
							<figure class="mt-20"><img src="http://via.placeholder.com/230x230" alt="" class=""></figure>
							<figure class="mt-20"><img src="http://via.placeholder.com/230x230" alt="" class=""></figure>
							<figure class="mt-20"><img src="http://via.placeholder.com/230x230" alt="" class=""></figure>


							<figure class="mt-60"><img src="http://via.placeholder.com/230x300" alt="" class=""></figure>
							<figure class="mt-60"><img src="http://via.placeholder.com/230x300" alt="" class=""></figure>

						</div>
						
						<div id="content" class="col-md-9">
								<h1 class="title">{{hack.info.title}}</h1>
								<ul id="event-data">
									<!--li><span class="icon-calendar"></span>October 21-22, 2017</li-->
									<li><span class="icon-time"></span>{{hack.info.date}}</li>
									<li><span class="icon-location"></span>{{hack.info.address}}  <a href="map" class="map">(See Map)</a></li>
									<li><a :href="hack.info.linkreserv" target="_blank"><span class="icon-clip"></span>{{hack.info.linkreserv}}</a></li>
								</ul>
								<h2 class="subtitle">Overview</h2>
								<p class="pbody">{{hack.info.overvies}}</p>

								<!--p class="pbody">With the vision of technology-enhanced smart properties, SmarTone Hackathon will enable startup communities and software developers to bring their creative ideas to life, enhance customer experience and enable smarter living and business operations for both landlords and tenants.</p>

								<p class="pbody">#HackSmart</p-->
								<h2 class="subtitle">Schedule</h2>
								<div class="row">
									<!--div class="col-md-6">
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
									</div-->
                  <p class="pbody" style="margin-left: 15px;">{{hack.info.shedule}}</p>
								</div>
								<h2 class="subtitle mb-30">Prizes</h2>
								<div class="prizes row">
									<div class="col-md-4 text-center">
										<figure><img src="http://via.placeholder.com/163x163" alt="trophy"></figure>
										<p class="place mt-20">First Place</p>
										<p class="price mt-10">50,000 HKD</p>
										<a href="" class="bArrow fas fa-chevron-down mt-10"><figure></figure></a>
									</div>
									<div class="col-md-4 text-center">
										<figure><img src="http://via.placeholder.com/163x163" alt="trophy"></figure>
										<p class="place mt-20">Second Place</p>
										<p class="price mt-10">30,000 HKD</p>
										<a href="" class="bArrow fas fa-chevron-down mt-10"><figure></figure></a>
									</div>
									<div class="col-md-4 text-center">
										<figure><img src="http://via.placeholder.com/163x163" alt="trophy"></figure>
										<p class="place mt-20">Third Place</p>
										<p class="price mt-10">10,000 HKD</p>
										<a href="" class="bArrow fas fa-chevron-down mt-10"><figure></figure></a>
									</div>
								</div>
								<h2 class="subtitle">Challenges</h2>
								<div class="padding-30">
									<h4 class="headp">Smart Workplace</h4>
									<p class="pbody">Develop intelligent and user friendly solutions to make workplaces more efficient.  Ideas can range from the transportation to work, parking, booking of different facilities to information communication & sharing.</p>
									<h4 class="headp">Smart Property Management</h4>
									<p class="pbody">Develop ideas & solutions to disrupt traditional property management into a whole new operation that saves manpower and allows for proactive & predictive services.</p>
								</div>
								<h2 class="subtitle mb-30">Judges</h2>
								<div class="judges-bubles">
									<div class="col-md-4 text-center">
										<a href="" class="radius"><figure class="judge"><img src="http://via.placeholder.com/163x163" alt="Usuario"></figure></a>
										<p class="name">Adi Abili</p>
										<p class="profesion">#Boss</p>
									</div>
									<div class="col-md-4 text-center">
										<a href="" class="radius"><figure class="judge"><img src="http://via.placeholder.com/163x163" alt="Usuario"></figure></a>
										<p class="name">Jacob Clarke</p>
										<p class="profesion">Managing Director, <br/>LA Capital</p>
									</div>
									<div class="col-md-4 text-center">
										<a href="" class="radius"><figure class="judge"><img src="http://via.placeholder.com/163x163" alt="Usuario"></figure></a>
										<p class="name">Brian Collins</p>
										<p class="profesion">Where to even begin…</p>
									</div>
									<div class="col-md-4 text-center">
										<a href="" class="radius"><figure class="judge"><img src="http://via.placeholder.com/163x163" alt="Usuario"></figure></a>
										<p class="name">Sabeen Ali</p>
										<p class="profesion">47th President of <br/>the United States <br/>of America</p>
									</div>
									<div class="col-md-4 text-center">
										<a href="" class="radius"><figure class="judge"><img src="http://via.placeholder.com/163x163" alt="Usuario"></figure></a>
										<p class="name">Sabeen Ali</p>
										<p class="profesion">Art Director, Pixar</p>
									</div>
									<div class="col-md-4 text-center">
										<a href="" class="radius"><figure class="judge"><img src="http://via.placeholder.com/163x163" alt="Usuario"></figure></a>
										<p class="name">Simon Machete</p>
										<p class="profesion">The Most Dangerous <br/>Man Alive</p>
									</div>
								</div>
								<h2 class="subtitle mb-30">Judging Criteria</h2>
								<ol class="criterial">
									<li>Impact - Are you changing the world</li>
									<li>UX/UI - Is your app pretty? How’s the usability?</li>
									<li>Tech Chops - How solid is the tech?</li>
									<li>Execution - Is your team bad ass or what?</li>
								</ol>
								<h2 class="subtitle mb-30">Tags</h2>
								<div class="tags">
									<a  v-for="(tag,index) in hack.tags" :key="index" class="tags-links">{{tag}}</a>
								</div>

								<figure class="map mt-30 mb-30"><img src="http://via.placeholder.com/800x400" alt=""></figure>

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



h2.subtitle{
  width: 100%;
  font-size: 20px;
  font-weight: 600;
  color: #4A4A4A;
  text-decoration: underline;
  margin-top: 20px;
}
h3.headtitle{
  width: 100%;
  font-size: 18px;
  color: #4A4A4A;
  margin-bottom: 10px;
  text-decoration: underline;
  margin-top: 10px;
}
h4.headp{
  width: 100%;
  font-size: 18px;
  color: #4A4A4A;
  margin-bottom: 10px;
  font-weight: bold;
  margin-top: 10px;
}
p.asidep{
  width: 100%;
  text-align: center;
  font-size: 14px;
  line-height: normal;
  color: #555;
  margin: 0;
  padding: 0;
}
p.pbody {
    font-size: 14px;
    line-height: normal;
    color: #555;
    margin: 20px 0px;
}
.btn-join{
  
}
a.seeAll{
  font-size: 16px;
  color: #9B9B9B;
  font-weight: normal; 
  text-decoration: none;
}
a.seeAll:hover, a.seeAll:active, a.seeAll.active{
  color: #4A4A4A;
  text-decoration: underline;
}
.text-right {
    text-align: right;
    width: 100%;
    margin-right: 5px;
}

.bubles {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-flow: wrap;
    max-width: 230px;
    margin: 0 auto;
}
.bubles a.radius {
    width: 73px;
    height: 73px;
    margin: 10px 0;
    border-radius: 50%;
    overflow: hidden;
}

h1.title{font-size: 30px;font-weight:600;color:#333;}

ul#event-data{
  list-style: none;
  margin: 20px 0 20px 0;
}
ul#event-data li {
    position: relative;
    font-size: 16px;
    padding: 5px 0 5px 32px;
}

ul#event-data li a.map{
  text-decoration: none;
  color: #468EE5;
}

.icon-location:before{
  content: '';
  display: block;
  background-image: url('http://via.placeholder.com/40x40');
  width: 16px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  left: 0;
  top: 8px;
}
.icon-calendar:before{
  content: '';
  display: block;
  background-image: url('http://via.placeholder.com/40x40');
  width: 16px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  left: 0;
  top: 8px;
}
.icon-time:before{
  content: '';
  display: block;
  background-image: url('http://via.placeholder.com/40x40');
  width: 16px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  left: 0;
  top: 8px;
}
.icon-clip:before{
  content: '';
  display: block;
  background-image: url('http://via.placeholder.com/40x40');
  width: 16px;
  height: 20px;
  background-repeat: no-repeat;
  background-size: 100%;
  position: absolute;
  left: 0;
  top: 8px;
}

ul#event-program{
  list-style: none;
  margin: 10px 0 20px 0;
}
ul#event-program li {
    position: relative;
    font-size: 16px;
    padding: 5px 0 5px 0;
}
ul#event-program li span{
  margin-right: 20px;
  font-weight: bold;
}
.prizes .place{
  font-size: 18px;
  color: 333;
}
.prizes .price{
  font-size: 20px;
  color: 333;
  font-weight: bold;
}
.prizes a.bArrow{
  overflow: hidden;
  display: block;
}

.judges-bubles {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    width: 100%;
    flex-flow: wrap;
}
.judges-bubles a.radius {
    width: 163px;
    height: 163px;
    margin: 10px 0;
    border-radius: 50%;
    overflow: hidden;
    display: inline-block;
}
.judges-bubles p.name{
  font-size: 18px;
  color: 333;
}
.judges-bubles p.profesion{
  font-size: 18px;
  color: 333;
  font-weight: bold;
}

ol.criterial {
    list-style: decimal !important;
    padding: 0 20px;
}

ol.criterial li{
  position: relative;
  font-size: 16px;
  padding: 5px 0 5px 0;
}
.tags a.tags-links {
    display: inline-block;
    margin-right: 16px;
    text-decoration: none;
    font-size: 14px;
    color: #4A4A4A;
    padding: 5px 15px;
    border-radius: 5px;
    border: 2px solid #4A4A4A;
    -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);
}
</style>
