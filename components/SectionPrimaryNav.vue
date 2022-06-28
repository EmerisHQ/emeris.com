<template>
  <div class="nav-container tm-wrapper">
    <div class="tm-container">
      <nav class="nav" role="navigation">
        <div class="nav-head z-1">
          <nuxt-link
            :to="getUtmParams('/')"
            class="logos-container"
            :class="[homePage && 'home']"
          >
            <logo-emeris-wordmark-color class="logo" :gradient="!isOpen" />
            <span class="sr-only">Emeris</span>
          </nuxt-link>
        </div>
      </nav>
    </div>
  </div>
</template>

<script>
import LogoEmerisWordmarkColor from '~/components/logos/LogoEmerisWordmarkColor.vue'
export default {
  components: {
    LogoEmerisWordmarkColor,
  },
  data() {
    return {
      currentUrl: this.$route.fullPath,
    }
  },
  computed: {
    homePage() {
      return this.$route.path === '/'
    },
  },
  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
  },
}
</script>

<style lang="stylus" scoped>
.nav-container
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  padding-block 2.75rem
  padding-top var(--spacing-5)
  padding-bottom var(--spacing-5)

  .tm-container
    max-width 86rem

.logos-container
  position relative
  height 1.2rem
  @media $breakpoint-medium
    center()
    height 1.5rem
  &.home
    pointer-events none
</style>
