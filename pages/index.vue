<template>
  <main>
    <div ref="button" class="fixed-container">
      <transition name="fade">
        <!-- <tm-button
          v-if="show"
          to-link="external"
          :href="getUtmParams('https://app.emeris.com')"
          size="m"
          border-color="var(--primary)"
          variant="outlined"
          glow
          class="btn"
          >Launch app &#8594;</tm-button
        > -->
        <tm-button
          v-if="show"
          v-scroll-to="'#cta'"
          variant="outlined"
          to-link="anchor"
          href="#"
          size="m"
          border-color="var(--primary)"
          glow
          class="btn"
          @click.native="openWizard"
        >
          <icon-bell-24 class="icon icon__left" />
          <icon-bell class="icon__hover icon__left" />
          <span>Get email updates</span>
          <icon-arrow-right-24 class="icon icon__right" />
          <icon-arrow-right class="icon__hover icon__right" />
        </tm-button>
      </transition>
      <tm-cookie-banner />
    </div>
    <section-hero />
    <section-intro />
    <kinesis-container>
      <section-trading />
      <section-protocol />
    </kinesis-container>
    <section-rates />
    <section-access />
    <section-beta />
    <section-updates />
    <section-cta ref="cta" />
  </main>
</template>

<script>
import { KinesisContainer } from 'vue-kinesis'
import IconArrowRight from '~/components/icons/IconArrowRight.vue'
import IconBell from '~/components/icons/IconBell.vue'
import IconArrowRight24 from '~/components/icons/IconArrowRight24.vue'
import IconBell24 from '~/components/icons/IconBell24.vue'

export default {
  components: {
    KinesisContainer,
    IconArrowRight,
    IconBell,
    IconArrowRight24,
    IconBell24,
  },
  data() {
    return {
      show: true,
      currentUrl: this.$route.fullPath,
    }
  },

  mounted() {
    this.setupListener()
  },

  beforeDestroy() {
    window.removeEventListener('scroll', this.scrollHandler, false)
  },

  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
    scrollHandler() {
      const ctaTop = this.$refs.cta.$el.getBoundingClientRect().top
      const buttonTop = this.$refs.button.getBoundingClientRect().top
      if (ctaTop <= buttonTop) {
        this.show = false
      } else {
        this.show = true
      }
    },

    setupListener() {
      window.addEventListener('scroll', this.scrollHandler, false)
    },

    openWizard() {
      this.$refs.cta.$refs.emailWizard.actionOpen()
    },
  },
}
</script>

<style lang="stylus" scoped>
.fade-enter-active
.fade-leave-active
  transition opacity .5s

.fade-enter
.fade-leave-to
  opacity 0

.fixed-container
  position fixed
  z-index 9
  bottom 0
  left var(--wrap-gap)
  right var(--wrap-gap)
  @media $breakpoint-medium
    bottom var(--spacing-10)
    left auto
  .btn
    width 100%
    margin-bottom var(--wrap-gap)
    @media $breakpoint-medium
      margin-bottom 0

// @media $breakpoint-large
// @media $breakpoint-xl
// @media $breakpoint-xxl
</style>
