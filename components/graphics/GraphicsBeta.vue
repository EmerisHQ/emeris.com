<template>
  <div class="canvas">
    <img
      src="~/assets/images/elements/beta.jpg"
      alt="Gold Ephemeris"
      class="layer ephemeris"
    />
    <!-- <div class="hand-container"> -->
    <img
      class="hand"
      src="~/assets/images/elements/hand.png"
      alt="Glass hand"
    />
    <!-- </div> -->
    <div class="orb" />
  </div>
</template>

<style lang="stylus" scoped>
.canvas
  position relative

.hand-container
  transform translate(-50%, 0%) rotate(14deg) scale(-1, -1)

.hand
  position absolute
  mix-blend-mode hard-light
  width 52vw
  max-width 43rem
  top 40%
  left 50%
  transform translate(-50%, 0%) scale(-1, -1)
  // animation hero-hand 4s ease-in-out infinite
  mask-mode alpha
  mask-repeat no-repeat
  mask-image url('~/assets/images/elements/hand-mask.svg')
  mask-size cover
  backdrop-filter blur(4.7px)
  @media $breakpoint-medium
    width 62vw
    top 66%
    left 53%
  @media $breakpoint-large
    top -78%
    left 54.5%

.orb
  position absolute
  z-index 9
  width 22vw
  height 22vw
  max-width 11.25rem
  max-height 11.25rem
  top 38%
  left 50%
  transform translateX(-50%)
  // animation orb-1 4s ease-in-out infinite
  @media $breakpoint-medium
    width 25vw
    height 25vw
    top 72%
    left 54%
  @media $breakpoint-large
    width 9.5vw
    height 9.5vw
    top 12%
    left 54%
  &:before
    content ''
    position absolute
    top 50%
    left 50%
    opacity: 0.5
    width 215%
    height 215%
    background: radial-gradient(50% 50% at 50% 50%, #B8FF40 0%, rgba(12, 245, 255, 0) 100%)
    transform translate(-50%, -50%)
  &:after
    content ''
    position absolute
    top 0
    left 0
    width 100%
    height 100%
    border-radius 100%
    background center / contain no-repeat url('~/assets/images/elements/emeris-header.jpg')

@keyframes orb-1
  0%, 100%
    transform translateX(-50%) translateY(0%) scale(1)
  50%
    transform translateX(-50%) translateY(-12%) scale(.98)
@keyframes hero-hand
  0%, 100%
    transform translate(-66%, 0%) rotate(14deg)
  50%
    transform translate(-66%, -2%) rotate(16deg)
</style>
