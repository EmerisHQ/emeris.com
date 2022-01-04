<template>
  <div class="canvas">
    <img
      class="ephemeris ephemeris-item"
      src="~/assets/images/elements/gold-ephemeris-cta.png"
      alt="Gold ephemeris ring"
    />
  </div>
</template>

<style lang="stylus" scoped>
.canvas
  height 0
  width 100%
  padding-bottom 70%
  @media $breakpoint-medium
    padding-bottom 30%
  @media $breakpoint-xl
    padding-bottom 33%

.ephemeris-item
  position absolute
  top 0
  left 50%
  width 133%
  max-width 100rem
  transform translate(-50%, -27.5%)
  @media $breakpoint-medium
    width 170%
    transform translate(-50%, -33%)
  @media $breakpoint-xl
    width 240%
    transform translate(-50%, -33%)
</style>
