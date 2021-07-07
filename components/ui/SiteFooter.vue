<template>
  <footer class="footer tm-lh-title">
    <p class="scrolltop-container mt-7 mb-8">
      <tm-link to="homepage" href="#homepage" class="scrolltop"
        ><icon-arrow-up-16 /><span class="diamond"></span
      ></tm-link>
    </p>
    <ul ref="links" class="social-links" role="navigation">
      <li v-for="link in links" :key="url(link)">
        <tm-link class="tm-medium tm-text" :href="url(link)">{{
          link.title
        }}</tm-link>
      </li>
    </ul>
    <div class="footnotes tm-muted tm-rf-1 tm-rf0-md-up mt-6">
      <span class="footnote mt-1"
        >Built by
        <tm-link class="tm-medium tm-text" href="https://tendermint.com/"
          >Tendermint</tm-link
        ></span
      >
      <span class="footnote mt-1">&middot;</span>
      <span class="footnote mt-1"
        >&copy; Emeris {{ new Date().getFullYear() }}</span
      >
    </div>
  </footer>
</template>

<script>
import IconArrowUp16 from '~/components/icons/IconArrowUp16.vue'

export default {
  components: {
    IconArrowUp16,
  },
  data() {
    return {
      links: [
        { title: 'Telegram', url: 'https://t.me/EmerisHQ' },
        { title: 'Twitter', url: 'https://twitter.com/emerisHQ' },
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
.scrolltop-container
  grid-column 1/-1

.scrolltop
  position relative
  display flex
  align-items center
  justify-content center
  width 3rem
  height 3rem
  center()

  .diamond
    position absolute
    display block
    trbl 15%
    border 2px solid var(--quinary)
    border-image url('~/assets/images/elements/gold-material-swatch.jpg') 50
    transform rotate(45deg)
    transition transform .3s $ease-out

  &:hover,
  &:focus
    .diamond
      transform rotate(-45deg)


.social-links
  padding 0

  li
    display inline-block
    list-style-type none

  li + li
    margin-left var(--spacing-6)

@media $breakpoint-medium-max
  .footnote
    display block

@media $breakpoint-medium
  .footer
    display grid
    grid-template-columns repeat(4, 1fr)
    gap 0 var(--grid-gap-x)

  .scrolltop-container
    grid-column span 4

  .footnotes,
  .social-links
    grid-column span 2

  .social-links
    text-align left

  .footnotes
    margin-top 0
    text-align right
</style>
