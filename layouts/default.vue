<template>
  <div>
    <div id="content">
      <!-- all page content here - hidden when mobile nav open -->
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus">
// https://nuxtjs.org/examples/transitions
.page-enter-active
  transition opacity 0.2s $ease-out
.page-leave-active
  transition opacity 0.2s $ease-out

.page-enter,
.page-leave-to
  opacity 0

#content
  overflow hidden

.center
  display grid
  place-items center
  center()
  width 100% // safari
</style>
