<template>
  <div style="margin-bottom:40px" class="container-lg top">
      <div class="row events">
        <div v-for="(item,index) in data" class="col-md-3" v-bind:key="index">
          <router-link :to="{ name: 'home', params: {id: item.titleLink } }">
            <figure class="full"><img src="http://via.placeholder.com/300x200" alt="Usuario"></figure>
            <h3>{{item.title}}: {{item.place}}</h3>
            <p>{{item.address}}<br>
            {{item.date}}</p>
            <p class="joined"><mark>100</mark> Joined</p>
          </router-link>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HackathonsItems',
  data: () => ({
    appName: window.config.appName,
       items: [
      { message: 'Foo' },
      { message: 'Bar' }
    ],
  }),
  props:["data","title"],
  created(){
  
  }
}
</script>

<style scoped>
  a,p,h1,h2,h3,h4,h5{
    font-family: 'Avenir Next', sans-serif;

  }
  .bold{
    font-weight: 700;
  }

  .top{
    margin-top:40px;
  }

  figure{margin-bottom:15px!important}
  .h3{font-size:16px;font-weight:600;color:#333;margin-bottom:10px;}
  .joined{margin-top:10px;margin-bottom: 20px;}
  .joined mark{color:#FF4343;}
</style>
