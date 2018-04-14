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
 }
 .form-group .box-button {
  width: 100%;
  text-align: center;
 }
</style>
