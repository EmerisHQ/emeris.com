<template>
  <div class="section-updates tm-section tm-wrapper">
    <div class="tm-content">
      <div class="tm-grid-base">
        <div class="left">
          <h2 class="title tm-rf4 tm-bold tm-lh-title tm-serif">
            The best is<br />yet to come.
          </h2>
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
            <p class="tm-rf0 tm-lh-copy">
              Emeris aims to be the first one-stop portal to provide:
            </p>
            <div class="list tm-rf0 tm-lh-copy mt-6">
              <div class="list-item">
                <span class="bullet" />
                <p>Integrated wallet and multi&#8209;wallet support</p>
              </div>
              <div class="list-item">
                <span class="bullet" />
                <p>Access to multiple DeFi trading platforms</p>
              </div>
              <div class="list-item">
                <span class="bullet" />
                <p>Staking on multiple chains</p>
              </div>
              <div class="list-item">
                <span class="bullet" />
                <p>Mobile wallet app</p>
              </div>
            </div>
            <div class="cta mt-9">
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
  display grid
  grid-auto-flow column
  grid-template-columns 1rem auto

  .bullet
    width 0.6em
    height 0.6em
    background var(--gold-material-gradient)
    transform rotate(45deg)
    margin-top var(--spacing-3)

  > p
    margin-left var(--spacing-6)

.list-item + .list-item
  margin-top var(--spacing-6)

.title
  text-align center

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
  width 61%
  animation ephemeris-1 8s $ease-out infinite

.ephemeris-2
  position absolute
  transform rotate(150deg)
  width 80%
  animation ephemeris-2 8s $ease-out infinite

.orb
  position absolute
  width 150%
  max-width none
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
    margin-top var(--spacing-11)

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
