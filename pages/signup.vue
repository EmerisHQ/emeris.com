<template>
  <main>
    <div class="section-signup mb-11">
      <div class="tm-wrapper tm-container tm-grid-base">
        <div class="text center">
          <img
            class="graphics"
            src="~/assets/images/elements/surfer-shadow.png"
            alt="Interchain Surfer Shadow"
          />
          <h1 class="tm-rf4 tm-bold tm-lh-title tm-serif">Stay up to date.</h1>
          <tm-form class="mt-9" />
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Sign up',
    }
  },
}
</script>

<style lang="stylus" scoped>
.text
  grid-column 1/-1

.graphics
  width 40%

// @media $breakpoint-xsmall-only
// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .text
    grid-column 2/span 10
// @media $breakpoint-xxl
</style>
