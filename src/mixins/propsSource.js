import { UPDATE_SOURCES } from '@/consts/app'

export default {
  props: {
    id: {
      type: Number,
      default: -1
    },
    label: {
      type: String,
      default: 'Label'
    }
  },
  data () {
    return {
      autoUpdate: true,
      value: {
        label: this.label
      }
    }
  },
  computed: {
    getParsedValues () {
      return {
        id: this.id,
        label: this.value.label
      }
    }
  },
  watch: {
    value: {
      deep: true,
      handler: _.debounce(function () {
        if (this.autoUpdate) this.$ui.$emit(UPDATE_SOURCES, this.getParsedValues)
      }, 1000)
    }
  },
  methods: {
    setAutoUpdate (status = true) {
      this.autoUpdate = status
    }
  }
}
