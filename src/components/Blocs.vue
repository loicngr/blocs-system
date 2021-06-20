<template>
  <div class="flex flex-center">
    <bloc v-for="bloc in blocs"
          :id="bloc.id"
          :key="bloc.id"
          :bg-color="bloc.bgColor"
          :height="bloc.height"
          :label="bloc.label"
          :width="bloc.width"
          :x-position="bloc.xPosition"
          :y-position="bloc.yPosition"
          @deleteBloc="deleteBloc"/>

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
                    @click="addBloc">
        <q-tooltip>
          Ajouter un bloc
        </q-tooltip>
      </q-fab-action>
    </q-fab>
  </div>
</template>

<script>
import bloc from '@/components/Bloc'
import { createNamespacedHelpers } from 'vuex'
import DialogNewBloc from '@/components/Dialog/DialogNewBloc'
import { PAGE_SOURCES, UPDATE_BLOCS } from '@/consts/app'

const blocStore = createNamespacedHelpers('bloc')
const globalStore = createNamespacedHelpers('global')
export default {
  name: 'Scene',
  PAGE_SOURCES,
  components: {
    bloc
  },
  computed: {
    ...blocStore.mapGetters(['blocs', 'allBlocs', 'lastBlocsId']),
    ...globalStore.mapGetters(['currentSource', 'currentScene'])
  },
  created () {
    this.$ui.$on(UPDATE_BLOCS, this.updateBlocs)
  },
  methods: {
    ...blocStore.mapActions(['updateBlocsAction', 'deleteBlocAction']),
    async addBloc () {
      const modal = await this.$q.dialog({
        component: DialogNewBloc,
        persistent: true
      })

      modal.onOk((v) => {
        v.id = this.lastBlocsId + 1

        this.updateBlocs(v)
      })
    },
    deleteBloc (id) {
      this.deleteBlocAction(id)
    },
    updateBlocs (newBloc = {}) {
      newBloc.sourceId = this.currentSource
      newBloc.sceneId = this.currentScene

      this.updateBlocsAction(this.editBloc(newBloc))
    },
    editBloc (b = {}) {
      const _blocs = _.cloneDeep(this.allBlocs)
      const blocIndex = _blocs.findIndex((el) => el.id === b.id)
      if (blocIndex === -1) return [..._blocs, b]

      _blocs[blocIndex] = b
      return _blocs
    }
  },
  beforeDestroy () {
    this.$ui.$off(UPDATE_BLOCS, this.updateBlocs)
  }
}
</script>
