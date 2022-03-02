<template>
  <div class="section-hero tm-section">
    <div class="background">
      <img src="~/assets/images/elements/hero.jpg" class="background__img" />
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

        <div class="button-container">
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
      gsap.set('.section-hero .button-container', { autoAlpha: 0 })
      gsap.set('.section-hero', { minHeight: 0 })
      gsap.set('.title span', { y: 0, opacity: 1 })
      gsap.set('.background', {
        '--imageBorder': 1,
        autoAlpha: 1,
        scale: 0.81,
        yPercent: -65,
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
      gsap.to(['.background', '.section-hero .button-container'], {
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

      gsap.killTweensOf('.section-hero .button-container')
      gsap.set('.section-hero .button-container', {
        autoAlpha: 0,
      })

      gsap.to('.background', {
        '--imageBorder': 1,
        scale: 0.81,
        yPercent: -65,
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
  top 50vh
  left: 50%
  width 100%
  height 100vh
  transform-origin top
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

.tm-container
  width 100%

.title
  width 100%
  grid-column 1 / -1
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

.button-container
  grid-column 1 / -1
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
  align-items flex-start
  justify-content center
  //   min-height: 100vh
  padding-top var(--spacing-12)
  padding-bottom 0
  @media $breakpoint-medium
    align-items start
    padding-top calc(50vh - 11.5rem)

.text-center
  text-align center
</style>
