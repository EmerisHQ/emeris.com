<template>
  <div class="section-updates tm-section">
    <div class="tm-wrapper tm-content">
      <div class="tm-grid-base">
        <div class="left">
          <h1 class="tm-rf5 tm-bold tm-lh-title tm-serif">
            The best is yet to come.
          </h1>
          <!-- graphics -->
        </div>
        <div class="right">
          <div class="text">
            <p class="tm-rf1 tm-lh-copy">
              Emeris aims to be the first one-stop portal to provide:
            </p>
            <div class="list tm-rf1 tm-lh-copy mt-6">
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Integrated wallet and multi-wallet support</p>
              </div>
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Access to multiple DeFi trading platforms</p>
              </div>
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Staking on multiple chains</p>
              </div>
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Mobile wallet app</p>
              </div>
            </div>
            <div class="cta mt-8">
              <tm-email-wizard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.left
.right
  grid-column 1/-1

.list-item
  display flex
  flex-direction row

  .bullet
    width 1rem
    height 1rem
    margin-top var(--spacing-3)

  > p
    margin-left var(--spacing-6)

.list-item + .list-item
  margin-top var(--spacing-6)

@media $breakpoint-xsmall-only
  .right
    margin-top var(--spacing-7)

@media $breakpoint-small
  .right
    margin-top var(--spacing-7)

// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .left
    grid-column 1/span 7

  .right
    grid-column 8/span 5
    margin-top 0
// @media $breakpoint-xxl
</style>
