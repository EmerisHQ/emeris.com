<template>
  <div class="section-updates tm-section">
    <div class="tm-wrapper tm-content">
      <div class="tm-grid-base">
        <div class="left">
          <h1 class="tm-rf5 tm-bold tm-lh-title tm-serif">
            The best is yet to come.
          </h1>
          <div class="title-ephemeris">
            <div class="ephemerides">
              <img
                class="ephemeris ephemeris-1"
                src="~/assets/images/elements/gold-ephemeris-ring-1.png"
                alt="Gold ephemeris ring"
              />
              <img
                class="ephemeris ephemeris-2"
                src="~/assets/images/elements/gold-ephemeris-ring-2.png"
                alt="Gold ephemeris ring"
              />
              <img
                class="orb"
                src="~/assets/images/elements/orb-crystal.png"
                alt="Glowing blue orb"
              />
            </div>
          </div>
        </div>
        <div class="right">
          <div class="text">
            <p class="tm-rf1 tm-lh-copy">
              Emeris aims to be the first one-stop portal to provide:
            </p>
            <div class="list tm-rf1 tm-lh-copy mt-6">
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Integrated wallet and multi-wallet support</p>
              </div>
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Access to multiple DeFi trading platforms</p>
              </div>
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Staking on multiple chains</p>
              </div>
              <div class="list-item">
                <img
                  class="bullet"
                  src="~/assets/images/elements/gold-diamond.svg"
                  alt=""
                />
                <p>Mobile wallet app</p>
              </div>
            </div>
            <div class="cta mt-8">
              <tm-email-wizard />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.left
.right
  grid-column 1/-1

.list-item
  display flex
  flex-direction row

  .bullet
    width 1rem
    height 1rem
    margin-top var(--spacing-3)

  > p
    margin-left var(--spacing-6)

.list-item + .list-item
  margin-top var(--spacing-6)

.title-ephemeris
  width 100%
  position relative
  display flex
  flex-direction column
  align-items center
  justify-content center
  margin-top 20%

.ephemerides
  position absolute
  width 100%
  min-width 24rem
  max-width 36rem
  display flex
  align-items center
  justify-content center

.ephemeris-1
  position absolute
  transform rotate(143deg)
  width 50%
  animation ephemeris-1 8s $ease-out infinite

.ephemeris-2
  position absolute
  transform rotate(150deg)
  width 65%
  animation ephemeris-2 8s $ease-out infinite

.orb
  position absolute
  width 100%
  // animation orb-1 4s ease-in-out infinite

@keyframes ephemeris-1
  0%
    transform rotate(-37deg)
  50%
    transform rotate(143deg)
  100%
    transform rotate(323deg)

@keyframes ephemeris-2
  0%
    transform rotate(150deg)
  50%
    transform rotate(-30deg)
  100%
    transform rotate(-210deg)

// @keyframes orb-1
//   0%
//     transform translateY(0%) rotate(0deg)
//   50%
//     transform translateY(-8%) rotate(45deg)
//   100%
//     transform translateY(0%) rotate(0deg)

@media $breakpoint-xsmall-only
  .right
    margin-top var(--spacing-7)

  .title-ephemeris
    margin 50% 0

@media $breakpoint-small
  .right
    margin-top var(--spacing-7)

  .title-ephemeris
    margin 35% 0

@media $breakpoint-medium
  .title-ephemeris
    margin 30% 0

// @media $breakpoint-large
@media $breakpoint-xl
  .left
    grid-column 1/span 7

  .right
    grid-column 8/span 5
    margin-top 0
// @media $breakpoint-xxl
</style>
