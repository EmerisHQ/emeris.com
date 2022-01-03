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
  position absolute
  top: 121%
  left 50%
  max-width: none
  width: 282%
  transform: translate(-50%, -50%)
  @media $breakpoint-xl
    display block

.defi
  position relative
</style>
