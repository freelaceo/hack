<template>
  <div>
    <div class="change-password">
      <form @submit.prevent="update" @keydown="form.onKeydown($event)">
        <alert-success :form="form" :message="$t('password_updated')"/>

        <!-- Password -->
        <div class="form-group row">
          <label class="col-md-offset-1 col-md-3 col-form-label">{{ $t('new_password') }}</label>
          <div class="col-md-7">
            <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" required="">
            <has-error :form="form" field="password"/>
          </div>
        </div>

        <!-- Password Confirmation -->
        <div class="form-group row">
          <label class="col-md-offset-1 col-md-3 col-form-label">{{ $t('confirm_password') }}</label>
          <div class="col-md-7">
            <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation" required="">
            <has-error :form="form" field="password_confirmation"/>
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

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      password: '',
      password_confirmation: ''
    })
  }),

  methods: {
    async update () {
      await this.form.patch('http://localhost:8000/api/settings/password')

      this.form.reset()
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
</style>
