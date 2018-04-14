<template>
<!-- eslint-disable-->
<section>
<search-component></search-component>

<section class="seccion-content">
	<div class="container-lg">
		<h2 class="title-3 mb-30">{{$t('featureHackathon')}}</h2>
		<div v-if="feature.length == 0">
			<p>Sin items</p>
		</div>
		<div v-else>
			<hackathons-items :data="feature"/>
		</div>
	</div>
</section>

<section class="seccion-content">
	<div class="container-lg">
		<h2 class="title-3 mb-30">{{$t('popularHackWorld')}}</h2>
		<div v-if="popular.length == 0">
			<p>Sin items</p>
		</div>
		<div v-else>
			<hackathons-items :data="popular"/>
		</div>
	</div>
</section>

<section class="seccion-content">
	<div class="container-lg">
		<h2 class="title-3 mb-30">{{$t('virtualHackathon')}}</h2>
		<div v-if="virtual.length == 0">
			<p>Sin items</p>
		</div>
		<div v-else>
			<hackathons-items :data="virtual"/>
		</div>
	</div>
</section>

<banner-component/>

<section class="seccion-content">
	<div class="container-lg">
		<h2 class="title-3 mb-30">{{$t('blockchainHackathon')}}</h2>
		 <div v-if="blockchain.length == 0">
			<p>Sin items</p>
		</div>
		<div v-else>
			<hackathons-items :data="blockchain"/>
		</div>
	</div>
</section>

<section class="seccion-content">
	<div class="container-lg">
		<h2 class="title-3 mb-30">{{$t('EverythingIoT')}}</h2>
		<div v-if="iot.length == 0">
			<p>Sin items</p>
		</div>
		<div v-else>
			<hackathons-items :data="iot"/>
		</div>
	</div>
</section>

<section class="seccion-content">
	<div class="container-lg">
		<h2 class="title-3 mb-30">{{$t('popularHackWorld')}}</h2>
		<div v-if="popular.length == 0">
			<p>Sin items</p>
		</div>
		<div v-else>
			<hackathons-items :data="popular"/>
		</div>
	</div>
</section>

</section>
</template>


<script>
import axios from 'axios'
import SearchComponent from '@/components/Search'
import BannerComponent from '@/components/BannerBlock'
import HackathonsItems from '@/components/HackathonsItems'

import { mapGetters } from 'vuex'


export default {
	components: {
		SearchComponent,
		BannerComponent,
		HackathonsItems
	},
	layout: 'default',


	metaInfo () {
		return { title: this.$t('home') }
	},

	data: () => ({
		title: window.config.appName,
		feature:[],
		virtual:[],
		blockchain:[],
		iot:[],
		popular:[]
	}),

	computed: mapGetters({
		authenticated: 'auth/check'
	}),

	created(){
		this.load();
	},
	methods:{
		load: async function(){
			const {data} =  await  axios('/hackathon/public',{method:'get'});

			this.feature = data.data;
			this.virtual = this.filter(data.data,'virtual');
			this.blockchain = this.filter(data.data,'blockchain');
			this.iot = this.filter(data.data,'iot');
			this.popular = [];
		}, 
		filter:function(data,cat){
			return data.filter((item,index) => {
				if(index <= 4){
					if(item.type[0].includes(cat)){
						return item;
					}
				}
			})
		}
	}
}
</script>

<style lang="css" scoped>
</style>