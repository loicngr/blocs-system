export default {
  props: {
    bgColor: {
      type: String,
      default: 'teal'
    },
    width: {
      type: Number,
      default: 0
    },
    height: {
      type: Number,
      default: 0
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
  computed: {
    getXPosition () {
      return `${this.xPosition}px`
    },
    getYPosition () {
      return `${this.yPosition}px`
    },
    getWidth () {
      return `${this.width}px`
    },
    getHeight () {
      return `${this.height}px`
    }
  }
}
