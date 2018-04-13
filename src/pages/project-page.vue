<template>
    <div>
        <section class="seccion project-info">
            <Info 
                :img="profile.image" 
                :title="profile.title" 
                :desc="profile.description"
                :loc="profile.location"
                :tags="profile.tags"
            />
        </section>
        <section  class="seccion project-content">
            <div class="container-lg">
                <div class="row">
                    <div class="col-md-8">
                        <Description :title="content.title" :text="content.description" />
                        <Description :title="content2.title" :text="content.description" />
                        <Description :title="content3.title" :text="content.description" />
                    </div>
                    <div class="col-md-4">
                        <div class="row btn-conts">
							<div class="col-md-12">
								<a href="#" class="btn btn-lg btn-red">Message</a>
							</div>
							<div class="col-md-6">
								<a href="#" class="btn btn-lg btn-blue">Message</a>
							</div>
							<div class="col-md-6">
								<a href="#" class="btn btn-lg btn-white">Website</a>
							</div>
							<div class="col-md-12">
								<a href="#" class="btn btn-lg btn-white">Website</a>
							</div>
							<div class="col-md-12">
								<a href="#" class="btn btn-lg btn-white">Link</a>
							</div>
						</div>

                        <description class="mt-30" :title="content4.title" :text="content4.description" />
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<script>
import Info from '../components/project-page/project-info'
import Description from '../components/project-page/white-cont'
export default {
  name:"project-page",
  components:{
      Info,
      Description
  },
  data(){
      return {
            profile:{
                title:'ShareStop',
                description:'The sharing must stop!',
                image:'http://via.placeholder.com/200x200',
                location:"Los Angeles, CA, USA",
                tags:['UX/UI','Biz Dev']
            },
            content:{
                title:"Description",
                description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            content2:{
                title:"Founders",
                description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            content3:{
                title:"Feedback",
                description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            },
            content4:{
                title:"Similar projects",
                description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }
        }
    }
}
</script>

<style scoped>
    section.project-info{
        position: relative;
        top: 60px;
    }

    .project-info{background:#eee;}
    .project-content{ padding-top:100px;background: rgb(72,85,99);background: -moz-linear-gradient(top, rgba(72,85,99,1) 0%, rgba(41,50,60,1) 100%);background: -webkit-linear-gradient(top, rgba(72,85,99,1) 0%,rgba(41,50,60,1) 100%);background: linear-gradient(to bottom, rgba(72,85,99,1) 0%,rgba(41,50,60,1) 100%);filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#485563', endColorstr='#29323c',GradientType=0 );}

    .btn-conts .btn{display:block;}
    .btn-conts{margin:-5px;}
    .btn-conts > div{padding:5px;}
</style>
