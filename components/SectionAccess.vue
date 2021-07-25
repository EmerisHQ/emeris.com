<template>
  <div class="section-access tm-section">
    <div class="tm-content">
      <div class="ephemerides">
        <img
          class="ephemeris ephemeris-item"
          src="~/assets/images/elements/gold-ephemeris-section.png"
          alt="Gold Ephemeris Section Ring"
        />
      </div>
      <h2 class="tm-rf4 tm-bold tm-serif tm-lh-title title">
        Early access to innovative blockchains
      </h2>
    </div>
    <div class="tm-container-wide logos-container mt-9 z-2">
      <div class="scrolling-wrapper">
        <tm-link v-for="item in list" :key="item.text" :href="item.url">
          <!-- <tm-tooltip :text="`${item.text} ↗`" position="top-center"> -->
          <img
            :src="require(`~/assets/images/logos/${item.img}.svg`)"
            :alt="item.text"
            class="logo-item"
          />
          <!-- </tm-tooltip> -->
        </tm-link>
      </div>
    </div>
    <div class="bottom tm-wrapper tm-content">
      <div class="tm-grid-base">
        <div class="column left tm-rf0 tm-lh-copy tm-text tm-measure-narrow">
          Access cutting-edge decentralized exchanges, allowing you to obtain
          experimental or alternative coins that may be difficult or impossible
          to get via traditional centralized exchanges.
        </div>
        <div class="column right tm-rf0 tm-lh-copy tm-text tm-measure-narrow">
          <tm-link href="https://cosmos.network" class="tm-link"
            >Stay tuned</tm-link
          >
          for more chains to be added within the coming weeks.
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          url: 'https://akash.network',
          text: 'Akash Network',
          img: 'akash',
        },
        {
          url: 'https://irisnet.org',
          text: 'IRIS Network',
          img: 'irisnet',
        },
        {
          url: 'https://osmosis.zone',
          text: 'Osmosis',
          img: 'osmosis',
        },
        {
          url: 'https://crypto.com',
          text: 'Crypto.com',
          img: 'crypto-com',
        },
        {
          url: 'https://www.regen.network',
          text: 'Regen Network',
          img: 'regen-network',
        },
        {
          url: 'https://sentinel.co',
          text: 'Sentinel',
          img: 'sentinel',
        },
        {
          url: 'https://persistence.one',
          text: 'Persistence',
          img: 'persistence',
        },
        {
          url: 'https://cosmos.network',
          text: 'Cosmos Hub',
          img: 'cosmos',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.logos-container
  position relative

img
  max-width initial

.ephemerides
  position absolute
  width 100%
  min-width 24rem
  // max-width 36rem
  display flex
  align-items center
  justify-content center
  margin-top 12.5rem
  @media $breakpoint-medium
    margin-top 9.3rem

.ephemeris-item
  position absolute
  width 185%

.tm-link
  color var(--secondary)

.bottom .column
  grid-column 1/-1
  margin-top 1rem
  @media $breakpoint-medium
    grid-column span 4
    margin-top 0
  &:first-child()
    margin-top 0

.title
  max-width 22rem
  center()
  text-align center

.scrolling-wrapper
  overflow-x scroll
  overflow-y hidden
  white-space nowrap
  -webkit-overflow-scrolling touch

  &::-webkit-scrollbar
    display none

.logo-item
  display inline-block
  height 16.9375rem

.text > a
  margin-left 1.25rem

// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .bottom .left
    grid-column 2/span 5

  .bottom .right
    grid-column 7/span 5
    margin-top 0
// @media $breakpoint-xxl
</style>
