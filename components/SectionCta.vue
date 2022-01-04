<template>
  <div id="cta" class="section-cta tm-section">
    <div class="tm-wrapper tm-container">
      <div class="tm-center text">
        <div class="title">
          <graphics-cta class="graphics" />
          <h1 class="tm-title tm-lh-title tm-serif tm-rf4 tm-rf5-m-up tm-bold">
            <span>
              Experience a&nbsp;glimpse<br />of&nbsp;DeFi's future today
            </span>
          </h1>
        </div>
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
  min-height: 80vh
  display flex
  align-items center
  margin-top 10vh
  @media $breakpoint-medium
    min-height: 0
    margin-top var(--spacing-10)
  @media $breakpoint-xl
    min-height: 90vh
    margin-top var(--spacing-9)
//   padding var(--spacing-11) 0
//   @media $breakpoint-xl
//     padding var(--spacing-11) 0 var(--spacing-10)

.title
  position relative

.graphics
  position absolute
  top 50%
  left: 50%
  width 100%
  max-width 26rem
  transform: translate(-50%, -50%)

.text
  max-width: 42.625rem
  text-align center

.button-container
.mobile-text
  max-width: 17rem
  margin-inline: auto

.button-container
  position relative
  z-index 1
  width 100%
  @media $breakpoint-medium
    margin-top var(--spacing-8)
  @media $breakpoint-xl
    margin-top var(--spacing-6)
  .btn
    display none
    width 100%
    margin-top var(--spacing-9)
    margin-left 0 !important
    @media $breakpoint-medium
      display inline-flex
      width auto
      margin-top 0
    &.mobile
      display inline-flex
      @media $breakpoint-medium
        display none

.mobile-text
  @media $breakpoint-medium
    display none
</style>
