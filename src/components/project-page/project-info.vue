<template>
    <div class="container-lg">
        <div class="row flex">
            <div class="col-md-2">
                <figure class="full"><img :src="img" alt="Usuario"></figure>
            </div>
            <div class="col-md-6">
                <h1>{{title}}</h1>
                <p class="desc">{{desc}}</p>
                <p>{{loc}}</p>

                <ul class="tags mt-15">
                    <li v-for="i in tags" v-bind:key="i"><a href="#" class="btn btn-sm btn-red">{{i}}</a></li>
                    <!--li><a href="#" class="btn btn-sm btn-green">Biz Dev</a></li-->
                </ul>
            </div>
            <div class="col-md-4">
                <div class="cont">
                    <div class="white-cont"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:'project-info',
  props:['img','title','desc','loc','tags']
}
</script>

<style scoped>
    h1{font-size:22px;line-height:normal;color:#333!important;}
    p.desc{margin-bottom:15px;font-size:16px;}
    .tags li{display:inline-block;margin-right:10px;}
    .tags li:last-of-type{margin-right:0}
    .white-cont{height:100%;background:#fff;box-shadow:0 0 5px 2px rgba(0,0,0,.1);border-radius:5px;}

</style>
