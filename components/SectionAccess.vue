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
      <h1 class="title tm-rf5 tm-bold tm-lh-title tm-serif">
        Early access to innovative blockchains
      </h1>
    </div>
    <div class="tm-container-wide logos-container mt-9 z-2">
      <!-- Infinite horizontal scroll -->
      <div v-if="$device.isMobile" class="scrolling-wrapper">
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
      <!-- Marquee -->
      <div v-else class="wrap">
        <div
          class="content"
          :class="{ paused: hover }"
          @mouseover="hover = true"
          @mouseleave="hover = false"
        >
          <div class="text">
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
          <div class="text">
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
export default {
  data() {
    return {
      hover: false,
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

.wrap
  overflow hidden

.content
  width 6250rem

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
  padding 5.6563rem
  &:before
    content ''
    opacity 0.28
    position absolute
    width 12.044375rem
    height 12.044375rem
    top 50%
    left 50%
    mix-blend-mode hard-light
    background radial-gradient(50% 50% at 50% 50%, #FFFE2E 43.09%, rgba(117, 255, 189, 0) 100%)
    transform translate(-50%, -50%)
    animation fading-top 5.5s ease-out infinite
    @media $breakpoint-medium
      width 15.625rem
      height 15.625rem
    @media $breakpoint-xl
      width 25.5rem
      height 25.5rem

.paused .text
  animation-play-state paused

.text > a
  margin-left 1.25rem

@keyframes animation
  0%
    transform translateX(0)
  100%
    transform translateX(-100%)

@media $breakpoint-xsmall-only
  .bottom .right
    margin-top 1em

  .text
    animation none

@media $breakpoint-small
  .bottom .right
    margin-top 1em

  .text
    animation-name animation
    animation-timing-function linear
    animation-iteration-count infinite
    animation-duration 30s
    float left

// @media $breakpoint-medium
//   .text
//     animation-name animation
//     animation-timing-function linear
//     animation-iteration-count infinite
//     animation-duration 30s
//     float left

// @media $breakpoint-large
@media $breakpoint-xl
  .bottom .left
    grid-column 2/span 5

  .bottom .right
    grid-column 7/span 5
    margin-top 0
// @media $breakpoint-xxl
</style>
