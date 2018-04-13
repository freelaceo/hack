<template>
    <div>
        <div id="item-profile" v-for="(item,index) in data" v-bind:key="index">
            <div class="content-image">
                <img :src="item.image" alt="" class="proyect-img">
            </div>
            <div class="content-text">
                <h4 class="title-pro">{{item.title}}</h4>
                <p>{{item.content}}</p>
                <div class="friends-profiles">
                    <a id="profile-id" href="" class="friends" v-for="f in item.friends" :key="f">
                        <img :src="f" alt="">
                    </a>
                </div>
            </div>
            <div class="content-vote">
                <div id="bote-regist">
                    <a href="" class="upvote"><span>Upvote</span><strong>{{item.quote}}</strong></a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name:"item-profile",
  props:["data"]
}
</script>

<style scoped>
    #item-profile {
        border: 1px solid #979797;
        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);
        overflow: hidden;
        margin: 26px 0 26px 20px;
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }

    .content-image {
    margin: 20px;
    display: flex;
    align-items: center;
    width: 15%;
}
.content-image img{
  width: 100%;
}
.content-text {
  width: 60%;
}
.content-text h4.title-pro{
  font-size: 20px;
  color: #4A4A4A;
  font-weight: bold;
  margin: 0;
}
.content-text p {
    font-size: 16px;
    color: #4A4A4A;
    font-weight: normal;
    margin: 10px 0px 10px 0px;
}
.content-text .friends-profiles {
    margin: 10px 0px;
    padding-left: 16px;
}
.content-text .friends-profiles a.friends{
  margin-left: -16px;
  overflow: hidden;
  height: auto;
}
.content-vote {
}
.content-vote a.upvote{
  font-size: 14px;
  color: #4A4A4A;
  border: 1px solid #4A4A4A;
  padding: 4px 10px;
  text-decoration: none;
}
.content-vote a.upvote span {
  padding-right: 10px;
  border-right: 1px solid #4A4A4A;
  margin-right: 10px;
}   
</style>
