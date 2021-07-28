<template>
  <main>
    <div class="section-hero section-first">
      <div class="tm-wrapper tm-container tm-section tm-grid-base z-1">
        <div class="text">
          <div class="title tm-rf5 tm-bold tm-lh-title tm-measure tm-title">
            Frequently asked questions
          </div>
        </div>
      </div>
      <!-- <graphics-faq-hero class="graphics z-0" /> -->
    </div>

    <div class="tm-wrapper tm-container tm-grid-base">
      <div class="content">
        <div
          v-for="item in currentIndex"
          :key="articles[item - 1].title"
          class="item"
        >
          <div class="title tm-rf2 tm-bold tm-lh-copy tm-title">
            {{ articles[item - 1].title }}
          </div>
          <div class="desc tm-rf0 tm-lh-copy mt-4">
            {{ articles[item - 1].description }}
          </div>
          <tm-button
            to-link="internal"
            :to="`/faq/${articles[item - 1].slug}`"
            size="l"
            variant="text"
            class="btn"
            >Learn more <span class="icon__right">&rarr;</span></tm-button
          >
        </div>
        <div class="divider mt-8">
          <svg
            width="16"
            height="80"
            viewBox="0 0 16 80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 64L8 -1.50502e-06"
              stroke="currentColor"
              stroke-opacity="0.185"
            />
            <path d="M16 72H0M8 80V64" stroke="currentColor" />
          </svg>
        </div>
        <div class="cta">
          <div
            v-if="currentIndex != articles.length"
            @click="currentIndex = articles.length"
          >
            <tm-button variant="text" class="btn tm-rf1 tm-lh-copy tm-medium"
              >Show all <span class="icon__right">&#8595;</span></tm-button
            >
          </div>
          <div v-else @click="currentIndex = 6">
            <tm-button variant="text" class="btn tm-rf1 tm-lh-copy tm-medium"
              >Show less <span class="icon__right">&#8593;</span></tm-button
            >
          </div>
        </div>
      </div>
    </div>

    <div class="section-cards tm-wrapper tm-container mt-10">
      <!-- <tm-cta-cards :data="ctas" /> -->
    </div>
  </main>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('index', 'asc')
      .fetch()
    const tags = await $content('tags', params.slug)
      .only(['name', 'description', 'img', 'slug'])
      .sortBy('createdAt', 'asc')
      .fetch()
    return {
      articles,
      tags,
    }
  },
  data() {
    return {
      currentIndex: 3,
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
      title: 'FAQ',
    }
  },
}
</script>

<style lang="stylus" scoped>
.section-hero
  text-align left
  position relative

.section-hero .text
  grid-column span 4

.section-hero .graphics
  position unset
  height 100%
  width 170%
  margin-top -20%
  margin-left 0%
  margin-bottom -90%
  overflow visible

// Content
.content
  grid-column span 4

.item + .item
  margin-top var(--spacing-8)

.cta
  text-align left
  cursor pointer

@media $breakpoint-medium
  // Hero
  .section-hero .text
    grid-column span 8

  // Content
  .content
    grid-column span 8

@media $breakpoint-xl
  // Hero
  .section-hero .text
    grid-column 6/ 12

  .section-hero .graphics
    position absolute
    top 0
    height auto
    width auto
    margin 0

  // Content
  .content
    grid-column 6/ 12
</style>
