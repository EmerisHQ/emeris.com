<template>
  <article>
    <section-primary-nav />

    <div class="tm-section mt-11">
      <div class="tm-wrapper">
        <div class="tm-container">
          <div class="main tm-center tm-measure">
            <h1 class="title tm-rf4 tm-bold tm-lh-title tm-title tm-serif">
              {{ article.title }}
            </h1>
            <p class="mt-5 tm-muted tm-lh-copy tm-rf0">
              Last updated {{ formatDate(article.updatedAt) }}
            </p>

            <div class="markdown mt-9 tm-lh-copy tm-rf1">
              <nuxt-content :document="article" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </article>
</template>

<script>
import '~/assets/styles/markdown.styl'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('terms-of-service').fetch()
    return {
      article,
    }
  },
  data() {
    return {
      isHelpful: null,
    }
  },
  head() {
    return {
      title: this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        // Open Graph
        { hid: 'og:title', property: 'og:title', content: this.article.title },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.article.description,
        },
        // Twitter Card
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.article.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.article.description,
        },
      ],
    }
  },
  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('en', options)
    },
  },
}
</script>

<style lang="stylus" scoped>
.gradient-text
  background var(--title-gradient)
  -webkit-background-clip text
  -webkit-text-fill-color transparent

.related
  display none
  @media $breakpoint-medium
    display block
  &.mobile
    display block
    @media $breakpoint-medium
      display none

.main
  grid-column 1/-1
  max-width 44rem

@media $breakpoint-medium
  .sidebar
    grid-column span 2

  .main
    grid-column span 6

@media $breakpoint-xl
  .sidebar
    grid-column span 3

@media $breakpoint-xl
  .main
    grid-column 5/ span 8
</style>
