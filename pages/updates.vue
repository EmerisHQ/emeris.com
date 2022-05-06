<template>
  <main>
    <section-primary-nav />

    <div class="section-signup tm-section">
      <div class="tm-wrapper tm-container tm-grid-base">
        <div class="text center">
          <img
            class="graphics"
            src="~/assets/images/elements/surfer.png"
            alt="Interchain Surfer Shadow"
          />
          <h1 class="tm-rf4 tm-bold tm-lh-title tm-serif">Get updatess</h1>
          <div class="wizard mt-7 tm-measure-narrow">
            <tm-email-wizard />
          </div>
          <p class="text-center mt-4 tm-text tm-muted tm-rf-1">
            Unsubscribe at any time.<br />
            <tm-link href="/privacy">Privacy policy</tm-link>
          </p>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Updates',
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-signup
    padding 20vh 0 15vh
    @media $breakpoint-medium
        min-height 100vh
        padding 15vh 0 5rem
.text
  grid-column 1/-1

.graphics
  width 40%
  max-width 17.5rem

.wizard
  width 100%
  >>> .wizard
        max-height: 100%

.text-center
  text-align center

// @media $breakpoint-xsmall-only
// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .text
    grid-column 2/span 10
// @media $breakpoint-xxl
</style>
