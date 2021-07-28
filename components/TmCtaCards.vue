<template>
  <div class="tm-container">
    <div class="cards">
      <div v-for="item in data" :key="item.title" class="card-outer">
        <nuxt-link v-if="item.href.startsWith('/')" :to="item.href">
          <div class="card-item" :class="item.variant">
            <div v-if="item.graphics" class="graphics">
              <component :is="`${item.graphics}`" class="graphics__item" />
            </div>
            <div class="overline tm-rf-1 tm-medium tm-overline tm-muted">
              {{ item.overline }}
            </div>
            <div class="title tm-rf2 tm-bold tm-lh-title mt-4 tm-link">
              {{ item.title }}
            </div>
            <icon-arrow-top-right-16 class="top-right" />
          </div>
        </nuxt-link>
        <tm-link v-else :href="item.href">
          <div class="card-item" :class="item.variant">
            <div v-if="item.graphics" class="graphics">
              <component :is="`${item.graphics}`" class="graphics__item" />
            </div>
            <div class="overline tm-rf-1 tm-medium tm-overline tm-muted">
              {{ item.overline }}
            </div>
            <div class="title tm-rf2 tm-bold tm-lh-title mt-4 tm-link">
              {{ item.title }}
            </div>
            <icon-arrow-top-right-16
              class="top-right"
              :gradient="item.variant !== 'gradient'"
            />
          </div>
        </tm-link>
      </div>
    </div>
  </div>
</template>

<script>
import IconArrowTopRight16 from '~/components/icons/IconArrowTopRight16.vue'

export default {
  components: {
    IconArrowTopRight16,
  },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
}
</script>

<style lang="stylus" scoped>
.cards
.card-item
.overline
.title
  position relative

.cards
  display grid
  grid-template-columns repeat(1, 1fr)
  gap var(--spacing-7)

.card-outer
  overflow hidden
  position relative
  z-index 1

.card-item
  padding var(--spacing-7)
  display flex
  flex-direction column
  flex-wrap nowrap
  height 16rem
  border-radius $border-radius-5
  background-color var(--gray-100)
  @media $breakpoint-large
    height 14.5625rem

  &.gradient
    background radial-gradient(144.8% 78% at 90.48% 100%, #FFFD38 25.95%, rgba(158, 255, 185, 0) 100%), linear-gradient(153.31deg, #64DAFB 5.41%, #30FFDF 30.23%, #B0FF94 54.73%)
    box-shadow 3px 9px 24px rgba(0, 0, 0, 0.07)
    .overline
    .title
      color var(--bg)

  &.outlined
    position relative
    display flex
    border 0.0625rem solid transparent
    background-color var(--bg)
    background-clip padding-box
    &:before
      content ''
      position absolute
      z-index -1
      trbl 0
      border 0
      border-radius inherit
      margin -0.0625rem
      background linear-gradient(280.46deg, #FFF0CA 12.71%, #D3AD5F 33.34%, #FFECC4 41.61%, #997736 59.2%, #FFF2C0 77.69%, #CEA851 97.39%)

  &:hover
  &:focus
    .top-right
      transform translate(4px, -4px)
      transition-duration .2s

  &:active
    .top-right
      transform translate(2px, -2px)
      transition-duration .05s

  &:focus
    outline 0

.graphics
  position absolute
  top -1.5rem
  right 50%
  width 120%
  max-width 21rem
  display grid
  place-items flex-end
  transform translateX(49vw)
  @media $breakpoint-large
    transform none
    right 0

  &__item
    width 100%
    height auto
    pointer-events none

.overline
.title
  width 10rem

.top-right
  position absolute
  bottom var(--spacing-6)
  right var(--spacing-6)
  transform translate(0 0 0)
  transition transform .2s $ease-out
  @media $breakpoint-medium
    bottom auto
    top var(--spacing-6)

@media $breakpoint-xsmall-only
  .card-item
    height auto
    min-height 16rem
    border-radius $border-radius-4

@media $breakpoint-large
  .cards
    grid-template-columns 1fr 1fr
</style>
