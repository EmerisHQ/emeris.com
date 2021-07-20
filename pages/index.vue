<template>
  <main>
    <transition name="fade">
      <tm-button
        v-if="isVisible"
        to-link="external"
        href="https://app.emeris.com"
        size="l"
        border-color="var(--primary)"
        :variant="isVisible ? 'contained' : 'outlined'"
        glow
        class="btn z-max"
        >Launch app <span class="icon__right">&#8594;</span></tm-button
      >
    </transition>
    <section-hero v-observe-visibility="onFalse" />
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

a.btn
  position fixed

@media $breakpoint-xsmall-only
  a.btn
    bottom 2rem
    left 50%
    transform translateX(-50%)

@media $breakpoint-small
  a.btn
    bottom 2rem
    left 50%
    transform translateX(-50%)

@media $breakpoint-medium
  a.btn
    left unset
    transform none
    bottom 7.9375rem
    right 5rem

// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
