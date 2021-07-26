<template>
  <div class="section-rates tm-section">
    <div class="text-container tm-wrapper tm-container-narrow">
      <div class="tm-grid-base">
        <div class="left">
          <div class="text z-2">
            <h2 class="title tm-rf5 tm-rf6-m-up tm-bold tm-lh-title tm-serif">
              DeFi<br /><span class="title-gradient">for all</span>
            </h2>
            <p
              class="
                mt-5
                tm-rf0 tm-rf1-xl-up tm-lh-copy tm-text tm-measure-narrow
              "
            >
              Emeris beta allows you to swap coins with substantially lower fees
              than typical DeFi exchanges.
            </p>
          </div>
          <div class="stats z-2">
            <div class="stats-item">
              <div class="tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
                Average swap speed
              </div>
              <div
                class="
                  stats-num
                  tm-rf6 tm-rf4-m-up tm-bold tm-lh-title tm-serif
                "
              >
                00:07
              </div>
              <div
                class="tm-rf0 tm-rf-1-m tm-bold tm-lh-title tm-overline tm-text"
              >
                seconds
              </div>
            </div>
            <div class="stats-item">
              <div class="tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
                Average transaction fee
              </div>
              <div
                class="
                  stats-num
                  tm-rf6 tm-rf4-m-up tm-bold tm-lh-title tm-serif
                "
              >
                $0.08
              </div>
              <div
                class="tm-rf0 tm-rf-1-m tm-bold tm-lh-title tm-overline tm-text"
              >
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
  @media $breakpoint-xl
    padding-top var(--spacing-13)
    padding-bottom var(--spacing-13)

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
    @media $breakpoint-medium
      top -42px
      right -20px
      width 700px
      height 940px
    @media $breakpoint-xl
      top -85px
      right -20px
      width 930px
      height 1300px

.text
  max-width 23.375rem

.stats
  display grid
  gap var(--grid-gap-x)
  margin-top var(--spacing-11)
  @media $breakpoint-medium
    margin-top var(--spacing-9)
  @media $breakpoint-xl
    margin-top var(--spacing-8)

.stats-num
  margin-top var(--spacing-1)
  @media $breakpoint-medium
    margin-top var(--spacing-3)

.title-gradient
  background var(--title-gradient)
  -webkit-background-clip text
  background-clip text
  -webkit-text-fill-color transparent
  text-fill-color transparent

.surfer
  mix-blend-mode hard-light
  position absolute
  width 24%
  bottom -2%
  left 53%
  transform translateX(-50%)
  animation surfer-levitate 5s ease-in-out alternate infinite
  @media $breakpoint-small
    width 24%
    bottom -20%
    left 65%
  @media $breakpoint-medium
    width 37.5%
    bottom -3%
    left 35%
  @media $breakpoint-xl
    bottom -6%
    left 30%

.portal
  width 216px
  height 395px
  background var(--portal-gradient)
  clip-path polygon(0% 10%, 100% 0%, 100% 100%, 0% 90%)

@keyframes surfer-levitate
  0%, 100%
    transform translate(-50%, 5%)
  50%
    transform translate(-50%, -3%)

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

  .stats-item:last-child
    margin-top var(--spacing-8)

@media $breakpoint-medium
  .section-rates
    position relative

  .graphics-container
    margin-top var(--spacing-9)
    position absolute

  .portal
    width 326.68px
    height 629.71px

  .stats-item:last-child
    margin-top var(--spacing-3)

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
