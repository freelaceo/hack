<template>
  <div>
        <form>
            <input type="hidden" id="address" v-model="address">
        </form>
        <div id="map"></div>
  </div>
</template>

<script>
export default {
    data(){
     return{
        address: ''
     }
    },

    watch: {
        address:function() {
            this.locateAddress();
        }
    },

    methods: {
        createMap: function() {
             this.map = new google.maps.Map(document.querySelector('#map'), {
                center: {lat: 35, lng: -85},
                zoom: 10
            });
        },

        locateAddress: function() {
            var geocoder = new google.maps.Geocoder();
            var vm = this;

            geocoder.geocode({ address: this.address}, function(results, status) {
                if (status === google.maps.GeocoderStatus.OK) {
                    vm.map.setCenter(results[0].geometry.location);
                }

                new google.maps.Marker({
                    map: vm.map,
                    position: results[0].geometry.location
                });
            });
        }
    }
}
</script>


<style scoped>

</style>
