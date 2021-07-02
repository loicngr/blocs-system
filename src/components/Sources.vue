<template>
  <div style="max-width: 1000px">
    <div class="q-gutter-sm flex flex-center">
      <q-btn v-for="source in sources"
             :key="source.id"
             :label="source.label"
             class="row q-pa-md q-px-lg shadow-1"
             @click.prevent="$ui.$emit($options.PAGE_SCENES, source.id)">
        <q-btn class="relative-position absolute-top-right"
               color="red"
               dense
               icon="delete"
               size="10px"
               style="top: 5px; right: 5px; z-index: 2"
               @click.prevent="deleteSource(source.id)"/>
      </q-btn>
    </div>

    <q-fab class="fixed-bottom-right"
           color="teal"
           direction="up"
           icon="menu"
           style="right: 50px; bottom: 50px">
      <q-fab-action color="primary"
                    icon="add"
                    @click="addSource">
        <q-tooltip>
          Ajouter une source
        </q-tooltip>
      </q-fab-action>
    </q-fab>
  </div>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import DialogNewSource from 'components/Dialog/DialogNewSource'
import { PAGE_SCENES, UPDATE_SOURCES } from '@/consts/app'
import { dialogConfirm } from '@/utils/ui'

const sourceStore = createNamespacedHelpers('source')
const sceneStore = createNamespacedHelpers('scene')
const blocStore = createNamespacedHelpers('bloc')
export default {
  name: 'Sources',
  PAGE_SCENES,
  computed: {
    ...sourceStore.mapGetters(['sources', 'lastSourcesId'])
  },
  created () {
    this.$ui.$on(UPDATE_SOURCES, this.updateSources)
  },
  methods: {
    ...sourceStore.mapActions(['updateSourcesAction', 'deleteSourceAction']),
    ...sceneStore.mapActions(['deleteScenesAction']),
    ...blocStore.mapActions(['deleteBlocsAction']),
    async addSource () {
      const modal = await this.$q.dialog({
        component: DialogNewSource,
        persistent: true
      })

      modal.onOk((v) => {
        v.id = this.lastSourcesId + 1
        this.updateSources(v)
      })
    },
    updateSources (newSource = {}) {
      this.updateSourcesAction(this.editSource(newSource))
    },
    editSource (s = {}) {
      const _sources = _.cloneDeep(this.sources)
      const blocIndex = _sources.findIndex((el) => el.id === s.id)
      if (blocIndex === -1) return [..._sources, s]

      _sources[blocIndex] = s
      return _sources
    },
    deleteSource (id) {
      dialogConfirm({ message: 'Êtes-vous sur de vouloir supprimer la source ?' })
        .onOk(() => {
          this.deleteBlocsAction(id, -1)
          this.deleteScenesAction(id)
          this.deleteSourceAction(id)
        })
    }
  },
  beforeDestroy () {
    this.$ui.$on(UPDATE_SOURCES, this.updateSources)
  }
}
</script>
