<template>
  <div class="tm-section js-section-defi">
    <div class="tm-wrapper tm-container section-defi">
      <div class="tm-grid-base">
        <div class="column-title">
          <div class="text z-2">
            <h2
              class="
                tm-title tm-rf7 tm-rf6-m-up tm-bold tm-lh-title tm-serif
                rate-title
                js-rate-title
              "
            >
              <span>DeFi</span><br /><span>for</span> <span>all</span>
            </h2>
          </div>
        </div>
        <div class="column-info">
          <p
            class="
              mt-6
              tm-rf0 tm-lh-copy tm-text tm-measure-narrow
              rate-text
              js-rate-text
            "
          >
            Emeris beta allows you to swap coins with substantially lower fees
            than typical DeFi exchanges by connecting you to the best
            cross-chain DeFi protocols, starting with Gravity DEX.
          </p>
        </div>
        <div class="column-stats">
          <div class="stats z-2">
            <div
              v-for="item in items"
              :key="item.overline"
              class="stats-item js-rate-stat"
            >
              <div class="tm-rf-1 tm-medium tm-lh-title tm-overline tm-muted">
                {{ item.overline }}
              </div>
              <div class="mt-1 tm-rf2 tm-bold tm-lh-title tm-title tm-serif">
                {{ item.num }}
              </div>
              <div class="tm-rf0 tm-bold tm-lh-title tm-overline tm-title">
                {{ item.info }}
              </div>
            </div>
          </div>
        </div>
      </div>
      <graphics-defi class="graphics-container js-graphics-container" />
    </div>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  data() {
    return {
      items: [
        {
          overline: 'Average transaction fee',
          num: '$0.08',
          info: '+0.3% swap fee',
        },
        {
          overline: 'Average swap speed',
          num: '00:07',
          info: 'seconds',
        },
      ],
    }
  },
  beforeDestroy() {
    ScrollTrigger.kill()
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)
    ScrollTrigger.saveStyles(
      '.js-rate-title > span, .js-rate-text,.js-rate-stat '
    )

    this.$nextTick(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          // scroll animation
          gsap.to('.js-rate-title > span', {
            y: 0,
            opacity: 1,
            duration: 1.2,
            stagger: 0.1,
            ease: 'ease2.out',
            scrollTrigger: {
              trigger: '.js-section-defi',
              start: '25% bottom',
            },
          })

          gsap.to('.js-rate-text', {
            opacity: 1,
            duration: 1.2,
            ease: 'ease2.out',
            scrollTrigger: {
              trigger: '.js-section-defi',
              start: '43% bottom',
            },
          })

          gsap.to('.js-rate-stat', {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1.2,
            ease: 'ease4.out',
            scrollTrigger: {
              trigger: '.js-section-defi',
              start: '75% bottom',
            },
          })
        },
      })
    })
  },
}
</script>

<style lang="stylus" scoped>
.rate-title
  & > span
    @media $breakpoint-medium
      display inline-block
      opacity 0
      transform translate(0, 80px)
.rate-text
  @media $breakpoint-medium
    opacity 0
.tm-section
  @media $breakpoint-medium
    height 300vh
  //overflow hidden

.section-defi
.text
.stats
.graphics-container
  position relative

.section-defi

  top 4rem
  @media $breakpoint-medium
    position sticky
    margin-bottom var(--spacing-10)
  @media $breakpoint-xl
    margin-bottom var(--spacing-11)

.graphics-container
  margin-inline: auto
  width 100%
  //height 300vh
  @media $breakpoint-medium
    height auto
    position absolute
    left var(--wrap-gap)
    top 1rem
    bottom: -1rem
    width 100%
    max-width: calc(50% - var(--grid-gap-x) / 2 - var(--wrap-gap))
  @media $breakpoint-xl
    left 50%
    top 1.5rem
    bottom: -4.5rem
    width 100%
    max-width: 21.6875rem
    transform: translateX(-50%)

.column-title
  grid-column 1/-1
  @media $breakpoint-medium
    grid-column 5 / span 4
    margin-top var(--spacing-9)
  @media $breakpoint-xl
    grid-column 2 / span 10
    margin-top 0

.column-info
  grid-column 1/-1
  margin-bottom var(--spacing-9)
  @media $breakpoint-medium
    grid-column 5 / span 4
    margin-bottom var(--spacing-8)
  @media $breakpoint-xl
    grid-column 9 / span 3
    margin-top var(--spacing-9)
    margin-bottom 0

.column-stats
  grid-column 1/-1
  @media $breakpoint-medium
    grid-column 5 / span 4
  @media $breakpoint-xl
    grid-column 2 / span 4
    margin-top calc(-1 * var(--spacing-7))

.text
  max-width 23.375rem

.stats-item
  margin-bottom var(--spacing-9)
  @media $breakpoint-medium
    margin-bottom var(--spacing-8)
    opacity 0
    transform translate(0, 80px)
  @media $breakpoint-xl
    margin-bottom var(--spacing-7)
  &:last-child
    @media $breakpoint-xl
      margin-bottom 0

@media $breakpoint-xsmall-only
  .section-rates
    position unset

@media $breakpoint-small
  .section-rates
    position unset

@media $breakpoint-medium
  .section-rates
    position relative

// @media $breakpoint-xxl
</style>
