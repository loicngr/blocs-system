<template>
  <q-page class="scroll">
    <h1 class="full-width text-center">Scènes</h1>
    <div class="flex flex-center">
      <Scenes />
    </div>
  </q-page>
</template>

<script>
import Scenes from 'components/Scenes'

export default {
  name: 'PageScenes',
  components: {
    Scenes
  }
}
</script>
