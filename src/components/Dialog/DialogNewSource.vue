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
        </q-form>
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
import { LAYOUT_RULES, SCREENS_SIZE } from '@/consts/app'
import propsSource from '@/mixins/propsSource'

export default {
  name: 'DialogNewSource',
  SCREENS_SIZE,
  LAYOUT_RULES,
  mixins: [
    propsSource,
    dialog
  ],
  created () {
    this.setAutoUpdate(false)
  }
}
</script>
