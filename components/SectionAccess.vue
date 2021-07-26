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
        <div v-for="item in list" :key="item.text" class="logos-item">
          <tm-link :href="item.url" class="logo" :class="item.img">
            <img
              :src="require(`~/assets/images/logos/${item.img}.svg`)"
              :alt="item.text"
              class="logo-item"
            />
          </tm-link>
          <div class="logos-item__info">
            <tm-tooltip :text="`${item.info}`" position="top-center">
              <span class="sr-only">info</span>
              <icon-info />
            </tm-tooltip>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom tm-wrapper tm-container-narrow">
      <div class="tm-grid-base">
        <div
          class="
            column
            left
            tm-rf0 tm-rf1-xl-up tm-lh-copy tm-text tm-measure-narrow
          "
        >
          Access cutting-edge decentralized exchanges, allowing you to obtain
          experimental or alternative coins that may be difficult or impossible
          to get via traditional centralized exchanges.
        </div>
        <div
          class="
            column
            right
            tm-rf0 tm-rf1-xl-up tm-lh-copy tm-text tm-measure-narrow
          "
        >
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
import IconInfo from '~/components/icons/IconInfo.vue'

export default {
  components: {
    IconInfo,
  },
  data() {
    return {
      list: [
        {
          url: 'https://akash.network',
          text: 'Akash Network',
          info: 'Akash Network is the world’s first permissionless, censorship-resistant, and self-sovereign open-source cloud.',
          img: 'akash',
        },
        {
          url: 'https://cosmos.network',
          text: 'Cosmos Hub',
          info: 'The Cosmos Hub is the economic center of Cosmos, providing vital services to the network, from cross-chain DeFi to interchain staking.',
          img: 'cosmos',
        },
        {
          url: 'https://crypto.com',
          text: 'Crypto.com',
          info: 'Crypto.org Chain is designed to drive mass adoption of blockchain technology through popular use cases like DeFi, payments, and NFTs.',
          img: 'crypto-com',
        },
        {
          url: 'https://irisnet.org',
          text: 'IRIS Network',
          info: 'IRISnet is advancing tech innovations with enterprise-level applications like asset digitization and bridging public and consortium chains.',
          img: 'irisnet',
        },
        {
          url: 'https://osmosis.zone',
          text: 'Osmosis',
          info: 'Osmosis is an automated market maker (AMM) protocol built for liquidity providers, governed and owned by liquidity providers.',
          img: 'osmosis',
        },
        {
          url: 'https://persistence.one',
          text: 'Persistence',
          info: 'Persistence aims to bridge crypto and traditional finance, driving innovative solutions to grow the DeFi and NFT sectors.',
          img: 'persistence',
        },
        {
          url: 'https://www.regen.network',
          text: 'Regen Network',
          info: 'Regen Network is an open marketplace for climate solutions that helps to incentivize regenerative land use practices.',
          img: 'regen-network',
        },
        {
          url: 'https://sentinel.co',
          text: 'Sentinel',
          info: 'The Sentinel Network hosts open-source distributed and decentralized VPN applications that provide users with assurance that their session information is not being logged.',
          img: 'sentinel',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.logos-container
  position relative

.logos-item
  position relative
  display inline-flex
  align-items center
  justify-content center
  width 16.9375rem
  height 16.9375rem
  &__info
    position absolute
    top 50%
    left 50%
    opacity .67
    transition opacity .2s $ease-out
    transform translate(3.05rem, -4.45rem)
    font-size 0
    &:hover
    &:focus
      opacity 1

.logo
  position relative
  display inline-flex
  align-items center
  justify-content center
  width 7.8125rem
  height 7.8125rem
  border-radius 100%
  background-position center
  background-size 101%
  background-repeat no-repeat
  &:hover
  &:focus
    &:before
      animation none
      opacity 0.75
  &:before
    content ''
    opacity 0.5
    position absolute
    z-index -1
    top 50%
    left 50%
    width 215%
    height 215%
    transform translate(-50%, -50%)
    transition opacity .2s $ease-out
    animation fading-orb 5s ease-out infinite
  &.akash
    background-image url('~/assets/images/logos/orb-akash.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #EF6565 35.94%, rgba(243, 102, 91, 0) 100%)
  &.cosmos
    background-image url('~/assets/images/logos/orb-cosmos.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #7C8AFF 35.94%, rgba(124, 138, 255, 0) 100%)
  &.crypto-com
    background-image url('~/assets/images/logos/orb-crypto-com.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #3C61DB 35.94%, rgba(177, 98, 230, 0) 100%)
  &.irisnet
    background-image url('~/assets/images/logos/orb-irisnet.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #7C8AFF 35.94%, rgba(177, 98, 230, 0) 100%)
  &.osmosis
    background-image url('~/assets/images/logos/orb-osmosis.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #9948FF 35.94%, rgba(124, 138, 255, 0) 100%)
  &.persistence
    background-image url('~/assets/images/logos/orb-persistence.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #6F312A 35.94%, rgba(135, 62, 57, 0) 100%)
  &.regen-network
    background-image url('~/assets/images/logos/orb-regen-network.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #57B17C 35.94%, rgba(136, 206, 200, 0) 100%)
  &.sentinel
    background-image url('~/assets/images/logos/orb-sentinel.jpg')
    &:before
      background radial-gradient(50% 50% at 50% 50%, #506AFF 35.94%, rgba(124, 138, 255, 0) 100%)

@keyframes fading-orb
  0%, 100%
    opacity .35
  50%
    opacity .55

.logo-item
  width 5.6875rem

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
  @media $breakpoint-xl
    margin-top 7rem

.ephemeris-item
  position absolute
  width 185%
  max-width initial
  @media $breakpoint-xl
    width 215%

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
  @media $breakpoint-xl
    max-width 42.5rem

.scrolling-wrapper
  overflow-x scroll
  overflow-y hidden
  white-space nowrap
  -webkit-overflow-scrolling touch

  &::-webkit-scrollbar
    display none

.text > a
  margin-left 1.25rem

// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .bottom
    var(--spacing-3)

  .bottom .left
    grid-column 2/span 5

  .bottom .right
    grid-column 7/span 5
    margin-top 0
// @media $breakpoint-xxl
</style>
