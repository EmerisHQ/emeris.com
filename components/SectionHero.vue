<template>
  <div v-observe-visibility="onFalse" class="section-hero tm-section">
    <div class="background" />
    <div class="tm-wrapper tm-container">
      <div class="tm-grid-base">
        <h1
          class="
            title
            tm-content tm-serif tm-rf5 tm-bold tm-lh-title tm-title
            z-2
          "
        >
          <span class="tm-text-center">Experience</span>
          <span class="tm-text-left">the power of</span>
          <span class="tm-text-right">cross-chain DeFi</span>
        </h1>

        <!-- <div class="button-container">
          <tm-button class="btn" @click.native="openVideo">
            Watch trailer
          </tm-button>
          <tm-button
            v-scroll-to="'#intro'"
            variant="gradient"
            href="#"
            class="scroll-down z-1"
          >
            <icon-arrow-down />
          </tm-button>
        </div> -->
      </div>
      <div class="tm-grid-base">
        <div class="information">
          <p class="tm-rf-1 tm-rf0-m-up tm-lh-copy">
            Emeris is a one-stop portal for all crypto apps, no matter what
            blockchain they run on. Try the beta today.
          </p>

          <div class="btn z-1">
            <div class="btn-container">
              <div class="show-desktop">
                <tm-button
                  id="launchApp"
                  to-link="external"
                  :href="getUtmParams('https://app.emeris.com')"
                  size="m"
                  border-color="var(--primary)"
                  glow
                  variant="gradient"
                >
                  <span>Launch app</span>
                  <span class="icon__right">&rarr;</span>
                </tm-button>
              </div>
              <tm-button
                variant="text"
                class="btn-play"
                @click.native="openVideo"
              >
                <span class="text-gradient">▶&ensp;Play Trailer</span>
              </tm-button>
            </div>
            <div class="show-mobile">
              <tm-button size="m" variant="outlined" disabled class="button">
                <span>Mobile app coming soon</span>
              </tm-button>
              <p class="mt-5 tm-lh-solid tm-rf-1 tm-medium text-center">
                Use Emeris on a desktop device.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import IconArrowDown from '~/components/icons/IconArrowDown.vue'

export default {
  components: {
    // IconArrowDown,
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
  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
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
.title
.btn
  position relative

.background
  position absolute
  top -6.5vw
  left: 50%
  width 37vw
  height 89.5vw
  opacity 0.6
  background-color: #C4C4C4
  background-image url('~/assets/images/elements/hero.jpg')
  background-size 800%
  background-position center
  background-repeat no-repeat
  transform: translateX(-50%)
  @media $breakpoint-medium
    top 0
    width 12rem
    height 27.7rem
  @media $breakpoint-xl
    top -7.2rem
    left: 50.7%
    width 15rem
    height 35.4rem

.tm-container
  width 100%

.title
  width 100%
  grid-column 1 / -1
  max-width: 52rem
  margin-top 54vw
  @media $breakpoint-medium
    margin-top var(--spacing-11)
  @media $breakpoint-xl
    grid-column 3 / span 8
    margin-top var(--spacing-5)
  span
    display block

.button-container
  grid-column 1 / -1
  display flex
  justify-content center
  margin-top var(--spacing-12)
  max-width: 17.25rem
  @media $breakpoint-medium
    margin-inline: auto
    min-width 16rem
  @media $breakpoint-xl
    margin-top var(--spacing-9)
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
  align-items flex-end
  justify-content center
  // min-height: 100vh
  padding-top var(--spacing-12)
  @media $breakpoint-medium
    align-items center
    min-height: 0
    padding-bottom 0

.information
  grid-column 1 / -1
  margin-top var(--spacing-9)
  @media $breakpoint-medium
    grid-column 5 / span 4
    margin-top var(--spacing-9)
  @media $breakpoint-xl
    grid-column 7 / span 4
    margin-top var(--spacing-6)

.btn-container
  display flex
  align-items center

.btn-play
  width 100%
  margin-bottom var(--spacing-7)
  @media $breakpoint-medium
    width auto
    margin-left var(--spacing-7)
    margin-bottom 0

.intro
  grid-column 1 / -1
  margin-top var(--spacing-11)
  @media $breakpoint-xl
    grid-column 2 / span 10
    margin-top var(--spacing-9)
  img
    min-width: 33.6rem
    border-radius: .35rem
    transform: matrix(1, -0.04, -0.1, 1, 0, 0)
    @media $breakpoint-medium
      border-radius: .75rem
    @media $breakpoint-large
      transform: none

.show-mobile
  max-width: 17rem
  margin-inline: auto
  @media $breakpoint-medium
    display none
  .button
    width 100%

.show-desktop
  display none
  @media $breakpoint-medium
    display block

.btn
  margin-top var(--spacing-6)
  @media $breakpoint-medium
    margin-top var(--spacing-7)

.text-center
  text-align center

.text-gradient
  background var(--title-gradient)
  -webkit-background-clip text
  background-clip text
  -webkit-text-fill-color transparent
  text-fill-color transparent

// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
