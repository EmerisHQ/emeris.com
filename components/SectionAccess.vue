<template>
  <div class="tm-section">
    <div class="tm-wrapper tm-container-narrow">
      <h2 class="tm-rf4 tm-bold tm-serif tm-lh-title tm-title title">
        Early access to&nbsp;innovative blockchains
      </h2>
      <div class="mt-8 logos-container">
        <div v-for="item in list" :key="item.name" class="logos-item">
          <div class="logo">
            <img
              :src="require(`~/assets/images/logos/${item.img}.png`)"
              :alt="item.name"
              class="logo-item"
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
      <div class="mt-9">
        <div class="info tm-lh-copy tm-rf0 tm-normal tm-text">
          <p>
            Access cutting-edge decentralized exchanges, allowing you to obtain
            experimental or alternative coins that may be difficult or
            impossible to get via traditional centralized exchanges.
          </p>
          <p>
            <tm-link v-scroll-to="'#best'" href="#" class="tm-link"
              >Stay tuned</tm-link
            >
            for more chains to be added within the coming weeks.
          </p>
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
          name: 'e-money',
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
          url: '',
          name: 'More chains',
          token: 'Coming soon',
          img: 'more-chains',
        },
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
  flex-wrap: wrap
  justify-content center
  margin-inline calc(-1 * var(--spacing-8) / 2)

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

.tm-link
  color var(--quaternary)

.title
  max-width 22rem
  center()
  @media $breakpoint-medium
    text-align center
  @media $breakpoint-large
    max-width 42.5rem

.info
  max-width: 26.25rem
  margin-inline: auto
  @media $breakpoint-medium
    text-align center
</style>
