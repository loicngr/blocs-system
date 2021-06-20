<template>
  <q-page class="editor flex flex-center">

    <h1>Z Overlay</h1>

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
      <q-fab-action color="primary"
                    icon="add"
                    @click="addBloc"/>
    </q-fab>
  </q-page>
</template>

<script>
import bloc from '@/components/bloc'
import { createNamespacedHelpers } from 'vuex'
import DialogNewBloc from '@/components/Dialog/DialogNewBloc'
import { UPDATE_BLOCS } from '@/consts/app'

const { mapGetters, mapActions } = createNamespacedHelpers(
  'bloc'
)
export default {
  name: 'PageIndex',
  components: {
    bloc
  },
  computed: {
    ...mapGetters(['blocs', 'lastBlocsId'])
  },
  created () {
    this.$ui.$on(UPDATE_BLOCS, this.updateBlocs)
  },
  methods: {
    ...mapActions(['updateBlocsAction', 'deleteBlocAction']),
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
      this.updateBlocsAction(this.editBloc(newBloc))
    },
    editBloc (b = {}) {
      const _blocs = _.cloneDeep(this.blocs)
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
