<template>
  <main>
    <section-primary-nav />
    <article>
      <div class="tm-section mt-11">
        <div class="tm-wrapper">
          <div class="tm-container tm-grid-base">
            <div class="sidebar">
              <tm-button
                to-link="internal"
                to="http://support.emeris.com/"
                size="s"
                variant="text"
              >
                <span class="icon__left gradient-text">&#8592;</span>
                <span class="gradient-text">Support</span>
              </tm-button>

              <div class="related">
                <div
                  class="
                    subheading
                    mt-8
                    tm-rf0 tm-medium tm-lh-title tm-overline tm-muted
                  "
                >
                  Related
                </div>

                <div v-for="item in questions" :key="item.title" class="mt-5">
                  <tm-link
                    :href="`/support/${item.slug}`"
                    class="tm-rf0 tm-lh-copy"
                  >
                    {{ item.title }}
                  </tm-link>
                </div>
              </div>
            </div>
            <div class="main tm-center">
              <h1
                class="
                  title
                  tm-rf4 tm-bold tm-lh-title tm-title tm-serif tm-measure
                "
              >
                {{ article.title }}
              </h1>
              <p class="mt-5 tm-muted tm-lh-copy tm-rf0 tm-measure">
                Last updated {{ formatDate(article.updatedAt) }}
              </p>

              <div class="markdown mt-9 tm-lh-copy tm-rf1 tm-measure">
                <nuxt-content :document="article" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="tm-section related mobile">
        <div class="tm-wrapper tm-container">
          <div
            class="subheading tm-rf0 tm-medium tm-lh-title tm-overline tm-muted"
          >
            Related
          </div>

          <div v-for="item in questions" :key="item.title" class="mt-5">
            <tm-link :href="`/support/${item.slug}`" class="tm-rf0 tm-lh-copy">
              {{ item.title }}
            </tm-link>
          </div>
        </div>
      </div>
    </article>
  </main>
</template>

<script>
import '~/assets/styles/markdown.styl'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    const questions = await $content('articles')
      .only(['title', 'slug'])
      .where({ tags: { $containsAny: article.tags } })
      .sortBy('index', 'asc')
      .fetch()
    return {
      article,
      questions,
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
