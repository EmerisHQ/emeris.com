<template>
  <div class="nav-container tm-wrapper tm-container tm-grid-base">
    <nav class="nav nav-primary" role="navigation">
      <NuxtLink to="/" class="logos-container">
        <logo-emeris-hero class="logo logo-cosmos" />
        <span class="sr-only">Emeris</span>
      </NuxtLink>
      <div class="nav-end">
        <ul>
          <li>
            <tm-link
              href="https://cosmos.network"
              class="text tm-rf0 tm-medium tm-lh-title"
              >Blog &#8594;</tm-link
            >
          </li>
          <li>
            <tm-link
              href="https://cosmos.network"
              class="text tm-rf0 tm-medium tm-lh-title"
              >Get Started &#8594;</tm-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
import LogoEmerisHero from '~/components/logos/LogoEmerisHero.vue'

export default {
  components: {
    LogoEmerisHero,
  },
}
</script>

<style lang="stylus" scoped>
.nav-container > *
  grid-column 1/-1

.logos-container
  position relative
  height 3rem
  display flex
  justify-content center
  flex-direction column

.nav
  /* if no secondary nav, create similar space */
  &:first-child:last-child
    margin-bottom var(--spacing-9)

  &-primary,
  ul
    display flex
    align-items center
    justify-content space-between
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
    align-items unset

  .logos-container
    center()

  .nav-end
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
    height 4rem

// @media $breakpoint-medium
// @media $breakpoint-large
@media $breakpoint-xl
  .nav-container > *
    grid-column 2/span 10
// @media $breakpoint-xxl
</style>
