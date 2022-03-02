<template>
  <main>
    <div ref="button" class="fixed-container">
      <tm-cookie-banner />
    </div>
    <section-hero :open-video="openVideo" />
    <section-launch id="launch-app" :open-video="openVideo" />
    <section-intro />
    <section-trading />
    <section-rates />
    <section-access />
    <section-beta />
    <section-updates />

    <div ref="cta">
      <section-cta />
    </div>

    <modal-video :visible="showVideo" :close-modal="closeVideo" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      showButton: true,
      showVideo: false,
      currentUrl: this.$route.fullPath,
    }
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
      const ctaRect = this.$refs.cta.getBoundingClientRect()
      const ctaTop = ctaRect.top + 100
      const buttonTop = this.$refs.button.getBoundingClientRect().top
      if (ctaTop <= buttonTop) {
        this.showButton = false
      } else {
        this.showButton = true
      }
    },

    openVideo() {
      this.showVideo = true
    },

    closeVideo(player) {
      !!player && player.pauseVideo()
      this.showVideo = false
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
  .btn
    @media $breakpoint-medium
      display none
</style>
