<template>
  <div class="nav-container tm-wrapper tm-container">
    <nav class="nav nav-primary" role="navigation">
      <div class="nav-head center">
        <nuxt-link to="/" class="logos-container" :class="[homePage && 'home']">
          <logo-emeris-wordmark-color class="logo" />
          <span class="sr-only">Emeris</span>
        </nuxt-link>
        <span
          class="smallprint tm-rf-1 tm-mediumtm-lh-title tm-overline tm-muted"
        >
          Beta
        </span>
      </div>
      <!-- <div class="nav-tail">
        <ul>
          <li>
            <tm-link
              href="https://medium.com/emeris-blog"
              class="tm-rf0 tm-medium tm-lh-title"
              >Blog &#8599;</tm-link
            >
          </li>
          <li>
            <tm-link
              href="https://cosmos.network"
              class="tm-rf0 tm-medium tm-lh-title"
              >Get Started &#8594;</tm-link
            >
          </li>
        </ul>
      </div> -->
    </nav>
  </div>
</template>

<script>
import LogoEmerisWordmarkColor from '~/components/logos/LogoEmerisWordmarkColor.vue'

export default {
  components: {
    LogoEmerisWordmarkColor,
  },
  computed: {
    homePage() {
      return this.$route.path === '/'
    },
  },
}
</script>

<style lang="stylus" scoped>
.nav-container
  position absolute
  z-index 9
  top 0
  left 0
  right 0
  padding-top var(--spacing-7)

.nav-container > *
  grid-column 1/-1

.nav-head
  display flex
  flex-direction row
  align-items center
  justify-content space-between
  @media $breakpoint-medium
    flex-direction column

.logos-container
  position relative
  display flex
  justify-content center
  flex-direction column
  height 1.2rem
  @media $breakpoint-medium
    center()
    margin-bottom var(--spacing-4)
    height 1.5rem
  &.home
    pointer-events none

.nav
  /* if no secondary nav, create similar space */
  // &:first-child:last-child
  //   margin-bottom var(--spacing-9)

  &-primary,
  ul
    display flex
    align-items center
    justify-content center
  ul
    padding 0
  li
    list-style-type none
    display inline-block
    + li
      margin-left var(--spacing-7)

.nav-primary ul a
  display block
  white-space nowrap
  padding var(--spacing-6) 0
  color var(--white)
  border-radius $border-radius-2
  transition all .25s $ease-out

  &:hover
  &:focus
    opacity 0.8

  &:active
    opacity 0.6
    transition-duration .05s

  &.nuxt-link-exact-active
    cursor default
    color var(--gray-600)
    opacity 1

@media $breakpoint-xsmall-only
  .nav-primary
    justify-content center
    flex-direction column

  .nav-tail
    margin-left calc(-1 * var(--spacing-7))
    margin-right calc(-1 * var(--spacing-7))
    overflow-x auto
    text-align center
    scrollbar-width none
    &::-webkit-scrollbar
      display none

  .nav ul
    padding-left var(--spacing-7)
    padding-right var(--spacing-7)
    display inline-flex
    justify-content center
    align-items center

@media $breakpoint-small
  .logos-container
    align-items start

// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .nav-container > *
    grid-column 2/span 10
// @media $breakpoint-xxl
</style>
