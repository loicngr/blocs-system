<template>
  <q-dialog ref="dialog"
            :persistent="persistent"
            @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <q-card-section>
        <q-form class="q-gutter-sm flex flex-center">
          <q-input v-model="value.label"
                   bg-color="teal"
                   color="white"
                   filled
                   label="Label"
                   type="text"/>
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

        <h5 class="full-width q-pl-sm q-mb-md text-uppercase">Informations :</h5>
        <h6 class="full-width q-pl-sm q-mb-md q-mt-none">
          Position X maximal : {{ $options.SCREENS_SIZE.height }} <br>
          Position Y maximal : {{ $options.SCREENS_SIZE.width }}
        </h6>
        <h6 class="full-width q-pl-sm q-mt-none">
          Longueur minimal : {{ $options.LAYOUT_RULES.blocs.minWidth }} <br>
          Hauteur minimal : {{ $options.LAYOUT_RULES.blocs.minHeight }}
        </h6>
        <q-img
          src="@/assets/x_y.png"
          spinner-color="white"
          style="height: 140px; max-width: 150px"
        />
      </q-card-section>

      <q-card-actions align="right">
        <q-btn color="primary"
               label="OK"
               @click="onOKClick"/>
        <q-btn color="primary"
               label="Cancel"
               @click="onCancelClick"/>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import dialog from '@/mixins/dialog'
import propsBLoc from '@/mixins/propsBLoc'
import { LAYOUT_RULES, SCREENS_SIZE } from '@/consts/app'

export default {
  name: 'DialogNewBloc',
  SCREENS_SIZE,
  LAYOUT_RULES,
  mixins: [
    propsBLoc,
    dialog
  ]
}
</script>
