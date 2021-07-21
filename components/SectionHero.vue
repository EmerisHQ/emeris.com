<template>
  <div
    id="homepage"
    v-observe-visibility="onFalse"
    class="section-hero tm-container tm-wrapper"
  >
    <div class="outer tm-container-narrow mt-5">
      <div class="inner center">
        <div class="ephemerides">
          <img
            class="ephemeris ephemeris-item"
            src="~/assets/images/elements/gold-ephemeris-hero.png"
            alt="Gold ephemeris ring"
          />
        </div>
        <div class="hand-orb z-0">
          <div class="hand-orb__inner">
            <img
              class="hand"
              src="~/assets/images/elements/glass-hand.png"
              alt="Glass hand"
            />
            <img
              class="orb"
              src="~/assets/images/elements/orb-malibu.png"
              alt="Glowing blue orb"
            />
          </div>
        </div>

        <h1
          class="
            title
            tm-content tm-serif tm-rf6 tm-bold tm-lh-title tm-title
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

.inner
  padding-top var(--spacing-9)
  padding-bottom 24.7188rem
  padding-left var(--spacing-10)
  padding-right var(--spacing-10)

.arrow
  position absolute
  bottom 0
  left 0

a.btn
  position absolute
  bottom 0
  right 0

.section-hero
  padding-top var(--spacing-5)
  padding-bottom var(--spacing-10)

.title span
  display block

.ephemerides
  position absolute
  width 100%
  min-width 24rem
  max-width 36rem
  display flex
  align-items center
  justify-content center
  margin-top 0

.ephemeris-item
  position absolute
  width 250%

.hand-orb
  width 100%
  max-width: $max-width['8']
  center()

  &__inner
    width 100%
    position relative
    z-index 1
    padding-top 10%
    // padding-bottom 104%
    margin-bottom -21%
    // overflow hidden

.hand
  position absolute
  width 100%
  top 339%
  left -20%

.orb
  position absolute
  width 45%
  top 280%
  left 10%
  animation orb-1 4s ease-in-out infinite

.title-graphics
  position absolute
  width 35%
  right -5%
  top -25%

@keyframes orb-1
  0%
    transform translateY(0%) rotate(0deg)
  50%
    transform translateY(-8%) rotate(45deg)
  100%
    transform translateY(0%) rotate(0deg)

@media $breakpoint-xsmall-only
  .inner
    padding-left 0
    padding-right 0

  .hand
    top 380%
    left 0%

  .orb
    left 30%

// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
