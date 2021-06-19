<template>
  <q-page class="editor flex flex-center">

    <h1>Z Overlay</h1>

    <bloc :height=200
          :width=500
          :x-position=50
          :y-position=50
          bg-color="red"/>

    <bloc :height=200
          :width=200
          :x-position=250
          :y-position=300
          bg-color="yellow"/>

  </q-page>
</template>

<script>
import bloc from 'components/bloc'

export default {
  name: 'PageIndex',
  components: {
    bloc
  }
}
</script>
