import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import Router from 'vue-router'
import swal from 'sweetalert2'


function setTokenUser(token,user){
  window.localStorage.setItem('token',token);
  window.localStorage.setItem('user',JSON.stringify(user));
}

function getTokenUser(){
  return {token:window.localStorage.getItem('token'),user:JSON.parse(window.localStorage.getItem('user'))}
}

function removeTokenUser(){
  window.localStorage.removeItem('token');
  window.localStorage.removeItem('user');
}

function setterState(){
  state.token = getTokenUser().token;
  state.token = getTokenUser().user;
}

// state
export const state = {
  //user: Cookies.get('user'),
  //token: Cookies.get('token')
  user: getTokenUser().user,
  token: getTokenUser().token
}

// getters
export const getters = {
  user: state => state.user,
  token: state => state.token,
  check: state => state.user !== null
}

// mutations
export const mutations = {
  [types.SAVE_TOKEN] (state, { token, user, remember }) {
    //state.token = token;
    //state.user = user;
    setTokenUser(token,user);
    //Cookies.set('user',user,{expires:remember ? 365 : null})
    //Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  [types.FETCH_USER_SUCCESS] (state, { token,user,router }) {
    //state.user = user; //Cookies.set('user',user,{expires:365})
    setTokenUser(token,user);
    setterState();
    var msg;
    switch(Cookies.get('locale')){
      case 'en':
        msg = 'Login Success';
        break;
      case 'es':
        msg = 'Inicio de sesión exitoso';
    }
    swal({
      type: 'success',
      title: msg,
    })
    router.push({ name: 'welcome' });
  },

  [types.FETCH_USER_FAILURE] (state) {
    var msg;
    switch(Cookies.get('locale')){
      case 'en':
        msg = 'Password or Email incorrect';
        break;
      case 'es':
        msg = 'Usuario o Clave incorrectos';
    }
    swal({
      type: 'error',
      title: msg
    })
    //Cookies.remove('token'); //Cookies.remove('user'); //state.token = null //state.user = null
    removeTokenUser();
    setterState();
    
  },

  [types.LOGOUT] (state,{router}) {
    removeTokenUser();
    setterState();
    router.push({name:'welcome'})
  },

  [types.UPDATE_USER] (state, { user }) {
    state.user = user
  },

  [types.CREATE_HACKATHON] (state, { obj }) {
    console.log(obj);
  }
}

// actions
export const actions = {
  saveToken ({ commit, dispatch }, payload) {
    commit(types.SAVE_TOKEN, payload)
  },

  async fetchUser ({ commit }, data) {
    if(data.success){
      commit(types.FETCH_USER_SUCCESS, { token:data.token,user: data.user,router:data.router })
    } else {
      commit(types.FETCH_USER_FAILURE)
    }
  },

  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  },

  async logout ({ commit }, router) {
    commit(types.LOGOUT,router)
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`http://api.hackathon.gravityweb.com.ve:8003/api/oauth/${provider}`)
    return data.url
  },

  async updateUser(){
    console.log("se activa")
    setterState();
  },

  async createHackathon ({commit},p){
    var userID = JSON.parse(state.user);
    var f = new FormData();
        f.append('place',p.form.place);
        f.append('type',p.form.type);
        f.append('invite',p.form.invite);
        f.append('title',p.form.title);
        f.append('address',p.form.address);
        f.append('linkreserv',p.form.linkreserv);
        f.append('overvies',p.form.overvies);
        f.append('shedule',p.form.schedule);
        f.append('date',p.form.date);
        f.append('userId',userID._id);
    
    var {data} = await axios('/auth/hackathon',{
        method:"post",
        data: f
    })
    p.$router.push({name: 'home' , params: { id: data.data.titleLink }});
  }
}
