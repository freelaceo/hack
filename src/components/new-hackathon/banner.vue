<template>
  	<section class="section">
        <div class="banner" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
            <div v-if="edit" class="changeImage" @click="uploadBanner()"><i class="fas fa-camera"></i></div>
            <input type="file" name="file" id="fileBanner">
            <div class="container-lg">
                <div class="btn-holder">
                    <div v-if="creator && edit == true">
                        <a @click="event" class="btn btn-lg btn-green">Publish</a>
                    </div>

                    <div v-else>
                        <a @click="event" class="btn btn-lg btn-blue">Join</a>
                    </div>
                    <!--a class="btn btn-xs btn-black">...</a-->
                </div>
            </div>
        </div>
        <div v-if="creator" class="options">
            <div class="container-lg">
                <ul>
                    <li v-if="edit"><a href="" @click.prevent="save">Save Changes</a></li>
                    <li v-else><router-link :to="'/edit/' + this.$route.params.id">Edit</router-link></li>
                </ul>
            </div>
        </div>
        <div class="space"> </div>
    </section>
</template>

<style scoped>
    .banner {width: 100%;height: 330px;overflow: hidden;background-position: center;background-size:cover;position: relative;}
    .space{margin-bottom: 30px!important;}
    .container-lg{position:relative;height:100%;}
    .btn-holder{position:absolute;right:0;bottom:30px;width:100%;text-align:right;}
    .btn-holder > *{display:inline-block;margin-right:15px;}
    .btn-holder > a:last-of-type{margin-right:0}
    .options{background: #4A4A4A;padding: 15px 0;}
    .options ul li{display: inline-block;font-size: 14px;margin-right:15px;}
    .options ul li a{display:block;color: #fff;}

    .banner:hover .changeImage {
        display: block;
    }

    #fileBanner{display:none;}

    .changeImage{
        display:none;
        position: absolute;
        top: 20px;
        left: 20px;
        background: rgba(0, 0, 0, .5);
        padding: 10px 20px;
        border-radius: 5px;
        color: #fff;
        cursor: pointer;
    }
</style>

<script>
import axios from 'axios';
export default {
  name:"banner",
  props:['val','type','event','save','hackid','load','edit'],
  data(){
      return{
          creator:null,
          files: null,
          idhack:'',
          img:''
      }
  },
  created(){
      
      this.loaded();
  },
  methods:{
        async loaded(){
          const { data } = await axios('/auth/hackathon/url/'+this.$route.params.id,{method:"GET"});
            this.idhack = data.data._id;
            this.img = data.data.banner;
            this.creator = this.creatorVerify(data.data.userId);
        },
        uploadBanner: function(){
			var self = this;
			var up = document.querySelector('#fileBanner');
			up.click();
			up.addEventListener('change', function(){
				self.files = this.files[0];
				self.updateImageBannerhackathon();
            });
            
            
        },
        async updateImageBannerhackathon(){
			var img = new FormData();
            img.append('photo', this.files)

            const { data } = await axios('/auth/hackathon/update/banner/'+this.idhack,{method:"PUT",data:img})

			if(data.success){
				this.loaded();
			}
        },
        
        creatorVerify(id){
            let user = JSON.parse(window.localStorage.getItem('user'))._id;
            if(user === id){
                return true;
            } else {
                return false;
            }
        }
  }
}
</script>
