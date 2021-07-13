<template>
  <div class="nav-inner">
    <nav class="nav nav-primary tm-wrapper tm-container" role="navigation">
      <NuxtLink to="/" :class="['logos', $route.path != '/' && ' not-home']">
        <logo-emeris-hero class="logo logo-cosmos" />
      </NuxtLink>
      <span class="sr-only">Emeris</span>
      <div class="nav-scroll">
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
.nav-inner
  position relative
  z-index 2

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
  .logo
    display block
    transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
    color var(--white)
  .logo-stargate
    position absolute
    height 1rem
    opacity 0
    visibility hidden
    transform scale(0.8)
  .logos
    position relative
    width 10rem
    height 3rem
    display flex
    justify-content center
    flex-direction column
    &.not-home
      .logo-cosmos
        transform scale(0.4) translateY(-3.5rem)
        color var(--gray-600)
      .logo-stargate
        opacity 1
        visibility visible
        transform scale(1)
        transition transform .4s $ease-out, opacity .4s $ease-out, visibility 0s

  &-primary ul a
    display block
    white-space nowrap
    padding var(--spacing-6) 0
    color var(--white)
    border-radius $border-radius-2
    transition all .25s $ease-out
    &:hover,
    &:focus
      opacity 0.8
    &:active
      opacity 0.6
      transition-duration .05s
    // /* exact link will show the primary color for only the exact matching link */
    &.nuxt-link-exact-active
      cursor default
      color var(--gray-600)
      opacity 1
  &-secondary
    .tm-button
      min-width $max-width['2']
    .icon
      display none
      fill var(--white)
      width 1.5rem
      &__reverse
        transform rotate(180deg)

@media $breakpoint-small
  .homelink
    align-self baseline
    margin-top var(--spacing-1)
  .logos
    align-items start
    height 4rem
  .logo
    transform-origin 0% 50%
  .nav-primary
    align-items center

@media $breakpoint-xsmall-only
  .nav
    &-primary
      justify-content center
      flex-direction column
      align-items unset
    .logos
      center()
    .logo-cosmos
      max-height 1.5rem
      width auto
    .logo-stargate
      height 0.75rem
    .logos.not-home
      .logo-cosmos
        transform scale(0.5) translateY(-2.5rem)
    &-secondary
      .text
        display none
      .icon
        display block

  .nav-scroll
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

  .countdown
    display none

@media screen and (max-width: 1024px)
  .nav
    &-primary
      justify-content center
      flex-direction column

  .countdown
    display none
</style>
