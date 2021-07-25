<template>
  <div class="canvas">
    <div class="aspect">
      <div class="layer frame"></div>
      <img
        src="~/assets/images/elements/surfer-levitate.png"
        alt="Interchain Surfer"
        class="layer surfer"
      />
      <div class="layer frame frame-fg"></div>
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.aspect
  position relative
  height 0
  width 100%
  padding-bottom 100% // square aspect ratio
.layer
  position absolute
.guide
  width 100%
@keyframes surfer-levitate
  0%
    transform translateY(5%) rotate(2deg)
  100%
    transform translateY(-3%) rotate(-2deg)
@keyframes surfer-frame
  0%
    transform rotate(213deg)
  100%
    transform rotate(208deg)
.surfer
  mix-blend-mode hard-light
  width 85%
  top 12%
  left 9%
  animation surfer-levitate 5s ease-in-out alternate infinite
.frame
  background-image url('~/assets/images/elements/frame-top.png')
  background-size cover
  background-repeat no-repeat
  width 64%
  padding-bottom 38%
  transform rotate(210deg)
  top 82.3%
  left 67.6%
  transform-origin top left
  animation surfer-frame 5s ease-in-out alternate infinite
  &-fg
    padding-bottom 3.6%
</style>
