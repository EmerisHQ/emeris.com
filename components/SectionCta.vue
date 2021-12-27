<template>
  <div id="cta" class="section-cta tm-section mt-9">
    <graphics-cta class="graphics" />
    <div class="tm-wrapper tm-container">
      <div class="tm-center text">
        <h1 class="tm-title tm-lh-title tm-serif tm-rf5 tm-bold">
          Experience a&nbsp;glimpse of&nbsp;DeFi's future today
        </h1>
        <div class="button-container">
          <tm-button
            size="m"
            variant="outlined"
            glow
            class="btn mobile"
            disabled
            >Mobile not supported yet</tm-button
          >
          <tm-button
            id="diveIn"
            to-link="external"
            :href="getUtmParams('https://app.emeris.com/')"
            size="m"
            variant="gradient"
            glow
            class="btn"
          >
            Dive into the app <span class="icon__right">&rarr;</span>
          </tm-button>
        </div>
        <div class="tm-rf-1 tm-muted mt-4 center mobile-text">
          Use the app on a desktop device
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentUrl: this.$route.fullPath,
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
  position relative
  min-height: 90vh
  display flex
  align-items center
//   padding var(--spacing-11) 0
//   @media $breakpoint-xl
//     padding var(--spacing-11) 0 var(--spacing-10)

.graphics
  position absolute
  top 50%
  left: 50%
  width 73%
  max-width 26rem
  transform: translate(-50%, -50%)

.text
  max-width: 42.625rem
  text-align center

.button-container
  position relative
  z-index 1
  width 100%
  .btn
    display none
    width 100%
    margin-top var(--spacing-10)
    margin-left 0
    @media $breakpoint-medium
      display inline-flex
      width auto
      margin-top var(--spacing-7)
    &.mobile
      display inline-flex
      @media $breakpoint-medium
        display none

.mobile-text
  @media $breakpoint-medium
    display none
</style>
