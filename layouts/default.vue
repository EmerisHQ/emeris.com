<template>
  <div>
    <!-- <tm-cookie-banner /> -->
    <section-primary-nav />
    <div id="content">
      <nuxt />
    </div>
    <tm-footer />
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
.page-enter
.page-leave-to
  opacity 0

#content
  overflow hidden
</style>
