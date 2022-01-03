<template>
  <!-- INTERNAL -->
  <nuxt-link
    v-if="toLink === 'internal'"
    :to="to"
    v-bind="{ disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      _classes,
    ]"
    :style="_styles"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </nuxt-link>
  <!-- EXTERNAL -->
  <a
    v-else-if="toLink === 'external'"
    :href="href"
    target="_blank"
    rel="noreferrer noopener"
    v-bind="{ target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      'tm-button__external',
      _classes,
    ]"
    :style="_styles"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </a>
  <!-- DISABLED -->
  <button
    v-else-if="disabled"
    v-bind="{ type, target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      _classes,
    ]"
    :style="_styles"
    aria-disabled="true"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </button>

  <!-- DEFAULT -->
  <button
    v-else
    v-bind="{ type, target, href, rel, disabled }"
    :class="[
      'tm-button',
      `tm-button__size__${size}`,
      `tm-button__variant__${variant}`,
      'tm-lh-title',
      'tm-medium',
      glow && 'tm-button__glow',
      _classes,
    ]"
    :disabled="disabled"
    :style="_styles"
  >
    <span class="tm-button__content">
      <slot />
    </span>
  </button>
</template>

<script>
export default {
  props: {
    size: {
      /**
       * `s` | `m` | `l`
       */
      type: String,
      default: 'm',
    },
    /**
     * Variant: `text` | `outlined` | `contained` | `gradient`
     */
    variant: {
      type: String,
      default: 'contained',
    },
    /**
     * CSS color of background
     */
    backgroundColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of light mode background
     */
    lightBackgroundColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of border
     */
    borderColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of light mode border
     */
    lightBorderColor: {
      type: String,
      default: null,
    },
    /**
     * CSS color of color
     */
    color: {
      type: String,
      default: null,
    },
    /**
     * CSS color of light mode color
     */
    lightColor: {
      type: String,
      default: null,
    },
    /**
     * Glow style
     */
    glow: {
      type: Boolean,
      default: false,
    },
    /**
     * Disabled
     */
    disabled: {
      type: Boolean,
      default: false,
    },
    /**
     * Type: `submit`
     */
    type: {
      type: String,
      default: null,
    },
    /**
     * toLink: `anchor` | `internal` | `external`
     */
    toLink: {
      type: String,
      default: null,
    },
    /**
     * to
     */
    to: {
      type: String,
      default: null,
    },
    /**
     * href
     */
    href: {
      type: String,
      default: null,
    },
    /**
     * target
     */
    target: {
      type: String,
      default: null,
    },
    /**
     * rel
     */
    rel: {
      type: String,
      default: null,
    },
    /**
     * Classes
     */
    classes: {
      type: String,
      default: '',
    },
  },
  computed: {
    _classes() {
      let classes = this.classes
      switch (this.size) {
        case 's':
          classes += ' tm-rf-1 tm-rf0-l-up'
          break
        case 'l':
          classes += ' tm-rf1'
          break
        default:
          classes += ' tm-rf0'
      }
      return classes
    },
    _styles() {
      const styles = {}
      const lightMode = this.$nuxt.$colorMode.value === 'light'
      const backgroundColor = lightMode
        ? this.lightBackgroundColor
        : this.backgroundColor
      const borderColor = lightMode ? this.lightBorderColor : this.borderColor
      const color = lightMode ? this.lightColor : this.color

      if (backgroundColor) styles['--bg-color'] = backgroundColor
      if (borderColor) styles['--border-color'] = borderColor
      if (color) styles['--color'] = color

      return styles
    },
  },
}
</script>

<style lang="stylus" scoped>
.tm-button
  // default colors for contained variant
  --bg-color var(--title)
  --border-color var(--title)
  --color var(--bg)

  // base
  position relative
  display inline-flex
  align-items center
  justify-content center
  color var(--color)
  border-radius 0.47em // relative border-radius
  transition all .25s $ease-out

  &:active
    opacity 0.88
    transition-duration .05s

  /* glow styling (optional) */
  &__glow
    &::before
      content ''
      position absolute
      border-radius inherit
      transform translateZ(0)
      z-index 0 // may cause unintended overlays
      opacity 0.4
      transition background-position .4s $ease-out, opacity .5s $ease-out
    &:hover,
    &:focus
      &,
      &::before
        background-position right bottom
      &::before
        transition-duration .2s
        opacity 0.5

  /* text variant */
  &__variant__text
    --color var(--link)

    &:hover,
    &:focus
      opacity 0.8
    &:active
      opacity 0.6

  /* outlined variant */
  &__variant__outlined
    --border-color transparent
    --color var(--black)
    background var(--bg)
    transition none

    &.tm-button__glow
      box-shadow 3px 9px 24px rgba(0, 0, 0, 0.07)
      @media $breakpoint-medium
        box-shadow 3px 9px 24px rgba(0, 0, 0, 0.32)
    &::after,
    &.tm-button__glow::before
      border 0.0625rem solid var(--border-color)
    &::after // border
      content ''
      position absolute
      z-index -1
      trbl 0
      border 0
      border-radius inherit
      // opacity 0.33
      margin -0.0625rem
      background linear-gradient(280.46deg, #FFF0CA 12.71%, #D3AD5F 33.34%, #FFECC4 41.61%, #997736 59.2%, #FFF2C0 77.69%, #CEA851 97.39%)
      transition opacity .25s $ease-out
      .light-mode &
        opacity 1
    &.tm-button__glow::before // glow
      trbl -0.0625em
      filter blur(0.4rem)
    .tm-button__content
      display block // fix weird bug with text gradients on safari
      color var(--color)
      background var(--title-gradient)
      -webkit-background-clip text
      background-clip text
      -webkit-text-fill-color transparent
      text-fill-color transparent
      >>> span
        display block
        color var(--color)
        background var(--title-gradient)
        -webkit-background-clip text
        background-clip text
        -webkit-text-fill-color transparent
        text-fill-color transparent
    &:hover,
    &:active
      &::after
        background radial-gradient(144.8% 78% at 90.48% 100%, #FFFD38 25.95%, rgba(158, 255, 185, 0) 100%), linear-gradient(153.31deg, #64DAFB 5.41%, #30FFDF 30.23%, #B0FF94 54.73%)
    &:focus
      &::after
        background linear-gradient(102.36deg, #64DBFC -2.26%, #30FFDF 34.48%, #FFFE39 92.77%)
    &:hover,
    &:focus,
    &:active
      background transparent
      &::after
        opacity 1
      .tm-button__content
        color initial
        background initial
        -webkit-background-clip initial
        -webkit-text-fill-color initial
        >>> span
          color initial
          background initial
          -webkit-background-clip initial
          -webkit-text-fill-color initial
    &[disabled]
      .tm-button__content
        opacity 1 !important
      &:after
        background: rgba(255, 255, 255, 0.44)

  /* gradient variant */
  &__variant__gradient
    --border-color transparent
    --color var(--black)
    position relative
    transition none

    &::after,
    &.tm-button__glow::before
      border 0.0625rem solid var(--border-color)
    &::after // border
      content ''
      position absolute
      z-index -1
      trbl 0
      border 0
      border-radius inherit
      margin -0.0625rem
      background: linear-gradient(102.36deg, #64DBFC -2.26%, #30FFDF 34.48%, #FFFE39 92.77%);
      transition opacity .25s $ease-out
      .light-mode &
        opacity 1
    &.tm-button__glow::before // glow
      trbl -0.0625em
      filter blur(0.4rem)
    .tm-button__content
      display block // fix weird bug with text gradients on safari
      color var(--color)
    &:hover,
    &:active
      &::after
        background radial-gradient(144.8% 78% at 90.48% 100%, #FFFD38 25.95%, rgba(158, 255, 185, 0) 100%), linear-gradient(153.31deg, #64DAFB 5.41%, #30FFDF 30.23%, #B0FF94 54.73%)
    &:focus
      &::after
        background linear-gradient(102.36deg, #64DBFC -2.26%, #30FFDF 34.48%, #FFFE39 92.77%)
    &:hover,
    &:focus,
    &:active
      background transparent
      &::after
        opacity 1
      .tm-button__content
        color initial
        background initial
        -webkit-background-clip initial
        -webkit-text-fill-color initial
        >>> span
          color initial
          background initial
          -webkit-background-clip initial
          -webkit-text-fill-color initial

  /* contained variant */
  &__variant__contained
    background var(--bg-color)
    background-size 200% auto
    box-shadow var(--elevation-4)
    hover-elevation(16, $active-opacity:0.4)
    &::before // glow
      trbl 0.125em 1em 0
      background inherit
      filter blur(1.25rem) brightness(1.5)
    &:after
      transition opacity .25s $ease-out
    &:hover,
    &:active
      &:after
        opacity 1
        background radial-gradient(144.8% 78% at 90.48% 100%, #FFFD38 25.95%, rgba(158, 255, 185, 0) 100%), linear-gradient(153.31deg, #64DAFB 5.41%, #30FFDF 30.23%, #B0FF94 54.73%)

  /* disabled state */
  &[disabled]
    pointer-events none
  &[disabled] .tm-button__content
    opacity 0.44

  // sizes
  &__size__s
    padding-top var(--spacing-3)
    padding-bottom var(--spacing-3)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined,
    &.tm-button__variant__gradient
      padding-left var(--spacing-5)
      padding-right var(--spacing-5)
  &__size__m
    height: 3rem
    padding-top var(--spacing-4)
    padding-bottom var(--spacing-4)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined,
    &.tm-button__variant__gradient
      padding-left var(--spacing-7)
      padding-right var(--spacing-7)
  &__size__l
    padding-top var(--spacing-5)
    padding-bottom var(--spacing-5)
    &.tm-button__variant__contained,
    &.tm-button__variant__outlined,
    &.tm-button__variant__gradient
      padding-left var(--spacing-8)
      padding-right var(--spacing-8)

  &__content
    position relative
    z-index 1
    white-space nowrap
    display grid
    grid-auto-flow column
    align-items center

  /* icons */
  >>> .icon__right
  >>> .icon__left
    transform-fix()
    display inline-block
    transition transform 0.25s $ease-out
  >>> .icon__left
    margin-right 0.5em
  >>> .icon__right
    margin-left 0.5em
  >>> .icon__hover
    display none
  &:hover,
  &:focus
    >>> .icon__right
      transform translateX(10%)
      &._external
        transform translate(10%, -10%)
    >>> .icon__left
      transform translateX(-10%)
    >>> .icon__down
      transform translateY(10%)
    .tm-button__external.tm-button__variant__text&
      >>> .icon__right
        transform translate(10%, -10%)
      >>> .icon__down
        transform translateY(10%)
    >>> .icon
      display none
    >>> .icon__hover
      display inline-block

.tm-button + .tm-button
  margin-top var(--spacing-6)

@media $breakpoint-small
  .tm-button + .tm-button
    margin-left var(--spacing-8)
    margin-top 0
</style>
