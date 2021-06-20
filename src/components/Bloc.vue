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
import ZyBloc from '@/components/Core/ZyBloc'
import propsBloc from '@/mixins/propsBloc'

export default {
  name: 'Bloc',
  mixins: [propsBloc],
  components: {
    ZyBloc
  }
}
</script>
