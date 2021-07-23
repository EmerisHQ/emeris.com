<template>
  <div class="section-rates">
    <div class="text-container tm-wrapper tm-content">
      <div class="tm-grid-base">
        <div class="left">
          <div class="text z-2">
            <h1 class="title tm-rf6 tm-bold tm-lh-title tm-serif">
              DeFi<br /><span class="title-gradient">for all</span>
            </h1>
            <p class="tm-rf0 tm-lh-copy mt-5 tm-text">
              Emeris beta allows you to swap coins with substantially lower fees
              than typical DeFi exchanges.
            </p>
          </div>
          <div class="stats mt-11 z-2">
            <div class="stats-item">
              <div class="tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
                Average swap speed
              </div>
              <div class="tm-rf6 tm-bold tm-lh-title tm-serif mt-1">00:07</div>
              <div class="tm-rf0 tm-bold tm-lh-title tm-overline tm-text">
                seconds
              </div>
            </div>
            <div class="stats-item">
              <div class="tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
                Average transaction fee
              </div>
              <div class="tm-rf6 tm-bold tm-lh-title tm-serif mt-1">$0.08</div>
              <div class="tm-rf0 tm-bold tm-lh-title tm-overline tm-text">
                +0.3% SWAP FEE
              </div>
            </div>
          </div>
        </div>
        <div class="right"></div>
      </div>
    </div>
    <div class="graphics-container">
      <img
        class="surfer z-2"
        src="~/assets/images/elements/surfer-controlling.png"
        alt="Interchain Surfer Controlling"
      />
      <div class="portal"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.text
.stats
.graphics-container
  position relative

.section-rates
  padding-top var(--spacing-12)
  padding-bottom var(--spacing-12)

.left
.right
  grid-column 1/-1

.graphics-container
  top 0
  right -10px
  display grid
  place-items flex-end
  &:before
    content ''
    position absolute
    top -23px
    right 0
    width 445px
    height 592px
    background center / contain no-repeat url('~/assets/images/elements/portal-glow.jpg')

.text
  max-width 23.375rem

.stats
  display grid
  gap var(--grid-gap-x)

.title-gradient
  background var(--title-gradient)
  -webkit-background-clip text
  -webkit-text-fill-color transparent

.surfer
  position absolute
  width 24%
  bottom -2%
  left 53%
  transform translateX(-50%)

.portal
  width 216px
  height 395px
  background var(--portal-gradient)
  clip-path polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)

@media $breakpoint-xsmall-only
  .section-rates
    position unset

  .graphics-container
    margin-top var(--spacing-6)

  .stats-item:last-child
    margin-top var(--spacing-9)

@media $breakpoint-small
  .section-rates
    position unset

  .graphics-container
    margin-top var(--spacing-6)

  .surfer
    width 24%
    bottom -20%
    left 65%

  .stats-item:last-child
    margin-top var(--spacing-8)

@media $breakpoint-medium
  .section-rates
    position relative

  .graphics-container
    margin-top 0
    position absolute

  .surfer
    width 40%
    bottom 0
    left 10%

  .portal
    width 326.68px
    height 629.71px

  .stats-item:last-child
    margin-top var(--spacing-7)

// @media $breakpoint-large

@media $breakpoint-xl
  .portal
    width 446px
    height 827.92px

  .left
    grid-column 1/span 8

  .stats
    grid-template-columns repeat(auto-fit, minmax(0, 1fr))

  .stats-item:last-child
    margin-top 0

// @media $breakpoint-xxl
</style>
