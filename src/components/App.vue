<template>
  <div id="app">
    <loading ref="loading"/>

    <transition name="page" mode="out-in">
      <component v-if="layout" v-bind:is="layout"/>
    </transition>
  </div>
</template>

<script>
import Loading from './Loading'

// Load layout components dynamically.
const requireContext = require.context('@/layouts', false, /.*\.vue$/)

const layouts = requireContext.keys()
  .map(file =>
    [file.replace(/(^.\/)|(\.vue$)/g, ''), requireContext(file)]
  )
  .reduce((components, [name, component]) => {
    components[name] = component.default || component
    return components
  }, {})

export default {
  el: '#app',

  components: {
    Loading
  },

  data: () => ({
    layout: null,
    defaultLayout: 'default'
  }),

  metaInfo () {
    const { appName } = window.config

    return {
      title: appName,
      titleTemplate: `%s · ${appName}`
    }
  },

  mounted () {
    this.$loading = this.$refs.loading
  },

  methods: {
    /**
     * Set the application layout.
     *
     * @param {String} layout
     */
    setLayout (layout) {
      if (!layout || !layouts[layout]) {
        layout = this.defaultLayout
      }

      this.layout = layouts[layout]
    }
  }
}
</script>

<style>
  @import "https://use.fontawesome.com/releases/v5.0.9/css/all.css";
  .mt-4, .my-4{
    margin: 0px!important;
  }

html,body,div,mark,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,figcaption,figure,footer,header,hgroup,menu,nav,section,summary,time,mark,audio,video{border:0;outline:0;font-size:100%;font:inherit;vertical-align:baseline;margin:0;padding:0}
article,aside,details,figcaption,figure,footer,header,hgroup,menu,nav,section{display:block}
body{line-height:1}
ol,ul{list-style:none}
blockquote,q{quotes:none}
blockquote:before,blockquote:after,q:before,q:after{content:none}
ins{text-decoration:none}
del{text-decoration:line-through}
table{border-collapse:collapse;border-spacing:0}
img{max-width:100%;height:auto;}
mark,strong,b{font-weight:600;background:none;color:inherit;}
input[type="text"],input[type="number"], input[type="tel"],input[type="email"],input[type="submit"], input[type="reset"],textarea, select, button{-webkit-appearance: none;@include border-radius(0);}
input:focus, textarea:focus{outline:none;}

body{font-family: 'Avenir Next', Arial, sans-serif;}
p, li, label{font-size:14px;line-height:normal;color:#555;margin:0;padding:0}
img{max-width:100%;}
figure.full img{width:100%;height:auto;display:block;}
.font-16{font-size:16px;}
.title-2{font-size: 30px;font-weight:600;color:#333;}

.btn{display:inline-block;text-decoration:none;transition:all .3s ease;}
.btn-lg{padding:15px 30px;border-radius:5px;font-size:16px;}
.btn-md{padding:10px 15px;border-radius:5px;font-size:14px;}
.btn-xs{padding:15px 15px;border-radius:5px;font-size:16px;}
.btn-red{background: #FF4343;color:#fff !important;}
.btn-blue{background: #4A90E2;color:#fff !important;}
.btn-black{background: #343D46;color:#fff !important;}
.btn-green{background: #5EB98C;color:#fff !important;}

.seccion{padding:60px 0; position: relative;}
.padding-30{padding:30px;}
.container-lg{max-width: 1200px;margin:0 auto;}
.row{margin:0 -15px}
.row:after{clear:both;content:"";display:block}
.center{margin-left:auto !important;margin-right:auto !important;float:none !important;padding:0 !important;}
.clear:after{content:"";display:block;clear:both;}
.text-left{text-align:left;}
.text-right{text-align:right;}
.text-center{text-align:center !important;}
.cont-ext{display:table;width:100%;height:100%;}
.cont-int{display: table-cell;vertical-align:middle;}
.cont{position:relative;}
.flex{display:flex;flex-wrap:wrap;}
.row.nopadding{margin:0 !important;}
.row.total{margin:-15px;}
.row.total >*{padding:15px;}
.flex.nopadding >*, .row.nopadding > *{padding:0 !important;}
.flex .cont{height:100%}

.mt-10{margin-top:10px}
.mt-15{margin-top:15px}
.mt-20{margin-top:20px}
.mt-30{margin-top:30px}
.mt-60{margin-top:60px}
.mt-90{margin-top:90px}
.mb-10{margin-bottom:10px}
.mb-15{margin-bottom:15px}
.mb-20{margin-bottom:20px}
.mb-30{margin-bottom:30px}
.mb-60{margin-bottom:60px}
.mb-90{margin-bottom:90px}
.ml-10{margin-left:10px}
.ml-15{margin-left:15px}
.ml-20{margin-left:20px}
.ml-30{margin-left:30px}
.ml-60{margin-left:60px}
.ml-90{margin-left:90px}
.mr-10{margin-right:10px}
.mr-15{margin-right:15px}
.mr-20{margin-right:20px}
.mr-30{margin-right:30px}
.mr-60{margin-right:60px}
.mr-90{margin-right:90px}

@media only screen and (max-width : 1200px) {
  .container, .container-lg{width:90%}
}

@media only screen and (max-width : 960px) {
  .center{margin-left:auto !important;margin-right:auto !important;float:none !important;padding:0 !important;}
}

@media only screen and (max-width : 640px) {
  .center{margin-left:auto !important;margin-right:auto !important;float:none !important;padding:0 !important;}
  .xs-only{display:block;}
  .container{width:100% !important;box-sizing:border-box;padding-left:15px;padding-right:15px}
  .flex{display:block !important}
  .col-xs-hidden{display:none !important;}
  .xs-text-left{text-align:left !important}
  .xs-text-right{text-align:right !important}
  .xs-text-center{text-align:center !important}
}
</style>
