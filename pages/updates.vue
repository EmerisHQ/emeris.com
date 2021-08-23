<template>
  <main>
    <div class="section-signup tm-section">
      <div class="tm-wrapper tm-container tm-grid-base">
        <div class="text center">
          <img
            class="graphics"
            src="~/assets/images/elements/surfer.png"
            alt="Interchain Surfer Shadow"
          />
          <h1 class="tm-rf4 tm-bold tm-lh-title tm-serif">
            Get Emeris updates
          </h1>
          <div class="wizard mt-7 tm-measure-narrow">
            <tm-email-wizard />
          </div>
          <p class="center mt-4 tm-text tm-muted">
            Unsubscribe at any time.<br />
            <tm-link href="/privacy" class="tm-link-external">
              Privacy policy
            </tm-link>
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
.text
  grid-column 1/-1

.graphics
  width 40%
  max-width 17.5rem

.wizard
  width 100%

// @media $breakpoint-xsmall-only
// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .text
    grid-column 2/span 10
// @media $breakpoint-xxl
</style>
