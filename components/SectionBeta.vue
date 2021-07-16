<template>
  <div class="section-beta tm-section">
    <div class="portal tm-wrapper tm-content">
      <div class="top tm-grid-base">
        <div class="left">
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-serif tm-muted">
            Try<br />the best today
          </h1>
        </div>
        <div class="right">
          <tm-link href="https://tutorials.cosmos.network">
            <div class="wrapper mt-9">
              <icon-arrow-top-right-16 class="top-right" />
              <div class="logo-container">
                <img
                  class="logo"
                  src="~/assets/images/elements/surfer-running.png"
                  alt=""
                />
              </div>
              <div class="text">
                <h2 class="tm-rf0 tm-lh-title tm-bold">New to DeFi?</h2>
                <p class="tm-rf-1 tm-lh-copy mt-2">
                  Don’t be afraid. Follow the simple tutorial to learn how to
                  swap your first coins.
                </p>
              </div>
            </div>
          </tm-link>
        </div>
      </div>
      <div class="bottom mt-10">
        <div class="step-item">
          <div class="tm-rf1 tm-lh-title">01</div>
          <div class="tm-rf1 tm-bold tm-lh-title mt-5">Download Keplr</div>
          <div class="tm-rf0 tm-lh-copy mt-5">
            For its beta version, Emeris requires you to use it.
          </div>
          <tm-button
            variant="text"
            to-link="external"
            href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en"
            size="s"
            color="var(--success)"
            class="mt-5"
            >Get Keplr <span class="icon__right">&#8599;</span></tm-button
          >
        </div>
        <div class="step-item">
          <div class="tm-rf1 tm-lh-title">02</div>
          <div class="tm-rf1 tm-bold tm-lh-title mt-5">
            Connect Keplr to Emeris
          </div>
          <div class="tm-rf0 tm-lh-copy mt-5">
            Go to the Emeris app and connect your Keplr wallet.
          </div>
          <tm-button
            variant="text"
            to-link="external"
            href="https://app.emeris.com"
            size="s"
            color="var(--success)"
            class="mt-5"
            >Launch App <span class="icon__right">&#8594;</span></tm-button
          >
        </div>
        <div class="step-item">
          <div class="tm-rf1 tm-lh-title">03</div>
          <div class="tm-rf1 tm-bold tm-lh-title mt-5">
            Experience cross-chain DeFi
          </div>
          <div class="tm-rf0 tm-lh-copy mt-5">
            Trade, swap, pool and visualize all your assets in one place.
          </div>
        </div>
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
}
</script>

<style lang="stylus" scoped>
.wrapper
  position relative
  color var(--black)

.title
  color var(--trans-gray-300)

.top .left
.top .right
  grid-column 1/-1

.section-beta
  color var(--black)

.portal
  padding var(--spacing-12) var(--spacing-10)
  max-width 78rem
  background var(--portal-gradient)
  clip-path polygon(0 0, 100% calc(0% + 26vw), 100% 100%, 0 100%)

.bottom
  display grid
  gap var(--grid-gap-x)

.wrapper
  display grid
  grid-auto-flow column
  grid-template-columns 10rem auto
  gap var(--grid-gap-x)
  align-items center
  border 1px solid var(--black)
  border-radius $border-radius-4
  hover-raise(-3px)

.text
  padding var(--spacing-7) 0

.top-right
  position absolute
  top 1rem
  right 1rem

.logo-container
  height auto
  width 100%
  position relative

.logo
  position absolute
  margin-top -60%

@media $breakpoint-xsmall-only
  .wrapper
    grid-auto-flow dense
    grid-template-columns auto
    padding var(--spacing-7)

  .logo
    position relative
    margin-top -30%

// @media $breakpoint-small

@media $breakpoint-medium
  .portal
    clip-path polygon(0.00% 0.00%,100% 5%,100% 95%,0% 100%)

@media $breakpoint-large
  .bottom
    grid-template-columns repeat(2, 1fr)

@media $breakpoint-xl
  .top .left
    grid-column 1/span 6

  .top .right
    grid-column 7/span 6

  .bottom
    grid-template-columns repeat(auto-fit, minmax(0, 1fr))

// @media $breakpoint-xxl
</style>
