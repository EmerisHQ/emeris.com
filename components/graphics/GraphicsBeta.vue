<template>
  <div class="canvas">
    <div class="layer__container">
      <!-- <img
        src="~/assets/images/elements/beta.jpg"
        alt="Gold Ephemeris"
        class="layer"
      /> -->
      <client-only
        ><tm-sprite
          :src="'/images/elements/sprite-beta/Emeris_Master_'"
          :frame-count="44"
          class="layer"
        ></tm-sprite
      ></client-only>
    </div>
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


.layer
  position absolute
  top 0
  left 50%
  max-width: none
  object-fit: contain;
  transform: translateX(-50%)
  width 100%
  height 100%
  @media $breakpoint-large
    width 100%
    height 100%
  &__container
    overflow hidden
    position relative
    height 15.5625rem
    @media $breakpoint-xl
      height 0
      padding-bottom 39%

.hand-container
  transform translate(-50%, 0%) rotate(14deg) scale(-1, -1)

.hand
  position absolute
  //mix-blend-mode hard-light
  min-width: 27rem
  width 27rem
  max-width 43rem
  top -13.5rem
  left 52%
  transform translate(-50%, 0%) scale(-1, -1)
  // animation hero-hand 4s ease-in-out infinite
  //mask-mode alpha
  //mask-repeat no-repeat
  //mask-image url('~/assets/images/elements/hand-mask.svg')
  //mask-size cover
  //backdrop-filter blur(4.7px)
  @media $breakpoint-medium
    left 50%
  @media $breakpoint-xl
    width 45rem
    top -82%
    left 50.5%


.orb
  position absolute
  z-index 9
  width 26vw
  height 26vw
  max-width 11.25rem
  max-height 11.25rem
  top 8.5%
  left 50%
  transform translateX(-50%)
  // animation orb-1 4s ease-in-out infinite
  @media $breakpoint-medium
    width 11vw
    height 11vw
    top 9%
    left 50%
  @media $breakpoint-xl
    width 9.5vw
    height 9.5vw
    top 9.7%
    left 50%
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
