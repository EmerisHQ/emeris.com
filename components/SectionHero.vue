<template>
  <div v-observe-visibility="onFalse" class="section-hero tm-section">
    <div class="outer tm-wrapper tm-container">
      <div class="inner center">
        <img
          class="hand"
          src="~/assets/images/elements/hand.png"
          alt="Glass hand"
        />
        <img
          class="ephemeris ephemeris-item"
          src="~/assets/images/elements/gold-ephemeris-hero.png"
          alt="Gold ephemeris ring"
        />
        <div class="orb" />

        <h1
          class="
            title
            tm-content tm-serif tm-rf5 tm-rf6-xl-up tm-bold tm-lh-title tm-title
            z-2
          "
        >
          <img
            class="title-surfer-shadow"
            src="~/assets/images/elements/surfer-levitate-shadow.png"
            alt="Interchain Surfer Shadow"
          />
          <div class="frame frame-top"></div>
          <img
            class="title-surfer"
            src="~/assets/images/elements/surfer-levitate.png"
            alt="Interchain Surfer"
          />
          <div class="frame frame-bottom"></div>
          <span class="tm-text-left">Experience</span>
          <span class="tm-text-center">the power of</span>
          <span class="tm-text-right">cross-chain DeFi</span>
        </h1>
        <p
          class="
            overline
            tm-rf-1 tm-rf1-m-up tm-medium tm-lh-title tm-overline tm-muted
          "
        >
          Coming Aug 17
        </p>
      </div>
    </div>
    <svg
      width="16"
      height="50"
      viewBox="0 0 16 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="arrow"
    >
      <path
        d="M9 1C9 0.447715 8.55228 2.41411e-08 8 0C7.44772 -2.41411e-08 7 0.447715 7 1L9 1ZM7.29289 49.7071C7.68342 50.0976 8.31658 50.0976 8.7071 49.7071L15.0711 43.3431C15.4616 42.9526 15.4616 42.3195 15.0711 41.9289C14.6805 41.5384 14.0474 41.5384 13.6569 41.9289L8 47.5858L2.34314 41.9289C1.95262 41.5384 1.31945 41.5384 0.92893 41.9289C0.538406 42.3195 0.538406 42.9526 0.92893 43.3431L7.29289 49.7071ZM7 1L7 49L9 49L9 1L7 1Z"
        fill="url(#paint0_linear-763726)"
      />
      <defs>
        <linearGradient
          id="paint0_linear-763726"
          x1="7.81528"
          y1="49"
          x2="8.5"
          y2="1"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFF0CA" />
          <stop offset="0.236371" stop-color="#D3AD5F" />
          <stop offset="0.331099" stop-color="#FFECC4" />
          <stop offset="0.532612" stop-color="#997736" />
          <stop offset="0.74446" stop-color="#FFF2C0" />
          <stop offset="0.970086" stop-color="#CEA851" />
        </linearGradient>
      </defs>
    </svg>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: true,
      isVisible: true,
      throttle: 0,
      threshold: 0,
    }
  },
  methods: {
    visibilityChanged(isVisible) {
      this.isVisible = isVisible
    },
    onTrue() {
      this.isVisible = true
    },
    onFalse() {
      this.isVisible = false
    },
  },
}
</script>

<style lang="stylus" scoped>
img
  max-width initial

.section-hero
.outer
.inner
.title
.hand-orb
  position relative

.outer
.title
  width 100%

.title
  max-width calc((1.401125rem + 3.7441666666666666vw) * 8)
  @media $breakpoint-small
    max-width none
  &:before
    content ''
    position absolute
    z-index -1
    bottom 50%
    left 30%
    width 50%
    height 150%
    background-color var(--bg)
    transform rotate(29deg)
    @media $breakpoint-medium
      bottom auto
      top 0
      left calc(50% + 12.75rem)
      width 255px
      height 225px
      transform translate(-50%, -50%) rotate(30deg)
    @media $breakpoint-large
      left calc(52% + 23.5rem)
      transform translate(-50%, -16%) rotate(30deg)

.section-hero
  display flex
  align-items center
  justify-content center
  min-height 100vh
  padding-top var(--spacing-12)
  padding-bottom var(--spacing-7)
  @media $breakpoint-medium
    margin-bottom var(--spacing-8)
    padding-top var(--spacing-11)
    padding-bottom var(--spacing-10)

.outer
  @media $breakpoint-medium
    padding-bottom var(--spacing-13)
  @media $breakpoint-large
    padding-bottom 0

.inner
  margin-top calc(var(--spacing-5) * -1)
  padding-bottom var(--spacing-13)
  @media $breakpoint-medium
    margin-top 0
  @media $breakpoint-large
    max-width calc((1.57625rem + 5.378333333333333vw) * 10)

.arrow
  display none
  position absolute
  bottom var(--spacing-10)
  left var(--spacing-10)
  transform translateX(-1rem)
  @media $breakpoint-large
    display block
    transform translateX(-50%)
    animation levitate 1.8s ease-in-out alternate infinite

@keyframes levitate
  0%, 100%
    transform translate(-50%, 7%)
  50%
    transform translate(-50%, -7%)

a.btn
  position absolute
  bottom 0
  right 0

.title span
  display block

.ephemerides
  position absolute
  top 0
  left 50%
  width 100%
  min-width 24rem
  max-width 36rem
  display flex
  align-items center
  background-color var(--bg)
  transform translateX(-50%)

.ephemeris-item
  position absolute
  top 0
  left 50%
  width 195%
  max-width 91rem
  transform translate(-50%, -22.5%)
  @media $breakpoint-medium
    width 233%
    transform translate(-50%, -29.5%)

.hand-orb
  width 100%
  max-width: $max-width['8']
  center()

  &__inner
    width 100%
    position relative
    z-index 1

.hand
  position absolute
  mix-blend-mode hard-light
  width 52vw
  max-width 30rem
  top 40%
  left 50%
  transform translate(-66%, 0%) rotate(14deg)
  animation hero-hand 4s ease-in-out infinite
  @media $breakpoint-medium
    width 62vw
    top 66%
    left 53%
  @media $breakpoint-large
    top 43%
    left 50%

.orb
  position absolute
  z-index 9
  width 22vw
  height 22vw
  max-width 11.25rem
  max-height 11.25rem
  top 38%
  left 50%
  transform translateX(-50%)
  animation orb-1 4s ease-in-out infinite
  @media $breakpoint-medium
    width 25vw
    height 25vw
    top 72%
    left 54%
  @media $breakpoint-large
    top 47%
    left 51.5%
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

.title-surfer
  // mix-blend-mode hard-light
  position absolute
  width 21%
  max-width 6.8rem
  left 50%
  top 0
  transform translate(-50%, -71%)
  @media $breakpoint-small
    transform translate(-18%, -20vw)
  @media $breakpoint-medium
    width 114px
    left calc(50% + 12.75rem)
    top 0
    transform translate(-50%, -41%)
  @media $breakpoint-large
    max-width 7.1rem
    left calc(51% + 23.5rem)
    transform translate(-50%, -16%)
  @media $breakpoint-xxl
    left calc(51% + (1.57625rem * 14.85))

.title-surfer-shadow
  position absolute
  width 43%
  max-width 14.1rem
  left 43%
  top 10%
  transform translate(-50%, -64%)
  @media $breakpoint-medium
    // width 36%
    width 235px
    left calc(43% + 12.75rem)
    transform translate(-50%, -39%)
  @media $breakpoint-large
    left calc(52% + 18.5rem)
    transform translate(-50%, -16%)

.overline
  width 100%
  max-width calc((1.401125rem + 3.7441666666666666vw) * 8)
  @media $breakpoint-small
    max-width none
    text-align right

.frame
  position absolute
  background-size cover
  background-repeat no-repeat
  width 47%
  max-width 16.1rem
  padding-bottom 38%
  transform translate(-46.7%, -97%) rotate(2deg)
  top 0
  left 50%
  @media $breakpoint-small
    transform translate(-33%, -25vw) rotate(2deg)
  @media $breakpoint-medium
    left calc(50% + 12.75rem)
    width 260px
    height 215px
    padding-bottom 0
    transform translate(-48%, -60%) rotate(2deg)
  @media $breakpoint-large
    top 20%
    left calc(50.2% + 24rem)
  @media $breakpoint-xxl
    left calc(51.3% + (1.57625rem * 14.85))
  &-top
    top 1.5%
    left 50.8%
    background-image url('~/assets/images/elements/gold-top.png')
    @media $breakpoint-medium
      top 1.5%
      left calc(50.55% + 12.75rem)
    @media $breakpoint-large
      top 21%
      left calc(51.1% + 23.75rem)
    @media $breakpoint-xxl
      left calc(51.7% + (1.57625rem * 14.85))
  &-bottom
    background-image url('~/assets/images/elements/gold-bottom.png')

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

// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
