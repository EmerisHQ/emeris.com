<template>
  <div class="information">
    <p class="information_text tm-rf-1 tm-rf0-m-up tm-lh-copy">
      Emeris is a one-stop portal for all crypto apps, no matter what blockchain
      they run on. <br />Try the beta today.
    </p>

    <div class="btn z-1">
      <div class="button-container">
        <div class="show-desktop">
          <tm-button
            to-link="external"
            :href="getUtmParams('https://app.emeris.com')"
            size="m"
            border-color="var(--primary)"
            glow
            variant="gradient"
          >
            <span>Try the beta</span>
            <span class="icon__right">&rarr;</span>
          </tm-button>
        </div>
        <TmEmailWizard class="email-wizard" variant="sans"
          >Stay tuned for the Public Launch</TmEmailWizard
        >
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
</template>

<script>
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
  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
  },
}
</script>

<style lang="stylus" scoped>

.button-container
  grid-column 1 / -1
  display flex
  justify-content center
  align-items center
  margin-top var(--spacing-6)
  @media $breakpoint-medium
    justify-content center
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
  grid-row 2 / 3
  margin-top var(--spacing-9)
  text-align: left
  @media $breakpoint-medium
    text-align: center
    grid-column 2 / span 6
  @media $breakpoint-xl
     grid-column 4 / span 6

  &_text
    @media $breakpoint-small
        text-align center
        padding-inline: 8rem

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

.email-wizard
  margin-bottom var(--spacing-7)
  @media $breakpoint-medium
    margin-left var(--spacing-7)
    margin-bottom 0
</style>
