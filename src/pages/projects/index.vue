<template>
    <div>
        <section class="bg-up">
            <div class="container-lg">
                <div class="row min-h">
                    <div class="col-md-12 row">
                        <div class="info-project col-md-9">
                            <div  class="user_img">
                                <figure  class="full">
                                    <img  src="http://via.placeholder.com/200x200" alt=""> 
                                    <span  class="caption">Cambiar avatar</span>
                                </figure> 
                                <input type="file" name="file" id="file" class="invisible">
                            </div>
                            <div class="info">
                                <h1 class="title-project">ShareStop</h1>
                                <br>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur sit amet nisl turpis. Sed rhoncus turpis nec nisi interdum imperdiet. Donec ipsum libero, sollicitudin sit amet pharetra eget, tincidunt eu justo. Quisque id ex sed mi rutrum convallis eu vel magna. Aenean imperdiet purus ac sapien interdum, ut porta dui tempor.</p>
                                <!--p id="location" class="" v-if="project.location"><i class="fas fa-map-marker-alt" aria-hidden="true"></i>location</p-->
                                <br>
                                <div class="skills">
                                    <ul class="tags">
                                        <li>UX/UI</li>
                                        <li>Biz Dev</li>
                                        <li>Developer</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-3 box-buton row relative float-right">
                            <div class="dropdown">
                                <button class="btn btn-primari btn260" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Join projetc
                                </button>
                                <div class="dropdown-menu box-join " aria-labelledby="dropdownMenuButton">
                                    <h4 class="how-to mb"><strong>How would you like to join?</strong></h4>
                                    <form action="">
                                        <div class="radio">
                                            <label>Developer<input type="radio" name="optradio"></label>
                                        </div>
                                        <hr>
                                        <div class="radio">
                                            <label>UX/UI<input type="radio" name="optradio"></label>
                                        </div>
                                        <hr>
                                        <div class="radio disabled">
                                            <label>Entrepreneur<input type="radio" name="optradio"></label>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
		<div class="container-lg">
			<div class="row">
				<div class="col-md-12 row">
					<div class="col-md-4">
						<div id="social" class="">
			              <!--a v-if="project.socials.twitter" :href="project.socials.twitter"><i class="social-icons fab fa-twitter"></i></a>
			              <a v-if="project.socials.facebook" :href="project.socials.facebook"><i class="social-icons fab fa-facebook"></i></a>
			              <a v-if="project.socials.linkedin" :href="project.socials.linkedin"><i class="social-icons fab fa-linkedin-in"></i></a>
			              <a v-if="project.socials.other" :href="project.socials.other"><i class="social-icons fab fa-github"></i></a-->
		                </div>
		                <p id="liks" class="" ><i class="fas fa-link" aria-hidden="true"></i>link</p>
		                <a href="" class="btn btn-secondari mt">Upvote project <span class="badge">4</span></a>
		                <a href="" class="btn btn-primari mt mb">Send message</a>
		                <hr>
		                <div class="similar-project mt">
		                	<div class="item">	
			                	<div  class="user_img-min">
									<figure  class="full">
										<img  src="http://via.placeholder.com/80x80" alt="">
									</figure> 
								</div>
								<div class="info">
									<h2>FUBER</h2>
									<p>It’s UBER for everything!</p>
									<a href="" class="see-more">(See Project)</a>
								</div>
							</div>
		                </div>
           			 </div>
					<div class="col-md-8">

						<h2 class="sub mt">Material project</h2>
						<!-- Carousel -->
							<div id="myCarousel" class="carousel slide mt" data-ride="carousel">

								  <!-- Indicators -->
								  <ul class="carousel-indicators">
								    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
								    <li data-target="#myCarousel" data-slide-to="1"></li>
								    <li data-target="#myCarousel" data-slide-to="2"></li>
								  </ul>
								  
								  <!-- The slideshow -->
								  <div class="carousel-inner">
								    <div class="carousel-item active">
								      <img src="http://via.placeholder.com/1200x800" alt="Los Angeles">
								    </div>
								    <div class="carousel-item">
								      <img src="http://via.placeholder.com/1200x800" alt="Chicago">
								    </div>
								    <div class="carousel-item">
								      <img src="http://via.placeholder.com/1200x800" alt="New York">
								    </div>
								  </div>
								  
								  <!-- Left and right controls -->
								  <a class="carousel-control-prev" href="#myCarousel" data-slide="prev">
								    <span class="carousel-control-prev-icon"></span>
								  </a>
								  <a class="carousel-control-next" href="#myCarousel" data-slide="next">
								    <span class="carousel-control-next-icon"></span>
								  </a>
								</div>
						<!-- Carousel -->
						
						<h2 class="sub mt">Description</h2>
						<hr>
						<p>ShareStop is our solution for a busy and noisey world.</p>

						<h2 class="sub mt">Founders</h2>
						<hr>
						<div class="row">
							<div class="col-md-4 text-center mt">
								<div  class="founder_img">
									<figure  class="full">
										<img  src="http://via.placeholder.com/150x150" alt="">
									</figure>
								</div>
								<h3 class="founder">Connor smith</h3> 
								<p class="founder-type"><em>Developer</em></p>
							</div>
							<div class="col-md-4 text-center mt">
								<div  class="founder_img">
									<figure  class="full">
										<img  src="http://via.placeholder.com/150x150" alt="">
									</figure>
								</div>
								<h3 class="founder">Connor smith</h3> 
								<p class="founder-type"><em>Developer</em></p>
							</div>
							<div class="col-md-4 text-center mt">
								<div  class="founder_img">
									<figure  class="full">
										<img  src="http://via.placeholder.com/150x150" alt="">
									</figure>
								</div>
								<h3 class="founder">Connor smith</h3> 
								<p class="founder-type"><em>Developer</em></p>
							</div>
							<div class="col-md-4 text-center mt">
								<div  class="founder_img">
									<figure  class="full">
										<img  src="http://via.placeholder.com/150x150" alt="">
									</figure>
								</div>
								<h3 class="founder">Connor smith</h3> 
								<p class="founder-type"><em>Developer</em></p>
							</div>
							<div class="col-md-4 text-center mt">
								<div  class="founder_img">
									<figure  class="full">
										<img  src="http://via.placeholder.com/150x150" alt="">
									</figure>
								</div>
								<h3 class="founder">Connor smith</h3> 
								<p class="founder-type"><em>Developer</em></p>
							</div>
							<div class="col-md-4 text-center mt">
								<div  class="founder_img">
									<figure  class="full">
										<img  src="http://via.placeholder.com/150x150" alt="">
									</figure>
								</div>
								<h3 class="founder">Connor smith</h3> 
								<p class="founder-type"><em>Developer</em></p>
							</div>
						</div>
						<h2 class="sub mt">Feedback</h2>
						<hr>
						<div class="feedback">
							<div class="jurado">
								<div  class="jurado_img">
									<figure  class="full">
										<img  src="http://via.placeholder.com/80x80" alt="">
									</figure>
								</div>
								<div class="info-jurado">
									<h2>Desmond williams <span>| Sponsor of the project</span></h2>
									<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus a nunc laoreet,</p>
								</div>
							</div>
							<p class="feed">Etiam vitae nisi a mauris volutpat consequat a sed enim. Sed porta arcu vel ultricies euismod. Maecenas commodo tincidunt urna, at interdum nisl blandit vel. Sed ultrices risus metus, ac malesuada sapien viverra ut. Morbi interdum neque orci, a efficitur metus tristique nec. Aliquam at magna eu risus dapibus euismod sit amet eget neque. Suspendisse potenti. Nulla lacinia scelerisque risus sed ornare. Morbi commodo quam nisl, vitae feugiat odio maximus eu. Integer suscipit leo sed tellus ornare viverra. Fusce in elit semper, tincidunt nulla eu, imperdiet lorem. Etiam eget erat quam. Sed sit amet mattis arcu, eget luctus tortor. Nullam efficitur tortor ut odio mattis bibendum. Vestibulum a ante tristique, aliquet sapien vitae, interdum eros.</p>
						</div>

					</div>
				</div>
			</div>	
		</div>
	</div>
</template>

<script>
export default {
  name:"projects"
}
</script>

<style scoped>
    .title-project {
        font-size: 24px;
    }
    p {
        font-size: 14px;
        margin: 0;
    }
    .user_img {
        position: relative;
        width: 200px;
        height: 200px;
    }
    .user_img figure {
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        margin: 0;
        max-height: 100%;
    }
    .user_img figure:before{
        content: '';
        width: 100%;
        padding-top: 100%;
        display: block;
        top: 0;
    }
    .user_img figure img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    .user_img-min {
        position: relative;
        width: 80px;
        height: 80px;
    }
    .user_img-min figure {
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        margin: 0;
        max-height: 100%;
    }
    .user_img-min figure:before{
        content: '';
        width: 100%;
        padding-top: 100%;
        display: block;
        top: 0;
    }
    .user_img-min figure img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    .founder_img {
        position: relative;
        width: 150px;
        height: 150px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
    }
    .founder_img figure {
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        margin: 0;
        max-height: 100%;
    }
    .founder_img figure:before{
        content: '';
        width: 100%;
        padding-top: 100%;
        display: block;
        top: 0;
    }
    .founder_img figure img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    .jurado_img {
        position: relative;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        overflow: hidden;
        display: inline-block;
    }
    .jurado_img figure {
        width: 100%;
        height: auto;
        position: relative;
        overflow: hidden;
        margin: 0;
        max-height: 100%;
    }
    .jurado_img figure:before{
        content: '';
        width: 100%;
        padding-top: 100%;
        display: block;
        top: 0;
    }
    .jurado_img figure img {
        object-fit: cover;
        position: absolute;
        top: 0;
        left: 0;
    }
    .edit-profile{
        text-align: left;
        margin-top: 10px;
        list-style: none;
    }
    .user_img .caption{text-align:center;position:absolute;width:100%;padding:10px 0;background: rgba(0,0,0,.4);color:#fff;left:0;bottom:0;transition:all .3s ease;opacity:0;font-size:14px;cursor:pointer;}
    .user_img .caption:hover{background: rgba(0,0,0,.7);}
    .user_img:hover .caption{opacity:1}
    .min-h {
        min-height: 300px;
        background-color: #E1E5EB;
        align-items: center;
    }
    .bg-up{background-color: #E1E5EB;}
    .info-project {
        display: flex;
    }
    .info {
        margin-left: 20px;
    }
    .tags{margin: 0 !important;padding: 0;}
    .tags li{display:inline-block;margin:0;padding:5px;border-radius: 2px; color:#FFF;background:#7ED321;text-decoration:none;transition:all .3s ease; font-size: 14px;}
    .tags li:last-of-type{margin-right: 0}
    .box-buton {
        align-items: flex-end;
    }
    .btn-primari {
        display: inline-block;
        text-decoration: none;
        font-size: 14px;
        color: #FFF;
        padding: 10px 25px;
        background-color: #648edf;
        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);
    }

    .btn260{
        width: 260px!important;
    }

    .btn-primari:hover, .btn-primari:active, .btn-primari.active {
        text-decoration: none;
        color: #FFF;
        background-color: #4A90E2;
    }
    .mt {
        margin-top: 20px;
    }
    .mb {
        margin-bottom: 20px;
    }
    a.btn-secondari {
        display: inline-block;
        text-decoration: none;
        background-color: #FF4343;
        font-size: 14px;
        color: #FFF;
        padding: 10px 25px;
        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);
    }

    a.btn-secondari:hover, a.btn-secondari:active, a.btn-secondari.active {
        text-decoration: none;
        color: #FFF;
        background-color: #C62D2D;
    }
    .btn {
        width: 100%;
        padding: 15px 20px;
        box-shadow: 0px 1px 3px 0px rgba(41, 41, 41, 0.8);
        font-size: 18px;
        cursor: pointer;
        border-radius: 4px; 
    }
    #location {
        font-size: 16px;
        color: #4A4A4A;
        line-height: 30px;
        margin: 0;
        position: relative;
    }
    #location i {
        margin-right: 10px;
    }
    #social{
        margin: 26px 0;
        display: flex;
        justify-content: flex-start;
    }
    #social a {
        margin-right: 30px;
    }
    i.social-icons {
        font-size: 30px;
        color: #4A4A4A;
    }
    .similar-project .item{
        display: flex;
        align-items: flex-start;
        flex-wrap: nowrap;
    }
    .similar-project .item .info h2{
        font-size: 20px;
    }
    .similar-project .item .info p{
        font-size: 14px;
    }
    .similar-project .item .info a.see-more{
        font-size: 12px;
        align-self: flex-end;
        justify-content: flex-end;
    }
    .sub{
        font-size: 20px;
    }
    .founder {
        font-size: 20px;
        margin: 0;
    }
    .founder-type{
        font-size: 16px;
        margin-top: 0;
        color: #ccc;
    }
    .relative {
        position: relative;
    }
    .box-join {
        background-color: #FFF;
        -webkit-box-shadow: 0px 2px 4px 0px rgba(0,0,0,0.50);
        border-radius: 4px;
        position: absolute;
        bottom: -196px !important;
        z-index: 1000000;
        left: 15px;
        width: 280px;/*calc(100% - 30px);*/
        padding: 15px;
    }
    .box-join  h4{
        font-size: 14px;
    }
    .box-join  .radio{
        display: flex;
        justify-content: space-between;
    }
    .box-join label {
        font-size: 14px;
        display: flex;
        width: 100%;
        justify-content: space-between;
        margin-bottom: 0;
    }
    .feedback .jurado{
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }
    .feedback .jurado .info-jurado{
        margin-left: 20px;
    }
    .feedback .jurado .info-jurado h2{
        font-size: 18px;
        font-weight: bold;
    }
    .feedback .jurado .info-jurado h2 span{
        font-weight: lighter;
        font-style: italic;
    }
    .feed {
        font-size: 14px;
        text-align: justify;
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .carousel-inner img {
        width: 100%;
        height: 100%;
    }
</style>
