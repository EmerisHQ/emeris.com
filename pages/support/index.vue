<template>
  <main>
    <div class="tm-section mt-10">
      <div class="tm-wrapper tm-container-narrow">
        <h1
          class="
            title
            tm-rf6
            tm-rf5-m-up
            tm-bold
            tm-lh-title
            tm-measure-narrower
            tm-title
            tm-serif
          "
        >
          Get support<br />with Emeris
        </h1>
        <img src="~/assets/images/elements/surfer-faq.png" class="surfer" />

        <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title mt-10 mb-3">
          Get started with Emeris
        </h3>

        <div class="tm-grid-base mb-7">
          <div
            v-for="item in articles.emeris"
            :key="item.title"
            class="general-column"
          >
            <div class="emeris mt-6">
              <div class="emeris-inner">
                <div class="tm-muted">{{ item.description }}</div>
                <div class="mt-1">
                  <tm-link
                    :href="`/support/${item.slug}`"
                    class="btn tm-rf1 tm-bold tm-title tm-link-disclosure"
                  >
                    {{ item.title }}
                  </tm-link>
                </div>
              </div>
            </div>
          </div>
          <div class="general-column">
            <div class="emeris mt-6">
              <div class="emeris-inner">
                <div class="tm-muted">Using Emeris</div>
                <div class="mt-1">
                  <tm-link
                    href="https://medium.com/p/7baace4ecbd4/"
                    class="btn tm-rf1 tm-bold tm-title tm-link-external"
                  >
                    Step by step guide
                  </tm-link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="tm-grid-base">
          <div class="general-column">
            <div
              v-for="item in startedLinks"
              :key="item.title"
              class="mt-5 item-link"
            >
              <tm-link
                :href="`https://catdotfish.medium.com/7baace4ecbd4#${item.link}`"
                class="btn tm-rf0 tm-muted tm-link-disclosure"
              >
                {{ item.title }}
              </tm-link>
            </div>
          </div>
          <div class="general-column">
            <div
              v-for="item in articles.emerisMain"
              :key="item.title"
              class="mt-5 item-link"
            >
              <tm-link
                :href="`/support/${item.slug}`"
                class="btn tm-rf0 tm-muted tm-link-disclosure"
              >
                {{ item.title }}
              </tm-link>
            </div>
          </div>
        </div>

        <div class="header-bottom tm-grid-base">
          <div class="column-defi">
            <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title mt-10 mb-2">
              New to DeFi?
            </h3>

            <div class="tm-grid-base">
              <div class="general-column">
                <div v-for="(item, index) in articles.defi" :key="item.title">
                  <div v-if="index <= 5" class="mt-5 item-link">
                    <tm-link
                      :href="`/support/${item.slug}`"
                      class="btn tm-rf0 tm-muted tm-link-disclosure"
                    >
                      {{ item.title }}
                    </tm-link>
                  </div>
                </div>
              </div>
              <div class="general-column">
                <div v-for="(item, index) in articles.defi" :key="item.title">
                  <div v-if="index > 5" class="mt-5 item-link">
                    <tm-link
                      :href="`/support/${item.slug}`"
                      class="btn tm-rf0 tm-muted tm-link-disclosure"
                    >
                      {{ item.title }}
                    </tm-link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-section">
      <div class="tm-wrapper tm-container-narrow">
        <h2 class="tm-rf3 tm-bold tm-lh-title tm-title tm-serif">
          Frequently asked<br />questions
        </h2>

        <div class="tm-grid-base">
          <div class="general-column mt-9">
            <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title">Emeris Beta</h3>
            <div class="mt-5">
              <tm-collapse accordion>
                <div v-for="item in articles.gettingStart" :key="item.title">
                  <tm-collapse-item>
                    <div slot="header">{{ item.title }}</div>
                    <nuxt-content :document="item" />
                  </tm-collapse-item>
                </div>
              </tm-collapse>
            </div>
          </div>

          <div class="general-column mt-9">
            <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title">Farming</h3>
            <div class="mt-5">
              <tm-collapse accordion>
                <div v-for="item in articles.farming" :key="item.title">
                  <tm-collapse-item>
                    <div slot="header">{{ item.title }}</div>
                    <nuxt-content :document="item" />
                  </tm-collapse-item>
                </div>
              </tm-collapse>
            </div>

            <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title mt-8">Swap</h3>
            <div class="mt-5">
              <tm-collapse accordion>
                <div v-for="item in articles.swap" :key="item.title">
                  <tm-collapse-item>
                    <div slot="header">{{ item.title }}</div>
                    <nuxt-content :document="item" />
                  </tm-collapse-item>
                </div>
              </tm-collapse>
            </div>

            <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title mt-9">
              Providing liquidity
            </h3>
            <div class="mt-5">
              <tm-collapse accordion>
                <div v-for="item in articles.liquidity" :key="item.title">
                  <tm-collapse-item>
                    <div slot="header">{{ item.title }}</div>
                    <nuxt-content :document="item" />
                  </tm-collapse-item>
                </div>
              </tm-collapse>
            </div>

            <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title mt-9">Moonpay</h3>
            <div class="mt-5">
              <tm-collapse accordion>
                <div v-for="item in articles.moonpay" :key="item.title">
                  <tm-collapse-item>
                    <div slot="header">{{ item.title }}</div>
                    <nuxt-content :document="item" />
                  </tm-collapse-item>
                </div>
              </tm-collapse>
            </div>
          </div>
        </div>

        <div class="mt-9">
          <h3 class="tm-rf2 tm-bold tm-lh-copy tm-title">General questions</h3>
          <div class="mt-2">
            <tm-collapse accordion>
              <div class="tm-grid-base">
                <div class="general-column">
                  <div v-for="item in articles.general" :key="item.title">
                    <tm-collapse-item v-if="item.index <= 4">
                      <div slot="header">{{ item.title }}</div>
                      <nuxt-content :document="item" />
                    </tm-collapse-item>
                  </div>
                </div>
                <div class="general-column">
                  <div v-for="item in articles.general" :key="item.title">
                    <tm-collapse-item v-if="item.index > 4">
                      <div slot="header">{{ item.title }}</div>
                      <nuxt-content :document="item" />
                    </tm-collapse-item>
                  </div>
                </div>
              </div>
            </tm-collapse>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-section">
      <div class="tm-wrapper tm-container-narrow">
        <h2 class="tm-rf3 tm-bold tm-lh-copy tm-title tm-serif">
          Common issues
        </h2>

        <div class="mt-6">
          <div class="tm-grid-base">
            <div class="general-column">
              <div v-for="item in articles.common" :key="item.title">
                <div class="mt-6 item-link">
                  <tm-link
                    :href="`/support/${item.slug}`"
                    class="btn tm-rf0 tm-muted tm-link-disclosure"
                  >
                    {{ item.title }}
                  </tm-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="tm-section">
      <div class="tm-wrapper tm-container-narrow">
        <!-- <h2 class="tm-title tm-rf3 tm-bold tm-serif">Get in touch</h2> -->
        <!-- <div class="mt-9"></div> -->
        <tm-cta-cards :data="ctas" />
      </div>
    </div>
  </main>
</template>

<script>
import TmCollapse from '~/components/TmCollapse.vue'
import TmCollapseItem from '~/components/TmCollapseItem.vue'

export default {
  components: {
    TmCollapse,
    TmCollapseItem,
  },
  async asyncData({ $content, params }) {
    const content = await $content('articles', params.slug)
      .sortBy('index', 'asc')
      .fetch()

    const defi = content.filter((item) => item.tags.includes('defi'))
    const emeris = content.filter((item) => item.tags.includes('emeris'))
    const emerisMain = content.filter((item) =>
      item.tags.includes('emeris-main')
    )
    const gettingStart = content.filter((item) =>
      item.tags.includes('getting-start')
    )
    const swap = content.filter((item) => item.tags.includes('swap'))
    const liquidity = content.filter((item) => item.tags.includes('liquidity'))
    const farming = content.filter((item) => item.tags.includes('farming'))
    const moonpay = content.filter((item) => item.tags.includes('moonpay'))
    const general = content.filter((item) => item.tags.includes('general'))
    const common = content.filter((item) => item.tags.includes('common'))

    const articles = {
      defi,
      emeris,
      emerisMain,
      gettingStart,
      swap,
      liquidity,
      farming,
      moonpay,
      general,
      common,
    }

    return {
      articles,
    }
  },
  data() {
    return {
      startedLinks: [
        {
          title: 'How import a Keplr account',
          link: '',
        },
        {
          title: 'How to import Ledger account',
          link: '',
        },
        {
          title: 'How to create a new Keplr account',
          link: '',
        },
        {
          title: 'How to Connect Keplr to Emeris',
          link: '',
        },
        {
          title: 'How to use Moonpay',
          link: '',
        },
        {
          title: 'How to send tokens',
          link: '',
        },
        {
          title: 'How to swap tokens',
          link: '',
        },
        {
          title: 'How can I provide liquidity?',
          link: '',
        },
      ],
      ctas: [
        {
          href: 'https://t.me/EmerisHQ',
          overline: 'Telegram',
          title: 'Community support️',
          variant: 'gradient',
          graphics: 'graphics-cta-telegram',
          grafics: '~/assets/images/elements/tg-background.png',
        },
        // {
        //   href: 'https://discord.com/invite/vcExX9T',
        //   overline: 'Contact us',
        //   title: 'Developer integrations',
        //   variant: 'outlined',
        //   graphics: 'graphics-cta-developers',
        //   grafics: '~/assets/images/elements/cu-background.jpg',
        // },
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

.header-bottom
  @media $breakpoint-large
    grid-template-columns repeat(2, 1fr)
    grid-template-areas "defi defi"

.column-emeris
  grid-column 1 / -1
  position relative
  z-index 1
  @media $breakpoint-large
    grid-area emeris
    display flex
    align-items flex-end

.column-defi
  grid-column 1 / -1
  @media $breakpoint-large
    grid-area defi

.general-column
  position relative
  z-index 1
  grid-column 1 / -1
  @media $breakpoint-medium
    grid-column span 4
  @media $breakpoint-xl
    grid-column span 6

.emeris
  position relative
  width 100%
  padding var(--spacing-7)
  border 0.0625rem solid transparent
  background-color var(--bg)
  background-clip padding-box
  border-radius 10px
  @media $breakpoint-medium
    max-width calc(var(--font-size-5) * 7.25)
  @media $breakpoint-large
    display flex
    flex-direction column
    align-items flex-end
    justify-content flex-end
    max-width none
  &:before
    content ''
    position absolute
    z-index -1
    trbl 0
    border 0
    border-radius inherit
    margin -0.0625rem
    background linear-gradient(280.46deg, #FFF0CA 12.71%, #D3AD5F 33.34%, #FFECC4 41.61%, #997736 59.2%, #FFF2C0 77.69%, #CEA851 97.39%)

.emeris-inner
  width 100%

.surfer
  position absolute
  top 0
  right 0
  width 109vw
  max-width 41rem
  transform translate(42%, -9.5rem)
  @media $breakpoint-medium
    right 22%
    transform translate(50%, -8.3rem)

.title
  max-width 15rem
  margin-top var(--spacing-12)
  @media $breakpoint-small
    margin-top var(--spacing-6)
  @media $breakpoint-medium
    max-width 40rem
    margin-top 0

.item-link
  max-width 24rem
</style>
