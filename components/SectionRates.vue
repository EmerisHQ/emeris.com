<template>
  <div class="section-rates">
    <div class="text-container tm-wrapper tm-content">
      <div class="tm-grid-base">
        <div class="left">
          <div class="text">
            <h1 class="title tm-rf6 tm-bold tm-lh-title tm-serif">
              DeFi<br />for all
            </h1>
            <p class="tm-rf1 tm-lh-copy mt-5 tm-text">
              Emeris beta allows you to swap coins with substantially lower fees
              than typical DeFi exchanges.
            </p>
          </div>
          <div class="stats mt-8">
            <div class="stats-item">
              <div class="tm-rf0 tm-medium tm-lh-title tm-overline tm-muted">
                Average swap speed
              </div>
              <div class="tm-rf4 tm-bold tm-lh-title tm-serif mt-1">00:07</div>
              <div class="tm-rf0 tm-bold tm-lh-title tm-overline tm-text">
                seconds
              </div>
            </div>
            <div class="stats-item">
              <div class="tm-rf0 tm-medium tm-lh-title tm-overline tm-muted">
                Average transaction fee
              </div>
              <div class="tm-rf4 tm-bold tm-lh-title tm-serif mt-1">$0.08</div>
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
      <div class="portal"></div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
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

.text
  max-width 23.375rem

.stats
  display grid
  gap var(--grid-gap-x)

.title
  background var(--title-gradient)
  -webkit-background-clip text
  -webkit-text-fill-color transparent

.portal
  background var(--portal-gradient)
  clip-path polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)

@media $breakpoint-xsmall-only
  .section-rates
  .graphics-container
    position unset

  .graphics-container
    margin-top var(--spacing-6)

  .portal
    width 205.35px
    height 395.83px

  .stats-item:last-child
    margin-top var(--spacing-8)

@media $breakpoint-small
  .section-rates
  .graphics-container
    position unset

  .graphics-container
    margin-top var(--spacing-6)

  .portal
    width 205.35px
    height 395.83px

  .stats-item:last-child
    margin-top var(--spacing-8)

@media $breakpoint-medium
  .section-rates
    position relative

  .graphics-container
    margin-top 0
    position absolute

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
