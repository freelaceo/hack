<template>
	<section class="footerTop">
	    <nav>
	        <div class="footer-rows-wrapper">
	            <div class="footer-rows button-row">
	                <ul>
	                	<li>
	                	  <ul class="navbar-nav">
	                	    <locale-dropdown/>
	                	  </ul>
	                	</li>
	                </ul>
	            </div>
	            <div class="footer-rows">
	                <ul class="footer-links">
	                    <a href="#" class="links"><li><h2>Hackathon.io</h2></li></a>
	                    <a href="#" class="links"><li>About Us</li></a>
	                    <a href="#" class="links"><li>Contact Us</li></a>
	                    <a href="#" class="links"><li>Help</li></a>
	                    <a href="#" class="links"><li>FAQs</li></a>
	                </ul>
	            </div>
	            <div class="footer-rows">
	                <ul class="footer-links">
	                    <a href="#" class="links"><li>
	                        <h2>Hackathons</h2>
	                    </li></a>
	                    <a href="#" class="links"><li>Manifesto</li></a>
	                    <a href="#" class="links"><li>Search Participants</li></a>
	                    <a href="#" class="links"><li>Search Projects</li></a>
	                    <a href="#" class="links"><li>Search Organizers</li></a>
	                </ul>
	            </div>
	            <div class="footer-rows">
	                <ul class="footer-links">
	                    <a href="#" class="links"><li>
	                        <h2>Jobs</h2>
	                    </li></a>
	                    <a href="#" class="links"><li>Candidates</li></a>
	                    <a href="#" class="links"><li>Employers</li></a>
	                    <a href="#" class="links"><li>Get a quote</li></a>
	                </ul>
	            </div>
	        </div>
	        <br>
	        <div class="marG">
	            <hr class="padding-hr">
	            <div class="footer-mini">
	                <h2 class="link">Hackathon.io Inc. &copy;</h2>
	                <div class="social">
	                    <a class="links" href="#"><h2>Terms</h2></a>
	                    <div style="margin-left:0px;display:inline-block"></div>
	                    <a class="links"href="#"><h2>Privacy</h2></a>
	                    <a href="#"><img style="vertical-align:middle" src="https://png.icons8.com/color/29/000000/facebook.png"></a>
	                    <a href="#"><img style="vertical-align:middle" src="https://png.icons8.com/color/29/000000/twitter.png"></a>
	                    <a href="#"><img style="vertical-align:middle" src="https://png.icons8.com/nolan/29/000000/instagram-new.png"></a>
	                </div>
	            </div>

	        </div>
	<a class="nope" href="https://icons8.com">Icon pack by Icons8</a>
	    </nav>
	</section>
</template>

<script>
import LocaleDropdown from './LocaleDropdown'

export default {
	components: {
	  LocaleDropdown
	},
 	data: () => ({
		appName: window.config.appName
  	}),
}
</script>


<style scoped>
  .footerTop{
    margin-top: 100px;
  }

  @media(max-width: 768px){
    .footerTop {
      margin-top: 50px;
    }

    ul{
      padding: 0;
    }

    .footer-mini{
      margin-bottom: 30px!important;
    }
  }
.footer-rows-wrapper {
  margin-bottom: 0;
  vertical-align: bottom;
  display: flex;
  flex-direction: row;
  list-style: none;
  text-align: -webkit-center; }
  .footer-rows-wrapper .footer-rows {
    flex-basis: 28%;
    position: relative;
    float: left;
    margin: 0;
    width: 33.33333%;
    /* 961 px stop*/ }
    .footer-rows-wrapper .footer-rows.button-row {
      display: flex;
      align-items: center;
      justify-content: center; }
      .footer-rows-wrapper .footer-rows.button-row button {
        border: 1px solid rgba(0, 0, 0, 0.4);
        padding: 20px 75px 20px 20px;
        font-size: 20px;
        font-family: "Avenir Next";
        box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
        background-color: #fff; }
        .footer-rows-wrapper .footer-rows.button-row button:hover {
          box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22); }
        @media only screen and (max-width: 961px) {
          .footer-rows-wrapper .footer-rows.button-row button {
            font-size: 14px;
            padding: 18px 35px 18px 35px;
            margin-bottom: 20px; } }
    .footer-rows-wrapper .footer-rows .footer-links {
      width: 66.666%;
      line-height: 0.8;
      list-style: none; }
      .footer-rows-wrapper .footer-rows .footer-links li {
        text-align: left;
        padding-bottom: 10px;
        margin-top: 5px;
        font-size: 25px;
        line-height: 25px;
      }
  .footer-rows-wrapper ul {
    font-family: "Avenir Next"; }
    .footer-rows-wrapper ul h2 {
      color: #4b4b4b;
      font-family: "Avenir Next";
      font-weight: bold;
      font-size: 26px; }
    .footer-rows-wrapper ul li {
      margin-left: -25px;
      margin-right: -25px;
      margin-bottom: 10px;
      font-size: 22px;
      color: #4b4b4b; }
      .footer-rows-wrapper ul li:last-child {
        margin-bottom: 0; }
      @media only screen and (max-width: 961px) {
        .footer-rows-wrapper ul li {
          font-size: 10px; } }
  @media only screen and (min-width: 962px) {
    .footer-rows-wrapper .footer-links {
      width: 66.666%;
      line-height: 0.6; }
      .footer-rows-wrapper .footer-links li {
        text-align: left;
        padding-bottom: 10px;
        margin-top: 5px;
        font-size: 18px; }
      .footer-rows-wrapper .footer-links .marG {
        margin-bottom: 50px;
        margin-left: 15px;
        margin-right: 15px; } }
  @media only screen and (max-width: 961px) {
    .footer-rows-wrapper {
      width: 100%;
      left: 0;
      display: grid; }
      .footer-rows-wrapper .footer-links {
        display: inline-table; }
        .footer-rows-wrapper .footer-links h2 {
          margin-top: 20px;
          font-size: 30px;
          text-align: center;
          text-decoration: none; }
        .footer-rows-wrapper .footer-links li {
          font-size: 15px;
          text-align: center !important; }
      .footer-rows-wrapper .footer-rows {
        display: inline-table; }
      .footer-rows-wrapper u a {
        margin-top: 10px; }
      .footer-rows-wrapper .marG {
        margin-bottom: 50px;
        margin-left: 15px;
        margin-right: 15px; } }

.footer-mini {
  float: left;
  width: 100%;
  display: flex;
  padding: 0px 30px;
  justify-content: space-between; }
  .footer-mini h2 {
    font-size: 15px;
    display: inline-block;
    margin-top: 10px; }
    @media only screen and (min-width: 550px) {
      .footer-mini h2 h2 {
        font-size: 15px;
        display: inline-block; } }
    @media only screen and (max-width: 400px) {
      .footer-mini h2 h2 {
        font-size: 14px;
        margin-top: 5px; }
      .footer-mini h2 .marG {
        margin-bottom: 50px;
        margin-left: 15px;
        margin-right: 15px; } }

/* Otros elementos */
hr {
  width: 95%;
  border-bottom: 1px solid #000; }
  @media only screen and (max-width: 510px) {
    hr hr {
      width: 250%;
      border-bottom: 1px solid #000; } }

/* Margen en firma de copyright y social media */
.marG {
  margin-bottom: 100px;
  margin-left: 80px;
  margin-right: 80px; }
  @media only screen and (max-width: 910px) {
    .marG {
      margin-bottom: 50px;
      margin-left: 15px;
      margin-right: 15px; } }

.social h2 {
  font-size: 15px;
  display: inline-block; }
  @media only screen and (max-width: 510px) {
    .social h2 h2 {
      font-size: 15px;
      display: inline-block; } }
.social .links {
  color: #000;
  text-decoration: none; }

.nope {
  display: none; }

.links {
  color: #000;
  text-decoration: none;
  margin-top: 20px; }

/*# sourceMappingURL=footer.component.css.map */

</style>

