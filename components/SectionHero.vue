<template>
  <div class="section-hero tm-section">
    <div class="background">
      <video
        autoplay="autoplay"
        muted="muted"
        poster="~/assets/images/elements/hero.jpg"
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
          id="hero-title"
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
          <tm-button class="btn" @click.native="openVideo">
            Watch trailer
          </tm-button>
          <tm-button
            v-scroll-to="'#hero-title'"
            variant="gradient"
            href="#"
            class="scroll-down z-1"
          >
            <icon-arrow-down />
          </tm-button>
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
      window.addEventListener('scroll', this.animation, false)
      gsap.to(['.title span'], {
        y: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'expo.out',
        stagger: 0.1,
      })
      gsap.to(['.background', '.section-hero .js-full-button'], {
        autoAlpha: 1,
        duration: 2,
        ease: 'ease2.out',
        delay: 1,
        onComplete: () => (this.dataLoaded = true),
      })
    }
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.animation, false)
  },

  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
    animation() {
      window.removeEventListener('scroll', this.animation, false)

      gsap.killTweensOf('.section-hero .js-full-button')
      gsap.set('.section-hero .js-full-button', {
        autoAlpha: 0,
      })

      gsap.to('.background', {
        '--imageBorder': 1,
        scale: 0.81,
        duration: 1.4,
        ease: 'power3.out',
      })
      gsap.to('.js-launch', {
        y: 0,
        autoAlpha: 1,
        duration: 1.4,
        ease: 'power3.out',
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
  //overflow hidden
  opacity 0
  top 50%
  left: 50%
  width 100%
  height 100vh
  transform translate(-50%, -50%) scale(1)
  will-change: transform

  --imageBorder 0

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
  grid-column 1 / -1
  grid-row 2 / 3
  display flex
  justify-content center
  align-items center
  opacity 0
  visibility: hidden
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
  //padding-top var(--spacing-12)
  padding-top 0
  padding-bottom 0
  @media $breakpoint-medium
    //align-items start
    //padding-top calc(50vh - 11.5rem)

.text-center
  text-align center
</style>
