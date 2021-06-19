import { dialogConfirm } from '@/utils/ui'

export default {
  props: {
    persistent: Boolean
  },
  methods: {
    show () {
      this.$refs.dialog.show()
    },

    hide () {
      this.$refs.dialog.hide()
    },

    onDialogHide () {
      this.$emit('hide')
    },

    onOKClick () {
      const _value = this.getParsedValues ? this.getParsedValues : null
      this.$emit('ok', _value)
      this.hide()
    },

    onCancelClick () {
      dialogConfirm({ message: 'Êtes-vous sur de vouloir fermer la modal ?' })
        .onOk(() => this.hide())
    }
  }
}
