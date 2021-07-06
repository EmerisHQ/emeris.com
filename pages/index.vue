<template>
  <main>
    <div class="section-hero tm-section tm-wrapper tm-container">
      <graphics-hero class="graphics" />
      <logo-emeris-hero class="logo" />
      <p class="tm-text-center mt-5">
        <span class="beta-badge tm-rf-1 tm-title">Beta</span
        ><span class="tm-rf0 tm-title tm-muted">Coming soon</span>
      </p>
      <email-wizard class="wizard mt-8" />
    </div>

    <div class="section-intro tm-container">
      <div
        class="
          portal
          tm-text-center tm-grid-base tm-wrapper tm-section
          light-mode
        "
      >
        <site-footer class="tm-bg" />
      </div>
    </div>
  </main>
</template>

<script>
import LogoEmerisHero from '~/components/logos/LogoEmerisHero.vue'
import EmailWizard from '~/components/ui/EmailWizard.vue'
import SiteFooter from '~/components/ui/SiteFooter.vue'

export default {
  components: {
    LogoEmerisHero,
    EmailWizard,
    SiteFooter,
  },
}
</script>

<style lang="stylus" scoped>

.section-hero
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
  bottom 2rem
  left 50%
  transform translateX(-50%)
  z-index $z-index-tooltip

.beta-badge
  display inline-block
  padding var(--spacing-3) var(--spacing-5)
  background var(--border)
  color var(--text)
  border-radius 1.5rem
  margin-left var(--spacing-5)
  margin-right var(--spacing-5)

.section-intro
  .portal
    background var(--primary-gradient-complex)
    center()
    max-width $max-width['8']

  .footer
    grid-column 1/-1

// @media $breakpoint-xsmall-only
//
// @media $breakpoint-small
//
// @media $breakpoint-medium
//
// @media $breakpoint-large
//
// @media $breakpoint-xl
</style>
