<template>
  <div class="tm-section tm-wrapper tm-container">
    <div class="center">
      <h1 class="title serif tm-rf4 tm-bold tm-lh-title tm-title mb-9">
        Get Emeris updates
      </h1>
      <email-wizard />
      <p>Need to get in touch? info@emeris.com</p>
    </div>
  </div>
</template>

<script>
import EmailWizard from '~/components/ui/EmailWizard.vue'

export default {
  components: {
    EmailWizard,
  },
  head() {
    return {
      title: 'Subscribe',
    }
  },
}
</script>

<style lang="stylus" scoped></style>
