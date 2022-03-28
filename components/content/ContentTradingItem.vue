<template>
  <li ref="item" class="list-item">
    <div class="list-info">
      <div class="cover-container">
        <div class="cover-container__inner">
          <img
            :src="require(`~/assets/images/elements/${item.img}`)"
            class="cover"
            loading="lazy"
            :alt="item.title"
          />
        </div>
        <picture>
          <source
            srcset="~/assets/images/elements/orb.avif"
            type="image/avif"
          />
          <source
            srcset="~/assets/images/elements/orb.webp"
            type="image/webp"
          />
          <img
            v-if="item.img === 'scene-01.jpg'"
            :src="require(`~/assets/images/elements/orb.png`)"
            class="orbit"
            loading="lazy"
            alt=""
          />
        </picture>
      </div>
      <div
        class="
          mt-6
          tm-measure-wide tm-rf2 tm-rf1-m-up tm-bold tm-lh-title tm-title
        "
      >
        {{ item.title }}
      </div>
      <div class="mt-1 tm-measure-wide tm-rf0 tm-text mt-1">
        {{ item.info }}
      </div>
    </div>
  </li>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  props: {
    item: {
      type: Object,
      required: true,
    },
    count: {
      type: Number,
      required: true,
    },
  },
  beforeDestroy() {
    ScrollTrigger.kill()
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    this.$nextTick(() => {
      ScrollTrigger.matchMedia({
        '(min-width: 768px)': () => {
          gsap.to(this.$refs.item, {
            opacity: 1,
            scrollTrigger: {
              trigger: '.js-section-trading',
              start: `${this.count * 33.333}% 40%`,
              end: `${(this.count + 1) * 33.333}% 40%`,
              toggleActions: 'play reverse play reverse',
            },
          })
        },
      })
    })
  },
}
</script>

<style lang="stylus" scoped>
.list
  &-item
    position relative
    display flex
    max-width: 12.25rem
    flex-shrink: 0
    margin-left calc(2 * var(--grid-gap-x))
    //transition opacity .35s $ease-out
    @media $breakpoint-medium
      opacity .4
      max-width: 100%
      width 100%
      margin-left 0
    &._active
      opacity 1
    &:nth-child(2n)
      @media $breakpoint-medium
        position absolute
        top 24rem
        left 0
        max-width: calc(50% - var(--grid-gap-x) / 2)
      @media $breakpoint-xl
        position relative
        top auto
        left auto
        max-width 100%
        margin-top 0
        transform: translateY(45%)
    &:nth-child(2n + 1)
      @media $breakpoint-medium
        margin-top var(--spacing-10)
      @media $breakpoint-xl
        margin-top var(--spacing-9)
    &:first-child
      margin-left 0
      @media $breakpoint-medium
        margin-top 0

.cover-container
  position relative
  &__inner
    overflow hidden
    position relative
    width 100%
    height 0
    padding-bottom 187%
    @media $breakpoint-medium
      padding-bottom 122%
    @media $breakpoint-xl
      padding-bottom 155%

.cover
  position absolute
  top 0
  bottom 0
  left 50%
  height 100%
  width auto
  max-width: none
  transform: translate(-50%)
  @media $breakpoint-medium
    height: auto
    width 100%

.orbit
  position absolute
  left -7.8rem
  bottom -6rem
  width 21.8rem
  max-width: none
  @media $breakpoint-medium
    left -7.8rem
    bottom -6rem
  @media $breakpoint-xl
    left -8.9rem
    bottom -1.1rem
    width 21.8rem

.list-info
  width 100%
</style>
