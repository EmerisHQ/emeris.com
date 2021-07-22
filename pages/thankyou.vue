<template>
  <main>
    <div class="section-hero section-first tm-text-center">
      <div class="tm-wrapper tm-section tm-container tm-grid-base">
        <div class="text center">
          <img
            src="~/assets/images/elements/thanks.png"
            alt="Thank You"
            class="graphics"
          />
          <h1 class="tm-rf2 tm-bold tm-lh-title tm-title">You're all set</h1>
          <p class="desc tm-rf1 tm-lh-copy tm-muted mt-7">
            You'll receive Emeris updates straight to your inbox. Stay tuned for
            some exciting news!
          </p>
          <p class="desc tm-rf1 tm-lh-copy tm-muted">Thank you.</p>
          <tm-button to-link="internal" to="/" class="btn mt-8"
            >&#8592; Home
          </tm-button>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
export default {
  head() {
    return {
      title: 'Thank You',
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-hero .text
  grid-column 1/-1

.graphics
  width 40%

.desc
  text-align center
  max-width 30em

@media $breakpoint-xl
  .section-hero .text
    grid-column 2/span 10
</style>
