<template>
  <div :class="[type]" class="tm-collapse">
    <slot></slot>
  </div>
</template>
<script>
export default {
  props: {
    accordion: {
      default: false,
      type: Boolean,
    },
    type: {
      default: 'default',
      type: String,
    },
    openHover: {
      default: false,
      type: Boolean,
    },
  },
  methods: {
    emitChange() {
      this.$emit('change')
    },
    closeAllItems(el) {
      const children = this.$children
      children.map((item) => {
        if (item.$el !== el) {
          item.maxHeight = '0px'
        }
        return true
      })
    },
  },
}
</script>

<style lang="stylus">
.tm-collapse
  transition all .3s ease
  -webkit-tap-highlight-color transparent

  &.shadow
    .open-item
      transform: scale(1.01)
      box-shadow: 0px 2px 15px 0px rgba(0,0,0,.05)
      margin-top: 5px
      border-bottom: 0px solid rgba(0,0,0,.0)
      margin-bottom: 10px
      border-radius: 6px
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))
      .con-content-item
        opacity 1

  &.margin
    .tm-collapse-item
      margin-top: 10px
      margin-bottom: 10px
      box-shadow: 0px 2px 15px 0px rgba(0,0,0,.05)
      border-radius: 5px
      border-bottom: 0px solid rgba(0,0,0,.0)
    .open-item
      .con-content-item
        opacity 1
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))

  &.border
    border: 1px solid rgba(0,0,0,.1)
    padding: 0px
    .tm-collapse-item
      border-bottom: 1px solid rgba(0,0,0,.1)
    .open-item
      .con-content-item
        opacity 1
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))


  &.default
    .open-item
      .con-content--item
        opacity 1
      .tm-collapse-item--icon-header
        propWithDir(transform, null, (-50% -50%), rotate(180deg))

.tm-collapse-item
  border-bottom: 1px solid rgba(0,0,0,.04)
  transition: all .25s ease
  &.open-item
    .con-content--item
      opacity 1
    .tm-collapse-item--header
      color var(--secondary)
      font-size var(--font-size-1)
      font-weight var(--font-weight-bold-1)
    .tm-collapse-item--icon-header
      transform rotate(45deg)
      fill var(--secondary)
      top 1rem
  &.disabledx
    opacity: $tm-disabled-opacity
    cursor: default
    pointer-events: none
    z-index: 999;
  &:last-child
    border-bottom: 0px solid rgba(0,0,0,.0) !important

.tm-collapse-item--header
  display: block
  width 100%
  max-width 24rem
  padding-left 2.5rem
  position relative
  transition: all .25s ease
  &:hover
  &:focus
    color var(--white)
    .tm-collapse-item--icon-header
      fill var(--secondary)

.tm-collapse-item--icon-header
  position: absolute
  top .77rem
  left .5rem
  margin-top -.5rem
  transition: transform .25s ease, top .25s ease
  font-size 0
  fill var(--tertiary)

.tm-collapse-item--content
  overflow hidden
  transition: all .2s ease
  padding-left 2.5rem

.con-content--item
  max-width 24rem
  padding-top 1rem
  opacity .2
  transition: all .25s ease
  > div
    padding-bottom 1.5rem
</style>
