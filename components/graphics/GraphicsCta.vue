<template>
  <div class="canvas tm-center">
    <div class="aspect">
      <img
        src="~/assets/images/elements/gold-door.png"
        alt="Gold Door"
        class="layer frame"
      />
      <img
        src="~/assets/images/elements/surfer-swimming.png"
        alt="Interchain Surfer"
        class="layer surfer"
      />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.aspect
  position relative
  height 0
  width 100%
  padding-bottom 70%
  @media $breakpoint-medium
    padding-bottom 30%

.layer
  position absolute

.guide
  width 100%

@keyframes fsurfer-levitate
  0%
    transform translateY(5%) translateX(-50%) rotate(2deg)
  100%
    transform translateY(-3%) translateX(-50%) rotate(-2deg)

.surfer
  mix-blend-mode hard-light
  width 150%
  max-width none
  top -23%
  left 31%
  transform translateX(-50%)
  animation surfer-levitate 5s ease-in-out alternate infinite
  @media $breakpoint-medium
    width 83%
    top -13%
    left 46.5%

.frame
  width 102%
  max-width 13.8rem
  top -13%
  left 53%
  transform-origin top left
  transform translateX(-50%)
  @media $breakpoint-medium
    top 0
    left 58.2%
</style>
