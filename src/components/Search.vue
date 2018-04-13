<template>
  <section class="container-full" id="first-block">
    <div class="rown" id="find-hackathon">
      <div id="hackathon-input">
        <h2>{{$t('findHackathon')}}</h2>
        <div id="hackathon-input-wrapper">
          <div class="input-icon">
            <input :placeholder="$t('tryInput')">
            <i class="fas fa-search"></i>
          </div>
          <button>{{$t('search')}}</button>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
	export default {

	  data: () => ({
	    appName: window.config.appName
	  }),

	}
</script>


<style scoped>
  .input-icon{width:100%;}
  .input-icon{position:relative;}

  /* Estilos para input*/
  .input-icon input{
    border:1px solid #eee;
    border-radius:2px;
    color:#777;
    outline:none;
    margin-top:3px;
    margin-bottom:6px;
    font-size:inherit;
    display:block;
    padding:8px;
    padding-left:55px!important;
    width:100%;
    -moz-box-sizing: border-box;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
  }
  /*Icono despues de input, en absoluto y su contenedor relativo */
  .input-icon input+i{
    position:absolute;
    font-size: 35px;
    left:10px;
    top:14px;
    color:#777;
  }
  /* en foco */
  .input-icon input:focus{border:1px solid #0099ff;color:#000}
  .input-icon input:focus+i{color:#0099ff;}

  /*div contenedor de boton */
  .input-icon>div:last-child{
    display:inline-block;
    width:100%;
  }


  input::-webkit-input-placeholder {
    font-family: "Avenir Next";
    font-style: italic;
  }
  input:-moz-placeholder {
    font-family: "Avenir Next";
    font-style: italic;
  }
  input:-ms-input-placeholder {
    font-family: "Avenir Next";
    font-style: italic;
  }

  #first-block {
    height: calc(100vh - 137px);
    background-color: #4c5561;
  }

  #find-hackathon {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center; }

  #hackathon-input h2 {
    color: #fff;
    font-size: 60px;
    margin-bottom: 60px;
    text-align: center;
    font-family: Helvetica;
    font-weight: normal;
  }


  #hackathon-input input {
    border: none;
    outline: none;
    padding: 10px;
    width: 720px;
    max-width: 100%;
    font-size: 26px;
    border-radius: 3px;
    box-shadow: 0px 4px 6px 1px rgba(37, 37, 37, 0.8);
  }


  #hackathon-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;
    font-family: "Avenir Next";
  }

  #hackathon-input-wrapper button {
    position: absolute;
    right: 10px;
    background-color: #6ec2f1;
    color: #fff;
    border: none;
    font-size: 19px;
    border-radius: 3px;
    padding: 5px 8px;
    font-family: "Avenir Next";
  }

  @media screen and (max-width: 1680px) {
    #first-block {
      height: calc(100vh - 120px);
      min-height: 500px;}
  }

  @media screen and (max-width: 1440px) {
    #first-block {
      /*height: calc(100vh - 110px); }*/
      min-height: 500px;}
  }

  @media screen and (max-width: 960px) {
    #first-block {
      /*height: calc(100vh - 80px);*/
      min-height: 500px;
      max-height: 300px;
    }
  }



  @media only screen and (max-width: 780px) {
    #hackathon-input-wrapper button {
      position: absolute;
      right: 10px;
      background-color: #6ec2f1;
      color: #fff;
      border: none;
      font-size: 19px;
      border-radius: 3px;
      padding: 5px 8px;
      font-family: MontserratRegular;
    }
    input::-webkit-input-placeholder {
      font-size: 18px;
    }
    input:-moz-placeholder {
      font-size: 18px;
    }
    input:-ms-input-placeholder {
      font-size: 18px;
    }
  }

  @media only screen and (max-width: 780px) {
    #hackathon-input input {
      border: none;
      outline: none;
      padding: 10px;
      width: 100%;
      font-size: 26px;
      border-radius: 3px;
      -webkit-box-shadow: 0px 4px 6px 1px rgba(37, 37, 37, 0.8);
      box-shadow: 0px 4px 6px 1px rgba(37, 37, 37, 0.8);
    }
  }


  @media only screen and (max-width: 780px) {
    #hackathon-input h2 {
      color: #fff;
      font-size: 50px;
      margin-bottom: 60px;
      text-align: center;
      font-family: MontserratMedium;
      font-weight: normal; } }
  /*# sourceMappingURL=full-height-block.component.css.map */

</style>

