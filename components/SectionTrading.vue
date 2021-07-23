<template>
  <div class="section-trading tm-section">
    <div class="tm-wrapper tm-container-narrow">
      <div class="tm-grid-base">
        <div class="column">
          <h2 class="tm-rf4 tm-bold tm-serif title">
            Discover<br />instant<br />cross-chain<br />trading
          </h2>
          <p
            class="tm-rf0 tm-rf1-l-up tm-lh-copy mt-7 tm-text tm-measure-narrow"
          >
            Emeris beta connects you to the best cross&#8209;chain DeFi
            protocols, starting with&nbsp;Gravity DEX.
          </p>
        </div>

        <div class="column">
          <ul class="list">
            <li class="list-item">
              <div class="list-info">
                <div class="tm-rf0 tm-rf1-l-up tm-bold tm-lh-title tm-text">
                  Transfer and trade assets
                </div>
                <div class="tm-rf-1 tm-rf0-l-up tm-text mt-1 text-light">
                  Between 5 different chains for the first time
                </div>
              </div>
            </li>
            <li class="list-item">
              <div class="list-info">
                <div class="tm-rf0 tm-rf1-l-up tm-bold tm-lh-title tm-text">
                  Access a decentralized exchange
                </div>
                <div class="tm-rf-1 tm-rf0-l-up tm-text mt-1 text-light">
                  With a trusted, stable and audited DEX protocol
                </div>
              </div>
            </li>
            <li class="list-item">
              <div class="list-info">
                <div class="tm-rf0 tm-rf1-l-up tm-bold tm-lh-title tm-text">
                  Earn competitive yield
                </div>
                <div class="tm-rf-1 tm-rf0-l-up tm-text mt-1 text-light">
                  By participating in liquidity pools
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.column
  grid-column span 4
  @media $breakpoint-xl
    grid-column span 5
    &:nth-child(2n)
      grid-column 7 / span 5

.title
  line-height 1.3
  @media $breakpoint-medium
    line-height 1.2

.list
  list-style none
  padding-left 0
  margin-top var(--spacing-11)
  @media $breakpoint-medium
    margin-top 0
  &-item
    position relative
    display flex
    margin-top var(--spacing-8)
    @media $breakpoint-xl
      margin-top var(--spacing-6)
    &:first-child
      margin-top 0
    &:before
      content ''
      display inline-block
      flex-shrink 0
      width 1rem
      height 1rem
      margin-top var(--spacing-1)
      clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)
      background: conic-gradient(from 180deg at 50% 50%, #CEA851 -41.21deg, #FFF1C3 0.05deg, #9B7C3A 74.45deg, #FFF0CA 115.85deg, #D3AD5F 143.94deg, #FFECC4 176.48deg, #997736 232.74deg, #FFF2C0 284.83deg, #CEA851 318.79deg, #FFF1C3 360.05deg)
      @media $breakpoint-xl
        margin-left -1rem
  &-info
    margin-left var(--spacing-6)

.text-light
  color var(--white-700)
</style>
