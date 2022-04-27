<template>
  <div class="canvas test">
    <div id="betacanvas" class="layer__container">
      <!-- <img
        src="~/assets/images/elements/beta.jpg"
        alt="Gold Ephemeris"
        class="layer"
      /> -->
      <tm-sprite
        :src="'/images/elements/sprite-beta/Emeris_Master_'"
        :frame-count="44"
        class="layer"
      ></tm-sprite>
    </div>
    <div class="hand">
      <picture>
        <source
          srcset="~/assets/images/elements/hand-z1.avif"
          type="image/avif"
        />
        <source
          srcset="~/assets/images/elements/hand-z1.webp"
          type="image/webp"
        />
        <img
          src="~/assets/images/elements/hand-z1.png"
          class="hand__lay js-hand"
          alt="Glass hand"
          loading="lazy"
        />
      </picture>
      <div class="orb" />

      <picture>
        <source
          srcset="~/assets/images/elements/hand-z2.avif"
          type="image/avif"
        />
        <source
          srcset="~/assets/images/elements/hand-z2.webp"
          type="image/webp"
        />
        <img
          src="~/assets/images/elements/hand-z2.png"
          class="hand__lay hand__lay--over js-hand"
          alt="Glass hand"
          loading="lazy"
        />
      </picture>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    // scroll animation
    this.$nextTick(() => {
      gsap.to('.js-hand', {
        y: -30,
        scrollTrigger: {
          scrub: 1,
          trigger: '.js-section-beta',
          endTrigger: '#betacanvas',
          start: 'top bottom',
          end: 'bottom top',
        },
      })
    })
  },
  beforeDestroy() {
    ScrollTrigger.getAll().forEach((t) => t.kill())
  },
}
</script>

<style lang="stylus" scoped>
.canvas
  position relative
  display flex
  justify-content center


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
    width 100%
    height 15.5625rem
    @media $breakpoint-xl
      height 0
      padding-bottom 39%

.hand-container
  transform translate(-50%, 0%) rotate(14deg) scale(-1, -1)

.hand
  position absolute
  min-width: 14rem
  height 17rem
  max-width 43rem
  top -7.5rem
  z-index 0
  display: flex;
  justify-content: center;

  @media $breakpoint-medium
    min-width: 27rem
    height 27rem
    top -13.5rem
  @media $breakpoint-xl
    width 45rem

  &__lay
    position absolute
    top 0
    left 12%
    max-width 100%
    height 100%
    opacity .8
    transform: translate(0,-30%)

    @media $breakpoint-medium
      left 20%

    @media $breakpoint-xl
      left 30%

    &--over
      z-index: 10

.orb
  position absolute
  z-index 9
  width 6rem
  height 6rem
  max-width 11.25rem
  max-height 11.25rem
  top 45%
  left 50%
  transform translateX(-50%)
  @media $breakpoint-medium
    width 9rem
    height 9rem
    top 49%
    left 50%
  @media $breakpoint-xl
    width 9.5vw
    height 9.5vw
    top 50%
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
