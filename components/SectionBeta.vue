<template>
  <div class="tm-section section-beta mt-8 js-section-beta">
    <div class="tm-wrapper tm-container-narrow">
      <div class="tm-grid-base">
        <div class="column-header">
          <h1 class="tm-rf6 tm-rf5-m-up tm-bold tm-lh-title tm-serif tm-title">
            Try the beta today
          </h1>
        </div>
        <div class="column">
          <graphics-beta class="graphics" />
        </div>
        <div class="column mt-9">
          <div class="steps-list">
            <div class="steps-list__inner">
              <div class="step-item">
                <div class="tm-rf1 tm-lh-title tm-muted">01</div>
                <div class="mt-5 tm-rf1 tm-lh-title tm-title tm-bold">
                  Download Keplr
                </div>
                <div class="mt-5 tm-text tm-rf0 tm-lh-copy step-info">
                  For its beta version,<br />Emeris requires you to use it.
                </div>
                <tm-button
                  to-link="external"
                  href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en"
                  class="button mt-7"
                >
                  Get Keplr <span class="icon__right _external">&#8599;</span>
                </tm-button>
              </div>
              <div class="step-item">
                <div class="tm-rf1 tm-lh-title tm-muted">02</div>
                <div class="mt-5 tm-rf1 tm-lh-title tm-title tm-bold">
                  Connect to Emeris
                </div>
                <div class="mt-5 tm-text tm-rf0 tm-lh-copy step-info">
                  Launch the Emeris app and connect your Keplr wallet.
                </div>
                <tm-button
                  variant="gradient"
                  to-link="external"
                  :href="getUtmParams('https://app.emeris.com')"
                  class="button mt-7 z-1"
                >
                  Launch App
                  <span class="icon__right">&#8594;</span>
                </tm-button>
              </div>
              <div class="step-item">
                <div class="tm-rf1 tm-lh-title tm-muted">03</div>
                <div class="mt-5 tm-rf1 tm-lh-title tm-title tm-bold">
                  Trade. Swap. Pool.
                </div>
                <div class="mt-5 tm-text tm-rf0 tm-lh-copy step-info">
                  Experience cross-chain DeFi with all your assets in one place.
                </div>
                <tm-button
                  variant="text"
                  to-link="external"
                  href="https://medium.com/emeris-blog/emeris-beta-step-by-step-tutorial-7baace4ecbd4"
                  class="mt-7"
                >
                  <span class="text-gradient">Step-by-step guide</span>
                  <span class="icon__right icon-yellow">&#8599;</span>
                </tm-button>
              </div>
            </div>
          </div>
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
.section-beta
  contain style

.title
  color var(--trans-gray-300)
  @media $breakpoint-large
    max-width 35rem
    center()
    text-align center

.column-header
  position relative
  z-index 1
  grid-column 1/-1
  @media $breakpoint-medium
    grid-column span 5
  @media $breakpoint-xl
    grid-column span 7

.column
  grid-column 1/-1

.graphics
  margin-top 5rem
  @media $breakpoint-medium
    margin-top -1.5rem
  @media $breakpoint-xl
    margin-top -2rem

.section-beta
  color var(--black)

.steps-grid
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 0 var(--grid-gap-x)
  @media $breakpoint-medium
    grid-template-columns repeat(8, 1fr)
  @media $breakpoint-xl
    grid-template-columns repeat(12, 1fr)

.steps-list
  margin-inline calc(-1 * var(--wrap-gap))
  @media $breakpoint-medium
    margin-inline 0
  &__inner
    overflow auto
    display flex
    padding-inline: var(--wrap-gap)
    padding-bottom var(--spacing-7)
    @media $breakpoint-medium
      overflow initial
      display grid
      padding 0
      grid-template-columns: repeat(3, 1fr)
      gap: 0 var(--grid-gap-x)

.step-item
  flex-shrink: 0
  grid-column 1/-1
  margin-left calc(2 * var(--grid-gap-x))
  @media $breakpoint-medium
    grid-column span 1
    margin-left 0
  @media $breakpoint-xl
    padding-inline 0
  &:first-child
    margin-left 0

.step-info
  max-width: 16rem

.text-gradient
  background var(--title-gradient)
  -webkit-background-clip text
  background-clip text
  -webkit-text-fill-color transparent
  text-fill-color transparent
.icon-yellow
  color #fffe39

.button
  @media $breakpoint-xsmall-only
    display flex
    width 100%
  @media $breakpoint-small-only
    display flex
    width 100%
</style>
