<template>
  <li class="nav-item dropdown">
    <button class="nav-link dropdown-toggle" href="#" role="button"
       data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      {{ locales[locale] }}
    </button>
    <div class="dropdown-menu">
      <button  v-for="(value, key) in locales" :key="key" class="dropdown-item" href="#"
         @click.prevent="setLocale(key)">
        {{ value }}
      </button>
    </div>
  </li>
</template>

<script>
import { mapGetters } from 'vuex'
import { loadMessages } from '@/plugins/i18n'

export default {
  computed: mapGetters({
    locale: 'lang/locale',
    locales: 'lang/locales'
  }),

  methods: {
    setLocale (locale) {
      if (this.$i18n.locale !== locale) {
        loadMessages(locale)

        this.$store.dispatch('lang/setLocale', { locale })
      }
    }
  }
}
</script>


<style>
  .footer-rows.button-row ul li{
    list-style: none;
  }

  button.dropdown-toggle{
    background: #fff !important;
    border: none !important;
    box-shadow: 0px 1px 1px 1px #ccc !important;
    padding: 10px 20px !important;
  }

  .dropdown-menu.show{
    left: -12px!important;
  }

  @media (max-width: 768px){
    button.dropdown-toggle {
      padding: 20px 60px !important;
      font-size: 20px;
    }
  }

</style>
