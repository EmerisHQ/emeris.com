<template>
  <main>
    <div ref="button" class="fixed-container">
      <transition name="fade">
        <div v-if="show">
          <tm-button
            to-link="external"
            :href="getUtmParams('https://app.emeris.com')"
            size="m"
            border-color="var(--primary)"
            variant="outlined"
            glow
            class="btn"
            >Launch app &#8594;</tm-button
          >
          <div class="tm-rf-1 tm-muted mt-4 center">Requires Google Chrome</div>
        </div>
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
      currentUrl: this.$route.fullPath,
    }
  },

  mounted() {
    this.setupListener()
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler, false)
  },

  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
    scrollHandler() {
      const ctaRect = this.$refs.cta.$el.getBoundingClientRect()
      const ctaTop = ctaRect.top + 100
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
  z-index 10
  bottom 0
  left var(--wrap-gap)
  right var(--wrap-gap)
  @media $breakpoint-medium
    bottom var(--spacing-9)
    left auto
  .btn
  .wizard
    width 100%
    margin-bottom var(--wrap-gap)
    @media $breakpoint-medium
      margin-bottom 0

.center
  text-align center

// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
