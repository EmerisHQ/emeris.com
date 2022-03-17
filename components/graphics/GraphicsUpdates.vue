<template>
  <div class="canvas">
    <div class="layer__container">
      <!-- <img
        src="~/assets/images/elements/updates.jpg"
        alt="Gold Gate"
        class="layer"
      /> -->
      <client-only
        ><tm-sprite
          :src="'/images/elements/sprite-update/gate-'"
          :ext="'jpg'"
          :frame-count="57"
          class="layer"
        ></tm-sprite
      ></client-only>
    </div>
    <img
      class="surfer z-2"
      src="~/assets/images/elements/surfer-controlling.png"
      alt="Interchain Surfer Controlling"
      loading="lazy"
    />
  </div>
</template>
gsap
<style lang="stylus" scoped>
.canvas
  position relative

.layer
  position absolute
  left 0
  top 0
  height 100% //128%
  width 100% //auto
  max-width: none

  @media $breakpoint-xl
    height 100%
    top 50%
    left: 50%
    transform: translate(-50%, -50%)
  &__container
    overflow hidden
    position relative
    width 100%
    height 0
    padding-bottom 119% //155%
    @media $breakpoint-medium
      padding-bottom 158%
    @media $breakpoint-xl
      padding-bottom 119%

.surfer
  mix-blend-mode hard-light
  position absolute
  width 35%
  bottom -20%
  left 50%
  transform translateX(-50%)
  animation surfer-levitate 5s ease-in-out alternate infinite
  mask-mode alpha
  mask-repeat no-repeat
  mask-image url('~/assets/images/elements/surfer-rapture-mask.svg')
  mask-size cover
  backdrop-filter blur(4.7px)
  @media $breakpoint-medium
   left 53%
  @media $breakpoint-xl
    width 21%
    bottom -13%
    left 50%

@keyframes surfer-levitate
  0%, 100%
    transform translate(-50%, 5%)
  50%
    transform translate(-50%, -3%)
</style>
