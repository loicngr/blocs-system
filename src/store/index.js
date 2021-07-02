import Vue from 'vue'
import Vuex from 'vuex'

import source from './source'
import scene from './scene'
import bloc from './bloc'
import global from './global'
import localStoragePlugin from '@/store/plugins/localStoragePlugin'

Vue.use(Vuex)

/*
 * If not building with SSR mode, you can
 * directly export the Store instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Store instance.
 */

export default function (/* { ssrContext } */) {
  const Store = new Vuex.Store({
    modules: {
      source,
      scene,
      bloc,
      global
    },
    plugins: [localStoragePlugin],

    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: process.env.DEBUGGING
  })

  if (process.env.DEV && module.hot) {
    module.hot.accept(['./source', './scene', './bloc', './global'], () => {
      const newSource = require('./source').default
      const newScene = require('./scene').default
      const newBloc = require('./bloc').default
      const newGlobal = require('./global').default
      Store.hotUpdate({ modules: { source: newSource, scene: newScene, bloc: newBloc, global: newGlobal } })
    })
  }

  return Store
}
