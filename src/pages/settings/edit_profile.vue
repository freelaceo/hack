<template>
  <div>
    <div class="change-password">
      <form @submit.prevent="update" @keydown="form.onKeydown($event)">
        <alert-success :form="form" :message="$t('profile_updated')"/>

        <!-- Name -->
        <div class="form-group">
          <label class="label-text">{{ $t('name') }}</label>
          <div class="box-input">
            <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name" required="">
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

        <!-- Skills  -->
        <div class="form-group">
          <label class="label-text">{{ $t('Skills') }}</label>
          <div class="box-input flex-wrap">
            <input v-model="form.userskills" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username" >
            <has-error :form="form" field="username"/>
            <div class="cajita-botones">
              <div class="tags">
                  <label class="check label">
                      <input class="check__input" type="checkbox" v-model="form" value="virtual" id="virtual">
                      <div class="check__text">UX/UI</div>
                  </label>
              </div>
              <div class="tags">
                  <label class="check label">
                      <input class="check__input" type="checkbox" v-model="form" value="blockchain" id="blockchain">
                      <div class="check__text">Biz Dev</div>
                  </label>
              </div>
            </div>
          </div>
        </div>

        <!-- Password Confirmation -->
        <div class="form-group">
          <label class="label-text">{{ $t('location') }}</label>
          <div class="box-input">
            <input v-model="form.location" :class="{ 'is-invalid': form.errors.has('location') }" class="form-control" type="text" name="location" required="">
            <has-error :form="form" field="location"/>
          </div>
        </div>

        <!-- Description -->
        <div class="form-group">
          <label class="label-text">{{ $t('description') }}</label>
          <div class="box-input">
            <textarea v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="description" required=""></textarea>
            <has-error :form="form" field="description"/>
          </div>
        </div>
          
        <!-- Social -->
        <div class="form-group">
          <label class="label-text">{{ $t('social') }}</label>
          <div class="box-input">
            <i class="social-icons fab fa-twitter"></i>
            <input v-model="form" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-twitter" required=""></input>
            <has-error :form="form" field="description"/>
          </div>
        </div>
        <div class="form-group">
          <label class="label-text"></label>
          <div class="box-input">
            <i class="social-icons fab fa-github"></i>
            <input v-model="form" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-git" required=""></input>
            <has-error :form="form" field="description"/>
          </div>
        </div>
        <div class="form-group">
          <label class="label-text"></label>
          <div class="box-input">
            <i class="social-icons fab fa-linkedin-in"></i>
            <input v-model="form" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-in" required=""></input>
            <has-error :form="form" field="description"/>
          </div>
        </div>
        <div class="form-group">
          <label class="label-text"></label>
          <div class="box-input">
            <i class="social-icons fab fa-linkedin-in"></i>
            <input v-model="form" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="social-in" required=""></input>
            <has-error :form="form" field="description"/>
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


export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      name: '',
      username: '',
      location: '',
      description: '',
      photo_url: '',
    })
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  created () {
    // Fill the form with user data.
    this.form.keys().forEach(key => {
      this.form[key] = this.user[key]
    })
  },

  methods: {
    async update () {
      var f = new FormData();
      f.append('name',this.form.name);
      f.append('username',this.form.username);
      f.append('location',this.form.location);
      f.append('description',this.form.description);
      const { data } = await axios('/auth/user/update/'+this.user._id,{method:"PUT",data:f})
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
  margin-left:-50px;
  padding-right: 20px;
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
    margin-top: 40px;
    overflow: hidden;
  }

   .form-group {
    width: 80%;
    margin: 0 auto 20px auto;
    display: flex;
    justify-content: space-between;
  }
  .form-control:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: none;
  }

.form-group .label-text {
  width: 30%;
 }
 .form-group .box-input {
  width: 70%;
  display: flex;
  justify-content: flex-start;
 }
 .form-group .box-button {
  width: 100%;
  text-align: center;
 }
</style>
