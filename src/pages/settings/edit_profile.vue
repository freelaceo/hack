<template>
  <div>
    <div class="change-password">
      <form @submit.prevent="update" @keydown="form.onKeydown($event)">
        <alert-success :form="form" :message="$t('profile_updated')"/>

        <!-- Name -->
        <div class="form-group row">
          <label class="col-md-offset-1 col-md-2 col-form-label">{{ $t('name') }}</label>
          <div class="col-md-7">
            <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name" required="">
            <has-error :form="form" field="name"/>
          </div>
        </div>

        <!-- Username  -->
        <div class="form-group row">
          <label class="col-md-offset-1 col-md-2 col-form-label">{{ $t('username') }}</label>
          <div class="col-md-7">
            <input v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username" >
            <has-error :form="form" field="username"/>
          </div>
        </div>

        <!-- Password Confirmation -->
        <div class="form-group row">
          <label class="col-md-offset-1 col-md-2 col-form-label">{{ $t('location') }}</label>
          <div class="col-md-7">
            <input v-model="form.location" :class="{ 'is-invalid': form.errors.has('location') }" class="form-control" type="text" name="location" required="">
            <has-error :form="form" field="location"/>
          </div>
        </div>

        <!-- Description -->
        <div class="form-group row">
          <label class="col-md-offset-1 col-md-2 col-form-label">{{ $t('description') }}</label>
          <div class="col-md-7">
            <textarea v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="description" required=""></textarea>
            <has-error :form="form" field="description"/>
          </div>
        </div>

        <!-- Image URL -->
        <div class="form-group row">
          <label class="col-md-offset-1 col-md-2 col-form-label">{{ $t('photo_url') }}</label>
          <div class="col-md-7">
            <label>
              <input type="file" id="file" ref="file" v-on:change="handleFileUpload()"/>
            </label>
           <!--  <input v-model="form.photo_url" :class="{ 'is-invalid': form.errors.has('photo_url') }" class="form-control" type="text" name="photo_url" required="">
            <has-error :form="form" field="Photo_url"/> -->
            <div id="file-drag-drop">
              
              <form class="drag-and-drop" ref="fileform">
                  <span class="drop-files">
                    <p>Or drop the files here!</p>
                    <i class="fas fa-images"></i>
                  </span>
              </form>
            </div>
          </div>
        </div>

        <!-- Submit Button -->
        <div class="form-group row">
          <div class="col-md-12 text-center ml-md-auto">
            <v-button :loading="form.busy" type="success">{{ $t('update') }}</v-button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import Form from 'vform'
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
      const { data } = await this.form.patch('http://localhost:8000/api/settings/profile')
      this.$store.dispatch('auth/updateUser', { user: data })
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
    margin-bottom: 20px;
  }
  .form-control:focus {
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: none;
  }
  form.drag-and-drop{
    display: flex;
    height: 200px;
    width: 100%;
    background: #ccc;
    margin: auto;
    margin-top: 10px;
    text-align: center;
    border-radius: 4px;
    align-items: center;
    justify-content: center;
}
 form.drag-and-drop .fa-images {
  font-size: 30px;
  margin-top: 10px;
 }
</style>
