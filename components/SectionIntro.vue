<template>
  <kinesis-container class="section-intro tm-section">
    <div class="tm-wrapper tm-container-narrow center">
      <h2 class="tm-rf4 tm-lh-title tm-bold tm-serif title">
        Your one-stop<br />portal to a new<br />world of DeFi
      </h2>
      <div class="emeris-beta">
        <div>
          <kinesis-element
            :strength="-2"
            type="depth_inv"
            class="portal-container"
          >
            <tm-parallax :power="3">
              <div>
                <div class="portal"></div>
              </div>
            </tm-parallax>
          </kinesis-element>
          <div class="intro-container">
            <kinesis-element :strength="2" type="depth">
              <tm-parallax :power="5">
                <img
                  src="~/assets/images/elements/emeris-beta.jpg"
                  alt="Emeris intro"
                />
              </tm-parallax>
            </kinesis-element>
          </div>
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
}
</script>

<style lang="stylus" scoped>
.section-intro
  overflow hidden
  padding-bottom 0
  background linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #A8FF89 100%)
  @media $breakpoint-medium
    margin-bottom var(--spacing-7)

.title
  margin-bottom var(--spacing-11)
  text-align center
  @media $breakpoint-medium
    margin-bottom var(--spacing-13)
  @media $breakpoint-xl
    margin-bottom var(--spacing-10)

.emeris-beta
  position relative
  width 100%
  height 90vw
  max-height 35rem
  margin-bottom -6.5%
  text-align center
  @media $breakpoint-medium
    height 62vw
    margin-bottom -10%
  img
    position absolute
    top 0
    left 5.25rem
    width 148vw
    max-width 61.5rem
    border-radius .5rem
    transform matrix(1, -0.04, -0.1, 1, 0, 0)
    @media $breakpoint-medium
      top -1rem
      left 6.5rem
      width 97vw
    @media $breakpoint-xl
      left 0
      right 0
      width 100%
      margin auto
      border-radius 1rem

.portal-container
  z-index -1
  transform translate3d(0, 0, 0)

.intro-container
  -webkit-backface-visibility visible
  transform-style preserve-3d
  transform translate3d(0, 0, 3vw)

.portal
  position absolute
  top -8vw
  left -1.75rem
  height 106.2vw
  width 13rem
  background var(--portal-gradient)
  transform matrix(-1, 0, 0, 1, 0, 0) perspective(4cm) rotateY(-9deg)
  @media $breakpoint-medium
    top -7vw
    left -3.75rem
    height 74.4vw
    width 40.5vw
    transform matrix(-1, 0, 0, 1, 0, 0) perspective(100px) rotateY(-3.8deg)
  @media $breakpoint-xl
    left auto
    right 75%
    top -6vw
    width 55vw
    transform matrix(-1, 0, 0, 1, 0, 0) perspective(170px) rotateY(-3.1deg)
</style>
