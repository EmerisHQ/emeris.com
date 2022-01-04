<template>
  <div class="canvas">
    <img
      src="~/assets/images/elements/gold-ephemeris-defi.png"
      alt="Gold Ephemeris"
      class="layer ephemeris"
    />
    <img src="~/assets/images/elements/defi.jpg" class="layer defi z-1" />
  </div>
</template>

<style lang="stylus" scoped>
.ephemeris
  display none
  @media $breakpoint-medium
    display block
    position absolute
    top: 95%
    left 50%
    max-width: none
    width: 350%
    transform: translate(-35%, -50%)
  @media $breakpoint-xl
    top: 102%
    left 50%
    max-width: none
    width: 282%
    transform: translate(-50%, -50%)

.defi
  position relative
  @media $breakpoint-medium
    height: 100%
    width auto
</style>
