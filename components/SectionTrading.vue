<template>
  <div class="section-trading tm-section">
    <div class="tm-wrapper tm-container">
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
          <div class="list">
            <ul class="list-inner">
              <li v-for="item in items" :key="item.title" class="list-item">
                <div class="list-info">
                  <div class="cover-container">
                    <div class="cover-container__inner">
                      <img
                        :src="require(`~/assets/images/elements/${item.img}`)"
                        class="cover"
                      />
                    </div>
                    <img
                      v-if="item.img === 'scene-01.jpg'"
                      :src="require(`~/assets/images/elements/orb.png`)"
                      class="orbit"
                    />
                  </div>
                  <div
                    class="
                      mt-6
                      tm-measure-wide
                      tm-rf2
                      tm-rf1-m-up
                      tm-bold
                      tm-lh-title
                      tm-title
                    "
                  >
                    {{ item.title }}
                  </div>
                  <div class="mt-1 tm-measure-wide tm-rf0 tm-text mt-1">
                    {{ item.info }}
                  </div>
                </div>
              </li>
            </ul>
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
          info: 'Between 12 different chains for the first time',
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

.column-header
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 3
  @media $breakpoint-xl
    grid-column 2 / span 4
    position: sticky
    top: 3.5rem
    align-self: start

.column-content
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 3
  @media $breakpoint-xl
    grid-column span 6

.title
  line-height 1.3
  @media $breakpoint-medium
    line-height 1.2

.list
  margin-top var(--spacing-11)
  margin-inline: calc(-1 * var(--wrap-gap))
  @media $breakpoint-medium
    margin-top 0
  &-inner
    overflow auto
    display flex
    list-style none
    padding-left 0
    padding-inline: var(--wrap-gap)
    padding-bottom var(--grid-gap-x)
    @media $breakpoint-xl
      display: grid
      grid-template-columns repeat(2, 1fr)
      gap 0 var(--grid-gap-x)
  &-item
    position relative
    display flex
    max-width: 12.25rem
    flex-shrink: 0
    margin-left calc(2 * var(--grid-gap-x))
    @media $breakpoint-medium
      max-width: 100%
    &:nth-child(2n)
      @media $breakpoint-medium
        transform: translateY(50%)
    &:nth-child(2n + 1)
      @media $breakpoint-xl
        margin-top var(--spacing-9)
    &:first-child
      margin-left 0
      @media $breakpoint-xl
        margin-top 0

.cover-container
  position relative
  &__inner
    position relative
    width 100%
    height 0
    padding-bottom 187%

.cover
  position absolute
  top 0
  bottom 0
  left 50%
  height 100%
  width auto
  transform: translate(-50%)

.orbit
  position absolute
  left -7.8rem
  bottom -6rem
  width 21.8rem
  max-width: none
  @media $breakpoint-medium
    left -8.9rem
    bottom -1.1rem
    width 21.8rem
</style>
