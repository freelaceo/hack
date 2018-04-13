<template>
    <div class="container-lg">
        <tabs>
            <tab name="Near You" class="wd">
                <h2 class="title-2 mb-30">Near You</h2>
				<HackathonsItems :data="4"/>
            </tab>
            <tab name="Featured">
                <h2 class="title-2 mb-30">Featured Hackathons</h2>
				<HackathonsItems :data="4"/>
            </tab>
            <tab name="Popular">
                <h2 class="title-2 mb-30">Popular</h2>
				<HackathonsItems :data="4"/>
            </tab>
            <tab name="Virtual">
                <h2 class="title-2 mb-30">Virtual</h2>
				<HackathonsItems :data="4"/>
            </tab>
            <tab name="Non-Profit">
                <h2 class="title-2 mb-30">Non-Profit</h2>
				<HackathonsItems :data="4"/>
            </tab>
            <tab name="All">
                <h2 class="title-2 mb-30">All</h2>
				<HackathonsItems :data="4"/>
            </tab>
        </tabs>
    </div>
</template>

<script>
import HackathonsItems from '../components/HackathonsItems'
export default {
  name:"tabs-home",
  components:{
      HackathonsItems
  }
}
</script>

<style>
    .tabs-component-tabs li{
        display: inline-block;
        margin: 20px 75px;
        text-align: center!important;
        font-family: 'Avenir Next';
        color:#9B9B9B!important;
    }
    .tabs-component-tabs li a{
        text-align: center!important;
        font-family: 'Avenir Next';
        color:#9B9B9B!important;
    }
    .wd{
        width: 100%;
    }
    h2{
        font-family: 'Avenir Next';
        font-size: 40px!important;
        font-style: italic;
        font-weight: 400!important;
        margin-top: 20px;
    }
</style>