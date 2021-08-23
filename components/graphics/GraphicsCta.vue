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
  @media $breakpoint-xl
    padding-bottom 33%
  &:before
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 300%
    background-color var(--bg)

.layer
  position absolute

.guide
  width 100%

@keyframes surfer-levitate
  0%, 100%
    transform translate(-48%, 5%)
  50%
    transform translate(-50%, -3%)

.surfer
  mix-blend-mode hard-light
  max-width none
  width 130%
  top -4%
  left 37%
  transform translateX(-50%)
  animation surfer-levitate 5s ease-in-out alternate infinite
  mask-mode alpha
  mask-repeat no-repeat
  mask-image url('~/assets/images/elements/surfer-dive-mask.svg')
  mask-size cover
  backdrop-filter blur(4.7px)
  @media $breakpoint-medium
    width 73%
    top -13%
    left 52%
  @media $breakpoint-xl
    width 113%
    top -21%
    left 45.3%

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
  @media $breakpoint-xl
    max-width 19.8rem
    top -6.5%
    left 62%
</style>
