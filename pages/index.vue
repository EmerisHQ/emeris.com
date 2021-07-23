<template>
  <main>
    <transition name="fade">
      <div class="fixed-container z-max">
        <tm-button
          v-if="isVisible"
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
    </transition>
    <section-hero v-observe-visibility="onTrue" />
    <section-intro v-observe-visibility="onTrue" />
    <section-trading v-observe-visibility="onTrue" />
    <section-protocol v-observe-visibility="onTrue" />
    <section-rates v-observe-visibility="onTrue" />
    <section-access v-observe-visibility="onTrue" />
    <section-beta v-observe-visibility="onTrue" />
    <section-updates v-observe-visibility="onTrue" />
    <section-cta v-observe-visibility="onFalse" />
  </main>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      isVisible: false,
      throttle: 0,
      threshold: 0,
    }
  },
  methods: {
    visibilityChanged(isVisible, entry) {
      this.isVisible = isVisible
    },
    onTrue() {
      this.isVisible = true
    },
    onFalse() {
      this.isVisible = false
    },
  },
}
</script>

<style lang="stylus" scoped>
.fade-enter-active
.fade-leave-active
  transition opacity .5s

.fade-enter
.fade-leave-to
  opacity 0

.fixed-container
  position fixed
  bottom var(--spacing-9)
  left var(--wrap-gap)
  right var(--wrap-gap)
  // center()
  .btn
    width 100%

// @media $breakpoint-xsmall-only
//   a.btn
//     bottom 2rem
//     left 50%
//     transform translateX(-50%)

// @media $breakpoint-small
//   a.btn
//     bottom 2rem
//     left 50%
//     transform translateX(-50%)

// @media $breakpoint-medium
//   a.btn
//     left unset
//     transform none
//     bottom 7.9375rem
//     right 5rem

// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
