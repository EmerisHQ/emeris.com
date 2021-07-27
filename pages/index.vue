<template>
  <main>
    <div ref="button" class="fixed-container">
      <transition name="fade">
        <tm-button
          v-if="show"
          to-link="external"
          href="https://app.emeris.com"
          size="m"
          border-color="var(--primary)"
          variant="outlined"
          glow
          class="btn"
          >Launch app &#8594;</tm-button
        >
      </transition>
      <tm-cookie-banner />
    </div>
    <section-hero />
    <section-intro />
    <kinesis-container>
      <section-trading />
      <section-protocol />
    </kinesis-container>
    <section-rates />
    <section-access />
    <section-beta />
    <section-updates />
    <section-cta ref="cta" />
  </main>
</template>

<script>
import { KinesisContainer } from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
  },
  data() {
    return {
      show: true,
    }
  },

  mounted() {
    this.setupListener()
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler, false)
  },

  methods: {
    scrollHandler() {
      const ctaTop = this.$refs.cta.$el.getBoundingClientRect().top
      const buttonTop = this.$refs.button.getBoundingClientRect().top
      if (ctaTop <= buttonTop) {
        this.show = false
      } else {
        this.show = true
      }
    },

    setupListener() {
      window.addEventListener('scroll', this.scrollHandler, false)
    },
  },
}
</script>

<style lang="stylus" scoped>
.fade-enter-active
.fade-leave-active
  transition opacity .5s

.fade-enter
.fade-leave-to
  opacity 0

.fixed-container
  position fixed
  z-index 9
  bottom 0
  left var(--wrap-gap)
  right var(--wrap-gap)
  @media $breakpoint-medium
    bottom var(--spacing-10)
    left auto
  .btn
    width 100%
    margin-bottom var(--wrap-gap)
    @media $breakpoint-medium
      margin-bottom 0

// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
