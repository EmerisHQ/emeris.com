<template>
  <footer class="footer tm-lh-title">
    <nav ref="links" class="social-links" role="navigation">
      <tm-link
        v-for="link in links"
        :key="url(link)"
        class="tm-medium tm-text"
        :href="url(link)"
        >{{ link.title }}</tm-link
      ><nuxt-link to="/signup" class="tm-medium tm-text tm-link"
        >Email</nuxt-link
      >
    </nav>
    <div class="footnotes tm-muted">
      <span
        >Built by
        <tm-link class="tm-medium tm-text" href="https://tendermint.com/"
          >Tendermint</tm-link
        ></span
      >
      <span>&middot;</span>
      <span>&copy; Emeris {{ new Date().getFullYear() }}</span>
    </div>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      links: [
        { title: 'Blog', url: '/todo/' },
        { title: 'Telegram', url: 'https://t.me/' },
        { title: 'Twitter', url: 'https://twitter.com/' },
      ],
    }
  },
  methods: {
    url(link) {
      return link.url || link
    },
    isInternal(url) {
      return url.startsWith('/')
    },
  },
}
</script>

<style lang="stylus" scoped>
.social-links .tm-link + .tm-link
  margin-left var(--spacing-6)
</style>
