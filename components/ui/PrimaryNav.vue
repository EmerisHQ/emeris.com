<template>
  <nav
    class="nav nav-primary"
    role="navigation"
    :class="{ 'is-active': isActive }"
  >
    <div class="nav-inner tm-container tm-wrapper">
      <div class="nav-first">
        <!-- <NuxtLink to="/" class="logo">
          <span class="sr-only">Emeris</span>
        </NuxtLink> -->
      </div>
      <div class="nav-last"></div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
    }
  },
  watch: {
    $route() {
      this.isActive = false
    },
  },
}
</script>

<style lang="stylus" scoped>
$navbar-height = 5rem
$navbar-mobile-menu = 200

.nav
  &-inner
    width 100%
  &-inner,
  &-first
    display flex
    flex-direction row
    align-items center
    justify-content space-between
  ul
    padding 0
  li
    list-style-type none
  .logo
    display flex
    align-items center
    padding var(--spacing-6) 0
    color inherit
    transition transform .4s $ease-out, opacity .4s $ease-out, visibility .4s 0s
    svg
      width auto
  .tm-link
    position relative
    display block
    border-radius $border-radius-2
  // /* exact link will show the primary color for only the exact matching link */
  // .tm-link.nuxt-link-exact-active
  //   cursor default

@media $breakpoint-large
  .nav
    &-first
      flex 1 1 0%
    &-last
      flex 1 1 0%

  .nav-primary
    .logo-secondary
      display none
</style>
