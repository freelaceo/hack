<template>

<!-- Contenido Medio -->
    <section id="container-medio">
        <div class="container-fluid">
           <div class="row">
                <div class="col-sm-12 col-md-6 offset-md-3">
                    <h4>Step 4 of 4</h4>
                    <h1>Tell us about your hackathon</h1>
                </div>
               <div class="col-sm-12 col-md-6 offset-md-3">
                    <form>
                        <div class="form-group">
                            <label for="title">What is the title of your hackathon?</label>
                            <input type="title" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="address">Venue Address</label>
                            <input type="address" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="date-time">Date and time</label>
                            <input type="date-time" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="reserve">Link to reserve seats?</label>
                            <input type="reserve" class="form-control">
                        </div>
                        <div class="form-group">
                            <label for="overvies">Overvies</label>
                            <textarea class="form-control" rows="7"></textarea>
                        </div>
                        <div class="form-group">
                            <label for="Schedule">Schedule</label>
                            <textarea class="form-control" rows="7"></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Continue</button>
                    </form>
                    </div>
           </div>
        </div>
    </section>
<!-- /Contenido Medio -->

</template>

<script>
import Form from 'vform'
import { mapGetters } from 'vuex'

export default {
  scrollToTop: false,

  metaInfo () {
    return { title: this.$t('create_hackathon') }
  }
}
</script>
<style scoped>

</style>