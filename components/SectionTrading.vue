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
          <ul class="list">
            <li v-for="item in items" :key="item.title" class="list-item">
              <div class="list-info">
                <div class="cover-container">
                  <img
                    :src="require(`~/assets/images/elements/${item.img}`)"
                    class="cover"
                  />
                  <img
                    v-if="item.img === 'scene-01.jpg'"
                    :src="require(`~/assets/images/elements/orb.png`)"
                    class="orbit"
                  />
                </div>
                <div
                  class="
                    mt-6
                    tm-measure-wide tm-rf1 tm-bold tm-lh-title tm-title
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
  list-style none
  padding-left 0
  margin-top var(--spacing-11)
  @media $breakpoint-medium
    margin-top 0
  @media $breakpoint-xl
    display: grid
    grid-template-columns repeat(2, 1fr)
    gap 0 var(--grid-gap-x)
  &-item
    position relative
    display flex
    &:nth-child(2n)
      transform: translateY(50%)
    &:nth-child(2n + 1)
      @media $breakpoint-xl
        margin-top var(--spacing-9)
    &:first-child
      @media $breakpoint-xl
        margin-top 0

.cover-container
  position relative

.cover
  width 100%

.orbit
  position absolute
  left -7.4rem
  bottom 0.5rem
</style>
