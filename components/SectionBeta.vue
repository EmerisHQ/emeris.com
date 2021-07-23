<template>
  <div class="section-beta tm-section">
    <div class="portal tm-wrapper tm-container-narrow">
      <div class="top tm-grid-base">
        <div class="left">
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-serif tm-muted">
            Try the<br />best today
          </h1>
        </div>
        <div class="right">
          <div class="step-item">
            <div class="tm-rf2 tm-lh-title">01</div>
            <div class="tm-rf2 tm-bold tm-lh-title mt-6">Download Keplr</div>
            <div class="tm-rf0 tm-lh-copy mt-6">
              For its beta version, Emeris requires you to use it.
            </div>
            <tm-button
              variant="text"
              to-link="external"
              href="https://chrome.google.com/webstore/detail/keplr/dmkamcknogkgcdfhhbddcghachkejeap?hl=en"
              size="m"
              color="var(--success)"
              class="mt-4"
              >Get Keplr <span class="icon__right">&#8599;</span></tm-button
            >
          </div>
          <div class="step-item">
            <div class="tm-rf2 tm-lh-title">02</div>
            <div class="tm-rf2 tm-bold tm-lh-title mt-6">
              Connect Keplr to Emeris
            </div>
            <div class="tm-rf0 tm-lh-copy mt-6">
              Go to the Emeris app and connect your Keplr wallet.
            </div>
            <tm-button
              variant="text"
              to-link="external"
              href="https://app.emeris.com"
              size="m"
              color="var(--success)"
              class="mt-4"
              >Launch App <span class="icon__right">&#8594;</span></tm-button
            >
          </div>
          <div class="step-item">
            <div class="tm-rf2 tm-lh-title">03</div>
            <div class="tm-rf2 tm-bold tm-lh-title mt-6">
              Experience cross-chain DeFi
            </div>
            <div class="tm-rf0 tm-lh-copy mt-6">
              Trade, swap, pool and visualize all your assets in one place.
            </div>
          </div>
        </div>
      </div>
      <div class="bottom mt-10">
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
                Don’t be afraid. Follow the simple tutorial to learn how to swap
                your first coins.
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

.right
  margin-top var(--spacing-10)

.section-beta
  color var(--black)

.portal
  max-width 78rem
  padding var(--spacing-11) var(--wrap-gap)
  background var(--portal-gradient)
  clip-path polygon(0 0, 100% calc(0% + 7vw), 100% calc(100% - 7vw), 0 100%)

.step-item
  &:not(:first-child)
    margin-top var(--spacing-9)

.bottom
  display grid
  gap var(--grid-gap-x)

.wrapper
  display grid
  grid-auto-flow column
  grid-template-columns 10rem auto
  gap var(--grid-gap-x)
  align-items center
  background transparent
  box-sizing border-box
  background-clip padding-box
  border 1px solid var(--solid)
  border-radius $border-radius-4
  hover-raise(-3px)

.text
  @media $breakpoint-medium
    padding var(--spacing-7) 0

.top-right
  position absolute
  top 1rem
  right 1rem

.logo-container
  height auto
  width 70%
  position relative

.logo
  position relative
  margin-top -28%
  margin-left -1.5rem
  @media $breakpoint-medium
    position absolute

@media $breakpoint-xsmall-only
  .wrapper
    grid-auto-flow dense
    grid-template-columns auto
    padding var(--spacing-7)

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

  .portal
    padding var(--spacing-12) var(--spacing-10)

// @media $breakpoint-xxl
</style>
