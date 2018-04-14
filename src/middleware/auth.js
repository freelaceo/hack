import store from '@/store'

export default async (to, from, next) => {
  if (!store.getters['auth/check']) {
    next({ name: 'login' })
  } else if( await store.dispatch('auth/expiredSession') ){
    await store.dispatch('auth/expiredSessionClear');
    next({ name: 'login' })
  } else {
    next()
  }
}
