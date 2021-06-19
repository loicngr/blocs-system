<template>
  <div :style="{
    width: getWidth,
    height: getHeight,
    background: bgColor,
    position: 'absolute',
    top: getYPosition,
    left: getXPosition
  }"></div>
</template>

<script>
import propsBLoc from '@/mixins/propsBLoc'

export default {
  name: 'ZyBloc',
  mixins: [propsBLoc]
}
</script>
