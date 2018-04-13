<template>
  <section class="banner">
    <div class="banner-container">
      <div style="padding:80px">
        <h1>{{$t('bannerTitle')}}</h1>
        <ul class="banner-list">
          <li>
            - {{$t('WhiteGlobeService')}}
          </li>
          <li>
            - {{$t('Analytics')}}
          </li>
          <li>
            - {{$t('AccessBestPractices')}}
          </li>
          <li>
            - {{$t('GroupMessaging')}}
          </li>
          <li>
            - {{$t('TargetedMarketing')}}
          </li>
        </ul>
        <div>
          <button class="btn">{{$t('GoPremium')}}</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
	export default {

	  data: () => ({
	    appName: window.config.appName
	  }),

	}
</script>

<style scoped>

	&:host {
	  float: left;
	  width: 100%;
	  height: 100vh;
	  background-color: #141414;
	  display: flex;
	  align-items: center;
	  justify-content: center;
	}
	host.with-items-near {
	  margin: 80px 0 40px;
	}
	.banner-container section {
	  float: left;
	  width: 100%;
	  padding: 30px 60px;
	  color: #fff;
	  max-width: 1920px;
	}
	.banner-container {
		float: left;
    width: 100%;
    color: #fff;
    padding-bottom: 46px;
    background-image: url("../assets/Header.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}

  @media(max-width: 768px){
    .banner-container div:nth-child(1){
      padding: 80px 55px !important;
    }

    .banner-container div h1{
      font-size: 40px!important;
    }
    .banner-container .banner-list > li{
      font-size: 23px!important;
    }
  }

	.banner-container h1 {
	  font-size: 60px;
	  font-family: "Helvetica Neue";
	  font-weight: bold;
	  float: left;
	  width: 100%;
	  margin-bottom: 40px;
	}
	.banner-container .banner-list {
	  font-size: 24px;
	  margin-bottom: 40px;
	  list-style: none;
    padding-left: 0px;
	}
	.banner-container .banner-list > li {
	  margin-bottom: 10px;
    font-family: "Helvetica Neue";
    font-size: 30px;
    line-height: 36px;
		color: #fff;
	}
	.btn {
	  background-color: #cc4443;
	  color: #fff;
	  padding: 14px 30px;
	  border-radius: 3px;
	  line-height: 1;
	  border: none;
	  float: left;
	  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
	  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
	  font-size: 20px;
	  cursor: pointer;
    font-family: "Avenir Next";
    font-size: 23px;
	}
	.btn:hover {
	  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
	}
</style>
