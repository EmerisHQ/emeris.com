<template>
  <div class="canvas">
    <img
      src="~/assets/images/elements/gold-ephemeris-defi.png"
      alt="Gold Ephemeris"
      class="layer ephemeris"
    />
    <div class="layer-container">
      <div class="layer defi-3">
        <img src="~/assets/images/elements/defi-01.jpg" class="defi z-1" />
      </div>
      <div class="layer defi-2">
        <img src="~/assets/images/elements/defi-02.jpg" class="defi z-1" />
      </div>
      <div class="layer defi-1">
        <img src="~/assets/images/elements/defi-03.jpg" class="defi z-1" />
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.saveStyles('.defi-1, .defi-2')

    const tl = gsap.timeline()
    tl.to('.defi-1', { height: '0%' })
    tl.to('.defi-2', { height: '0%' })

    // scroll animation
    this.$nextTick(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          this.scrollTrigger(tl, '.js-section-defi')
        },
        '(max-width: 767px)': () => {
          this.scrollTrigger(tl, '.js-graphics-container')
        },
      })
    })
  },
  methods: {
    scrollTrigger(tl, trigger) {
      ScrollTrigger.create({
        animation: tl,
        trigger,
        scrub: true,
        start: '33.333% bottom',
        end: '66.666% top',
      })
    },
  },
}
</script>
<style lang="stylus" scoped>
.layer
  position absolute
  top 0
  height 100%
  width: 100%
  overflow: hidden

  &-container
    position sticky
    top 12.5%
    height 75vh
    width 100%
    @media $breakpoint-medium
      position relative
      height 100%

.ephemeris
  display none
  @media $breakpoint-medium
    display block
    position absolute
    top: 95%
    left 50%
    max-width: none
    width: 350%
    transform: translate(-35%, -50%)
  @media $breakpoint-xl
    top: 102%
    left 50%
    max-width: none
    width: 282%
    transform: translate(-50%, -50%)

.defi
  position relative
  height: auto
  width 100%
  aspect-ratio: 0.54;
  @media $breakpoint-medium
    aspect-ratio unset
</style>
