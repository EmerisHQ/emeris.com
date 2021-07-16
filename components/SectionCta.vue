<template>
  <div class="section-cta tm-container tm-wrapper tm-section">
    <graphics-cta class="graphics" />
    <div class="tm-content center text">
      <h1 class="tm-rf5 tm-bold tm-lh-title tm-serif">
        Experience a glimpse<br />of DeFi's future<br />today
      </h1>
      <tm-button
        variant="text"
        to-link="external"
        href="https://medium.com/emeris-blog/introducing-emeris-the-cross-chain-portal-to-all-crypto-apps-4e6eee5b53a8"
        size="l"
        class="mt-6"
        >Get started <span class="icon__right">&#8594;</span></tm-button
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-cta
  padding var(--spacing-11) 0

.text
  text-align center
  padding 0 3.5313rem

.graphics
  flex 1 0 73%
  width 73%
  max-width 26rem
</style>
