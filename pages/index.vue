<template>
  <main>
    <div class="fixed-container z-max">
      <tm-button
        to-link="external"
        href="https://app.emeris.com"
        size="l"
        border-color="var(--primary)"
        :variant="isVisible ? 'outlined' : 'contained'"
        glow
        class="btn"
        >Launch app <span class="icon__right">&#8594;</span></tm-button
      >
    </div>
    <section-hero />
    <section-intro />
    <section-trading />
    <section-protocol />
    <section-rates />
    <section-access />
    <section-beta />
    <section-updates />
    <section-cta />
  </main>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      isVisible: false,
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
    },
  },
}
</script>

<style lang="stylus" scoped>
@media $breakpoint-xsmall-only
  .fixed-container
    position fixed
    bottom 2rem
    left 0
    width 100%
    text-align center

@media $breakpoint-small
  .fixed-container
    position fixed
    bottom 2rem
    left 0
    width 100%
    text-align center

@media $breakpoint-medium
  .fixed-container
    left unset
    bottom 7.9375rem
    right 5rem
    text-align right

// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
