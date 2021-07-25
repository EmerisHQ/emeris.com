<template>
  <div class="section-cta tm-container tm-wrapper tm-section">
    <graphics-cta class="graphics" />
    <div class="tm-wrapper mt-11">
      <div class="tm-content center text">
        <h1 class="tm-rf4 tm-rf5-m tm-bold tm-lh-title tm-serif">
          Experience a glimpse of DeFi's future today
        </h1>
        <div class="button-container">
          <tm-button
            to-link="external"
            href="https://medium.com/emeris-blog/introducing-emeris-the-cross-chain-portal-to-all-crypto-apps-4e6eee5b53a8"
            size="m"
            color="var(--white)"
            variant="outlined"
            glow
            class="btn"
            >Get started &#8594;</tm-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-cta
  padding var(--spacing-11) 0
  @media $breakpoint-medium
    padding var(--spacing-11) 0

.text
  text-align center

.button-container
  position relative
  z-index 1
  width 100%
  .btn
    width 100%
    margin-top var(--spacing-10)
    @media $breakpoint-medium
      width auto
      margin-top var(--spacing-7)

.graphics
  flex 1 0 73%
  width 73%
  max-width 26rem
  @media $breakpoint-medium
    margin-top var(--spacing-6)
</style>
