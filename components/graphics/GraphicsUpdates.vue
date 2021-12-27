<template>
  <div class="canvas">
    <img
      src="~/assets/images/elements/updates.jpg"
      alt="Gold Ephemeris"
      class="layer ephemeris"
    />
    <img
      class="surfer z-2"
      src="~/assets/images/elements/surfer-controlling.png"
      alt="Interchain Surfer Controlling"
    />
  </div>
</template>

<style lang="stylus" scoped>
.canvas
  position relative

.surfer
  mix-blend-mode hard-light
  position absolute
  width 21%
  bottom -13%
  left 50%
  transform translateX(-50%)
  animation surfer-levitate 5s ease-in-out alternate infinite
  mask-mode alpha
  mask-repeat no-repeat
  mask-image url('~/assets/images/elements/surfer-rapture-mask.svg')
  mask-size cover
  backdrop-filter blur(4.7px)

@keyframes surfer-levitate
  0%, 100%
    transform translate(-50%, 5%)
  50%
    transform translate(-50%, -3%)
</style>
