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

        <div class="button-container">
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
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  trbl 0
  background-image url('~/assets/images/elements/hero.jpg')
  background-size cover
  background-position center
  background-repeat no-repeat

.tm-container
  width 100%

.title
  width 100%
  grid-column 1 / -1
  @media $breakpoint-xl
    grid-column 3 / span 8

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
  min-height: 100vh
  padding-top var(--spacing-12)
  @media $breakpoint-xl
    align-items center
    min-height: 90vh

.title span
  display block

// @media $breakpoint-small
// @media $breakpoint-medium
// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
