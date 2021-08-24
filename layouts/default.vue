<template>
  <div id="top" class="main-wrapper">
    <section-primary-nav />
    <div id="content">
      <nuxt />
    </div>
    <tm-footer />
  </div>
</template>

<script></script>

<style lang="stylus">
// https://nuxtjs.org/examples/transitions
.page-enter-active
  transition opacity 0.2s $ease-out
.page-leave-active
  transition opacity 0.2s $ease-out
.page-enter
.page-leave-to
  opacity 0

// #content
//   overflow hidden
#top
  overflow hidden

.main-wrapper
  display flex
  flex-direction column
  justify-content space-between
  min-height 100vh
  &:before
    content ''
</style>
