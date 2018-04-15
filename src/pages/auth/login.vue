<template>
  <div class="register-section container-lg">
    <div class="register-wrapper">
      <div class="row">
        <div class="col-md-12">
          <h1>Start hacking!</h1>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <div class="register-form">
            <div class="register-form-panel form-wrapper">
              <form @submit.prevent="login" @keydown="form.onKeydown($event)">
                <div class="register-input-wrapper">
                  <input type="text" class="form-control" v-bind:placeholder="$t('email')" name="email" v-model="form.email" :class="{ 'is-invalid': form.errors.has('email') }">
                  <has-error :form="form" field="email"/>
                </div>
                <div class="register-input-wrapper">
                  <input type="password" class="form-control" v-bind:placeholder="$t('password')" v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" name="password" required />
                  <has-error :form="form" field="password"/>
                </div>
                <div class="register-btn-wrapper">
                  <v-button :loading="form.busy">
                    {{ $t('login') }}
                  </v-button>
                </div>
              </form>
              <div>
            <span class="register-advice">
              {{ $t('terms_agree_create_account') }}
            </span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6 nopadding">
          <div class="register-form">
            <div class="register-form-panel form-wrapper">
              <div class="social-sign-up">
                <div class="social-btn github">
                  <!-- <i class="fa fa-github" aria-hidden="true"></i> -->
                  <img src="https://png.icons8.com/ios/50/ffffff/github-filled.png">
                  <span>  {{ $t('login_with') }} GitHub</span>
                </div>
                <div class="social-btn google">
                  <img src="https://png.icons8.com/color/50/ffffff/google-logo.png">
                  <!-- <i class="fa fa-google" aria-hidden="true"></i> -->
                  <span>  {{ $t('login_with') }} Google</span>
                </div>
                <div class="social-btn facebook">
                  <img src="https://png.icons8.com/color/50/ffffff/facebook.png">
                  <!-- <i class="fa fa-facebook" aria-hidden="true"></i> -->
                  <span>  {{ $t('login_with') }} Facebook</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mbt">
      <div class="col-md-12 bb">
        <span>{{ $t('dont_have_an_account') }},<router-link :to="{name: 'register'}"> {{ $t('register') }}</router-link></span>
      </div>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import LoginWithGithub from '@/components/LoginWithGithub'

export default {
  middleware: 'guest',

  components: {
    LoginWithGithub
  },

  metaInfo () {
    return { title: this.$t('login') }
  },

  data: () => ({
    form: new Form({
      email: '',
      password: ''
    }),
    remember: false
  }),

  methods: {
    async login () {
      // Submit the form.
      var f = new FormData();
      f.append('email',this.form.email);
      f.append('password',this.form.password);
      


      var {data} = await axios('/login',{method:'POST',data:f})

       // Save the token.
        this.$store.dispatch('auth/saveToken', {
          token: data.token,
          user: data.user,
          remember: this.remember
        });

     // Fetch the user.
        await this.$store.dispatch('auth/fetchUser',{success:data.success,token:data.token,user:data.user,router:this.$router});
    }
  }
}
</script>

<style scoped>

.bb{
  text-align: left;
    padding: 12px 50px;
}

  .nopadding{padding: 0!important;}

  .mbt{
    margin-bottom: 40px!important;
  }
  .register-section {
    position: relative;
    left: 0;
    width: 100%;
    height: auto;
    background-color: #fff;
  }

  @media (max-width: 768px) {
    .register-section {
      height: 900px;
    }
  }

  .register-section .register-wrapper {
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    margin-top: 60px;
  }

      .register-section .register-wrapper h1 {
        float: left;
        width: 100%;
        text-align: center;
        font-size: 40px;
        color: #827f7f;
        font-family: "Avenir Next";
        font-weight: normal;
        margin-bottom: 30px;
      }
      .register-section .register-wrapper .register-form {
        border: 1px solid #c5c3c3;
        border-radius: 3px;
        min-height: 400px;
      }

        .register-section .register-wrapper .register-form .register-form-panel {
          flex-basis: 500%;
          padding: 60px; }
        .register-section .register-wrapper .register-form .register-advice {
          font-size: 17px;
          width: 100%; }
          .register-section .register-wrapper .register-form .register-advice a {
            text-decoration: none;
            color: #468ee5; }
        .register-section .register-wrapper .register-form .register-input-wrapper {
          
          width: 100%;
          margin-bottom: 20px; }
          .register-section .register-wrapper .register-form .register-input-wrapper.last {
            margin-bottom: 40px; }
          .register-section .register-wrapper .register-form .register-input-wrapper input {
            border: 1px solid #b7b5b5;
            outline: none;
            padding: 10px;
            width: 100%;
            font-size: 18px;
            border-radius: 3px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            font-family: MontserratThin;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important;
             }
          .register-section .register-wrapper .register-form .register-input-wrapper input::-webkit-input-placeholder {
                font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important;
              }
          .register-section .register-wrapper .register-form .register-input-wrapper input:-moz-placeholder {
                font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important; 
              }
          .register-section .register-wrapper .register-form .register-input-wrapper input:-ms-input-placeholder { 
                font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol"!important; 
              }
            .register-section .register-wrapper .register-form .register-input-wrapper input:-moz-placeholder {
              color: #8d8c8c;
              font-family: MontserratRegular; }
            .register-section .register-wrapper .register-form .register-input-wrapper input:-ms-input-placeholder {
              color: #8d8c8c;
              font-family: MontserratRegular; }
            .register-section .register-wrapper .register-form .register-input-wrapper input::-webkit-input-placeholder {
              color: #8d8c8c;
              font-family: MontserratRegular; }
            .register-section .register-wrapper .register-form .register-input-wrapper input::-moz-placeholder {
              color: #8d8c8c;
              font-family: MontserratRegular; }
            .register-section .register-wrapper .register-form .register-input-wrapper input:focus {
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }
        .register-section .register-wrapper .register-form .register-btn-wrapper {
          float: left;
          width: 100%;
          margin-bottom: 40px; }
          .register-section .register-wrapper .register-form .register-btn-wrapper button {
            border: 1px solid #ff5959;
            outline: none;
            padding: 10px;
            width: 100%;
            font-size: 18px;
            border-radius: 3px;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            font-family: MontserratRegular;
            background-color: #fff;
            transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
            line-height: 1;
            cursor: pointer;
            padding: 20px;
            color: #ff5959;
            font-family: -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
          }
            .register-section .register-wrapper .register-form .register-btn-wrapper button:hover {
              background-color: #ff5959;
              border: 1px solid #ff5959;
              color: #fff;
              box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }
      .register-section .register-wrapper .social-sign-up {
        float: left;
        width: 100%;
        display: flex;
        flex-direction: column; }
        .register-section .register-wrapper .social-sign-up .social-btn {
          border-radius: 3px;
          padding: 5px;
          border: 1px solid;
          margin-bottom: 20px;
          cursor: pointer;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
          font-size: 18px;
          transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
          display: flex;
          align-items: center; }

        .social-btn span {
          padding: 5px 0px 5px 40px;

        }
          .register-section .register-wrapper .social-sign-up .social-btn.github {
            background-color: #000000;
            border-color: #000000;
            color: #fff; }
            .register-section .register-wrapper .social-sign-up .social-btn.github .fa {
              color: #fff; }
          .register-section .register-wrapper .social-sign-up .social-btn.google {
            border-color: #343d46;
            background-color: #fff; }
            .register-section .register-wrapper .social-sign-up .social-btn.google .fa {
              color: #4285f4; }
          .register-section .register-wrapper .social-sign-up .social-btn.facebook {
            border-color: #507cc0;
            background-color: #507cc0;
            color: #fff; }
            .register-section .register-wrapper .social-sign-up .social-btn.facebook .fa {
              color: #fff; }
          .register-section .register-wrapper .social-sign-up .social-btn .fa {
            font-size: 40px;
            line-height: 0;
            margin-right: 20px; }
          .register-section .register-wrapper .social-sign-up .social-btn:hover {
            box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }
          @media only screen and (max-width: 720px) {
            .register-section .register-wrapper .social-sign-up .social-btn span {
              display: block; } }


</style>
