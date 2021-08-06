<template>
  <div
    :class="{ 'open-item': maxHeight != '0px', disabledx: disabled }"
<<<<<<< HEAD
    class="tm-collapse-item mt-6"
=======
    class="tm-collapse-item mt-7"
>>>>>>> 81155e8275b46a46f5bae9a96d528f613a94c44d
    @mouseover="mouseover"
    @mouseout="mouseout"
  >
    <button
<<<<<<< HEAD
      class="tm-collapse-item--header tm-muted tm-medium"
=======
      class="tm-collapse-item--header tm-rf1 tm-muted tm-medium"
>>>>>>> 81155e8275b46a46f5bae9a96d528f613a94c44d
      variant="text"
      @click="toggleContent"
    >
      <span v-if="!notArrow" class="tm-collapse-item--icon-header">
        <icon-plus-16 />
      </span>
      <slot name="header"></slot>
    </button>
    <div ref="content" :style="styleContent" class="tm-collapse-item--content">
<<<<<<< HEAD
      <div class="con-content--item tm-rf0 tm-lh-copy">
=======
      <div class="con-content--item tm-rf0 tm-copy">
>>>>>>> 81155e8275b46a46f5bae9a96d528f613a94c44d
        <slot />
      </div>
    </div>
  </div>
</template>
<<<<<<< HEAD

=======
>>>>>>> 81155e8275b46a46f5bae9a96d528f613a94c44d
<script>
import IconPlus16 from '~/components/icons/IconPlus16.vue'

export default {
  components: {
    IconPlus16,
  },
  props: {
    open: {
      default: false,
      type: Boolean,
    },
    disabled: {
      default: false,
      type: Boolean,
    },
    notArrow: {
      default: false,
      type: Boolean,
    },
    iconArrow: {
      default: 'keyboard_arrow_down',
      type: String,
    },
    iconPack: {
      default: 'material-icons',
      type: String,
    },
    sst: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    maxHeight: '0px',
    // only used for sst
    dataReady: false,
  }),
  computed: {
    accordion() {
      return this.$parent.accordion
    },
    openHover() {
      return this.$parent.openHover
    },
    styleContent() {
      return {
        maxHeight: this.maxHeight,
      }
    },
  },
  watch: {
    maxHeight() {
      this.$parent.emitChange()
    },
    ready(newVal, oldVal) {
      if (oldVal !== newVal && newVal) {
        this.initMaxHeight()
      }
    },
  },
  mounted() {
    window.addEventListener('resize', this.changeHeight)
    const maxHeightx = this.$refs.content.scrollHeight
    if (this.open) {
      this.maxHeight = `${maxHeightx}px`
    }
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.changeHeight)
  },
  methods: {
    changeHeight() {
      const maxHeightx = this.$refs.content.scrollHeight
      if (this.maxHeight !== '0px') {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    toggleContent() {
      if (this.openHover || this.disabled) return
      if (this.accordion) {
        this.$parent.closeAllItems(this.$el)
      }
      if (this.sst && !this.dataReady) {
        this.$emit('fetch', {
          done: () => {
            this.initMaxHeight()
            this.dataReady = true
          },
        })
      } else {
        this.initMaxHeight()
      }
    },
    initMaxHeight() {
      const maxHeightx = this.$refs.content.scrollHeight
      if (this.maxHeight === '0px') {
        this.maxHeight = `${maxHeightx}px`
      } else {
        this.maxHeight = `0px`
      }
    },
    mouseover() {
      if (this.disabled) return
      const maxHeightx = this.$refs.content.scrollHeight
      if (this.openHover) {
        this.maxHeight = `${maxHeightx}px`
      }
    },
    mouseout() {
      if (this.openHover) {
        this.maxHeight = `0px`
      }
    },
  },
}
</script>
