<template>
  <div id="q-app">
    <router-view/>
  </div>
</template>
<script>
import 'lodash'
import { createNamespacedHelpers } from 'vuex'

const { mapGetters, mapActions } = createNamespacedHelpers(
  'bloc'
)
export default {
  name: 'App',
  computed: {
    ...mapGetters(['blocs'])
  },
  methods: {
    ...mapActions(['blocsAction'])
  },
  mounted () {
    this.blocsAction([...this.blocs, {
      id: 2,
      width: 600,
      height: 600,
      y: 50,
      x: 50,
      bgColor: 'teal'
    }])
    console.log(this.blocs)
  }
}
</script>
