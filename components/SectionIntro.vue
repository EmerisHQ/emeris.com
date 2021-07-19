<template>
  <div class="section-intro tm-section">
    <div class="tm-wrapper tm-container-narrow center">
      <h2 class="tm-rf4 tm-lh-title tm-bold tm-serif title">
        Your one-stop<br />portal to a new<br />world of DeFi
      </h2>
      <div class="emeris-beta">
        <div class="portal"></div>
        <img
          src="~/assets/images/elements/emeris-beta.jpg"
          alt="Emeris intro"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="stylus" scoped>
.section-intro
  overflow hidden
  padding-bottom 0
  background linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #A8FF89 100%)

.title
  margin-bottom var(--spacing-11)
  text-align center
  @media $breakpoint-medium
    margin-bottom var(--spacing-12)
  @media $breakpoint-xl
    margin-bottom var(--spacing-10)

.emeris-beta
  position relative
  width 100%
  height 90vw
  max-height 35rem
  margin-bottom -6.5%
  text-align center
  @media $breakpoint-medium
    height 62vw
  img
    position absolute
    top 0
    left 26vw
    left 5.25rem
    width 148vw
    max-width 61.5rem
    border-radius .5rem
    transform matrix(1, -0.04, -0.1, 1, 0, 0)
    @media $breakpoint-medium
      left 8.3rem
      width 97vw
    @media $breakpoint-xl
      left 0
      right 0
      width 100%
      margin auto
      border-radius 1rem

.portal
  position absolute
  top -9%
  left -1.75rem
  height 118%
  width 13rem
  background var(--portal-gradient)
  transform matrix(-1, 0, 0, 1, 0, 0) perspective(4cm) rotateY(-9deg)
  @media $breakpoint-medium
    top -10%
    height 120%
    width 40.5vw
    transform matrix(-1, 0, 0, 1, 0, 0) perspective(100px) rotateY(-3.8deg)
  @media $breakpoint-xl
    left auto
    right 75%
    top -12%
    height 124%
    width 40vw
    transform matrix(-1, 0, 0, 1, 0, 0) perspective(100px) rotateY(-3.1deg)
</style>
