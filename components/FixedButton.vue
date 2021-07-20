<template>
  <div class="container">
    <tm-button
      v-if="isIntersecting"
      to-link="external"
      href="https://app.emeris.com"
      size="l"
      color="var(--white)"
      background-color="var(--black)"
      variant="gradient"
      class="btn z-max"
      >Launch app <span class="icon__right">&#8594;</span></tm-button
    >
  </div>
</template>

<script>
import intersectingMixin from '~/mixins/intersecting.js'

export default {
  mixins: [intersectingMixin],
}
</script>

<style lang="stylus" scoped>
a.btn
  // position absolute
  // bottom 0
  // right 0
  // position: fixed;
  // bottom: 127px;
  // right: 80px;

// @media $breakpoint-xsmall-only
// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
