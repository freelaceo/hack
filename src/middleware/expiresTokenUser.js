import store from '@/store'

export default async (to, from, next) => {
  if (expiresTokenUser()) {
    cleanStorage()
    next({ name: 'login' })
  } else {
    next()
  }
}
