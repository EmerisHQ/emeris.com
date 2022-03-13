<template>
  <div class="canvas js-ephemeris">
    <img
      class="ephemeris ephemeris-item"
      src="~/assets/images/elements/ephemeris.png"
      alt="Gold ephemeris ring"
    />
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()
    tl.to('.js-ephemeris', { '--eph-rotate': '360deg', duration: 2 })
    tl.to('.js-ephemeris', { '--eph-opacity': 1, duration: 1 }, '<')

    // scroll animation
    this.$nextTick(() => {
      ScrollTrigger.create({
        animation: tl,
        trigger: '.js-ephemeris',
        start: 'center bottom',
      })
    })
  },
}
</script>

<style lang="stylus" scoped>
.canvas
  position absolute
  z-index -1
  opacity var(--eph-opacity)
  --eph-rotate 0deg
  --eph-opacity 0
  //padding-bottom 70%
  @media $breakpoint-medium
    //padding-bottom 30%
  @media $breakpoint-xl
    //padding-bottom 33%
  &::after
    content ''
    position absolute
    display block
    height 100%
    width 100%
    top 0
    left 0
    transform: scale(1.1) rotate(var(--eph-rotate))
    background: conic-gradient(from 92.69deg at 46.93% 37.4%, transparent -48.83deg, #000 37deg, #000 112.69deg, transparent 140.54deg, transparent 167.19deg, #000 260.85deg, transparent 281deg, #000 425deg);

.ephemeris-item
  position relative
  width 100%
    //   top 0
    //   left 50%
    //   width 133%
    //   max-width 100rem
    //   transform translate(-50%, -27.5%)
  @media $breakpoint-medium
    // width 170%
    // transform translate(-50%, -33%)
  @media $breakpoint-xl
    // width 240%
    // transform translate(-50%, -33%)
</style>
