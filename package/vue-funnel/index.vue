<script>
export default {
  name: 'vue-funnel',
  props: {
    maxWidth: [String, Number],
    minWidth: [String, Number],
    rowSpace: [String, Number]
  },
  data() {
    return {}
  },
  computed: {
    dynamicStyle() {
      return (n, detal, {min, max}) => {
        
      }
    },
    slotsLength() {
      const slots = this.$slots.default.filter(node => !!node.tag)
      return slots.length
    },
    increment() {
      const num = this.slotsLength
      const space = this.maxWidth - this.minWidth
      return space / num
    }
  },
  render(h) {
    const slots = this.$slots.default.filter(node => !!node.tag)
    const {dynamicStyle, increment} = this
    return h(
      'div',
      {
        class: {
          'funel-box': true
        }
      },
      slots.map((slot, index) =>
        h(
          slot.tag,
          {
            style: dynamicStyle(index + 1, increment, {
              max: this.maxWidth,
              min: this.minWidth
            })
          },
          slot.children
        )
      )
    )
  }
}
</script>
<style lang="less">
.vue-funnel {
  .funel-box {
    width: 100%;
    display: inline-block;
  }
}
</style>
