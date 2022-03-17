<template>
  <div ref="defiCanvas" class="canvas">
    <img
      src="~/assets/images/elements/gold-ephemeris-defi.png"
      alt="Gold Ephemeris"
      class="layer ephemeris"
      loading="lazy"
    />
    <div ref="container" class="layer-container js-defi-container">
      <div class="layer defi-3">
        <div class="layer__zone">
          <img
            ref="defi"
            src="~/assets/images/elements/defi-01.jpg"
            class="defi z-1"
            alt=""
          />
        </div>
      </div>
      <div class="layer defi-2">
        <div class="layer__zone">
          <img
            src="~/assets/images/elements/defi-02.jpg"
            class="defi z-1"
            alt=""
          />
        </div>
      </div>
      <div class="layer defi-1">
        <div class="layer__zone">
          <img
            src="~/assets/images/elements/defi-03.jpg"
            class="defi z-1"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  beforeDestroy() {
    window.removeEventListener('resize', this.sizeImages)
    ScrollTrigger.kill()
  },
  mounted() {
    window.addEventListener('resize', this.sizeImages)
    gsap.registerPlugin(ScrollTrigger)

    ScrollTrigger.saveStyles('.defi-1, .defi-2')

    const tl = gsap.timeline()
    tl.to('.defi-1', { height: '0%' })
    tl.to('.defi-2', { height: '0%' })

    // scroll animation
    this.$nextTick(() => {
      const img = new Image()
      img.src = this.$refs.defi.src
      img.onload = () => this.sizeImages()

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
    sizeImages() {
      const containerH = this.$refs.container.getBoundingClientRect().height
      const defiH = this.$refs.defi.getBoundingClientRect().height

      gsap.set('.defi', { y: containerH - defiH })
    },
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

  &__zone
    height 100%
    width: 100%

  &-container
    position sticky
    top 12.5%
    //height 90vh
    //width 100%
    aspect-ratio 0.5587761675
    @media $breakpoint-medium
      aspect-ratio none
      position relative
      height 100%
      top 0

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

  @media $breakpoint-medium
    transform translateY(-25%)

  @media $breakpoint-xl
    transform none
</style>
