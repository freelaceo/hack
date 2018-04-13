<template>
  <tabs id="content">
        <tab name="Projects" class="wd">
            <div class="mt-20">
                <div class="head-proyects">
                    <h3 class="proyects-titles">Projects</h3>
                    <a href="" class="proyects-edit">(Edit)</a>
                </div>
                
                <Items :data="projects"/>
                <div class="see-more">
                    <a href="" class="view-more">See More</a>
                </div>
            </div>
        </tab>
        <tab name="Schedule">
            <div class="mt-20">
                <div class="head-proyects">
                    <h3 class="proyects-titles">Upcoming Hackathons</h3>
                    <a href="" class="proyects-edit">(Edit)</a>
                </div>
                
                <Items :data="projects"/>
                <div class="see-more">
                    <a href="" class="view-more">See More</a>
                </div>

                <br><br>

                <div class="head-proyects">
                    <h3 class="proyects-titles">Past Hackathons</h3>
                    <a href="" class="proyects-edit">(Edit)</a>
                </div>
                
                <Items :data="projects"/>
                <div class="see-more">
                    <a href="" class="view-more">See More</a>
                </div>
            </div>
        </tab>
        <tab name="Upvoted">
            <div class="mt-20">
                <div class="head-proyects">
                    <h3 class="proyects-titles">Upvoted</h3>
                    <a href="" class="proyects-edit">(Edit)</a>
                </div>
                
                <Items :data="projects"/>
                <div class="see-more">
                    <a href="" class="view-more">See More</a>
                </div>
            </div>
        </tab>
        <tab name="Badges">
            <div class="mt-20">
                <div class="head-proyects">
                    <h3 class="proyects-titles">Badges</h3>
                    <a href="" class="proyects-edit">(Edit)</a>
                </div>
                
                <Items :data="projects"/>
                <div class="see-more">
                    <a href="" class="view-more">See More</a>
                </div>
            </div>
        </tab>
    </tabs>
</template>

<script>
import Items from '../user-profile/items'
export default {
  name:"content-profile",
  components:{Items},
  data(){
      return {
          projects:[
              {
                  title: "ShareStop",
                  content:"The sharing must stop!",
                  image: "http://via.placeholder.com/90x90",
                  friends:['http://via.placeholder.com/45x45','http://via.placeholder.com/45x45','http://via.placeholder.com/45x45'],
                  quote:45
              },
              {
                  title: "ShareStop",
                  content:"The sharing must stop!",
                  image: "http://via.placeholder.com/90x90",
                  friends:['http://via.placeholder.com/45x45','http://via.placeholder.com/45x45','http://via.placeholder.com/45x45'],
                  quote:45
              }
          ]
      }
  }
}
</script>

<style>
    .tabs-component-tabs li{
        display: inline-block;
        margin: 20px 45px!important;
        text-align: center!important;
        font-family: 'Avenir Next';
        color:#9B9B9B!important;
    }

    #content .head-proyects {
    width: calc(100% - 20px);
    margin: 0 0 26px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    }

#content .head-proyects h3.proyects-titles{
  font-size: 30px;
    font-weight: 600;
    color: #333;
}

#content .head-proyects a.proyects-edit{
  font-size: 16px;
  color: #9B9B9B;
  font-weight: normal; 
  text-decoration: none;
}
#content .head-proyects a.proyects-edit:hover, #content .head-proyects a.proyects-edit:active, #content .head-proyects a.proyects-edit.active{
  color: #4A4A4A;
  text-decoration: underline;
}



.see-more {
  width: 100%;
  text-align: center;
  margin: 26px 0;
}
.see-more  a.view-more{
  font-size: 16px;
  color: #9B9B9B;
  font-weight: normal; 
  text-decoration: none;
}
.see-more  a.view-more:hover, #content #see-more a.view-more:active, #content #see-more a.view-more.active{
  color: #4A4A4A;
  text-decoration: underline;
}
</style>
