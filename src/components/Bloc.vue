<template>
  <div>
    <zy-bloc v-bind="$props">
      <template #delete>
        <q-btn class="relative-position absolute-top-right"
               color="teal"
               dense
               icon="delete"
               @click="$emit('deleteBloc', id)"
               style="top: 20px; right: 20px; z-index: 2"/>
      </template>
    </zy-bloc>
  </div>
</template>

<script>
import ZyBloc from 'components/Core/ZyBloc'
import propsBLoc from '@/mixins/propsBLoc'

export default {
  name: 'Bloc',
  mixins: [propsBLoc],
  components: {
    ZyBloc
  }
}
</script>
