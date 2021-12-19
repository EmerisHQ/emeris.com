<template>
  <div class="tm-section">
    <div class="tm-wrapper tm-container section-defi">
      <div class="tm-grid-base">
        <div class="column-title">
          <div class="text z-2">
            <h2
              class="tm-title tm-rf5 tm-rf6-m-up tm-bold tm-lh-title tm-serif"
            >
              DeFi<br />for all
            </h2>
          </div>
        </div>
        <div class="column-info">
          <p class="mt-5 tm-rf0 tm-lh-copy tm-text tm-measure-narrow">
            Emeris beta allows you to swap coins with substantially lower fees
            than typical DeFi exchanges by connecting you to the best
            cross-chain DeFi protocols, starting with Gravity DEX.
          </p>
        </div>
        <div class="column-stats">
          <div class="stats z-2">
            <div v-for="item in items" :key="item.overline" class="stats-item">
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
      <graphics-defi class="graphics-container" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          overline: 'Average transaction fee',
          num: '$0.08',
          info: '+0.15% swap fee',
        },
        {
          overline: 'Average swap speed',
          num: '00:07',
          info: 'seconds',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-defi
.text
.stats
.graphics-container
  position relative

.section-defi
  @media $breakpoint-xl
    margin-bottom var(--spacing-9)

.graphics-container
  position absolute
  left 50%
  top 1.5rem
  bottom: 1.5rem
  width 100%
  max-width: 21.6875rem
  transform: translateX(-50%)

.column-title
  grid-column 1/-1
  @media $breakpoint-xl
    grid-column 2 / span 10

.column-info
  grid-column 1/-1
  @media $breakpoint-xl
    grid-column 9 / span 3
    margin-top var(--spacing-9)

.column-stats
  grid-column 1/-1
  @media $breakpoint-xl
    grid-column 2 / span 4
    margin-top calc(-1 * var(--spacing-7))

.text
  max-width 23.375rem

.stats-item
  margin-bottom var(--spacing-7)
  &:last-child
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
