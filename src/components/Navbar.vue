<template>
<header class="main-heading">
  <div class="logo-wrapper">
      <img src="../assets/Icon.png" alt="">
      <h1><router-link :to="{name: 'welcome'}">Hackathon.io</router-link></h1>
  </div>
  <nav class="heading-options">
      <ul>
        <template v-if="user">
          <li>
              <router-link :to="{name: 'login'}" class="nav-option">{{ $t('explore') }}</router-link>
          </li>
          <li>
              <router-link :to="{name: 'login'}" class="nav-option">{{ $t('saved') }}</router-link>
          </li>
          <li>
              <router-link :to="{name: 'login'}" class="nav-option">{{ $t('notifications') }}</router-link>
          </li>
          <li>
              <router-link :to="{name: 'hackathons.create'}" class="create-h-btn">{{ $t('create_hackathon') }}</router-link>
          </li>
           <li class="nav-item dropdown">
              <a class="nav-link text-dark"
                 href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img :src="usuario ? '': usuario.avatar" class="rounded-circle profile-photo mr-1">
              </a>
              <div class="dropdown-menu">
                <router-link :to="{ name: 'settings.profile' }" class="dropdown-item pl-3">
                  <fa icon="cog" fixed-width/>
                  {{ $t('settings') }}
                </router-link>

                <div class="dropdown-divider"/>
                <a href="#" class="dropdown-item pl-3" @click.prevent="logout">
                  <fa icon="sign-out-alt" fixed-width/>
                  {{ $t('logout') }}
                </a>
              </div>
            </li>
        </template>
        <template v-else>
          <li>
            <router-link :to="{name: 'login'}" class="create-h-btn" active-class="active">{{ $t('create_hackathon') }}</router-link>
          </li>
          <li>
            <router-link :to="{name: 'register'}" active-class="active">{{ $t('register') }}</router-link>
          </li>
          <li>
              <router-link :to="{name: 'login'}" active-class="active">{{ $t('login') }}</router-link>
          </li>
        </template>
      </ul>
  </nav>
</header>
</template>

<script>
import Cookies from 'js-cookie'
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName,
    usuario: null
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created(){
    this.usuario = Cookies.get('user');
    var user = this.usuario;
    setTimeout(function(){console.log(user)},2000)
    //this.avatar =  JSON.parse(this.user).avatar;
    //console.log(JSON.parse(this.user).avatar)
  },

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>

  header{
    max-height: 80px;
    position: fixed;
    top:0!important;
  }

  .logo-wrapper img {
    margin-right: 20px;
    position: relative;
    top: -5px;
  }
  .active{
    color:red;
  }
  a {
    color:#000;
  }
  .profile-photo {
    width: 3.8rem;
    height: 3.8rem;
    margin: -.375rem 0;
  }

  .main-heading {
    padding: 15px 50px 0px 50px;
    background-color: #fff;
    height: 137px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: fixed;
    width: 100%;
    z-index: 999;
    box-shadow: 0px 1px 1px #ccc;
  }

  .main-heading .logo-wrapper {
    display: flex;
    align-items: center;
  }

  .main-heading .logo-wrapper .hackathon-logo {
    float: left;
    width: 80px;
    height: 80px;
    background-color: #f3665e;
    background-image: linear-gradient(90deg, #f3665e 25%, #ff8f68 100%);
    margin-right: 30px;
  }
  .main-heading .logo-wrapper h1 {
    color: #393f47;
    float: left;
    font-weight: 400;
    font-family: "Avenir Next";
    font-size: 27px;
  }
  .main-heading .logo-wrapper a {
    color: #393f47;
    text-decoration: none;
  }
  .main-heading .heading-options {
    font-family: "Avenir Next"; }
  .main-heading .heading-options ul {
    list-style: none;
    display: flex;
    align-items: center; }
  .main-heading .heading-options ul li {
    font-size: 26px;
    margin-right: 30px; }
  .main-heading .heading-options ul li:last-child {
    margin-right: 0; }
  .create-h-btn {
    background-color: #d54f50;
    color: #fff;
    padding: 10px 20px;
    border-radius: 3px;
    line-height: 1;
    float: left;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    text-decoration: none; }
  .create-h-btn:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }
  .create-h-btn2 {
    background-color: #d54f50;
    color: #fff;
    padding: 14px 20px;
    border-radius: 10px;
    line-height: 1;
    float: left;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    text-decoration: none; }
  .create-h-btn2:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }
  .main-heading .heading-options ul li .nav-option {
    color: #393f47;
    transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer;
    text-decoration: none; }
  .main-heading .heading-options ul li .nav-option:hover {
    color: #d54f50; }
  .main-heading .heading-options ul li .nav-option2 {
    color: white;
    transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
    cursor: pointer; }
  .main-heading .heading-options ul li .nav-option2:hover {
    color: #d54f50; }
  .dropbtn {
    display: none;
    background-color: #d54f50;
    color: white;
    padding: 16px;
    font-size: 16px;
    border: none;
    cursor: pointer;
    height: 50px;
    border-radius: 4px; }
  .dropdown {
    position: relative;
    display: inline-block; }

  .dropdown-content {
    display: none;
    position: absolute;
    right: 0;
    background-color: transparent;
    min-width: 320px;
    z-index: 1;
    margin-top: 30px;
    border-radius: 10px;
    padding-right: 10px; }

  .dropdown-content a {
    color: white;
    padding: 12px 16px;
    text-decoration: none;
    display: block; }

  .dropdown-content a:hover {
    background-color: #2d2d2d;
    border-radius: 10px; }

  .dropdown:hover .dropbtn {
    color: white;
    background-color: #2d2d2d; }

  .dropbtn:hover, .dropbtn:focus {
    background-color: #d54f50; }

  .show {
    display: block; }

  /* Mobile Version */

  @media screen and (max-width: 1680px) {
    .main-heading {
      height: auto; } }
  @media screen and (max-width: 1440px) {
    .main-heading {
      height: auto; } }
  @media screen and (max-width: 960px) {
    .main-heading {
      padding: 20px;
      height: 80px; } }


  @media screen and (max-width: 1440px) {
    .main-heading .logo-wrapper .hackathon-logo {
      width: 60px;
      height: 60px;
      margin-right: 20px; } }


  @media screen and (max-width: 1680px) {
    .main-heading .logo-wrapper h1 {
      font-size: 45px; } }
  @media screen and (max-width: 1440px) {
    .main-heading .logo-wrapper h1 {
      font-size: 38px; } }
  @media screen and (max-width: 960px) {
    .main-heading .logo-wrapper h1 {
      font-size: 32px; } }


  @media screen and (max-width: 1680px) {
    .main-heading .heading-options ul li {
      font-size: 22px; } }
  @media screen and (max-width: 1440px) {
    .main-heading .heading-options ul li {
      font-size: 19px; } }
  @media screen and (max-width: 960px) {
    .main-heading .heading-options ul li {
      font-size: 16px; } }

  @media only screen and (max-width: 780px) {
    .create-h-btn {
      display: none;
      background-color: #d54f50;
      color: #fff;
      padding: 14px 20px;
      border-radius: 3px;
      line-height: 1;
      float: left;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); } }



  @media only screen and (max-width: 780px) {
    .create-h-btn2 {
      display: none;
      background-color: #d54f50;
      color: #fff;
      padding: 14px 20px;
      border-radius: 10px;
      line-height: 1;
      float: left;
      box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
      transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); } }


  @media only screen and (max-width: 780px) {
    .main-heading .heading-options ul li .nav-option {
      color: #393f47;
      transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
      display: none; } }

  @media only screen and (max-width: 780px) {
    .main-heading .heading-options ul li .nav-option2 {
      color: white;
      transition: color 0.3s cubic-bezier(0.25, 0.8, 0.25, 1); } }


  @media only screen and (max-width: 780px) {
    .dropbtn {
      display: inherit;
      background-color: #d54f50;
      color: white;
      padding: 16px;
      font-size: 16px;
      border: none;
      cursor: pointer;
      height: 50px; } }


  @media only screen and (min-width: 780px) {
    .show {
      display: block; } }
</style>
