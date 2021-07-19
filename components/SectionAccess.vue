<template>
  <div class="section-access tm-section">
    <!-- <div class="tm-container">
      <img class="ring z-0" src="~/assets/images/elements/ring.png" alt="" />
    </div> -->
    <div class="tm-wrapper tm-content">
      <div class="ephemerides">
        <img
          class="ephemeris ephemeris-item"
          src="~/assets/images/elements/gold-ephemeris-2.png"
          alt="Gold ephemeris ring"
        />
      </div>
      <h1 class="title tm-rf5 tm-bold tm-lh-title tm-serif">
        Early access to innovative blockchains
      </h1>
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
        <div class="left tm-rf1 tm-lh-copy tm-text">
          Access cutting-edge decentralized exchanges, allowing you to obtain
          experimental or alternative coins that may be difficult or impossible
          to get via traditional centralized exchanges.
        </div>
        <div class="right tm-rf1 tm-lh-copy tm-text">
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
  margin-top 10rem

.ephemeris-item
  position absolute
  width 250%

.tm-link
  color var(--secondary)

.bottom .left
.bottom .right
  grid-column 1/-1

.title
  text-align center

.ring
  position absolute

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

@media $breakpoint-xsmall-only
  .bottom .right
    margin-top 1em

@media $breakpoint-small
  .bottom .right
    margin-top 1em

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
