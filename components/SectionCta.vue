<template>
  <div id="cta" class="section-cta tm-section">
    <div class="tm-wrapper tm-container">
      <div class="tm-center text">
        <div class="title">
          <div class="graphics canvas js-ephemeris">
            <img
              class="ephemeris ephemeris-item"
              src="~/assets/images/elements/ephemeris.png"
              alt="Gold ephemeris ring"
              loading="lazy"
            />
          </div>
          <h1
            class="
              tm-title tm-lh-title tm-serif tm-rf4 tm-rf5-m-up tm-bold
              js-cta-title
              cta-title
              z-2
            "
          >
            <span>Experience</span> <span>a</span>&nbsp;<span>glimpse</span>
            <br /><span>of</span>&nbsp;<span>DeFi's</span> <span>future</span>
            <span>today</span>
          </h1>
        </div>
        <div class="button-container js-cta-btn">
          <tm-button
            size="m"
            variant="outlined"
            glow
            class="btn mobile"
            disabled
            >Mobile not supported yet</tm-button
          >
          <tm-button
            id="diveIn"
            to-link="external"
            :href="getUtmParams('https://app.emeris.com/')"
            size="m"
            variant="gradient"
            glow
            class="btn"
          >
            Dive into the app <span class="icon__right">&rarr;</span>
          </tm-button>
        </div>
        <div class="tiny-text tm-rf-1 tm-muted mt-4 center mobile-text z-2">
          Use the app on a desktop device
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  data() {
    return {
      currentUrl: this.$route.fullPath,
    }
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    const tl = gsap.timeline()

    tl.to('.js-ephemeris', { '--eph-rotate': '360deg', duration: 2 })
    tl.to('.js-ephemeris', { '--eph-opacity': 1, duration: 1 }, '<')
    tl.to(
      '.js-cta-title > span',
      {
        y: 0,
        autoAlpha: 1,
        duration: 1.5,
        stagger: 0.1,
      },
      '<'
    )
    tl.to('.js-cta-btn', { opacity: 1, duration: 2 }, '-=1')
    // scroll animation
    this.$nextTick(() => {
      ScrollTrigger.create({
        animation: tl,
        trigger: '.js-ephemeris',
        start: 'center bottom',
      })
    })
  },
  beforeDestroy() {
    ScrollTrigger.kill()
  },
  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
  },
}
</script>

<style lang="stylus" scoped>
.section-cta
  overflow hidden
  position relative
  min-height: 80vh
  display flex
  align-items center
  @media $breakpoint-medium
    overflow initial
    min-height: 0
  @media $breakpoint-xl
    min-height: 90vh
.tiny-text
  position relative
.title
  position relative
  span
    opacity 0
    transform translate(0, 50px)
    position relative
    display inline-block

.graphics
  position absolute
  top 50%
  left: 50%
  width 100%
  //max-width 26rem
  transform: translate(-50%, -50%)

.text
  max-width: 42.625rem
  text-align center

.button-container
.mobile-text
  max-width: 17rem
  margin-inline: auto

.button-container
  position relative
  z-index 1
  width 100%
  opacity: 0
  @media $breakpoint-medium
    margin-top var(--spacing-8)
  @media $breakpoint-xl
    margin-top var(--spacing-6)
  .btn
    display none
    width 100%
    margin-top var(--spacing-9)
    margin-left 0 !important
    @media $breakpoint-medium
      display inline-flex
      width auto
      margin-top 0
    &.mobile
      display inline-flex
      @media $breakpoint-medium
        display none

.mobile-text
  @media $breakpoint-medium
    display none

.canvas
  position absolute
  z-index 1
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

.cta-title
  position relative

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
