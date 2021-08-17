<template>
  <div class="section-beta tm-section">
    <div class="portal tm-wrapper tm-container-narrow">
      <div class="top tm-grid-base">
        <div class="column left">
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-serif tm-muted">
            Try the beta today
          </h1>
        </div>
        <div class="column right">
          <div class="steps-grid">
            <div class="step-item">
              <div class="tm-rf2 tm-rf1-xl-up tm-lh-title">01</div>
              <div class="tm-rf2 tm-rf1-xl-up tm-bold tm-lh-title step-name">
                Download Keplr
              </div>
              <div class="tm-rf0 tm-lh-copy step-info tm-measure-narrower">
                For its beta version,<br />Emeris requires you to use it.
              </div>
              <tm-button
                variant="text"
                to-link="external"
                href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en"
                size="m"
                color="var(--black)"
                class="step-link"
                >Get Keplr <span class="icon__right">&#8599;</span></tm-button
              >
            </div>
            <div class="step-item">
              <div class="tm-rf2 tm-rf1-xl-up tm-lh-title">02</div>
              <div class="tm-rf2 tm-rf1-xl-up tm-bold tm-lh-title step-name">
                Connect Keplr to Emeris
              </div>
              <div class="tm-rf0 tm-lh-copy step-info tm-measure-narrower">
                Go to the Emeris app and connect your Keplr wallet.
              </div>
              <tm-button
                variant="text"
                to-link="external"
                :href="getUtmParams('https://app.emeris.com')"
                size="m"
                color="var(--black)"
                class="step-link"
                >Launch App <span class="icon__right">&#8594;</span></tm-button
              >
            </div>
            <div class="step-item">
              <div class="tm-rf2 tm-rf1-xl-up tm-lh-title">03</div>
              <div class="tm-rf2 tm-rf1-xl-up tm-bold tm-lh-title step-name">
                Experience cross-chain DeFi
              </div>
              <div class="tm-rf0 tm-lh-copy step-info tm-measure-narrower">
                Trade, swap, pool and visualize all your assets in one place.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom">
        <tm-link href="https://medium.com/emeris-blog">
          <div class="wrapper">
            <icon-arrow-top-right-16 class="top-right" />
            <div class="logo-container">
              <img
                class="logo"
                src="~/assets/images/elements/surfer-running.png"
                alt=""
              />
            </div>
            <div class="text">
              <h2 class="tm-rf0 tm-lh-title tm-bold">
                Follow the step-by-step guide
              </h2>
              <p class="tm-rf-1 tm-lh-copy mt-2 tm-measure-narrow">
                Learn how to install and connect your wallet, deposit assets,
                make your first swap and more.
              </p>
            </div>
          </div>
        </tm-link>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrowTopRight16 from '~/components/icons/IconArrowTopRight16.vue'

export default {
  components: {
    IconArrowTopRight16,
  },
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
  @media $breakpoint-medium
    padding-bottom var(--spacing-7)
  @media $breakpoint-xl
    padding-bottom var(--spacing-8)

.title
  color var(--trans-gray-300)
  @media $breakpoint-large
    max-width 35rem
    center()
    text-align center

.top .column
  grid-column 1/-1
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-large
    grid-column 1/-1

.right
  margin-top var(--spacing-10)
  @media $breakpoint-medium
    margin-top 0
  @media $breakpoint-large
    margin-top var(--spacing-8)

.section-beta
  color var(--black)

.portal
  max-width 78rem
  padding var(--spacing-11) var(--wrap-gap)
  background var(--portal-gradient)
  clip-path polygon(0 0, 100% calc(0% + 7vw), 100% calc(100% - 7vw), 0 100%)
  @media $breakpoint-medium
    clip-path polygon(0.00% 0.00%,100% 5%,100% 95%,0% 100%)
  @media $breakpoint-xl
    padding var(--spacing-12) var(--spacing-10)
  @media $breakpoint-xl
    padding var(--spacing-11) var(--spacing-10)

.steps-grid
  display grid
  grid-template-columns repeat(4, 1fr)
  gap 0 var(--grid-gap-x)
  @media $breakpoint-medium
    grid-template-columns repeat(8, 1fr)
  @media $breakpoint-large
    grid-template-columns repeat(12, 1fr)

.step-item
  grid-column 1/-1
  @media $breakpoint-large
    grid-column span 4
  &:not(:first-child)
    margin-top var(--spacing-9)
    @media $breakpoint-large
      margin-top 0

.step-name
  margin-top var(--spacing-6)
  @media $breakpoint-medium
    margin-top var(--spacing-4)

.step-info
  margin-top var(--spacing-6)
  @media $breakpoint-medium
    margin-top var(--spacing-5)

.step-link
  margin-top var(--spacing-4)
  @media $breakpoint-medium
    margin-top var(--spacing-2)

.bottom
  display grid
  gap var(--grid-gap-x)
  margin-top var(--spacing-10)
  @media $breakpoint-medium
    width 80%
    margin-top 0
    center()
  @media $breakpoint-large
    width 65%
  @media $breakpoint-xl
    width 48.5%

.wrapper
  position relative
  display grid
  grid-auto-flow column
  grid-template-columns 10rem auto
  gap var(--grid-gap-x)
  align-items center
  margin-top var(--spacing-10)
  background transparent
  box-sizing border-box
  background-clip padding-box
  border 1px solid var(--solid)
  border-radius $border-radius-4
  color var(--black)
  @media $breakpoint-xsmall-only
    grid-auto-flow dense
    grid-template-columns auto
    padding var(--spacing-6)
  @media $breakpoint-medium
    grid-template-columns 6.7rem auto
    padding 0 var(--spacing-7)
  @media $breakpoint-xl
    grid-template-columns 6rem auto
    margin-top var(--spacing-8)

  &:hover,
  &:focus
    .top-right
    .logo
      transition-duration .2s
    .logo
      transform translateX(8%)
    .top-right
      transform translate(4px, -4px)

  &:active
    .top-right
    .logo
      transition-duration .05s
    .logo
      transform translateX(4%)
    .top-right
      transform translate(2px, -2px)

.text
  @media $breakpoint-medium
    padding var(--spacing-7) 0

.top-right
  position absolute
  top 1rem
  right 1rem
  transition transform .25s $ease-out

.logo-container
  height auto
  width 70%
  position relative
  @media $breakpoint-medium
    width 100%

.logo
  mix-blend-mode hard-light
  position relative
  margin-top -28%
  margin-left -1.5rem
  transition transform .25s $ease-out
  animation surfer-levitate 5s ease-in-out alternate infinite
  mask-mode alpha
  mask-repeat no-repeat
  mask-image url('~/assets/images/elements/surfer-running-mask.svg')
  mask-size cover
  backdrop-filter blur(4.7px)
  @media $breakpoint-medium
    width 146%
    max-width none
    margin-top -20%
  @media $breakpoint-xl
    width 163%
    margin-left -1.9rem
    margin-top -24%
</style>
