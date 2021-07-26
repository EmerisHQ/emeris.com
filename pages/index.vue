<template>
  <main>
    <div class="fixed-container">
      <tm-button
        to-link="external"
        href="https://app.emeris.com"
        size="m"
        border-color="var(--primary)"
        variant="outlined"
        glow
        class="btn"
        >Launch app &#8594;</tm-button
      >
    </div>
    <section-hero />
    <section-intro />
    <kinesis-container>
      <section-trading />
      <section-protocol />
    </kinesis-container>
    <section-rates />
    <section-access />
    <section-beta />
    <section-updates />
    <section-cta />
  </main>
</template>

<script>
import { KinesisContainer } from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
  },
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
.fixed-container
  position fixed
  z-index 9
  bottom var(--spacing-9)
  left var(--wrap-gap)
  right var(--wrap-gap)
  @media $breakpoint-medium
    bottom var(--spacing-10)
    left auto
  .btn
    width 100%

// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
