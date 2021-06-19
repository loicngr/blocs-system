<template>
  <div :style="{
    width: getWidth,
    height: getHeight,
    background: bgColor,
    position: 'absolute',
    top: getYPosition,
    left: getXPosition
  }"
       class="bloc flex flex-center shadow-1 scroll">

    <slot name="delete"></slot>
    <q-form class="q-gutter-sm flex flex-center">
      <q-input v-model="value.height"
               bg-color="teal"
               color="white"
               filled
               label="Hauteur"
               type="number"/>
      <q-input v-model="value.width"
               bg-color="teal"
               color="white"
               filled
               label="Longueur"
               type="number"/>
      <q-input v-model="value.xPosition"
               bg-color="teal"
               color="white"
               filled
               label="Position X"
               type="number"/>
      <q-input v-model="value.yPosition"
               bg-color="teal"
               color="white"
               filled
               label="Position Y"
               type="number"/>
    </q-form>
    <q-tooltip>
      <h4 class="q-ma-none"
          style="font-size: 2rem">
        {{ label }}
      </h4>
    </q-tooltip>
  </div>
</template>

<script>
import propsBLoc from '@/mixins/propsBLoc'

export default {
  name: 'ZyBloc',
  mixins: [propsBLoc]
}
</script>
