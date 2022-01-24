<template>
  <div id="best" class="tm-section section-updates">
    <div class="tm-wrapper tm-container-narrow">
      <div class="tm-grid-base">
        <div class="column right">
          <graphics-updates class="graphics" />
        </div>
        <div class="column left">
          <h2 class="tm-title tm-lh-title tm-serif tm-rf4 tm-bold">
            The best is yet&nbsp;to come
          </h2>
          <div class="mt-7">
            <p class="tm-rf0 tm-lh-copy tm-measure-narrower">
              Emeris aims to be the first one-stop portal to provide:
            </p>
            <ul class="list tm-rf0 tm-rf1-xl-up tm-lh-copy">
              <li
                v-for="item in items"
                :key="item"
                class="list-item tm-title tm-lh-title tm-rf1 tm-bold"
              >
                {{ item }}
              </li>
            </ul>
            <div class="cta tm-measure-narrower">
              <tm-email-wizard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        'Integrated wallet and multi-wallet support',
        'Access to multiple DeFi trading platforms',
        'Staking on multiple chains',
        'Mobile wallet app',
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-updates
  margin-top var(--spacing-6)
  @media $breakpoint-xsmall-only
    padding-top 0
  @media $breakpoint-small-only
    padding-top 0
  @media $breakpoint-medium
    margin-top 0
  @media $breakpoint-xl
    margin-top var(--spacing-6)

.graphics
  max-width: 20rem
  margin-inline: auto
  @media $breakpoint-medium
    max-width: 100%

.tm-grid-base
  grid-auto-flow: row dense

.column
  grid-column 1/-1
  @media $breakpoint-medium
    grid-column span 4
  &.right
    @media $breakpoint-medium
      grid-column 5 / span 4
    @media $breakpoint-xl
      grid-column 7 / span 6
  &:not(:first-child)
    margin-top 5.5rem
    @media $breakpoint-small
      margin-top var(--spacing-7)
    @media $breakpoint-medium
      margin-top 0

.list
  margin-top var(--spacing-10)
  padding-left 0
  list-style: none
  @media $breakpoint-medium
    margin-top var(--spacing-8)

.list-item
  position relative
  padding-left var(--spacing-9)
  @media $breakpoint-medium
    padding-left var(--spacing-7)
  & + &
    margin-top var(--spacing-9)
    @media $breakpoint-medium
      margin-top var(--spacing-7)
    @media $breakpoint-xl
      margin-top var(--spacing-6)
  &:before
    content: ''
    position absolute
    top 0
    left 0
    width 0.6em
    height 0.6em
    background var(--gold-material-gradient)
    transform rotate(45deg)
    margin-top var(--spacing-3)

.cta
  margin-top var(--spacing-10)
  @media $breakpoint-medium
    margin-top var(--spacing-9)
  @media $breakpoint-xl
    margin-top var(--spacing-8)

@media $breakpoint-xl
  .left
    grid-column 1/span 5

  .right
    grid-column 7/span 6
    margin-top 0
</style>
