<template>
<div class="row ">
  <div class="head-proyects">
      <h3 class="proyects-titles">Projects</h3>
      <a href="" class="proyects-edit">(Edit)</a>
  </div>
  <Items :data="projects"/>
</div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import Item from '../../components/user-profile/items'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('settings') }
  },

  data: () => ({
    form: new Form({
      name: '',
      email: '',
      photo_url: ''
    })
  }),

  components : {
    Item
  },
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
    },

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
      const { data } = await this.form.patch('/api/settings/profile')

      this.$store.dispatch('auth/updateUser', { user: data })
    }
  }
}
</script>
<style scoped>


.head-proyects {
    width: calc(100% - 40px);
    margin: 20px 0 26px 20px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    }
h3.proyects-titles{
  font-size: 30px;
    font-weight: 600;
    color: #333;
}

a.proyects-edit{
  font-size: 16px;
  color: #9B9B9B;
  font-weight: normal; 
  text-decoration: none;
}
a.proyects-edit:hover,  a.proyects-edit:active,  a.proyects-edit.active{
  color: #4A4A4A;
  text-decoration: underline;
}


</style>
