<template>
<div class="row">
  <div class="head-proyects">
      <h3 class="proyects-titles">Upvoted</h3>
      <a href="" class="proyects-edit">(Edit)</a>
  </div>
  <Items :data="Upvoted"/>
</div>
</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'
import Item from '../../components/user-profile/items'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('upvoted') }
  },
  components : {
    Item
  },
  data(){
      return {
          Upvoted:[
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