<template>
  <div class="tm-section z-1">
    <div class="tm-wrapper tm-container-narrow">
      <h2 class="tm-rf4 tm-bold tm-serif tm-lh-title tm-title title">
        Early access to&nbsp;innovative blockchains
      </h2>
      <div class="mt-8 marquee__container">
        <div
          v-for="(path, key) in list"
          :key="`marquee_${key}`"
          class="marquee"
        >
          <span class="marquee__item" aria-hidden="true">
            <div class="logos-container">
              <div v-for="item in path" :key="item.name" class="logos-item">
                <div class="logo">
                  <img
                    :src="require(`~/assets/images/logos/${item.img}.png`)"
                    :alt="item.name"
                    class="logo-item"
                    :class="item.img"
                    loading="lazy"
                  />
                </div>
                <div class="content">
                  <div class="tm-lh-copy tm-rf-1 tm-bold tm-title">
                    {{ item.name }}
                  </div>
                  <div class="tm-lh-copy tm-rf-1 tm-normal tm-title">
                    {{ item.token }}
                  </div>
                </div>
              </div>
            </div>
          </span>
          <span class="marquee__item" aria-hidden="true">
            <div class="logos-container">
              <div v-for="item in path" :key="item.name" class="logos-item">
                <div class="logo">
                  <img
                    :src="require(`~/assets/images/logos/${item.img}.png`)"
                    :alt="item.name"
                    class="logo-item"
                    :class="item.img"
                    loading="lazy"
                  />
                </div>
                <div class="content">
                  <div class="tm-lh-copy tm-rf-1 tm-bold tm-title">
                    {{ item.name }}
                  </div>
                  <div class="tm-lh-copy tm-rf-1 tm-normal tm-title">
                    {{ item.token }}
                  </div>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div class="tm-grid-base mt-9">
        <div class="info tm-lh-copy tm-rf0 tm-normal tm-text">
          <p>
            Access cutting-edge decentralized exchanges, allowing you to obtain
            experimental or alternative coins that may be difficult or
            impossible to get via traditional centralized exchanges.
          </p>
        </div>
        <div class="info tm-lh-copy tm-rf0 tm-normal tm-text">
          <p>Stay tuned for more chains to be added within the coming weeks.</p>
          <TmEmailWizard class="mt-7" />
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
        [
          {
            url: 'https://cosmos.network',
            name: 'Cosmos Hub',
            token: 'ATOM',
            img: 'cosmos',
          },
          {
            url: 'https://crypto.com',
            name: 'Crypto.org chain',
            token: 'CRO',
            img: 'crypto-org',
          },
          {
            url: 'https://irisnet.org',
            name: 'IRIS Network',
            token: 'IRIS',
            img: 'irisnet',
          },
          {
            url: 'https://osmosis.zone',
            name: 'Osmosis',
            token: 'OSMO, ION',
            img: 'osmosis',
          },
          {
            url: 'https://persistence.one',
            name: 'Persistence',
            token: 'XPRT',
            img: 'persistence',
          },
          {
            url: 'https://www.regen.network',
            name: 'Regen',
            token: 'REGEN',
            img: 'regen',
          },
        ],
        [
          {
            url: 'https://sentinel.co',
            name: 'Sentinel',
            token: 'DVPN',
            img: 'sentinel',
          },
          {
            url: '',
            name: 'Starname',
            token: 'IOV',
            img: 'starname',
          },
          {
            url: '',
            name: 'e-Money',
            token: 'NGM',
            img: 'e-money',
          },
          {
            url: '',
            name: 'ixo',
            token: 'IXO',
            img: 'ixo',
          },
          {
            url: 'https://akash.network',
            name: 'Akash',
            token: 'AKT',
            img: 'akash',
          },
          {
            url: '#',
            name: 'Juno',
            token: 'JUNO',
            img: 'juno',
          },
          {
            url: '#',
            name: 'Microtick',
            token: 'TICK',
            img: 'microtick',
          },
          {
            url: '#',
            name: 'LikeCoin',
            token: 'LIKE',
            img: 'likecoin',
          },
          {
            url: '',
            name: 'More chains',
            token: 'Coming soon',
            img: 'more-chains',
          },
        ],
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.logos-container
.title
  position relative

.logos-container
  display flex
  justify-content center
  margin-inline calc(-1 * var(--spacing-8) / 2)
  .marquee:last-child &
    @media screen and (min-width: 1120px)
      flex-wrap: wrap
      max-width: 60rem
      margin-inline auto

.logos-item
  position relative
  display inline-flex
  align-items center
  width 50%
  padding-block calc(var(--spacing-7) / 2)
  padding-inline calc(var(--spacing-8) / 2)
  @media $breakpoint-medium
    width auto
    justify-content center

.logo
  position relative
  flex-shrink: 0
  width 2rem
  height 2rem
  margin-right var(--spacing-5)

.logo-item
  position absolute
  top 50%
  left 50%
  width 3.25rem
  max-width none
  transform translate(-51.2%, -42.3%)
  &.likecoin
    width 2rem
    transform translate(-50, -50%)

.tm-link
  color var(--quaternary)

.title
  max-width 22rem
  center()
  @media $breakpoint-medium
    max-width 38rem
    text-align center
  @media $breakpoint-large
    max-width 47.5rem

.info
  max-width: 26.25rem
  margin-inline: auto
  grid-column: 1/span 8
  @media $breakpoint-large
    grid-column: 1/span 4
  @media $breakpoint-xl
    grid-column: 3/span 4;

  & + .info
    @media $breakpoint-large
      grid-column: 5/span 4
    @media $breakpoint-xl
      grid-column: 7/span 4

@keyframes marquee
  from
    transform: translateX(0)
  to
    transform: translateX(-100%)

.marquee
  position relative
  overflow: hidden
  white-space: nowrap
  margin-inline: calc(-1 * var(--wrap-gap))
  @media screen and (min-width: 1120px)
    overflow: initial
  &:hover
    .marquee
      &__item
        animation-play-state: paused
  &__item
    animation: marquee 15s linear infinite
    display: inline-block
    margin-left var(--spacing-7)
    @media screen and (min-width: 1120px)
      animation none
      display none
    &:first-child
      margin-left 0
      @media screen and (min-width: 1120px)
        display block
</style>
