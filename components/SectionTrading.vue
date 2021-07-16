<template>
  <div class="section-trading tm-section tm-wrapper">
    <div class="tm-content">
      <div class="tm-grid-base">
        <div class="left">
          <h1 class="title tm-rf5 tm-bold tm-lh-title tm-serif tm-title">
            Discover instant cross-chain trading
          </h1>
          <p class="desc tm-rf1 tm-lh-copy mt-7 tm-text">
            Emeris beta connects you to the best cross-chain DeFi protocols,
            starting with Gravity DEX.
          </p>
        </div>
        <div class="right">
          <div class="list">
            <div class="list-item">
              <span class="bullet" />
              <div class="text">
                <h3 class="tm-rf1 tm-bold tm-lh-title tm-title">
                  Transfer and trade assets
                </h3>
                <p class="tm-rf0 tm-lh-copy tm-muted">
                  Between 5 different chains for the first time
                </p>
              </div>
            </div>
            <div class="list-item">
              <span class="bullet" />
              <div class="text">
                <h3 class="tm-rf1 tm-bold tm-lh-title tm-title">
                  Access a decentralized exchange
                </h3>
                <p class="tm-rf0 tm-lh-copy tm-muted">
                  With a trusted, stable and audited DEX protocol
                </p>
              </div>
            </div>
            <div class="list-item">
              <span class="bullet" />
              <div class="text">
                <h3 class="tm-rf1 tm-bold tm-lh-title tm-title">
                  Earn competitive yield
                </h3>
                <p class="tm-rf0 tm-lh-copy tm-muted">
                  By participating in liquidity pools
                </p>
              </div>
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
  display grid
  grid-auto-flow column
  grid-template-columns 1rem auto
  gap var(--spacing-6)

  .bullet
    width 0.6em
    height 0.6em
    background var(--gold-material-gradient)
    transform rotate(45deg)
    margin-top var(--spacing-3)

  > p
    margin-left var(--spacing-6)

.list-item + .list-item
  margin-top var(--spacing-6)

@media $breakpoint-xsmall-only
  .desc
    margin-top var(--spacing-7)

  .right
    margin-top var(--spacing-8)

@media $breakpoint-small
  .desc
    margin-top var(--spacing-7)

  .right
    margin-top var(--spacing-8)

// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .left
    grid-column 1/span 5

  .right
    grid-column 7/span 5
    margin-top 0
// @media $breakpoint-xxl
</style>
