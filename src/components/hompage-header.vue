<template>
  <main>
		<section class="seccion">
			<div class="container-lg">
				<p class="font-16">Welcome, Mateo!</p>
				<div class="padding-30 incoming-hackathon mt-15">
					<h2>Your Next Hackathon</h2>
					<h3>Lady Problems Hackathon: London</h3>
					<hr>
					<ul class="hackathon-details row">
						<li class="col-md-3"><mark>Organizer</mark> AngelHack</li>
						<li class="col-md-3"><mark>Location</mark>London, UK</li>
						<li class="col-md-3"><mark>Date</mark>11/09/2017</li>
						<li class="col-md-3"><mark>Time</mark>9:00AM</li>
					</ul>
				</div>
			</div>
		</section>
    <TabsHome/>
    <section class="container-lg">
      <div class="row">
        <div class="col-md-12">
          <h2 class="title">What we found in San Francisco…</h2>
          <HackathonItems :data="16"/>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import TabsHome from '../components/tabs-home'
import HackathonItems from '../components/hackathonsItems'
export default {
  name:'header-home',
  components:{
    TabsHome,
    HackathonItems
  }
}
</script>

<style >
  .incoming-hackathon{border:1px solid #aaa;}
  .incoming-hackathon hr{border:none;border-bottom:1px solid #aaa;margin:30px 0;}
  .incoming-hackathon h2{font-size: 18px;font-weight:600;color:#666;margin-bottom:10px;font-family: 'Avenir Next'}
  .incoming-hackathon h3{font-size: 30px;font-weight:600;color:#333;font-family: 'Avenir Next'}
  .incoming-hackathon .btn{margin-top:15px;}
  .hackathon-details{margin:-10px;}
  .hackathon-details li{padding:10px;box-sizing:border-box;font-family: 'Avenir Next'}
  .hackathon-details li mark{display:block;}
  h2.title{font-weight: 700!important;font-style: normal!important}
</style>