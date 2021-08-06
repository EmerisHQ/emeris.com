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
    <div class="tm-container-wide logos-container z-2">
      <div class="scrolling-wrapper">
        <div v-for="item in list" :key="item.text" class="logos-item">
          <tm-tooltip
            :text="`${item.info}`"
            position="top-center"
            class="logo"
            :class="item.img"
            control-styles="float: right"
          >
            <span class="logo-inner" :class="item.img"></span>
            <img
              :src="require(`~/assets/images/logos/${item.img}.svg`)"
              :alt="item.text"
              class="logo-item"
            />
            <div class="logos-item__info">
              <span class="sr-only">info</span>
              <icon-info />
            </div>
          </tm-tooltip>
        </div>
      </div>
      <div class="marquee-wrapper">
        <div
          class="content"
          :class="{ paused: hover }"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <div class="text">
            <div v-for="item in list" :key="item.text" class="logos-item">
              <tm-tooltip
                :text="`${item.info}`"
                position="top-center"
                class="logo"
                :class="item.img"
                control-styles="float: right"
                tabindex="1"
              >
                <span class="logo-inner" :class="item.img">
                  <img
                    :src="require(`~/assets/images/logos/${item.img}.svg`)"
                    :alt="item.text"
                    class="logo-item"
                  />
                </span>
                <div class="logos-item__info">
                  <span class="sr-only">info</span>
                  <icon-info />
                </div>
              </tm-tooltip>
            </div>
          </div>
          <div class="text">
            <div v-for="item in list" :key="item.text" class="logos-item">
              <tm-tooltip
                :text="`${item.info}`"
                position="top-center"
                class="logo"
                :class="item.img"
                control-styles="float: right"
                tabindex="1"
              >
                <span class="logo-inner" :class="item.img">
                  <img
                    :src="require(`~/assets/images/logos/${item.img}.svg`)"
                    :alt="item.text"
                    class="logo-item"
                  />
                </span>
                <div class="logos-item__info">
                  <span class="sr-only">info</span>
                  <icon-info />
                </div>
              </tm-tooltip>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="swipe-helper tm-rf-1 tm-text tm-overline tm-muted center">
      &#8592; Swipe for more chains &#8594;
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
          <tm-link v-scroll-to="'#best'" href="#" class="tm-link"
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
      hover: false,
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
.section-access
  overflow hidden

.logos-container
.title
  position relative

.logos-container
  overflow hidden
  margin-top var(--spacing-7)
  @media $breakpoint-large
    margin-top var(--spacing-10)
  @media $breakpoint-xl
    margin-top var(--spacing-9)

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
    transform translate(3.05rem, -4.45rem)
    font-size 0

.logo
  position relative
  width 7.8125rem
  height 7.8125rem
  color transparent
  &:hover
  &:focus
  &:active
  &:focus-visible
    .logo-inner
      transform translate(-50%, -50%) scale(1.1)
    &:before
      animation none
      opacity 0.7
  &:focus-visible
    outline none
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
    &:before
      background radial-gradient(50% 50% at 50% 50%, #EF6565 35.94%, rgba(243, 102, 91, 0) 100%)
  &.cosmos
    &:before
      background radial-gradient(50% 50% at 50% 50%, #7C8AFF 35.94%, rgba(124, 138, 255, 0) 100%)
  &.crypto-com
    &:before
      background radial-gradient(50% 50% at 50% 50%, #3C61DB 35.94%, rgba(177, 98, 230, 0) 100%)
  &.irisnet
    &:before
      background radial-gradient(50% 50% at 50% 50%, #7C8AFF 35.94%, rgba(177, 98, 230, 0) 100%)
  &.osmosis
    &:before
      background radial-gradient(50% 50% at 50% 50%, #9948FF 35.94%, rgba(124, 138, 255, 0) 100%)
  &.persistence
    &:before
      background radial-gradient(50% 50% at 50% 50%, #6F312A 35.94%, rgba(135, 62, 57, 0) 100%)
  &.regen-network
    &:before
      background radial-gradient(50% 50% at 50% 50%, #57B17C 35.94%, rgba(136, 206, 200, 0) 100%)
  &.sentinel
    &:before
      background radial-gradient(50% 50% at 50% 50%, #506AFF 35.94%, rgba(124, 138, 255, 0) 100%)

.logo-inner
  position absolute
  width 100%
  height 100%
  top 50%
  left 50%
  border-radius 100%
  display flex
  align-items center
  justify-content center
  background-position center
  background-size 101%
  background-repeat no-repeat
  transform translate(-50%, -50%)
  transition transform .2s $ease-out
  will-change all
  &.akash
    background-image url('~/assets/images/logos/orb-akash.jpg')
  &.cosmos
    background-image url('~/assets/images/logos/orb-cosmos.jpg')
  &.crypto-com
    background-image url('~/assets/images/logos/orb-crypto-com.jpg')
  &.irisnet
    background-image url('~/assets/images/logos/orb-irisnet.jpg')
  &.osmosis
    background-image url('~/assets/images/logos/orb-osmosis.jpg')
  &.persistence
    background-image url('~/assets/images/logos/orb-persistence.jpg')
  &.regen-network
    background-image url('~/assets/images/logos/orb-regen-network.jpg')
  &.sentinel
    background-image url('~/assets/images/logos/orb-sentinel.jpg')

@keyframes fading-orb
  0%, 100%
    opacity .35
  50%
    opacity .55

.logo-item
  position absolute
  top 50%
  left 50%
  width 5.6875rem
  transform translate(-50%, -50%)

.tm-link
  color var(--secondary)

.swipe-helper
  margin-top calc(var(--spacing-8) * -1)
  margin-bottom var(--spacing-7)
  @media $breakpoint-medium
    display none

.bottom .left
.bottom .right
  grid-column 1/-1

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
  @media $breakpoint-large
    max-width 42.5rem

.text > a
  margin-left 2rem

.paused .text
  animation-play-state paused

@keyframes animation
  0%
    transform translateX(0)
  100%
    transform translateX(-100%)

@media $breakpoint-xsmall-only
  .marquee-wrapper
    display none

  .scrolling-wrapper
    overflow-x scroll
    overflow-y hidden
    white-space nowrap
    -webkit-overflow-scrolling touch

    &::-webkit-scrollbar
      display none

  .bottom .right
    margin-top 1em

@media $breakpoint-small
  .marquee-wrapper
    display none

  .scrolling-wrapper
    overflow-x scroll
    overflow-y hidden
    white-space nowrap
    -webkit-overflow-scrolling touch

    &::-webkit-scrollbar
      display none

  .bottom .right
    margin-top 1em

@media $breakpoint-medium
  .marquee-wrapper
    // overflow hidden
    display inline-block

  .scrolling-wrapper
    display none

  .content
    width 6250rem

  .text
    animation-name animation
    animation-timing-function linear
    animation-iteration-count infinite
    animation-duration 30s
    float left

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
@media screen and (min-width: 2070px)
  .marquee-wrapper
    position relative
    left 50%
    transform translateX(-50%)

  .content
    width auto

  .text
    animation-name none
    float none
    white-space nowrap
    &:not(:first-child)
      display none
</style>
