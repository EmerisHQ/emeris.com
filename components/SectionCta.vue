<template>
  <div id="cta" class="section-cta tm-container tm-wrapper tm-section">
    <graphics-cta class="graphics" />
    <div class="tm-wrapper mt-11">
      <div class="tm-content center text">
        <h1 class="title tm-rf4 tm-rf5-m-up tm-bold tm-lh-title tm-serif">
          Experience a glimpse of DeFi's future today
        </h1>
        <div class="button-container">
          <tm-button
            v-if="isMobile"
            size="m"
            variant="outlined"
            glow
            class="btn"
            disabled
            >Mobile not supported yet</tm-button
          >
          <tm-button
            v-else
            id="diveIn"
            to-link="external"
            :href="getUtmParams('https://app.emeris.com/')"
            size="m"
            variant="outlined"
            glow
            class="btn"
            ><span>Dive in &#8594;</span></tm-button
          >
        </div>
        <div class="tm-rf-1 tm-muted mt-4 center">
          {{ appNotification }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { isMobile } from 'mobile-device-detect'

export default {
  data() {
    return {
      currentUrl: this.$route.fullPath,
      appNotification: isMobile
        ? 'Use the app on a desktop device'
        : 'Requires Google Chrome',
      isMobile,
    }
  },
  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
  },
}
</script>

<style lang="stylus" scoped>
.section-cta
  padding var(--spacing-11) 0
  @media $breakpoint-xl
    padding var(--spacing-11) 0 var(--spacing-10)

.title
  @media $breakpoint-large
    max-width 53rem

.text
  text-align center

.button-container
  position relative
  z-index 1
  width 100%
  .btn
    width 100%
    margin-top var(--spacing-10)
    @media $breakpoint-medium
      width auto
      margin-top var(--spacing-7)

.graphics
  flex 1 0 73%
  width 73%
  max-width 26rem
  @media $breakpoint-medium
    margin-top var(--spacing-6)
</style>
