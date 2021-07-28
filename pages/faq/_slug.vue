<template>
  <article>
    <div class="section-hero section-first tm-section">
      <div class="tm-wrapper">
        <div class="tm-section tm-container tm-grid-base">
          <div class="sidebar">
            <!-- <span v-for="(tag, id) in article.tags" :key="id">
              <nuxt-link :to="`/tag/${tags[tag].slug}`">
                <span>
                  {{ tags[tag].name }}
                </span>
              </nuxt-link>
            </span> -->
            <div
              class="
                subheading
                tm-rf-1 tm-rf0-m-up tm-medium tm-lh-title tm-overline
              "
            >
              Related questions
            </div>
          </div>
          <div class="main tm-center">
            <tm-button
              to-link="internal"
              to="/faq"
              size="s"
              variant="text"
              class="btn"
              ><span class="icon__left">&#8592;</span>FAQ
            </tm-button>
            <div class="title tm-rf4 tm-bold tm-lh-title tm-title">
              {{ article.title }}
            </div>
            <div class="markdown mt-9">
              <nuxt-content :document="article" />
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-wrapper tm-container">
      <!-- <tm-cta-cards :data="ctas" /> -->
    </div>
  </article>
</template>

<script>
import '~/assets/styles/markdown.styl'

export default {
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    // const tagsList = await $content('tags')
    //   .only(['name', 'slug'])
    //   .where({ name: { $containsAny: article.tags } })
    //   .fetch()
    // const tags = Object.assign({}, ...tagsList.map((s) => ({ [s.name]: s })))
    // const [prev, next] = await $content('articles')
    //   .only(['title', 'slug'])
    //   .sortBy('createdAt', 'asc')
    //   .surround(params.slug)
    //   .fetch()
    return {
      article,
      // tags,
      // prev,
      // next,
    }
  },
  data() {
    return {
      ctas: [
        {
          href: 'https://discord.com/invite/vcExX9T',
          overline: 'Discord',
          title: 'Developer chat',
        },
        {
          href: 'https://t.me/cosmosproject',
          overline: 'Telegram',
          title: 'Community chat',
        },
      ],
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
}
</script>

<style lang="stylus" scoped>
.sidebar
  display none

.main
  grid-column 1/-1
  max-width 44rem

@media $breakpoint-medium
  .sidebar
    grid-column 1/span 4

  .main
    grid-column 1/-1

@media $breakpoint-xl
  .main
    grid-column 5/ span 8
</style>
