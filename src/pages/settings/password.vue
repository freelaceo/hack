<template>
  <div class="row bor-top">
    <div class="change-password">
      <form @submit.prevent="update" @keydown="form.onKeydown($event)">
        <alert-success :form="form" :message="$t('password_updated')"/>

        <!-- Password -->
        <div class="form-group">
          <label class="label-text">{{ $t('new_password') }}</label>
          <div class="box-input">
            <input v-model="form.password" :class="{ 'is-invalid': form.errors.has('password') }" class="form-control" type="password" name="password" required="">
            <has-error :form="form" field="password"/>
          </div>
        </div>

        <!-- Password Confirmation -->
        <div class="form-group">
          <label class="label-text">{{ $t('confirm_password') }}</label>
          <div class="box-input">
            <input v-model="form.password_confirmation" :class="{ 'is-invalid': form.errors.has('password_confirmation') }" class="form-control" type="password" name="password_confirmation" required="">
            <has-error :form="form" field="password_confirmation"/>
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
 @media only screen and (max-width: 991px) {
  .form-group {
    width: 100%;}
}
</style>
