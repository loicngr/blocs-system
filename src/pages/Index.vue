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
import bloc from 'components/bloc'
import { createNamespacedHelpers } from 'vuex'
import DialogNewBloc from 'components/Dialog/DialogNewBloc'

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
  methods: {
    ...mapActions(['updateBlocsAction', 'deleteBlocAction']),
    async addBloc () {
      const modal = await this.$q.dialog({
        component: DialogNewBloc,
        persistent: true
      })

      modal.onOk((v) => {
        this.updateBlocsAction([...this.blocs, {
          id: this.lastBlocsId + 1,
          label: v.label,
          height: v.height,
          width: v.width,
          yPosition: v.yPosition,
          xPosition: v.xPosition
        }])
      })
    },
    deleteBloc (id) {
      this.deleteBlocAction(id)
    }
  }
}
</script>
