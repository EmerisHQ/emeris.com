<template>
  <div v-on-clickaway="closeNav" class="nav-container tm-wrapper headroom">
    <div class="tm-container">
      <nav class="nav" role="navigation">
        <div class="nav-head z-1" :class="isOpen && 'opened'">
          <nuxt-link
            :to="getUtmParams('/')"
            class="logos-container"
            :class="[homePage && 'home']"
          >
            <logo-emeris-wordmark-color class="logo" :gradient="!isOpen" />
            <span class="sr-only">Emeris</span>
          </nuxt-link>
          <span
            class="smallprint tm-rf-1 tm-mediumtm-lh-title tm-overline tm-muted"
          >
            Beta
          </span>
        </div>
        <div class="nav-tail" :class="isOpen && 'opened'">
          <ul>
            <!-- <li class="not-top mobile" @click="closeNav">
              <tm-link
                :href="getUtmParams('https://app.emeris.com/')"
                class="tm-rf0 tm-medium tm-lh-title tm-link-disclosure"
                >Launch app</tm-link
              >
            </li> -->
            <li @click="closeNav">
              <tm-link
                :href="getUtmParams('https://medium.com/emeris-blog')"
                class="tm-rf0 tm-medium tm-lh-title tm-link-external"
                >Blog</tm-link
              >
            </li>
            <li @click="closeNav">
              <tm-link
                :href="getUtmParams('http://support.emeris.com/')"
                class="tm-rf0 tm-medium tm-lh-title"
                >Support</tm-link
              >
            </li>
            <li class="not-top tablet" @click="closeNav">
              <tm-button
                id="launchApp"
                to-link="external"
                :href="getUtmParams('https://app.emeris.com')"
                size="m"
                border-color="var(--primary)"
                variant="gradient"
                glow
                class="btn"
                ><span>Launch app &#8594;</span></tm-button
              >
            </li>
            <li class="mobile" @click="closeNav">
              <tm-link
                :href="getUtmParams('/updates')"
                class="tm-rf0 tm-medium tm-lh-title"
                >Get updates</tm-link
              >
            </li>
            <li class="mobile tm-rf-1 tm-info">
              App currently only supported on a desktop device, using Google
              Chrome.
            </li>
          </ul>
        </div>
        <button
          class="burger"
          :class="isOpen && 'opened'"
          variant="text"
          @click="toggleNav"
        >
          <i />
          <i />
          <i />
          <i />
          <span class="sr-only">Toggle nav</span>
        </button>
      </nav>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
import Headroom from 'headroom.js'
import LogoEmerisWordmarkColor from '~/components/logos/LogoEmerisWordmarkColor.vue'

export default {
  components: {
    LogoEmerisWordmarkColor,
  },
  mixins: [clickaway],
  data() {
    return {
      isOpen: false,
      // isTop: false,
      currentUrl: this.$route.fullPath,
      headroom: null,
    }
  },
  computed: {
    homePage() {
      return this.$route.path === '/'
    },
  },
  mounted() {
    window.addEventListener('resize', this.checkMobile)
    this.enableHeadroom()
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.checkMobile)
    this.disableHeadroom()
  },
  methods: {
    getUtmParams(link) {
      this.currentUrl.includes('?') &&
        (link += `?${this.currentUrl.split('?')[1]}`)
      return link
    },
    toggleNav() {
      this.isOpen = !this.isOpen
    },
    closeNav() {
      this.isOpen = false
    },
    checkMobile() {
      window.innerWidth >= 768 && this.closeNav()
    },
    disableHeadroom() {
      if (this.headroom) {
        this.headroom.destroy()
        this.headroom = null
      }
    },
    enableHeadroom() {
      if (!this.headroom) {
        const options = {
          offset: 100,
          onUnpin: () => this.closeNav(),
          // onTop: () => (this.isTop = true),
          // onNotTop: () => (this.isTop = false),
        }
        this.headroom = new Headroom(this.$el, options)
        this.headroom.init()
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.headroom
  will-change transform
  transition transform .2s linear, background .2s linear

.headroom--pinned
  transform translateY(0%)

.headroom--unpinned
  transform translateY(-100%)

.nav-container
  position fixed
  z-index 20
  top 0
  left 0
  right 0
  padding-block 2.75rem
  background rgba(0, 0, 0, 0)
  &.headroom--not-top
    padding-top var(--spacing-4)
    padding-bottom var(--spacing-4)
    &.headroom--pinned
      background rgba(0, 0, 0, 1)
      @supports ((-webkit-backdrop-filter: blur(2em)) or (backdrop-filter: blur(2em)))
        background rgba(0, 0, 0, 0.7)
        backdrop-filter blur(20px)
  &.headroom--top
    padding-block var(--spacing-7)
    @media $breakpoint-medium
      padding-block var(--spacing-8)
    @media $breakpoint-xl
      padding-block 2.75rem
  .tm-container
    max-width 86rem

.nav-container > *
  grid-column 1/-1

.nav-head
  display flex
  flex-direction row
  align-items baseline
  justify-content space-between
//   @media $breakpoint-medium
//     flex-direction column

.logos-container
  position relative
  display flex
  justify-content center
  flex-direction column
  height 1.2rem
  @media $breakpoint-medium
    center()
    height 1.5rem
  &.home
    pointer-events none

.smallprint
  margin-left var(--spacing-5)
  // .headroom--top &
  //   color rgba(24,24,24,0.67)

.nav
  /* if no secondary nav, create similar space */
  // &:first-child:last-child
  //   margin-bottom var(--spacing-9)
  display flex
  flex-direction row
  justify-content space-between
  align-items end
  @media $breakpoint-medium
    align-items center
  &.center
    align-items center
    text-align center

  ul
    display flex
    align-items center
    justify-content center
  ul
    padding 0
  li
    list-style-type none
    display inline-block
    &.not-top
      order -1
      @media $breakpoint-medium
        order initial
        display none
        .headroom--not-top &
          display inline-block
    &.mobile
      @media $breakpoint-medium
        display none !important
    &.tablet
      display none
      @media $breakpoint-medium
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

// .nav-tail
//   .headroom--top &
//     .tm-link
//       color var(--black)
//       &:hover
//         opacity .65

.burger
  position relative
  width 1.25rem
  height 1.25rem
  padding 0
  flex-shrink 0
  -webkit-tap-highlight-color transparent
  @media $breakpoint-medium
    display none
  i
    position absolute
    width 100%
    height 1px
    left 50%
    top 50%
    background-color var(--link)
    transform translate(-50%, 0)
    transition transform .25s $ease-out, opacity .2s $ease-out, color .2s $ease-out
    &:nth-child(1)
      transform translate(-50%, -4px)
    &:nth-child(2)
      transform translate(-50%, 4px)
    &:nth-child(3)
    &:nth-child(4)
      opacity 0
  // .headroom--top &
  //   i
  //     background-color var(--black)
  &.opened
    i
      background-color var(--black)
      &:nth-child(1)
      &:nth-child(2)
        opacity 0
        transform translate(-50%, 0)
      &:nth-child(3)
      &:nth-child(4)
        opacity 1
      &:nth-child(3)
        transform translate(-50%, 0) rotate(45deg)
      &:nth-child(4)
        transform translate(-50%, 0) rotate(-45deg)

@media $breakpoint-medium-max
  .nav-head
    position relative
    .smallprint
      transition color .2s $ease-out
    &.opened
      .smallprint
        color rgba(24, 24, 24, 0.67)

  .nav-tail
    opacity .2
    position absolute
    top calc(-1 * var(--spacing-7))
    left calc(-1 * var(--wrap-gap))
    right calc(-1 * var(--wrap-gap))
    text-align center
    scrollbar-width none
    transform translateY(-20px) scaleY(0) scaleX(1)
    transform-origin 0 0
    transition transform .25s $ease-out, opacity .2s $ease-out
    filter drop-shadow(0px 34px 64px rgba(230, 254, 88, 0.5))
    // .headroom--top &
    //   top calc(-1 * var(--spacing-7))
    &::-webkit-scrollbar
      display none
    &.opened
      opacity 1
      transform translateY(0) scaleY(1) scaleX(1)
    ul
      padding 4.7rem var(--spacing-10) var(--spacing-12) var(--spacing-7)
      display flex
      justify-content center
      align-items flex-start
      flex-direction column
      background var(--primary-gradient-complex)
      clip-path polygon(0% 0%, 100% 0%, 100% 80%, 0% 100%)
      text-align left
      li
        width 100%
        padding var(--spacing-4) 0
      li + li
        margin 0
    .tm-link
      position relative
      display block
      width 100%
      color var(--black)

@media $breakpoint-small
  .logos-container
    align-items start

@media $breakpoint-xl
  .nav-container > *
    grid-column 2/span 10
</style>
