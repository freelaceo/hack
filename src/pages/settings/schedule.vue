<template>
<div class="border-padding container">
  <div class="panel-header">
    <h1>Schedule</h1>
    <span class="edit-panel">(Edit)</span>
  </div>
  <div class="panel-body">
    <div class="card">
      <div class="col-md-6">
        Schedule
      </div>
    </div>
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
  }
}
</script>
<style scoped>
  
  .border-padding{
    border:solid 1px #c4c4c4;
    padding: 20px 10px 20px 10px;
  }
  .panel-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding:20px;
  }
</style>
