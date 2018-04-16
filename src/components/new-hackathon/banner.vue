<template>
  	<section class="section">
        <div class="banner" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
            <div class="container-lg">
                <div class="btn-holder">
                    <div v-if="type === 'success'">
                        <a @click="event" class="btn btn-lg btn-green">{{val}}</a>
                    </div>
                    <div v-else-if="type === 'primary'">
                        <a @click="event" class="btn btn-lg btn-blue">{{val}}</a>
                    </div>
                    <div v-else>
                        <a @click="event" class="btn btn-lg">{{val}}</a>
                    </div>
                    <a class="btn btn-xs btn-black">...</a>
                </div>
            </div>
        </div>
        <div v-if="creator" class="options">
            <div class="container-lg">
                <ul>
                    <li><a href="">Edit</a></li>
                    <li><a href="" @click.prevent="save">Save Changes</a></li>
                </ul>
            </div>
        </div>
        <div class="space"> </div>
    </section>
</template>

<style scoped>
    .banner {width: 100%;height: 330px;overflow: hidden;background-position: center;background-size:cover;}
    .space{margin-bottom: 30px!important;}
    .container-lg{position:relative;height:100%;}
    .btn-holder{position:absolute;right:0;bottom:30px;width:100%;text-align:right;}
    .btn-holder > *{display:inline-block;margin-right:15px;}
    .btn-holder > a:last-of-type{margin-right:0}
    .options{background: #4A4A4A;padding: 15px 0;}
    .options ul li{display: inline-block;font-size: 14px;margin-right:15px;}
    .options ul li a{display:block;color: #fff;}
</style>

<script>
export default {
  name:"banner",
  props:['val','type','img','event','save'],
  data(){
      return{
          creator:true
      }
  }
}
</script>
