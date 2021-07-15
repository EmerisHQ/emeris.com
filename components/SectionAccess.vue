<template>
  <div class="section-access tm-section">
    <div class="tm-wrapper tm-content">
      <div class="top">
        <h1 class="tm-rf5 tm-bold tm-lh-title tm-serif">
          Early access to innovative blockchains
        </h1>
      </div>
      <div class="bottom tm-grid-base">
        <div class="left">
          Access cutting-edge decentralized exchanges, allowing you to obtain
          experimental or alternative coins that may be difficult or impossible
          to get via traditional centralized exchanges.
        </div>
        <div class="right">
          <tm-link href="https://cosmos.network" class="tm-link"
            >Stay tuned</tm-link
          >
          for more chains to be added within the coming weeks.
        </div>
      </div>
    </div>
    <div
      class="content mt-6"
      :class="{ paused: hover }"
      @mouseover="hover = true"
      @mouseleave="hover = false"
    >
      <div class="text">
        <tm-link v-for="item in list" :key="item.text" :href="item.url">
          <tm-tooltip :text="`${item.text} ↗`" position="top-center">
            <img
              :src="require(`~/assets/images/logos/${item.img}.svg`)"
              :alt="item.text"
              class="logo-item"
            />
          </tm-tooltip>
        </tm-link>
      </div>
      <div class="text">
        <tm-link v-for="item in list" :key="item.text" :href="item.url">
          <tm-tooltip :text="`${item.text} ↗`" position="top-center">
            <img
              :src="require(`~/assets/images/logos/${item.img}.svg`)"
              :alt="item.text"
              class="logo-item"
            />
          </tm-tooltip>
        </tm-link>
      </div>
      <div class="text">
        <tm-link v-for="item in list" :key="item.text" :href="item.url">
          <tm-tooltip :text="`${item.text} ↗`" position="top-center">
            <img
              :src="require(`~/assets/images/logos/${item.img}.svg`)"
              :alt="item.text"
              class="logo-item"
            />
          </tm-tooltip>
        </tm-link>
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
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
// .top
.bottom .left
.bottom .right
  grid-column 1/-1

.top
  max-width 50.0625rem
  text-align center
  grid-row 1

.tm-link
  color var(--secondary)

.wrap
  overflow hidden

.content
  width 6250rem

.text
  animation-name animation
  animation-timing-function linear
  animation-iteration-count infinite
  animation-duration 30s
  float left

.text > a
  opacity 0.35
  margin-left 1.25rem

.paused .text
  animation-play-state paused

.logo-item
  height var(--spacing-9)

@keyframes animation
  0%
    transform translateX(0)
  100%
    transform translateX(-100%)

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
