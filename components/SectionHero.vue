<template>
  <div id="section-hero" class="section-hero tm-section">
    <div class="background">
      <video
        autoplay="autoplay"
        muted="muted"
        playsinline=""
        loop="loop"
        class="background__img"
      >
        <source src="~/assets/videos/emeris-loop-xs.mp4" type="video/mp4" />
      </video>
      <div class="background__veil"></div>
    </div>
    <div class="tm-wrapper tm-container">
      <div class="tm-grid-base">
        <h1
          ref="title"
          class="
            title
            tm-content tm-serif tm-rf5 tm-bold tm-lh-title tm-title
            z-2
            js-hero-title
          "
        >
          <div class="tm-text-center"><span>Experience</span></div>
          <div class="tm-text-left">
            <span>the</span> <span>power</span> <span>of</span>
          </div>
          <div class="tm-text-right">
            <span>cross-</span><span>chain</span> <span>DeFi</span>
          </div>
        </h1>

        <div class="button-container js-full-button">
          <div class="button-container-in js-full-button2">
            <tm-button class="btn" @click.native="openVideo">
              Watch trailer
            </tm-button>
            <tm-button
              variant="gradient"
              href="#"
              class="scroll-down z-1"
              @click.native="scrollTo"
            >
              <icon-arrow-down />
            </tm-button>
          </div>
        </div>

        <content-hero-buttons
          class="hero-intro-btn js-launch"
          :open-video="openVideo"
        ></content-hero-buttons>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'
import VueScrollTo from 'vue-scrollto'
import IconArrowDown from '~/components/icons/IconArrowDown.vue'

export default {
  components: {
    IconArrowDown,
  },

  props: {
    openVideo: {
      type: Function,
      default: () => {},
    },
  },

  data() {
    return {
      show: true,
      isVisible: true,
      throttle: 0,
      threshold: 0,
      currentUrl: this.$route.fullPath,
      dataLoaded: false,
    }
  },
  head() {
    return {
      bodyAttrs: {
        class: !this.dataLoaded ? 'block-Visibility' : '',
      },
    }
  },

  mounted() {
    if (window.top.scrollY > 0) {
      gsap.set('.section-hero .js-full-button', { autoAlpha: 0 })
      gsap.set('.js-launch', { y: 0, autoAlpha: 1 })
      gsap.set('.js-hero-title span', { y: 0, opacity: 1 })
      gsap.set('.background', {
        '--imageBorder': 1,
        autoAlpha: 1,
        scale: 0.81,
      })

      this.dataLoaded = true
    } else {
      window.addEventListener('load', () => {
        const tlstart = gsap.timeline({ paused: true })

        tlstart.to('.js-hero-title span', {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: 'expo.out',
          stagger: 0.1,
        })

        tlstart.to(
          ['.background, .js-full-button'],
          {
            autoAlpha: 1,
            duration: 2,
            ease: 'linear',
            onComplete: () => (this.dataLoaded = true),
          },
          '<+1.1'
        )

        tlstart.play()
      })

      gsap.registerPlugin(ScrollTrigger)

      this.$nextTick(() => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.section-hero',
            start: 'bottom bottom',
            end: 'bottom 35%',
            scrub: true,
            pin: true,
            // markers: true,
          },
        })
        tl.to('.background', {
          '--imageBorder': 1,
          scale: 0.81,
          duration: 2,
          ease: 'power2.out',
        })
        tl.to(
          '.section-hero .js-full-button2',
          {
            autoAlpha: 0,
            duration: 0.4,
            ease: 'power3.out',
          },
          '<'
        )
        tl.to(
          '.js-launch',
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            ease: 'power3.out',
          },
          '<+.6'
        )
      })
    }
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
    scrollTo() {
      VueScrollTo.scrollTo('#intro', 1000, {
        offset: -window.innerHeight + 150,
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
img
  max-width initial

.section-hero
.title
.btn
  position relative

.background
  position absolute
  opacity 0
  top 50%
  left: 50%
  width 100%
  height 100vh
  transform translate(-50%, -50%) scale(1)
  will-change: transform

  --imageBorder: 0

  &::before,
  &::after
    content ''
    position absolute
    display block
    background var(--bg)
    height calc(100%+4px)
    width 30%
    top -2px
    left -2px
    z-index 1
    transform-origin left
    transform scaleX(var(--imageBorder))
    will-change transform

    @media $breakpoint-medium
      width 40%

  &::after
    left initial
    transform-origin right
    right -2px

  &__img
    position absolute
    width 100%
    height 100vh
    object-fit: cover

  &__veil
    position absolute
    width 100%
    height 100%
    transform: scale(1.0)
    background: linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(255,255,255,0) 100%);
.tm-container
  width 100%

.title
  width 100%
  grid-column 1 / -1
  grid-row 1 / 2
  max-width: 52rem
  margin-top 54vw
  @media $breakpoint-medium
    margin-top 0
    padding-top 5rem
  @media $breakpoint-xl
    grid-column 3 / span 8
    padding-top 3rem
  span
    opacity 0
    transform translate(0, 50px)
    position relative
    display inline-block

.hero-intro-btn
  transform translate3D(0,25vh, 0)
  opacity 0
  visibility hidden

.button-container
  opacity 0
  grid-column 1 / -1
  grid-row 2 / 3
  &-in
    display flex
    justify-content center
    align-items center
    visibility hidden
    margin-top var(--spacing-10)
    max-width: 17.25rem

  @media $breakpoint-medium
    margin-inline: auto
    min-width 16rem
  .tm-button
    &:not(:first-child)
      flex-shrink: 0
    &:first-child
      width 100%
  .tm-button + .tm-button
    margin-top 0
    margin-left var(--spacing-5)

.scroll-down
  border-radius: 100% !important
  font-size 0
  width 3rem
  height: 3rem
  padding-inline: 0 !important

.btn
  border-radius: 4.25rem

.section-hero
  display flex
  contain: style;
  align-items center
  justify-content center
  min-height: 100vh
  padding-top 0
  padding-bottom 0

.text-center
  text-align center
</style>
