<template>
  <section class="profileUser">
      <div class="container-lg">
        <div class="row">
            <div class="col-md-3">
                <Info/>
            </div>
            <div class="col-md-9 d">
                <Content />
            </div>
        </div>
    </div>
  </section>
</template>

<script>
import Info from '../components/user-profile/info-profile'
import Content from '../components/user-profile/content-profile'
export default {
  name:'user-profile',
  components:{
      Info,
      Content
  }
}
</script>
<style scoped>
    section.profileUser{
        position: relative;
        top: 100px;
    }

    .d{
        margin-bottom: 60px;
    }
</style>
