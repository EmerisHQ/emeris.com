<template>
  <div
    id="homepage"
    v-observe-visibility="onFalse"
    class="section-hero tm-section"
  >
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
            tm-content tm-serif tm-rf5 tm-bold tm-lh-title tm-title
            z-2
          "
        >
          <img
            class="title-graphics"
            src="~/assets/images/elements/surfer-shadow.png"
            alt="Interchain Surfer Shadow"
          />
          <span class="tm-text-left">Experience</span>
          <span class="tm-text-center">the power of</span>
          <span class="tm-text-right">cross-chain DeFi</span>
        </h1>
      </div>
    </div>
    <svg
      width="15"
      height="49"
      viewBox="0 0 15 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      class="arrow"
    >
      <path
        d="M6.79289 48.7071C7.18342 49.0976 7.81658 49.0976 8.2071 48.7071L14.5711 42.3431C14.9616 41.9526 14.9616 41.3195 14.5711 40.9289C14.1805 40.5384 13.5474 40.5384 13.1569 40.9289L7.5 46.5858L1.84314 40.9289C1.45262 40.5384 0.819455 40.5384 0.42893 40.9289C0.0384061 41.3195 0.0384061 41.9526 0.42893 42.3431L6.79289 48.7071ZM6.5 -4.37114e-08L6.5 48L8.5 48L8.5 4.37114e-08L6.5 -4.37114e-08Z"
        fill="url(#paint0_linear-763726)"
      />
      <defs>
        <linearGradient
          id="paint0_linear-763726"
          x1="7.31528"
          y1="48"
          x2="12.844"
          y2="47.3764"
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

.section-hero
  display flex
  align-items center
  justify-content center
  min-height 100vh
  padding-top var(--spacing-12)
  padding-bottom var(--spacing-7)

.inner
  margin-top calc(var(--spacing-5) * -1)
  padding-bottom var(--spacing-13)
  @media $breakpoint-medium
    padding-left var(--spacing-7)
    padding-right var(--spacing-7)

.arrow
  display none
  position absolute
  bottom var(--spacing-10)
  left var(--spacing-10)
  transform translateX(-1rem)
  @media $breakpoint-medium
    display block

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
  transform translate(-50%, -22.5%)

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
  top 40%
  left 50%
  transform translate(-66%, 0%) rotate(14deg)
  // @media $breakpoint-medium

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


.title-graphics
  mix-blend-mode hard-light
  position absolute
  width 60%
  left 45%
  bottom 105%
  transform translate(-50%, 50%)

@keyframes orb-1
  0%, 100%
    transform translateX(-50%) translateY(0%) scale(1)
  50%
    transform translateX(-50%) translateY(-12%) scale(.98)

// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
