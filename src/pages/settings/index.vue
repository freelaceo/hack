<template>
  <section class="seccion">
    <div class="container-lg">
      <div class="row">
        <div class="col-lg-3 flex">
          <div class="v-card-mob-left"> 
              <div class="user_img">
                <figure class="full">
                  <img :src="user.avatar" :alt="user.name">
                  <span class="caption" @click="upload()">Cambiar avatar</span>
                </figure>
                <input type="file" name="file" id="file">
              </div>
              <li class="edit-profile">
                    <router-link :to="{ name: 'settings.edit.profile' }" active-class="active">
                      ({{ $t('Edit profile') }})
                    </router-link>
              </li>
          </div>
          <div class="v-card-mob-right">
              <div id="profile-info" class="">
                  <h2 id="name" class="user-name">{{user.name}}</h2>
                  <a id="at" class="at-user" href="">@{{user.username}}</a>

                  <div id="labels" class="" v-if="user.invite">
                      <span class="skyblue" v-for="(item,index) in user.invite" :key="index">{{item}}</span>
                  </div>
                  <p id="followers" class=" follow-status" v-if="user.followers"><strong>{{user.followers}} </strong>Followers </p>
                  <p id="followins" class=" follow-status" v-if="user.followins"><strong>{{user.followins}} </strong>Following </p>
                  <p id="short-desc" class=" desc-text" v-if="user.description">{{user.description}}</p>
                  <p id="location" class="" v-if="user.location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>{{user.location}}</p>
                  <div id="social" class="">
                      <a v-if="user.socials.twitter" :href="user.socials.twitter"><i class="social-icons fab fa-twitter"></i></a>
                      <a v-if="user.socials.facebook" :href="user.socials.facebook"><i class="social-icons fab fa-facebook"></i></a>
                      <a v-if="user.socials.linkedin" :href="user.socials.linkedin"><i class="social-icons fab fa-linkedin-in"></i></a>
                      <a v-if="user.socials.other" :href="user.socials.other"><i class="social-icons fab fa-github"></i></a>
                  </div>
                  <div id="contact" class="">
                      <a class="btn-primari" href="">Message</a>
                      <a class="btn-primari active" href="">Following</a>
                  </div>
              </div>
          </div> 
        </div>
        <div class="col-lg-9">
                  <div class="row">
              <nav class="profile-navigation">
                <ul>
                  <li>
                    <router-link :to="{ name: 'settings.profile' }" class="profile-nav-link" active-class="active">
                      {{ $t('projects') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'settings.schedule' }" class="profile-nav-link" active-class="active">
                      {{ $t('schedule') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'settings.upvoted' }" class="profile-nav-link" active-class="active">
                      {{ $t('upvoted') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'settings.badges' }" class="profile-nav-link" active-class="active">
                      {{ $t('badges') }}
                    </router-link>
                  </li>
                  <li class="separador">
                    <router-link :to="{ name: 'settings.password' }" class="profile-nav-link" active-class="active">
                      {{ $t('password') }}
                    </router-link>
                  </li>
                  <li>
                    <router-link :to="{ name: 'settings.edit.profile' }" class="profile-nav-link" active-class="active">
                      {{ $t('profile') }}
                    </router-link>
                  </li>
                </ul>
              </nav>
            </div>
          <transition name="fade" mode="out-in">
            <router-view/>
          </transition>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
export default {
  middleware: 'auth',

  data(){
    return{
      files: null
    }
  },

  computed: mapGetters({
    user: 'auth/user'
  }),
  methods:{
    async upload(){
      var self = this;
      var up = document.querySelector('#file');
      up.click();
      up.addEventListener('change', function(){
        self.files = this.files[0];
        self.updateAvatar();
      })
    },
    async updateAvatar(){
       var img = new FormData();
        img.append('avatar', this.files)
        const { data } = await axios('/auth/user/set/avatar/'+this.user._id,{method:"PUT",data:img})
        console.log(data)
        if(data.success){
          this.$store.dispatch('auth/updateUser', { user: data.data })
        }
    }
  }
}
</script>
<style scoped>
i.social-icons {
  font-size: 30px;
  color: #4A4A4A;
}
.flex {
    display: flex;
    flex-wrap: wrap;
    align-self: flex-start;
}
#file{display:none;}
  .user_img{
    position:relative;    
    width: 100%;
    max-width: 277px;
    max-height: 277px;
  }
  .user_img figure {
    width: 100%;
    height: auto;
    position: relative;
  }
  .user_img figure:before{
    content: '';
    width: 100%;
    padding-top: 100%;
    display: block;
    position: absolute;
    top: 0;
  }
  .user_img figure img{
    object-fit: cover;
} 
  .edit-profile{
    text-align: left;
    margin-top: 10px;
    list-style: none;
  }
  .user_img .caption{text-align:center;position:absolute;width:100%;padding:10px 0;background: rgba(0,0,0,.4);color:#fff;left:0;bottom:0;transition:all .3s ease;opacity:0;font-size:14px;cursor:pointer;}
  .user_img .caption:hover{background: rgba(0,0,0,.7);}
  .user_img:hover .caption{opacity:1}
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
        margin: 0;
        position: relative;
    }
    #profile-info #location i {
      margin-right: 10px;
    }
    #profile-info #social{
        margin: 26px 0;
        display: flex;
        justify-content: flex-start;
    }
    #profile-info #social a {
        margin-right: 30px;
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
    }



.settings-card .card-body {
  padding: 0;
}
:host {
  float: left;
  width: 100%; 
}
.half-col {
  display: flex;
  flex-direction: row;
  float: left;
  width: 100%;
  margin-top: 20px; 
}
.half-col .col {
  color: #fff; 
}
.half-col .col:nth-child(odd) {
  flex-basis: 30%;
  padding: 0 40px; 
}
.half-col .col:nth-child(even) {
  flex-basis: 70%;
  padding: 0 40px 0 0; 
}
@media only screen and (max-width: 720px) {
  .half-col {
    display: -webkit-box;
    display: -ms-flexbox;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    float: left;
    width: 100%; 
  } 
}
.half-col section {
  margin-left: 24px;
  margin-top: 30px; 
}
.half-col hr {
  display: none; 
}
@media only screen and (max-width: 720px) {
  .half-col hr {
    display: inherit; 
  } 
}
.profile-navigation {
  width: 100%;
  text-align: center; 
}
.profile-navigation ul {
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0 auto; 
  padding: 5px 10px 5px 10px;
}
.profile-navigation li {
  list-style: none;
  padding: 5px 10px 5px 10px;
}
.profile-navigation li.separador{
  border-left: 1px solid #999 !important;
  padding-left: 30px;
}
.profile-navigation .profile-nav-link {
  color: #999999;
  text-decoration: none;
  font-size: 20px; 
}
.profile-navigation .profile-nav-link.active {
      color: #4c4c4c;
      text-decoration: underline; 
}


@media only screen and (max-width: 900px) {
 .profile-navigation .profile-nav-link {
  font-size: 17px;
}
}
#user-info {
  display: flex;
  flex-direction: column;
  color: #4c4c4c; 
}
#user-info .user-image {
  width: 100%;
  background-color: #8cbffd; 
}
#user-info .user-image img {
  float: left;
  width: 100%; 
}
#user-info .user-fullname {
  color: #393f47;
  font-size: 30px;
  font-family: MontserratBlack;
  margin-top: 20px; 
}
#user-info .user-username {
  color: #4c4c4c;
  font-family: MontserratMedium;
  margin-bottom: 20px; 
}
.skill-badges {
  margin-bottom: 20px; 
}
.skill-badges .sk-badge {
  padding: 5px 26px;
  background-color: royalblue;
  font-size: 19px;
  border: 1px solid #969b99;
  color: #ffffff; 
}
#user-info .follow-display {
  display: flex;
  flex-direction: column;
  font-size: 19px;
  margin-bottom: 20px; 
}
#user-info .follow-display .bold-number {
  font-family: MontserratBold; 
}
#user-info .user-description {
  font-size: 16px;
  font-family: MontserratRegular;
  margin-bottom: 20px; 
}
#user-info .user-location {
  display: flex;
  align-items: center;
  margin-bottom: 10px; 
}
#user-info .user-location .fa {
  font-size: 38px;
  color: #393f47;
  margin-right: 10px; 
} 
#user-info .user-location > span {
  font-size: 18px;
  font-family: MontserratRegular; 
}
#user-info .user-social-media {
  margin-top: 40px; 
}
.profile-action-buttons {
  margin-top: 30px; 
}

.btn {
  background-color: #ffffff;
  color: #4c4c4c;
  border: 1px solid #4c4c4c;
  padding: 15px 20px;
  font-family: MontserratMedium;
  box-shadow: 0px 1px 3px 0px rgba(41, 41, 41, 0.8);
  font-size: 18px;
  cursor: pointer; 
}
.btn:last-child {
  background-color: #648edf;
  color: #fff; 
}

.panel {
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid rgba(169, 169, 169, 0.760784);
  background-color: white;
  -webkit-box-shadow: 0px 1px 2px 1px rgba(66, 66, 66, 0.32);
  box-shadow: 0px 1px 2px 1px rgba(66, 66, 66, 0.32);
  padding: 30px 20px;
  color: #4c4c4c;
  display: flex;
  flex-direction: column; 
}
.panel .panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px; 
}
.panel .panel-header h1 {
  color: #393f47;
  font-family: MontserratBold;
  font-size: 40px; 
}
.panel .panel-header .edit-panel {
  color: #969696;
  font-family: MontserratMedium; 
}
.card {
  border-radius: 3px;
  border: 1px solid rgba(169, 169, 169, 0.760784);
  background-color: white;
  -webkit-box-shadow: 0px 1px 2px 1px rgba(66, 66, 66, 0.32);
  box-shadow: 0px 1px 2px 1px rgba(66, 66, 66, 0.32);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  margin-bottom: 15px; 
}
.card:last-child {
  margin-bottom: 0px; 
}
.card .card-data {
  display: flex;
  align-items: flex-start; 
}
.card .card-data .card-image {
  width: 150px;
  background-color: #8cbffd;
  height: 150px;
  border-radius: 3px;
  margin-right: 30px; 
}
.card .card-data .card-info {
  display: flex;
  flex-direction: column;
  padding: 10px 0; 
}
.card .card-data .card-info .card-title {
  font-size: 22px;
  font-family: MontserratMedium;
  color: #4e4d4d;
  font-weight: bold;
  margin-bottom: 10px; 
}
.card .card-data .card-info .card-description {
  font-size: 18px; 
}
.card .card-actions {
  font-size: 14px;
  border: 1px solid #6d6d6d;
  padding: 4px 8px; 
}
@media only screen and (max-width: 562px) {
.profile-navigation ul{
    flex-flow: wrap;
}
.profile-navigation ul li{
    list-style: none;
    padding: 5px 10px 5px 10px;
    width: 33%;
}
}
/*# sourceMappingURL=profile.component.css.map */
@media only screen and (max-width: 961px) {
  .flex {
    display: flex;
    flex-wrap: nowrap;
    align-self: flex-start;
}
.v-card-mob-left{
  width: 40%;
  padding-right: 20px;
}
.v-card-mob-right{
  width: 60%;
}
}
@media only screen and (max-width: 640px) {

.v-card-mob-left{
  width: 100%;
  padding-right: 0;
}
.v-card-mob-right{
  width: 100%;
}
}
</style>
