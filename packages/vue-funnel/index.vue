<script>
export default {
  name: 'vue-funnel',
  props: {
    maxWidth: {
      type: Number,
      default: 300
    },
    minWidth: {
      type: Number,
      default: 150
    },
    rowSpace: {
      type: Number,
      default: 8
    },
    rowHeight: {
      type: Number,
      default: 50
    },
    colors: {
      type: Array,
      default: () => ['#576DE7', '#8B74F2', '#A37EEF', '#ccc', '#ccc']
    },
    isLeft: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {}
  },
  computed: {
    dynamicStyle() {
      return (n, detal, {min, max}) => {}
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
    // 过滤掉 slots中 tag为underfined 的 vnode
    const slots = this.$slots.default.filter(node => !!node.tag)
    console.log(this.$slots, 'this.slots')
    return h(
      'div',
      {
        class: {
          'funel-box': true
        }
      },
      slots.map((slot, index) =>
        h(
          'div',
          {
            style: {
              display: 'flex',
              'min-width': 'auto',
              [this.isLeft ? 'paddingLeft' : 'paddingRight']:
                index * this.increment + 'px',
              marginTop: this.rowSpace + 'px'
            }
          },
          this.renderSlots(h, {slot, index})
        )
      )
    )
  },
  methods: {
    renderSlots(h, {slot, index}) {
      const {
        dynamicStyle,
        increment,
        renderTriangle,
        rowHeight,
        maxWidth
      } = this
      const centerVnode = h(
        slot.tag,
        {
          style: {
            width: maxWidth - index * increment * 2 + 'px',
            background: this.colors[index],
            height: rowHeight + 'px',
            position: 'relative',
            float: [this.isLeft ? 'left' : 'right']
          }
        },
        slot.children
      )
      const infoSlot = h(
        'div',
        {
          style: {
            [this.isLeft ? 'paddingLeft' : 'paddingRight']:
              index * this.increment + 'px',
            flex: 1
          }
        },
        this.$slots[`info${index}`]
      )
      const vnode = [
        renderTriangle(h, index, 'left'),
        centerVnode,
        renderTriangle(h, index, 'right')
      ]
      vnode.splice(this.isLeft ? vnode.length : 0, 0, infoSlot)
      return vnode
    },
    renderTriangle(h, index, type = 'left') {
      const {rowHeight, increment} = this
      return h(
        'div',
        {
          style: {
            position: 'relative',
            float: [this.isLeft ? 'left' : 'right'],
            width: 0,
            height: 0,
            borderTop:
              rowHeight + 'px' + ' ' + 'solid' + ' ' + this.colors[index],
            [type == 'left' ? 'borderLeft' : 'borderRight']:
              increment + 'px' + ' ' + 'solid' + ' ' + 'transparent'
          }
        },
        this.$slots[`arrow-${type}${index}`]
      )
    }
  }
}
</script>