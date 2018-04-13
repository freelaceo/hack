import axios from 'axios'
import Cookies from 'js-cookie'
import * as types from '../mutation-types'
import Router from 'vue-router'
import swal from 'sweetalert2'

// state
export const state = {
  user: Cookies.get('user') || null,
  token: Cookies.get('token')
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
    state.token = token;
    state.user = user;
    Cookies.set('user',user,{expires:remember ? 365 : null})
    Cookies.set('token', token, { expires: remember ? 365 : null })
  },

  [types.FETCH_USER_SUCCESS] (state, { user,router }) {
    state.user = user;
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
    Cookies.remove('token');
    Cookies.remove('user');
    state.token = null
    state.user = null
    
  },

  [types.LOGOUT] (state) {
    state.user = null
    state.token = null
    Cookies.remove('token')
    Cookies.remove('user')
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
      commit(types.FETCH_USER_SUCCESS, { user: data.user,router:data.router })
    } else {
      commit(types.FETCH_USER_FAILURE)
    }
  },

  updateUser ({ commit }, payload) {
    commit(types.UPDATE_USER, payload)
  },

  async logout ({ commit }) {
    commit(types.LOGOUT)
  },

  async fetchOauthUrl (ctx, { provider }) {
    const { data } = await axios.post(`http://api.hackathon.gravityweb.com.ve:8003/api/oauth/${provider}`)
    return data.url
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
