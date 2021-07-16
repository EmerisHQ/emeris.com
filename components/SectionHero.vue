<template>
  <div id="homepage" class="section-hero tm-container tm-wrapper">
    <div class="outer tm-container-narrow mt-5">
      <div class="inner center">
        <h1
          class="title tm-content tm-serif tm-rf5 tm-bold tm-lh-title tm-title"
        >
          <span class="tm-text-left">Experience</span>
          <span class="tm-text-center">the power of</span>
          <span class="tm-text-right">cross-chain DeFi</span>
        </h1>
      </div>
      <tm-button
        variant="text"
        to-link="external"
        href="https://medium.com/emeris-blog/introducing-emeris-the-cross-chain-portal-to-all-crypto-apps-4e6eee5b53a8"
        class="btn"
        >Launch app <span class="icon__right">&#8594;</span></tm-button
      >
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-hero
.outer
.inner
  position relative

.inner
  padding-top 81.5px
  padding-bottom 395.5px
  padding-left 112px
  padding-right 112px

a.btn
  position absolute
  bottom 0
  right 0

.section-hero
  padding-top var(--spacing-5)
  padding-bottom var(--spacing-10)

.title span
  display block
</style>
