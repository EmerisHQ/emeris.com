<template>
  <div class="canvas tm-center">
    <div class="aspect">
      <div class="layer frame"></div>
      <img
        src="~/assets/images/elements/surfer-swimming.png"
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
  padding-bottom 70%

.layer
  position absolute

.guide
  width 100%

@keyframes surfer-levitate
  0%
    transform translateY(5%) rotate(2deg)
  100%
    transform translateY(-3%) rotate(-2deg)

.surfer
  width 150%
  top 12%
  left 0
  animation surfer-levitate 5s ease-in-out alternate infinite

.frame
  background-image url('~/assets/images/elements/gold-door.png')
  background-size cover
  background-repeat no-repeat
  width 102%
  padding-bottom 88%
  top -3%
  left 53%
  transform-origin top left
  transform translateX(-50%)
  &-fg
    padding-bottom 3.6%
</style>
