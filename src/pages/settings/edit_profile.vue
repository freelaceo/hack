<template>
  <div style="padding-top:20px; border:solid 1px #D3D3D3">
    <form @submit.prevent="update" @keydown="form.onKeydown($event)">
      <alert-success :form="form" :message="$t('profile_updated')"/>

      <!-- Name -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('name') }}</label>
        <div class="col-md-7">
          <input v-model="form.name" :class="{ 'is-invalid': form.errors.has('name') }" class="form-control" type="text" name="name" required="">
          <has-error :form="form" field="name"/>
        </div>
      </div>

      <!-- Username  -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('username') }}</label>
        <div class="col-md-7">
          <input v-model="form.username" :class="{ 'is-invalid': form.errors.has('username') }" class="form-control" type="text" name="username" >
          <has-error :form="form" field="username"/>
        </div>
      </div>

      <!-- Password Confirmation -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('location') }}</label>
        <div class="col-md-7">
          <input v-model="form.location" :class="{ 'is-invalid': form.errors.has('location') }" class="form-control" type="text" name="location" required="">
          <has-error :form="form" field="location"/>
        </div>
      </div>

      <!-- Description -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('description') }}</label>
        <div class="col-md-7">
          <input v-model="form.description" :class="{ 'is-invalid': form.errors.has('description') }" class="form-control" type="text" name="description" required="">
          <has-error :form="form" field="description"/>
        </div>
      </div>

      <!-- Image URL -->
      <div class="form-group row">
        <label class="col-md-3 col-form-label text-md-right">{{ $t('photo_url') }}</label>
        <div class="col-md-7">
          <input v-model="form.photo_url" :class="{ 'is-invalid': form.errors.has('photo_url') }" class="form-control" type="text" name="photo_url" required="">
          <has-error :form="form" field="photo_url"/>
        </div>
      </div>

      <!-- Submit Button -->
      <div class="form-group row">
        <div class="col-md-9 ml-md-auto">
          <v-button :loading="form.busy" type="success">{{ $t('update') }}</v-button>
        </div>
      </div>
    </form>
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
