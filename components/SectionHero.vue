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
    }
  },

  mounted() {
    window.addEventListener('scroll', this.animation, false)

    gsap.from(['.title span'], {
      y: 50,
      opacity: 0,
      duration: 1.5,
      ease: 'expo.out',
      stagger: 0.2,
      delay: 0,
    })
    gsap.to(['.background', '.section-hero .button-container'], {
      opacity: 1,
      pointerEvents: 'all',
      duration: 2,
      ease: 'expo.out',
      delay: 2,
    })
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
      if (window.top.scrollY > 100) {
        window.removeEventListener('scroll', this.animation, false)

        const duration = 0.8
        const baseEase = 'expo.out'

        gsap.to(['.section-hero .button-container'], {
          opacity: 0,
          display: 'none',
          pointerEvents: 'none',
          duration: 0,
          ease: baseEase,
        })
        gsap.to(['.section-hero'], {
          minHeight: 0,
          duration: duration * 1.5,
          ease: baseEase,
        })

        const title = this.$refs.title.getBoundingClientRect()

        const windowWidth = window.innerWidth
        const windowHeight = window.innerHeight
        const scaleX = (windowWidth < 570 ? 120 : 242) / windowWidth
        const scaleY =
          ((title.top + title.height) * (windowWidth < 570 ? 1.25 : 1.4)) /
          windowHeight
        const invScaleX = 1 / scaleX
        const invScaleY = 1 / scaleY

        gsap.to('.background', {
          opacity: 0.6,
          yPercent: windowWidth < 570 ? -50 : -54,
          xPercent: -50,
          scaleX,
          scaleY,
          duration,
        })

        gsap.to('.background__img', {
          scaleX: invScaleX,
          scaleY: invScaleY,
          duration,
        })
      }
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
  overflow hidden
  // top -6.5vw
  // left: 50%
  // width 37vw
  // height 89.5vw
  opacity 0
  // opacity 0.6
  // background-color: #C4C4C4
  background-color: #000
  // background-image url('~/assets/images/elements/hero.jpg')
  // background-size 800%
  // background-position center
  // background-repeat no-repeat
  // transform: translateX(-50%)
  top 50%
  left: 50%
  width 100%
  height 100vh
  transform-origin: top
  transform: translate(-50%, -50%) scale(1)
  @media $breakpoint-medium
    top 50%
    left: 50%
    width 100%
    height 100vh
    transform-origin: center
    transform: translate(-50%, -50%) scale(1)
  &__img
    position absolute
    top 50%
    left 50%
    width 100vw
    height 100vh
    object-fit: cover
    transform: translate(-50%, -50%) scale(1)

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
    position relative
    display inline-block

.button-container
  grid-column 1 / -1
  display flex
  justify-content center
  align-items center
  opacity 0
  margin-top var(--spacing-10)
  max-width: 17.25rem
  pointer-events none
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
  min-height: 100vh
  padding-top var(--spacing-12)
  padding-bottom 0
  @media $breakpoint-medium
    align-items start
    padding-top calc(50vh - 11.5rem)

.text-center
  text-align center
</style>
