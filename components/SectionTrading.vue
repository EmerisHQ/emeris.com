<template>
  <div class="section-trading tm-section">
    <div class="tm-wrapper tm-container js-section-trading">
      <div class="tm-grid-base">
        <div class="column-header">
          <h2 class="tm-rf4 tm-bold tm-serif tm-title tm-lh-title title">
            Discover<br />instant<br />cross-chain<br />trading
          </h2>
          <p class="tm-rf0 tm-lh-copy mt-7 tm-text tm-measure-narrow">
            Emeris beta connects you to the best cross-chain DeFi protocols,
            starting with Gravity DEX.
          </p>
        </div>

        <div class="column-content">
          <div ref="trade-item-list" class="list tablet">
            <ul class="list-inner">
              <content-trading-item
                v-for="(item, key) in items"
                :key="item.title"
                :count="key"
                :item="item"
              />
            </ul>
          </div>

          <div class="mobile">
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <ul
                  v-for="(item, key) in items"
                  :key="item.title"
                  class="list-slide swiper-slide"
                >
                  <content-trading-item :count="key" :item="item" />
                </ul>
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
      items: [
        {
          img: 'scene-01.jpg',
          title: 'Transfer and trade assets',
          info: 'Between 14 different chains for the first time',
        },
        {
          img: 'scene-02.jpg',
          title: 'Access a decentralized exchange',
          info: 'With a trusted, stable and audited DEX protocol',
        },
        {
          img: 'scene-03.jpg',
          title: 'Earn competitive yield',
          info: 'By participating in liquidity pools.',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-trading
  padding-top var(--spacing-8)
  @media $breakpoint-medium
    margin-top var(--spacing-6)
  @media $breakpoint-xl
    margin-top 0
  .tm-grid-base
    position relative

.column-header
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-xl
    grid-column 2 / span 4
    position: sticky
    top: 4rem
    align-self: start

.column-content
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-xl
    grid-column span 6

.title
  line-height 1.3
  @media $breakpoint-medium
    line-height 1.2

.tablet
  display none
  @media $breakpoint-medium
    display block

.mobile
  @media $breakpoint-medium
    display none

.list
  margin-top var(--spacing-11)
  margin-inline: calc(-1 * var(--wrap-gap))
  @media $breakpoint-medium
    margin 0
  &-inner
    overflow auto
    display flex
    list-style none
    padding-left 0
    padding-inline: var(--wrap-gap)
    padding-bottom var(--grid-gap-x)
    @media $breakpoint-medium
      overflow initial
      display block
      padding 0
    @media $breakpoint-xl
      display: grid
      grid-template-columns repeat(2, 1fr)
      gap 0 var(--grid-gap-x)

.swiper-container
  margin-top var(--spacing-11)
  margin-inline: calc(-1 * var(--wrap-gap))
  padding-inline: var(--wrap-gap)
  overflow auto
  scroll-snap-type: x mandatory
  scrollbar-width none
  &::-webkit-scrollbar
      display none
  @media $breakpoint-medium
    margin 0


.swiper-wrapper
  position: relative;
  width: 100%;
  height: 100%;
  z-index: 1;
  display: flex;
  transition-property: transform;
  box-sizing: content-box;

.swiper-slide
  flex-shrink: 0;
  height: 100%;
  position: relative;
  width: 12.25rem
  margin-right: 32px
  &:last-child
    width calc(12.25rem + var(--wrap-gap))
    padding-right var(--wrap-gap)

.list-slide
  scroll-snap-align center
</style>
