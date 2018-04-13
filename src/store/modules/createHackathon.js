export const state = {
  createHackathon:{}
}

export const mutations = {
  CREATEHACKATHONADD (state,obj) {
    state.createHackathon = obj;
    console.log("se ejecuto", obj)
  }
}
