<template>
  <div class="main-layout ">
    <navbar/>
    <div class="mt-4">
      <child/>
    </div>
    <footer-component/>
  </div>
</template>

<script>
import Navbar from '@/components/Navbar'
import FooterComponent from '@/components/Footer'

export default {
  name: 'MainLayout',

  components: {
    Navbar,
    FooterComponent
  },
}
</script>


<style>

</style>
