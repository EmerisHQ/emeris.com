<template>
  <div class="canvas">
    <div class="aspect">
      <img
        class="layer guide"
        src="~/assets/images/elements/surfer-levitate-frame.png"
        alt=""
      />
    </div>
  </div>
</template>

<style lang="stylus" scoped>
.aspect
  position relative
  height 0
  width 100%
  padding-bottom 100% // square aspect ratio

.layer
  position absolute

.guide
  width 100%
</style>
