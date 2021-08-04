<template>
  <div class="section-protocol center">
    <kinesis-element :strength="2" type="rotate" class="hand-top">
      <kinesis-element :strength="-10">
        <div class="hand-top-container">
          <img
            class="hand-top-img"
            src="~/assets/images/elements/hand.png"
            alt=""
          />
        </div>
      </kinesis-element>
      <kinesis-element :strength="-25" class="hand-top-circle">
        <kinesis-element :strength="-0.25" type="scale">
          <div class="hand-top-circle-inner"></div>
        </kinesis-element>
      </kinesis-element>
    </kinesis-element>
    <tm-parallax :power="5">
      <img
        class="logo"
        src="~/assets/images/logos/gravity.svg"
        alt="Gravity DEX protocol"
      />
    </tm-parallax>
    <kinesis-element :strength="-2" type="rotate" class="hand-bottom">
      <kinesis-element :strength="10">
        <div class="hand-bottom-container">
          <img
            class="hand-bottom-img"
            src="~/assets/images/elements/hand.png"
            alt=""
          />
        </div>
      </kinesis-element>
      <kinesis-element :strength="25" class="hand-bottom-circle">
        <kinesis-element :strength="-0.25" type="scale">
          <div class="hand-bottom-circle-inner"></div>
        </kinesis-element>
      </kinesis-element>
    </kinesis-element>
  </div>
</template>

<script>
import { KinesisElement } from 'vue-kinesis'

export default {
  components: {
    KinesisElement,
  },
}
</script>

<style lang="stylus" scoped>
.section-protocol
  position relative
  margin-bottom var(--spacing-12)
  padding-top var(--spacing-12)
  padding-bottom var(--spacing-12)
  @media $breakpoint-medium
    padding-top var(--spacing-10)
    padding-bottom var(--spacing-10)

.logo
  width 100%
  max-width 7.5rem
  @media $breakpoint-medium
    max-width 185px
  @media $breakpoint-xl
    max-width 173px

.hand-top
  position absolute
  top -4.8rem
  left calc(50% + 7.15rem)
  @media $breakpoint-medium
    top -12.05rem
    left calc(50% + 11.22rem)
  @media $breakpoint-xl
    top -20.4rem
    left calc(50% + 17.35rem)
  &-container
    transform rotate(-107.89deg)
    background-color var(--bg)
  &-img
    mix-blend-mode hard-light
    width 11.75rem
    max-width none
    @media $breakpoint-medium
      width 19.2rem
    @media $breakpoint-xl
      width 29.3rem
  &-circle
    position absolute
    width 4.5375rem
    height 4.5375rem
    top 44%
    left -18%
    transform translate3d(0, 0, 0)
    @media $breakpoint-medium
      width 7.21125rem
      height 7.21125rem
    @media $breakpoint-xl
      width 11.769375rem
      height 11.769375rem
    div
      width 100%
      height 100%
    &-inner
      width 100%
      height 100%
      transform translate3d(0, 0, 0)
      background-image url('~/assets/images/elements/emeris.jpg')
      background-size cover
      background-position center
      background-repeat no-repeat
      border-radius 100%
    &:before
      content ''
      opacity 0.28
      position absolute
      width 12.044375rem
      height 12.044375rem
      top 50%
      left 50%
      mix-blend-mode hard-light
      background radial-gradient(50% 50% at 50% 50%, #FFFE2E 43.09%, rgba(117, 255, 189, 0) 100%)
      transform translate(-50%, -50%)
      animation fading-top 5.5s ease-out infinite
      @media $breakpoint-medium
        width 15.625rem
        height 15.625rem
      @media $breakpoint-xl
        width 25.5rem
        height 25.5rem
    img
      width 100%

.hand-bottom
  position absolute
  bottom -7.5rem
  right calc(50% + 6.2rem)
  @media $breakpoint-medium
    bottom -15.25rem
    right calc(50% + 10.4rem)
  @media $breakpoint-xl
    bottom -24.7rem
    right calc(50% + 15.8rem)
  &-container
    transform rotate(75deg)
    background-color var(--bg)
  &-img
    mix-blend-mode hard-light
    width 11.75rem
    max-width none
    @media $breakpoint-medium
      width 19.2rem
    @media $breakpoint-xl
      width 29.3rem
  &-circle
    position absolute
    width 4.73125rem
    height 4.73125rem
    top 28%
    right -20%
    transform translate3d(0, 0, 0)
    @media $breakpoint-medium
      width 7.21125rem
      height 7.21125rem
    @media $breakpoint-xl
      width 11.769375rem
      height 11.769375rem
    div
      width 100%
      height 100%
    &-inner
      width 100%
      height 100%
      transform translate3d(0, 0, 0)
      background-image url('~/assets/images/elements/dex.jpg')
      background-size cover
      background-position center
      background-repeat no-repeat
      border-radius 100%
    &:before
      content ''
      position absolute
      opacity .32
      width 11.22375rem
      height 11.22375rem
      top 50%
      left 50%
      mix-blend-mode hard-light
      background radial-gradient(50% 50% at 50% 50%, #FFCEBF 35.94%, rgba(255, 206, 191, 0) 100%)
      transform translate(-50%, -50%)
      animation fading-bottom 5s ease-out infinite
      @media $breakpoint-medium
        width 15.625rem
        height 15.625rem
      @media $breakpoint-xl
        width 25.5rem
        height 25.5rem
    img
      width 100%

@keyframes fading-top
  0%, 100%
    opacity .16
  50%
    opacity .28

@keyframes fading-bottom
  0%, 100%
    opacity .26
  50%
    opacity .32
</style>
