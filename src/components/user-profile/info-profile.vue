<template>
    <div>
        <div class="profile-photo">
            <img src="http://via.placeholder.com/300x300" alt="">
        </div>
        <div id="profile-info" class="">
            <h2 id="name" class="user-name">Matt Wright</h2>
            <a id="at" class="at-user" href="">@mateo_ventures</a>
            <div id="labels" class="">
                <span class="skyblue">UX/UI</span>
                <span class="magenta">Biz Dev</span>
            </div>
            <p id="followers" class=" follow-status"><strong>10k </strong>Followers </p>
            <p id="followins" class=" follow-status"><strong>200 </strong>Following </p>
            <p id="short-desc" class=" desc-text">I freakin’ loveeee hackathons! I’m a UX designer with some knowledge software development. I also love pizza. </p>
            <p id="location" class="">Los Angeles, CA, USA</p>
            <div id="social" class="">
                <a href=""><img src="http://via.placeholder.com/45x45" alt="Twitter"></a>
                <a href=""><img src="http://via.placeholder.com/45x45" alt="Github"></a>
                <a href=""><img src="http://via.placeholder.com/45x45" alt="Linkedin"></a>
                <a href=""><img src="http://via.placeholder.com/45x45" alt="Bitmap"></a>
            </div>
            <div id="contact" class="">
                <a class="btn-primari" href="">Message</a>
                <a class="btn-primari active" href="">Following</a>
            </div>
        </div>
  </div>
</template>

<script>
export default {
  name:'info-profile',
  components:{}
}
</script>

<style scoped>
    #aside {
        padding-top: 0px;
        padding-bottom: 20px;
    }
    .profile-photo {
        width: 100%;
        border-radius: 5px;
    }
    .profile-photo img{
        width: 100%;
    }
    #profile-info{
        font-family: 'Avenir Next';
    }
    #profile-info h2.user-name {
        font-size: 30px;
        font-weight: 600;
        color: #333;
        margin-top: 20px;
    }
    #profile-info .at-user {
        font-size: 14px;
        line-height: 34px;
        font-weight: normal;
        margin: 0;
        color: #4A4A4A;
    }
    #profile-info #labels {
        margin: 16px auto 26px auto;
    }
    #profile-info #labels span{
        font-size: 14px;
        color: #FFF;
        padding: 4px 40px !important;
        overflow: hidden;
        border: 1px solid #979797;
    }
    #profile-info #labels span.skyblue{
        background-color: #50E3C2;
    }
    #profile-info #labels span.magenta{
        background-color: #E35096;
    }
    #profile-info .follow-status {
        font-size: 16px;
        color: #4A4A4A;
        margin: 0;
    }
    #profile-info .desc-text{
        font-size: 16px;
        color: #4A4A4A;
        line-height: 27px;
        font-weight: normal;    
        margin:16px 0 26px 0 !important;
    }
    #profile-info #location {
        font-size: 16px;
        color: #4A4A4A;
        line-height: 30px;
        padding-left: 31px;
        margin: 0;
        position: relative;
    }
    #profile-info #location:before{
        content: '';
        display: block;
        background-image: url('http://via.placeholder.com/45x45');
        width: 16px;
        height: 22.71px;
        background-repeat: no-repeat;
        background-size: cover;
        position: absolute;
        left: 0;
        top: 0;
    }
    #profile-info #social{
        margin: 26px 0;
    }
    #profile-info #social a {
        margin-right: 16px;
    }
    a.btn-primari {
        display: inline-block;
        margin-right: 16px;
        text-decoration: none;
        font-size: 14px;
        color: #4A4A4A;
        padding: 10px 25px;
        border-radius: 0px;
        border: 1px solid #4A4A4A;
        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);
        margin-bottom:60px;
    }

    a.btn-primari:hover, a.btn-primari:active, a.btn-primari.active {
        text-decoration: none;
        color: #FFF;
        background-color: #4A90E2;
        box-shadow: ;
    }
</style>
