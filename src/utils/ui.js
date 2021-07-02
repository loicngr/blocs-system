import Vue from 'vue'
import { Dialog, Loading, Notify } from 'quasar'

/**
 * Instance de gestion de l'état de l'ui
 * @global
 */
export const $ui = new Vue({
  created () {
    if (this.isDev) {
      window.showLogs = true
    }
  },
  computed: {
    isDev () {
      return process.env.DEV
    }
  }
})

/**
 * Confirmation par défaut
 * @param opt
 * @returns {DialogChainObject}
 */
export const dialogConfirm = (opt = {}) => {
  const _opt = typeof opt === 'string'
    ? { message: opt }
    : opt
  return Dialog.create({
    persistent: true,
    cancel: true,
    title: 'Confirmation',
    ..._opt
  })
}

export const CONFIRM_REJECT_CANCEL = new Error('cancel')
export const CONFIRM_REJECT_DISMISS = new Error('dismiss')

/**
 * Confirmation sous forme de promise
 * @param opt
 * @returns {Promise<*>}
 */
export const promiseConfirm = (opt) => new Promise((resolve, reject) => {
  dialogConfirm(opt)
    .onOk(resolve)
    .onCancel(() => reject(CONFIRM_REJECT_CANCEL))
    .onDismiss(() => reject(CONFIRM_REJECT_DISMISS))
})

/**
 * Handler pour exclure les exceptions du cancel / dismiss
 * @param f
 * @returns {Promise<void>}
 */
export const tryCatchConfirm = async (f) => {
  try {
    return await f()
  } catch (e) {
    if ([CONFIRM_REJECT_CANCEL, CONFIRM_REJECT_DISMISS].indexOf(e) === -1) {
      return Promise.reject(e)
    }
  }
}

/**
 * Raccourcis pour les notify
 * @type {{
 * positive: function (opt: {}),
 * negative: function (opt: {}),
 * warning: function (opt: {}),
 * info: function (opt: {}),
 * }}
 */
export const toast = {}
;[
  'positive',
  'negative',
  'warning',
  'info'
].forEach((color) => {
  toast[color] = (opt = {}) => {
    const _opt = typeof opt === 'string'
      ? { message: opt }
      : opt
    return Notify.create({
      color,
      ..._opt
    })
  }
})

/**
 * Handler générique pour les traitements long
 * - Affiche un loader
 * - Lance la callback
 * - Masque le loader
 * @param f
 * @param {{message?: string, reject?: boolean}} opt
 *  - reject pour récupérer l'erreur
 * @returns {Promise<void>}
 */
export const loadingHandler = async (f, opt = { message: 'Chargement' }) => {
  Loading.show({
    message: 'Chargement',
    ...opt
  })
  try {
    return await f()
  } catch (e) {
    console.error(e)
    toast.negative({
      message: 'Une erreur est survenue',
      caption: typeof e === 'string'
        ? e
        : e.message
    })
    return opt.reject
      ? Promise.reject(e)
      : undefined
  } finally {
    Loading.hide()
  }
}
