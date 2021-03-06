<template>
  <main>
    <div ref="button" class="fixed-container">
      <tm-cookie-banner />
    </div>

    <div class="tm-content">
      <img
        src="~/assets/images/elements/emeris-on-hold.jpg"
        alt="Emeris cross-chain crypto portal"
        class="feature-img"
      />
    </div>
    <section class="tm-wrapper tm-container">
      <div class="tm-content">
        <h1
          ref="title"
          class="
            title
            tm-content tm-serif tm-rf4 tm-bold tm-lh-title tm-title
            mt-6
          "
        >
          Emeris is on hold
        </h1>
        <div class="content-body tm-text tm-rf0 tm-rf1-m-up tm-lh-copy mt-6">
          <p class="mt-5">
            It's with a heavy heart that we share the news that development on
            Emeris is on hold. We appreciate your support for all our efforts
            over the last few months and hope that your cross-chain adventure
            continues from here. As you may know, Emeris was born from the need
            to solve the fragmentation issues that arise when users have to deal
            with many blockchains at the same time. In the past year, we focused
            on a seamless user experience and built an intuitive cross-chain
            portfolio manager that supported over 25 chains and implemented
            features like cross-chain transfers, DEX aggregation, staking, and
            more.
          </p>
          <p class="mt-5">
            Unfortunately, building Emeris is not cheap, and, given current
            market conditions, Ignite, Inc. has taken the decision to prioritize
            other initiatives. As a result, Emeris will be shutting down for a
            period of time. We still strongly believe that the Internet of
            Blockchains will need interfaces like Emeris, which is why we remain
            hopeful to restart development at a later date. We will also be
            open-sourcing all our repositories, in the hope that they can be
            used by other projects in the ecosystem going forward.
          </p>
          <p class="mt-5">
            Thank you to everyone who supported us along this journey. We hope
            to see you all again soon!
          </p>
          <div class="callout mt-8">
            <h2 class="tm-title tm-rf0 tm-rf1-m-up tm-lh-title tm-bold">
              Gravity DEX liquidity providers
            </h2>
            <p class="tm-rf-1 tm-rf0-m-up tm-muted mt-4">
              Gravity DEX has been migrated from the Cosmos Hub to Crescent
              Network. If you still have liquidity in a Gravity DEX pool, please
              use
              <tm-link href="https://app.crescent.network/gdex"
                >Crescent</tm-link
              >
              to withdraw your liquidity.
            </p>
            <p class="tm-rf-1 tm-rf0-m-up tm-lh-copy tm-muted mt-2">
              For further support, join the
              <tm-link href="https://t.me/crescentnetwork"
                >Crescent Telegram group</tm-link
              >.
            </p>
          </div>
          <p class="tm-muted tm-rf-1 mt-7">Last updated Jun 28, 2022</p>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      currentUrl: this.$route.fullPath,
    }
  },

  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
  },
}
</script>

<style lang="stylus" scoped>
.feature-img
  display block
  width 100%

.callout
  background var(--surface)
  padding var(--spacing-6)
  border-radius $border-radius-5

.fixed-container
  position fixed
  z-index 10
  bottom 0
  left var(--wrap-gap)
  right var(--wrap-gap)
  @media $breakpoint-medium
    bottom var(--spacing-9)
    left auto
</style>
