<template>
  <div ref="block">
    <div ref="parallax" :class="[sectionClass]">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    power: {
      default: 10,
      type: Number,
    },
    sectionClass: {
      type: String,
      default: 'parallax',
    },
    direction: {
      type: String,
      default: 'up',
    },
  },

  data() {
    return {
      el: null,
    }
  },

  computed: {
    directionValue() {
      return this.direction === 'down' ? +1 : -1
    },
  },

  mounted() {
    this.el = this.$refs.parallax
    window.requestAnimationFrame =
      window.requestAnimationFrame ||
      window.mozRequestAnimationFrame ||
      window.webkitRequestAnimationFrame ||
      window.msRequestAnimationFrame ||
      function (f) {
        setTimeout(f, 1000 / 60)
      }
    this.init()
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler, false)
  },

  methods: {
    animateElement() {
      const $parent = this.$refs.block
      const power = this.power
      const $target = this.$refs.parallax

      const top = $parent.getBoundingClientRect().top
      const height = $parent.offsetHeight
      const bottom = top + height
      let ratio = bottom / (window.innerHeight + height)
      ratio = ratio * 2 - 1
      ratio = ratio < -1 ? -1 : ratio > 1 ? 1 : ratio

      $target.style.transform = `translate3d(0, ${
        (-ratio * power * window.innerHeight) / 100
      }px ,0)`
    },

    scrollHandler() {
      window.requestAnimationFrame(() => {
        if (this.isInView(this.$refs.parallax)) {
          this.animateElement()
        }
      })
    },

    isInView(el) {
      const rect = el.getBoundingClientRect()

      return (
        rect.bottom >= 0 &&
        rect.top <=
          (window.innerHeight || document.documentElement.clientHeight)
      )
    },

    setupListener() {
      window.addEventListener('scroll', this.scrollHandler, false)
    },

    init() {
      this.setupListener()
    },
  },
}
</script>

<style lang="stylus" scoped>
.parallax
  position: relative
  will-change: transform
</style>
