<template>
  <div>
    <zy-bloc v-bind="$props"
             v-on="$listeners"/>
  </div>
</template>

<script>
import ZyBloc from 'components/Core/ZyBloc'
import propsBLoc from 'src/mixins/propsBLoc'

export default {
  name: 'Bloc',
  mixins: [propsBLoc],
  components: {
    ZyBloc
  }
}
</script>
