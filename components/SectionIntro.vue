<template>
  <kinesis-container id="intro" class="tm-section intro-section">
    <div class="tm-wrapper tm-container center">
      <div class="tm-grid-base">
        <div class="intro">
          <kinesis-element :strength="15" type="depth">
            <img
              src="~/assets/images/elements/portfolio.jpg"
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
.intro-section
  overflow hidden
  padding-top var(--spacing-6)

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
    grid-column 5 / span 4
  @media $breakpoint-xl
    grid-column 7 / span 4

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
  margin-top var(--spacing-9)
  @media $breakpoint-medium
    margin-top var(--spacing-7)

.text-center
  text-align center
</style>
