import Vue from 'vue'
import store from '@/store'
import router from '@/router'
import i18n from '@/plugins/i18n'
import App from '@/components/App'
import {Tabs, Tab} from 'vue-tabs-component';
import * as VueGoogleMaps from 'vue2-google-maps'
 
Vue.use(VueGoogleMaps, {
  load: {
    key: 'AIzaSyA0RPpc9VYctBxPq5VdQjMylavj6HHVHn8',
    libraries: 'places',
  },
})

Vue.component('tabs', Tabs);
Vue.component('tab', Tab);

import '@/plugins'
import '@/components'

Vue.config.productionTip = false

/* eslint-disable no-new  */
new Vue({
  i18n,
  store,
  router,
  ...App
})
