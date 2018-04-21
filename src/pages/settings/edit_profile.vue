<template>
  <div class="row">
    <div class="change-password">
      <form @submit.prevent="update" @keydown.enter.prevent="form.onKeydown($event)">
        <alert-success :form="form" :message="$t('profile_updated')"/>

        <!-- Name -->
        <div class="form-group">
          <label class="label-text">{{ $t('name') }}</label>
          <div class="box-input">
            <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name">
            <has-error :form="form" field="name"/>
          </div>
        </div>

        <!-- Username  -->
        <div class="form-group">
          <label class="label-text">{{ $t('username') }}</label>
          <div class="box-input">
            <input v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username" >
            <has-error :form="form" field="username"/>
          </div>
        </div>

        <!-- Username  -->
        <div class="form-group">
          <label class="label-text">{{ $t('job') }}</label>
          <div class="box-input">
            <input v-model="form.job" :class="{ 'is-invalid': form.errors.has('job') }" class="form-control" type="text" name="job" >
            <has-error :form="form" field="job"/>
          </div>
        </div>

        <!-- Skills  -->
        <div class="form-group">
          <label class="label-text">{{ $t('Skills') }}</label>
          <div class="box-input flex-wrap">
            <vue-tags-input
              v-model="filterValue"
              :tags="form.skills"
              :autocomplete-items="tags"
              :add-only-from-autocomplete="true"
              @tags-changed="updateTag"
            />
            <div class="cajita-botones">
              <div class="tags" v-for="skill in form.skill" :key="skill">
                  <label class="check label">
                      <input class="check__input" type="checkbox" :value="skill" :id="skill">
                      <div class="check__text">{{skill}}</div>
                  </label>
              </div >
            </div>
          </div>
        </div>

        <!-- location -->
        <div class="form-group">
          <label class="label-text">{{ $t('location') }}</label>
          <div class="box-input">
            <input v-model="form.location" :class="{ 'is-invalid': form.errors.has('location') }" class="form-control" type="text" name="location">
            <has-error :form="form" field="location"/>
          </div>
        </div>

        <!-- Description -->
        <div class="form-group">
          <label class="label-text">{{ $t('description') }}</label>
          <div class="box-input">
            <textarea v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="description" ></textarea>
            <has-error :form="form" field="description"/>
          </div>
        </div>
          
        <!-- Social -->
        <div class="form-group">
          <label class="label-text">{{ $t('social') }}</label>
          <div class="box-input">
            <input v-model="form.socials.twitter" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-twitter"/>
            <has-error :form="form" field="description"/>
            <i class="social-icons fab fa-twitter"></i>
          </div>
        </div>
        <div class="form-group">
          <label class="label-text"></label>
          <div class="box-input">
            <input v-model="form.socials.facebook" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-git" />
            <has-error :form="form" field="description"/>
            <i class="social-icons fab fa-facebook"></i>
          </div>
        </div>
        <div class="form-group">
          <label class="label-text"></label>
          <div class="box-input"> 
            <input v-model="form.socials.linkedin" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-in" />
            <has-error :form="form" field="description"/>
            <i class="social-icons fab fa-linkedin-in"></i>
          </div>
        </div>
        <div class="form-group">
          <label class="label-text"></label>
          <div class="box-input">
            <input v-model="form.socials.other" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-in" />
            <has-error :form="form" field="description"/>
            <i class="social-icons fab fa-github"></i>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="form-group">
          <div class="box-button">
            <v-button :loading="form.busy" type="success">{{ $t('update') }}</v-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
import axios from 'axios'
import { mapGetters } from 'vuex'
import VueTagsInput from '@johmun/vue-tags-input';

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },
  components:{
    VueTagsInput
  },
  data: () => ({
    tagSend:[],
    tags:[],
    form: new Form({
      name: '',
      username: '',
      location: '',
      description: '',
      photo_url: '',
      socials:{
        facebook:'',
        twitter:'',
        linkedin:'',
        other:''
      },
      job:'',
      skills:''
    })
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    });

    this.chargerData();
  },

  methods: {
    async chargerData(){
      const { data } = await axios('/auth/tags',{method:"GET"})
      this.tags = data.map(e => {
        return {text: e.tags[0]}
      });
    },
    updateTag(newTags) {
      this.autocompleteItems = [];
      this.form.skills = newTags;
      this.tagSend = this.form.skills.map(e => e.text);
    },
    async addSkill(){
      var s = new FormData();
      s.append('skills',this.tagSend);
      const {data} = await axios('auth/user/add/skill/'+this.user_id,{method:"POST",data:s})
      console.log(data)
    },
    async update () {
      var f = new FormData();
      f.append('name',this.form.name);
      f.append('username',this.form.username);
      f.append('location',this.form.location);
      f.append('description',this.form.description);
      f.append('facebook',this.form.socials.facebook);
      f.append('twitter',this.form.socials.twitter);
      f.append('linkedin',this.form.socials.linkedin);
      f.append('other',this.form.socials.other);
      f.append('skills',this.tagSend);
      f.append('job',this.form.job);
      const { data } = await axios('/auth/user/update/'+this.user._id,{method:"PUT",data:f})
      console.log(data)
      if(data.success){
        this.$store.dispatch('auth/updateUser', { user: data.data })
      }
    },
  }
}
</script>
<style scoped>i.social-icons {
  font-size: 30px;
  color: #4A4A4A;
  padding-right: 20px;
  margin-left: -50px;
  padding-top: 5px;
}
.cajita-botones{
  margin-top: 20px;
  display: flex;
  justify-content: flex-start;
}
.tags {
    margin-right: 20px;
}
.check {
    display: inline-block;
    vertical-align: top;
    width: 100%!important;
}

.flex-wrap{
  display: flex;
  flex-wrap: wrap;
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
  top: 0;
}

.check__input:checked + .check__text {
  color: #fff;
  border-color: #4A90E2;
  background: #4A90E2;
  counter-increment: checked;
}
  .change-password{
    width: 100%;
    margin-top: 20px;
    overflow: hidden;
  }

   .form-group {
    width: 80%;
    margin: 0 auto 20px auto;
    display: flex;
    justify-content: space-between;
    flex-flow: column;
  }
  .form-control:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: none;
  }

.form-group .label-text {
  width: 100%;
  font-size: 16px; 
  margin-bottom: 8px;
   }
 .form-group .box-input {
  width: 100%;
  display: flex;
  justify-content: flex-start;
 }
 .form-group .box-button {
  width: 100%;
  text-align: center;
 }
.vue-tags-input{
  width: 100%!important;
  max-width: 100%!important;
}

.form-control{
  border-radius: 0px!important;
}
@media only screen and (max-width: 991px) {
  .form-group {
    width: 100%;}
}

</style>
