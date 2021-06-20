<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script>
import 'lodash'
import { PAGE_BLOCS, PAGE_SCENES, PAGE_SOURCES } from '@/consts/app'
import { createNamespacedHelpers } from 'vuex'

const globalStore = createNamespacedHelpers('global')
export default {
  name: 'App',
  created () {
    this.$ui.$on(PAGE_SCENES, this.goScenesPage)
    this.$ui.$on(PAGE_BLOCS, this.goBlocsPage)
    this.$ui.$on(PAGE_SOURCES, this.goSourcesPage)
  },
  methods: {
    ...globalStore.mapActions(['updateCurrentSourceAction', 'updateCurrentSceneAction']),
    goScenesPage (sourceId) {
      this.updateCurrentSourceAction(sourceId)
      this.updateCurrentSceneAction(null)
      this.$router.push({ path: `/scenes` })
    },
    goBlocsPage (sourceId, sceneId) {
      this.updateCurrentSourceAction(sourceId)
      this.updateCurrentSceneAction(sceneId)
      this.$router.push({ path: `/blocs` })
    },
    goSourcesPage () {
      this.updateCurrentSourceAction(null)
      this.updateCurrentSceneAction(null)
      this.$router.push({ path: '/' })
    }
  },
  beforeDestroy () {
    this.$ui.$off(PAGE_SCENES, this.goScenesPage)
    this.$ui.$off(PAGE_BLOCS, this.goBlocsPage)
    this.$ui.$off(PAGE_SOURCES, this.goSourcesPage)
  }
}
</script>
