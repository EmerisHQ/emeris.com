<template>
  <div class="tm-section js-launch">
    <div class="tm-wrapper tm-container">
      <div class="tm-grid-base">
        <div class="information">
          <p class="tm-rf-1 tm-rf0-m-up tm-lh-copy">
            Emeris is a one-stop portal for all crypto apps, no matter what
            blockchain they run on. Try the beta today.
          </p>

          <div class="btn z-1">
            <div class="button-container">
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
                <span class="text">▶&ensp;Play trailer</span>
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
import { gsap } from 'gsap'

export default {
  props: {
    openVideo: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      currentUrl: this.$route.fullPath,
    }
  },
  mounted() {
    if (window.top.scrollY > 0) {
      gsap.set('.js-launch', { y: 0 })
    } else {
      window.addEventListener('scroll', this.animation, false)
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
      gsap.to('.js-launch', { y: 0 })
    },
  },
}
</script>

<style lang="stylus" scoped>
.tm-section
  padding-bottom 0
  transform translate3D(0,25vh, 0)
  @media $breakpoint-xl
    padding-top var(--spacing-7)

.tm-container
  width 100%

.button-container
  grid-column 1 / -1
  display flex
  justify-content center
  align-items center
  margin-top var(--spacing-6)
  @media $breakpoint-xl
    justify-content start
    margin-top var(--spacing-7)
  .tm-button
    &:not(:first-child)
      flex-shrink: 0
    &:first-child
      width 100%
  .tm-button + .tm-button
    margin-top 0
    margin-left var(--spacing-5)

.information
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column 5 / span 4
  @media $breakpoint-xl
    grid-column 7 / span 4

.btn-play
  width 100%
  margin-bottom var(--spacing-7)
  @media $breakpoint-medium
    width auto
    margin-left var(--spacing-7)
    margin-bottom 0

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
  position relative

.text-center
  text-align center

.text-gradient
  background var(--title-gradient)
  -webkit-background-clip text
  background-clip text
  -webkit-text-fill-color transparent
  text-fill-color transparent
</style>
