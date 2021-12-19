<template>
  <kinesis-container id="intro" class="tm-section">
    <div class="tm-wrapper tm-container center">
      <div class="tm-grid-base">
        <div class="information">
          <p class="tm-lh-copy">
            Emeris is a one-stop portal for all crypto apps, no matter what
            blockchain they run on.<br />
            Try the beta today.
          </p>

          <div class="btn mt-7 z-1">
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
        </div>
        <div class="intro mt-9">
          <kinesis-element :strength="15" type="depth">
            <img
              src="~/assets/images/elements/portfolio.png"
              alt="Emeris intro"
            />
          </kinesis-element>
        </div>
      </div>
    </div>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

export default {
  components: {
    KinesisContainer,
    KinesisElement,
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
.title
  margin-bottom var(--spacing-11)
  text-align center
  @media $breakpoint-medium
    margin-bottom var(--spacing-13)
  @media $breakpoint-xl
    margin-bottom var(--spacing-10)

.information
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column 4 / span 3
  @media $breakpoint-xl
    grid-column 7 / span 4

.intro
  grid-column 1 / -1
  @media $breakpoint-xl
    grid-column 2 / span 10
  img
    border-radius: .75rem
</style>
