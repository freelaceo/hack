<template>
  <div>
      <div class="white-cont">
            <h2 class="title-3 bold mb-15">{{title}}</h2>
            <p>{{text}}</p>
        </div>
  </div>
</template>

<script>
export default {
  name:'white-cont',
  props:['title','text']
}
</script>

<style scoped>
    .white-cont{padding:30px;background:#fff;border-radius:5px;box-shadow:0 0 5px 2px rgba(0,0,0,.1);margin-bottom:30px!important;}
    .white-cont:last-of-type{margin-bottom:0;}
    h2{
        font-size: 25px;
        font-family: 'Avenir Next';
    }

    p{
        font-size: 15px;
        font-family: 'Avenir Next';
    }
</style>
