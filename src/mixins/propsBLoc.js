import { ERROR_POS_MESSAGE, ERROR_POS_TITLE, LAYOUT_RULES, SCREENS_SIZE, UPDATE_BLOCS } from '@/consts/app'
import { toast } from '@/utils/ui'

export default {
  props: {
    id: {
      type: Number,
      default: -1
    },
    bgColor: {
      type: String,
      default: 'silver'
    },
    label: {
      type: String,
      default: 'Label'
    },
    width: {
      type: Number,
      default: LAYOUT_RULES.blocs.minWidth
    },
    height: {
      type: Number,
      default: LAYOUT_RULES.blocs.minHeight
    },
    yPosition: {
      type: Number,
      default: 0
    },
    xPosition: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      value: {
        label: this.label,
        height: this.height,
        width: this.width,
        yPosition: this.yPosition,
        xPosition: this.xPosition
      }
    }
  },
  computed: {
    getXPosition () {
      return `${this.value.xPosition}px`
    },
    getYPosition () {
      return `${this.value.yPosition}px`
    },
    getWidth () {
      return `${this.value.width}px`
    },
    getHeight () {
      return `${this.value.height}px`
    },
    getParsedValues () {
      return {
        id: this.id,
        label: this.value.label,
        height: parseInt(this.value.height),
        width: parseInt(this.value.width),
        yPosition: parseInt(this.value.yPosition),
        xPosition: parseInt(this.value.xPosition)
      }
    }
  },
  watch: {
    value: {
      deep: true,
      handler: _.debounce(function (v) {
        /** WIDTH */
        if (v.width > LAYOUT_RULES.blocs.maxWidth) {
          this.value.width = LAYOUT_RULES.blocs.maxWidth
        }
        if (v.width < LAYOUT_RULES.blocs.minWidth) {
          this.value.width = LAYOUT_RULES.blocs.minWidth
        }

        /** HEIGHT */
        if (v.height > LAYOUT_RULES.blocs.maxHeight) {
          this.value.height = LAYOUT_RULES.blocs.maxHeight
        }
        if (v.height < LAYOUT_RULES.blocs.minHeight) {
          this.value.height = LAYOUT_RULES.blocs.minHeight
        }

        /** Y POSITION */
        this.checkPosition(v.yPosition, (SCREENS_SIZE.height - v.height), 'yPosition')

        /** X POSITION */
        this.checkPosition(v.xPosition, (SCREENS_SIZE.width - v.height), 'xPosition')

        this.$ui.$emit(UPDATE_BLOCS, this.getParsedValues)
      }, 1000)
    }
  },
  methods: {
    checkPosition (axe, compareTo, setter) {
      if (axe > compareTo) {
        this.value[setter] = compareTo

        this.alertePositionnement()
      }
      if (axe < 0) {
        this.value[setter] = 0

        this.alertePositionnement()
      }
    },
    alertePositionnement () {
      toast.negative({
        message: ERROR_POS_TITLE,
        caption: ERROR_POS_MESSAGE
      })
    }
  }
}
