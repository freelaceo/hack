<template>
  	<section class="section">
        <div class="banner" v-bind:style="{ backgroundImage: 'url(' + img + ')' }">
            <div v-if="type === 'success'">
                <a @click="event" class="btn btn-lg btn-green mr-15 mb-20">{{val}}</a>
            </div>
            <div v-else-if="type === 'primary'">
                <a @click="event" class="btn btn-lg btn-blue mr-15 mb-20">{{val}}</a>
            </div>

            <div v-else>
                <a @click="event" class="btn btn-lg mr-15 mb-20">{{val}}</a>
            </div>
            <a class="btn btn-xs btn-black mr-15 mb-20">...</a>
        </div>
        <div v-if="creator" class="options">
            <ul>
                <li><a href="">Edit</a></li>
                <li><a href="">Save Changes</a></li>
            </ul>
        </div>
        <div class="space"> </div>
    </section>
</template>

<style scoped>
    .banner {
        width: 100%;
        height: 330px;
        overflow: hidden;
        background-position: center;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
        margin-top: 80px;
    }

    .space{
        margin-bottom: 30px!important;
    }

    .options{
        height: 40px;
        background: #4A4A4A;
        padding: 0px 40px;
    }

    .options ul li {
        display: inline-block;
        list-style: none;
        color: #fff;
        font-size: 18px;
        margin: 10px 20px;
    }
</style>

<script>
export default {
  name:"banner",
  props:['val','type','img','event'],
  data(){
      return{
          creator:true
      }
  }
}
</script>
