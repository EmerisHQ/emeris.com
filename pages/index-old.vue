<template>
  <kinesis-container duration="400" perspective="none">
    <main id="homepage" class="page-container">
      <div class="section-hero tm-section tm-wrapper tm-container">
        <graphics-hero class="graphics" />
        <logo-emeris-hero class="logo" />
        <p class="tm-text-center mt-5">
          <span class="beta-badge tm-rf-1 tm-title">Beta</span
          ><span class="tm-rf0 tm-title tm-muted">Coming soon</span>
        </p>
        <email-wizard class="mt-8" />
      </div>
      <div class="section-intro tm-container">
        <div class="hand-orb">
          <div class="hand-orb__inner">
            <kinesis-element strength="-10">
              <kinesis-element strength="-2" type="rotate">
                <img
                  class="hand"
                  src="~/assets/images/elements/intro-glass-hand.png"
                  alt="Glass hand"
                />
              </kinesis-element>
            </kinesis-element>
            <kinesis-element strength="-60" origin-y="20">
              <img
                class="orb"
                src="~/assets/images/elements/orb-malibu.png"
                alt="Glowing blue orb"
              />
            </kinesis-element>
          </div>
        </div>
        <div class="portal tm-text-center tm-wrapper tm-section tm-light-mode">
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
            </div>
            <h2 class="title serif tm-rf5 tm-lh-title tm-title">
              <span class="tm-text-left">Experience</span>
              <span class="tm-text-center">cross-chain</span>
              <span class="tm-text-right">DeFi</span>
            </h2>
          </div>
          <p class="mt-10">
            <tm-button
              variant="text"
              to-link="external"
              href="https://medium.com/emeris-blog/introducing-emeris-the-cross-chain-portal-to-all-crypto-apps-4e6eee5b53a8"
              size="l"
              color="var(--text)"
              light-color="var(--text)"
              >Introducing Emeris
              <span class="icon__right">&#8599;</span></tm-button
            >
          </p>
          <site-footer class="footer" />
        </div>
      </div>
    </main>
  </kinesis-container>
</template>

<script>
import { KinesisContainer, KinesisElement } from 'vue-kinesis'

import LogoEmerisHero from '~/components/logos/LogoEmerisHero.vue'
// import EmailWizard from '~/components/ui/EmailWizard.vue'
// import SiteFooter from '~/components/ui/SiteFooter.vue'

export default {
  components: {
    KinesisContainer,
    KinesisElement,
    LogoEmerisHero,
    // EmailWizard,
    // SiteFooter,
  },
}
</script>

<style lang="stylus" scoped>

.page-container
  display flex
  flex-direction column
  align-items center
  min-height 100vh

.section-hero
  width 100%
  display flex
  flex-direction column
  align-items center

  .graphics
    flex 1 0 73%
    width 73%
    max-width 26rem

  .logo
    flex 1 0 100%
    width 100%
    min-width 21rem
    max-width 38rem
    margin-top -2%

.wrapper
  display flex
  align-items center
  gap var(--spacing-5)

.wizard
  position fixed
  bottom 0
  left 0
  z-index $z-index-tooltip
  width 100%
  padding var(--wrap-gap)
  center()

.beta-badge
  display inline-block
  padding var(--spacing-3) var(--spacing-5)
  background var(--border)
  color var(--text)
  border-radius 1.5rem
  margin-right var(--spacing-5)

.section-intro
  width 100%
  flex 1 0 auto
  display flex
  flex-direction column

.hand-orb
  width 100%
  max-width: $max-width['8']
  center()

  &__inner
    width 100%
    position relative
    z-index 1
    padding-top 10%
    padding-bottom 104%
    margin-bottom -51%
    overflow hidden

@keyframes orb-1
  0%
    transform translateY(0%) rotate(0deg)
  50%
    transform translateY(-8%) rotate(45deg)
  100%
    transform translateY(0%) rotate(0deg)

.hand
  position absolute
  width 100%
  left 0%

.orb
  position absolute
  width 58%
  left 33%
  animation orb-1 4s ease-in-out infinite

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

.portal
  position relative
  overflow hidden
  flex 1 0 auto
  background var(--primary-gradient-complex)
  center()
  width 100%
  max-width: $max-width['8']
  display flex
  flex-direction column
  align-items center
  clip-path polygon(0 0, 100% calc(0% + 26vw), 100% 100%, 0 100%)

  .title-ephemeris
    width 100%
    position relative
    display flex
    flex-direction column
    align-items center
    justify-content center
    margin-top 70%

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
    width 70%
    animation ephemeris-1 8s $ease-out infinite
    // transition transform 1.5s $ease-out-back
  // .ephemerides:hover .ephemeris-1
    // transform rotate(233deg)

  .ephemeris-2
    position absolute
    transform rotate(150deg)
    width 92%
    animation ephemeris-2 8s $ease-out infinite
    // transition transform 1.5s $ease-out-back
  // .ephemerides:hover .ephemeris-2
    // transform rotate(60deg)


  .title
    width 100%
    max-width 9em
    padding 1em 0
    span
      display block

.footer
  margin-top auto
  width 100%

@media $breakpoint-medium
  .wizard
    position static
    padding 0

  .portal
    clip-path polygon(0 0, 100% calc(0% + 14rem), 100% 100%, 0 100%)
</style>
