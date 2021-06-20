<template>
  <div style="max-width: 1000px">
    <div class="q-gutter-sm flex flex-center">
      <q-btn v-for="scene in scenes"
             :key="scene.id"
             :label="scene.label"
             class="row q-pa-md q-px-lg shadow-1"
             @click.prevent="$ui.$emit($options.PAGE_BLOCS, scene.sourceId, scene.id)">
        <q-btn class="relative-position absolute-top-right"
               color="red"
               dense
               icon="delete"
               size="10px"
               style="top: 5px; right: 5px; z-index: 2"
               @click.prevent="deleteScene(scene.id)"/>
      </q-btn>
    </div>

    <q-fab class="fixed-bottom-right"
           color="teal"
           direction="up"
           icon="menu"
           style="right: 50px; bottom: 50px">
      <q-fab-action color="secondary"
                    icon="home"
                    @click="$ui.$emit($options.PAGE_SOURCES)">
        <q-tooltip>
          Retour accueil
        </q-tooltip>
      </q-fab-action>
      <q-fab-action color="primary"
                    icon="add"
                    @click="addScene">
        <q-tooltip>
          Ajouter une scène
        </q-tooltip>
      </q-fab-action>
    </q-fab>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { PAGE_BLOCS, PAGE_SOURCES, UPDATE_SCENES } from '@/consts/app'
import { dialogConfirm } from '@/utils/ui'
import DialogNewScene from 'components/Dialog/DialogNewScene'

const sceneStore = createNamespacedHelpers('scene')
const globalStore = createNamespacedHelpers('global')
export default {
  name: 'Scenes',
  PAGE_BLOCS,
  PAGE_SOURCES,
  computed: {
    ...sceneStore.mapGetters(['scenes', 'allScenes', 'lastScenesId']),
    ...globalStore.mapGetters(['currentSource'])
  },
  created () {
    this.$ui.$on(UPDATE_SCENES, this.updateScenes)
  },
  methods: {
    ...sceneStore.mapActions(['updateScenesAction', 'deleteSceneAction']),
    async addScene () {
      const modal = await this.$q.dialog({
        component: DialogNewScene,
        persistent: true
      })

      modal.onOk((v) => {
        v.id = this.lastScenesId + 1

        this.updateScenes(v)
      })
    },
    updateScenes (newSource = {}) {
      newSource.sourceId = this.currentSource
      this.updateScenesAction(this.editScenes(newSource))
    },
    editScenes (s = {}) {
      const _scenes = _.cloneDeep(this.allScenes)
      const sceneIndex = _scenes.findIndex((el) => el.id === s.id)
      if (sceneIndex === -1) return [..._scenes, s]

      _scenes[sceneIndex] = s
      return _scenes
    },
    deleteScene (id) {
      dialogConfirm({ message: 'Êtes-vous sur de vouloir supprimer la scène ?' })
        .onOk(() => {
          this.deleteSceneAction(id)
        })
    }
  },
  beforeDestroy () {
    this.$ui.$on(UPDATE_SCENES, this.updateScenes)
  }
}
</script>
