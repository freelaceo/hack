<template>
  <div class="wrapper">
    <section v-show="step.number !== 4" id="bg-portada">
         <div class="container-lg">
            <div class="row justify-content-center">
                <div class="col-sm-12 text-center">
                    <h1>{{$t('organize_hackathon')}}</h1>
                    <h3>{{$t('Golive_spread_world')}}</h3>
                </div>
            </div>
        </div> 
    </section>
    <section id="seccion">
        <div class="container-lg avenir">
            <div class="row">
              <div class="flex">
                <form @submit.prevent="createNewHackathon" @keydown="form.onKeydown($event)">
                 <!-- Step 1 -->
                  <div v-show="step.number === 1" class="info-medio-a">
                      <h4 class="avenir">{{$t('step')}} 1 {{$t('of')}} 4</h4>
                      <br>
                      <h2 class="avenir">{{$t('where_place')}}</h2>
                      <br>
                      <form class="form-inline">
                         <input class="form-control mr-sm-2" v-model="form.place" type="search" aria-label="Search">
                       </form>
                     <div class="next-button avenir">
                        <button @click.prevent="next" class="btn btn-2040 btn-blue">{{$t('next')}}</button>
                     </div>
                  </div>
                   <div v-show="step.number === 2 || step.number === 3" class="info-medio-a">
                       <h4 class="avenir">{{$t('step')}} 1 {{$t('of')}} 4</h4>
                       <br>
                       <h2 class="avenir">{{$t('where_place')}}</h2>
                       <br>
                       <h3 class="avenir">{{form.place}} <strong style="color: #5094E6;">(change location)</strong></h3>
                  </div>
                 <!-- Step 2 -->
                    <div v-show="step.number === 2 || step.number === 3" class="info-medio-b">
                        <h4 class="avenir">{{$t('step')}} 2 {{$t('of')}} 4</h4>
                        <br>
                        <h2 class="avenir">{{$t('type_hackathon')}}</h2>
                        <br>
                        <form class="form-inline ">
                           <input class="form-control mr-sm-2 avenir wd100" type="search" :placeholder="$t('search_for_theme')" aria-label="Search">
                         </form>
                         <div>
                             <div class="cajita-botones">
                                      <div class="tags" v-for="(item,index) in types" :key="index">
                                          <label class="check label">
                                              <input class="check__input" type="checkbox" v-model="form.type" :value="item" :id="item">
                                              <div class="check__text">{{item}}</div>
                                          </label>
                                      </div>
                              </div>
                              <div>
                                     <div class="more">
                                         <h5 @click="typesAlls"><img src="../../assets/reload.png" alt=""> {{$t('more')}}...</h5>
                                     </div>
                                     <div v-show="step.number === 2" class="next-button">
                                         <button @click.prevent="next" class="btn btn-2040 btn-blue">{{$t('next')}}</button>
                                     </div>
                                 <div class=""></div>

                             </div>
                         </div>            
                   </div> <!-- End step 2 -->

                   <!-- Step 3 -->
                    <div v-show="step.number === 3" class="info-medio-c">
                        <h4>{{$t('step')}} 3 {{$t('of')}} 4</h4>
                        <br>
                        <h2>{{$t('Who_invite')}}</h2>
                        <br>
                        <form class="form-inline">
                           <input class="form-control mr-sm-2" type="search" :placeholder="$t('search_skillsets')" aria-label="Search">
                         </form>
                         <div>
                             <div class="cajita-botones">
                                         <div class="tags" v-for="(item,index) in skills" :key="index">
                                             <label class="check label">
                                                  <input class="check__input" type="checkbox" v-model="form.invite" :value="item" :id="item">
                                                  <div class="check__text">{{item}}</div>
                                              </label>
                                         </div>
                                     </div>
                                <div>
                                     <div class="more">
                                         <h5 @click="skillAlls"><img src="../../assets/reload.png" alt=""> {{$t('more')}}...</h5>
                                     </div>
                                     <div v-show="step.number === 3" class="next-button">
                                         <button @click.prevent="next" class="btn btn-2040 btn-blue">{{$t('next')}}</button>
                                     </div>
                                      <div class=""></div>

                                </div>
                         </div>            
                </div> <!-- End step 3 -->
                <!-- Step 4 -->
                  <div v-show="step.number === 4" class="">
                      <h4>{{$t('step')}} 4 {{$t('of')}} 4</h4>
                      <br>
                      <h1>{{$t('about_your_hackathon')}}</h1>
                      <hr>
                  </div>
                 <div v-show="step.number === 4" class="info-medio-d">
                          <div class="form-group">
                              <label for="title">{{$t('title_hackathon')}}</label>
                              <input type="title" v-model="form.title" class="form-control">
                          </div>
                          <div class="form-group">
                              <label for="address">{{$t('Venue_Address')}}</label>
                              <input type="address" v-model="form.address" class="form-control">
                          </div>
                          <div class="form-group">
                              <label for="date-time">{{$t('Date_and_time')}}</label>
                              <input type="datetime-local" class="form-control" v-model="form.date">
                          </div>
                          <div class="form-group">
                              <label for="reserve">{{$t('Link_to_reserve')}}</label>
                              <input type="reserve" v-model="form.linkreserv" class="form-control">
                          </div>
                          <div class="form-group">
                              <label for="overvies">{{$t('Overvies')}}</label>
                              <textarea v-model="form.overvies" class="form-control" rows="7"></textarea>
                          </div>
                          <!--div class="form-group">
                              <label for="Schedule">{{$t('Schedule')}}</label>
                              <textarea v-model="form.schedule" class="form-control" rows="7"></textarea>
                          </div-->
                          <v-button :loading="form.busy" type="primary">{{ $t('continue') }}</v-button>
                  </div><!-- End Step 4 -->
                </form>
              </div>
            </div>
          </div>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import swal from 'sweetalert2'
import Form from 'vform'
import i18n from '@/plugins/i18n'
import axios from 'axios'

export default {
  middleware: 'auth',
    data: () => ({
      step: {
        number: 1,
        complete: true,
      },
      skills:[],
      types:[],
      skillsAll:[],
      typesAll:[],
      form: new Form({
        place: '',
        type: [],
        invite: [],
        title: '',
        address: '',
        date: '',
        linkreserv: '',
        overvies: '',
        schedule: ''
      }),
    }),
  created(){
    this.load();
  },
  methods:{
    async load(){
      const {data} = await axios('/auth/types',{method:"GET"});
      const skill = await axios('/auth/tags',{method:"GET"});

      this.skillsAll = skill.data.map((r,index) => {
          return r.tags[0];
      });;
      this.typesAll = data.map((r,index )=> {
          return r.types[0];
      });

      for(let i = 0; i <= 5;i++){
        this.skills.push(this.skillsAll[i]);
      }

      for(let t = 0; t <= 3;t++){
        this.types.push(this.typesAll[t]);
      }
    },

    skillAlls(){
      this.skills = this.skillsAll;
    },
     typesAlls(){
      this.types = this.typesAll;
    },
    next() {
      if (this.form.hackathon_place === ''){
        swal({
          type: 'error',
          title: i18n.t('hackathon_place_empty'),
        })
      }
      else {this.step.number++}
      
    },
    async createNewHackathon () {
        this.skills = this.form.type.map(s => {
          return {
            name: s,
            code: ''
          }
        })
       await this.$store.dispatch('auth/createHackathon',this);

     this.form.reset();
     swal({
       type: 'success',
       title: i18n.t('hackathon_success'),
     })
    },
  },
  computed: mapGetters({
    user: 'auth/user'
  })
}
</script>


<style scoped>
.flex {
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
form {
  width: 60%; 
}
.form-inline {
  width: 100%;
}
.form-control{
  width: 100% !important;
}
h1,h2,h3,h4,h5,h6,p,.avenir{
    font-family: "Avenir Next" !important;
}
#bg-portada h1{
  color: white;
    font-weight: bold;
    font-size: 60px;
}

#bg-portada h3{
  color: white;
    font-size: 35px;
}
#bg-portada{
  background-image: url('../../assets/Create-Hackathon.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-color: #e9ecef;
  height: 550px;
  padding-top: 15rem;
}

#bg-portada .container{

  padding-left: 3rem;
}

.tags{
  margin-right: 20px;
}
.wd100{
    width: 100%;
}

/*-- Container medio --*/
.info-medio-a h2,
.info-medio-b h2{
  font-weight: 600;
}

.info-medio-a{
  margin-bottom: 30px;
  border-bottom: 1px solid #DEDEDE;
  padding-bottom: 20px;
}

.info-medio-b{
  margin-bottom: 30px;
  border-bottom: 1px solid #DEDEDE;
  padding-bottom: 20px;
}
.info-medio-c{
  margin-bottom: 30px;
  border-bottom: 1px solid #DEDEDE;
  padding-bottom: 20px;
}
.info-medio-d{
  margin-bottom: 30px;
  border-bottom: 1px solid #DEDEDE;
  padding-bottom: 20px;
}


.info-medio-a input{
  width: 35rem;
}



#custom-search-input {
    padding: 3px;
    border: solid 1px #797979e0;
    border-radius: 2px; 
    background-color: #fff;
    width: 95%;
    box-shadow: 0px 1px 8px 1px #7d7a7a;
}

#custom-search-input input{
    border: 0;
    box-shadow: none;
}

#custom-search-input button{
    margin: 2px 0 0 0;
    background: none;
    box-shadow: none;
    border: 0;
    color: #666666;
    padding: 0 8px 0 10px;
    border-left: solid 1px #ccc;
}

#custom-search-input button:hover{
    border: 0;
    box-shadow: none;
    border-left: solid 1px #ccc;
}

#custom-search-input .glyphicon-search{
    font-size: 23px;
}

.next-button{
  margin-top: 1.5rem;

}

.more{
  margin-top: 20px;
  margin-bottom: 10px;
  cursor: pointer;
}

.more img{
  max-width: 30px;
  position: relative;
  top: 8px;
  margin-right: 5px;
}
.info-medio-b button:hover,
#container-medio .btn-next:hover
{
    background-color: #4A90E2;
    color: white;
} 

.cajita-botones{
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}
#container-medio .btn-next{
  width: 10rem;
    background: white;
    border: 1px solid;
}
#container-medio{
 /* padding-bottom: 10rem; */
  padding-left: 2rem;
  margin-top: 6rem;
}
#container-medio .jumbotron{
  background-color: white;
}
/* Hiding the checkbox, but allowing it to be focused */
.badgebox
{
    opacity: 0;
}

.badgebox + .badge
{
    /* Move the check mark away when unchecked */
    text-indent: -999999px;
    /* Makes the badge's width stay the same checked and unchecked */
  width: 27px;
}

.badgebox:focus + .badge
{
    /* Set something to make the badge looks focused */
    /* This really depends on the application, in my case it was: */
    
    /* Adding a light border */
    box-shadow: inset 0px 0px 5px;
    /* Taking the difference out of the padding */
}

.badgebox:checked + .badge
{
    /* Move the check mark back when checked */
  text-indent: 0;
}

.check {
    display: inline-block;
    vertical-align: top;
    width: 100%!important;
}

.check__text {
  border: 1px solid #4A4A4A;
  border-radius: 3px;
  box-shadow: 0px 0px 1px 1px #ccc;
  padding: 10px 15px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  text-transform: capitalize;
  color: #4A4A4A;
  display: inline-block;
  font-weight: 300;
  font-family: 'Avenir Next';
  width: 100%!important;
}

.check__input {
  position: absolute;
  left: -9999px;
}

.check__input:checked + .check__text {
  color: #fff;
  border-color: #4A90E2;
  background: #4A90E2;
}

.length__counter:before {
  content: counter(checked);
}
.wrapper {
  counter-reset: checked;
}
.wd50{
    width: 100%!important;
    text-align: center!important;
}

.wd5 label{
    width: 100%!important;
}
</style>
