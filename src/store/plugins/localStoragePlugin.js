import { STORAGE_KEY } from '@/consts/app'
import { devLog } from '@/utils'

const storageState = JSON.parse(window.localStorage.getItem(STORAGE_KEY))

export const getDefaultState = (key, defaultState = {}) => {
  return {
    ...defaultState,
    ..._.get(storageState, key, {})
  }
}

export default store => {
  store.subscribe(({ type }, state) => {
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
    } catch (e) {
      devLog('error', e)
    }
  })
}
