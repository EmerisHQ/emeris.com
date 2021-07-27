<template>
  <footer class="footer tm-wrapper">
    <div class="tm-container">
      <div class="row">
        <nav
          ref="links"
          class="nav-bottom tm-rf-1 tm-lh-copy"
          role="navigation"
        >
          <nuxt-link to="/" class="logo">
            <logo-emeris-wordmark class="logo__emeris" />
            <span class="sr-only">Emeris</span>
          </nuxt-link>
          <span class="divider" />
          <tm-link
            href="https://v1.cosmos.network/privacy"
            class="tm-rf0 tm-rf-1-m link-item tm-muted"
            >Support</tm-link
          >
          <tm-link
            href="https://v1.cosmos.network/privacy"
            class="tm-rf0 tm-rf-1-m link-item tm-muted"
            >Privacy</tm-link
          >
          <tm-link
            href="https://v1.cosmos.network/privacy"
            class="tm-rf0 tm-rf-1-m link-item tm-muted"
            >Terms of use</tm-link
          >
          <tm-link
            href="https://v1.cosmos.network/privacy"
            class="tm-rf0 tm-rf-1-m link-item tm-muted"
            >Get updates</tm-link
          >
          <span class="divider" />
          <tm-link
            v-scroll-to="'#homepage'"
            href="#"
            class="tm-rf0 tm-rf-1-m tm-muted scrolltop"
          >
            Back to top &#8593;</tm-link
          >
        </nav>
        <nav ref="links" class="social-icons mt-8" role="navigation">
          <tm-link
            v-for="link in links"
            :key="url(link)"
            :href="url(link)"
            class="social-icons__item"
          >
            <tm-tooltip :text="link.title" position="top-center">
              <svg
                width="24"
                height="24"
                xmlns="http://www.w3.org/2000/svg"
                fill-rule="evenodd"
                clip-rule="evenodd"
                fill="currentColor"
              >
                <path :d="icon(link)" style="pointer-events: none"></path>
              </svg>
            </tm-tooltip>
          </tm-link>
        </nav>
      </div>
      <p class="smallprint tm-rf-1 tm-lh-copy mt-8 tm-muted">
        &copy; Emeris 2021 — Built by
        <tm-link href="https://tendermint.com">Tendermint</tm-link>.
      </p>
    </div>
  </footer>
</template>

<script>
import LogoEmerisWordmark from '~/components/logos/LogoEmerisWordmark.vue'

const iconList = [
  [
    'medium',
    'M23 0.000976563H1C0.734784 0.000976563 0.48043 0.106333 0.292893 0.29387C0.105357 0.481406 0 0.73576 0 1.00098L0 23.001C0 23.2662 0.105357 23.5205 0.292893 23.7081C0.48043 23.8956 0.734784 24.001 1 24.001H23C23.2652 24.001 23.5196 23.8956 23.7071 23.7081C23.8946 23.5205 24 23.2662 24 23.001V1.00098C24 0.73576 23.8946 0.481406 23.7071 0.29387C23.5196 0.106333 23.2652 0.000976563 23 0.000976562V0.000976563ZM19.938 5.68698L18.651 6.92098C18.5966 6.96244 18.5545 7.01798 18.5293 7.08159C18.5041 7.1452 18.4967 7.21449 18.508 7.28198V16.35C18.4967 16.4175 18.5041 16.4867 18.5293 16.5504C18.5545 16.614 18.5966 16.6695 18.651 16.711L19.908 17.945V18.216H13.586V17.945L14.886 16.681C15.014 16.553 15.014 16.515 15.014 16.32V8.99098L11.393 18.191H10.904L6.691 8.99098V15.154C6.67366 15.2818 6.68562 15.4118 6.72599 15.5343C6.76636 15.6568 6.83407 15.7685 6.924 15.861L8.618 17.915V18.186H3.818V17.915L5.509 15.861C5.5982 15.7685 5.6644 15.6563 5.70227 15.5335C5.74014 15.4107 5.74861 15.2807 5.727 15.154V8.02798C5.73727 7.93061 5.72452 7.83219 5.68978 7.74065C5.65504 7.64911 5.59929 7.56701 5.527 7.50098L4.019 5.68698V5.41598H8.693L12.306 13.34L15.482 5.41598H19.938V5.68698Z',
  ],
  [
    'twitter',
    'M24 4.60078C23.1 5.00078 22.2 5.30078 21.2 5.40078C22.2 4.80078 23 3.80078 23.4 2.70078C22.4 3.30078 21.4 3.70078 20.3 3.90078C19.4 2.90078 18.1 2.30078 16.7 2.30078C14 2.30078 11.8 4.50078 11.8 7.20078C11.8 7.60078 11.8 8.00078 11.9 8.30078C7.7 8.10078 4.1 6.10078 1.7 3.10078C1.2 3.90078 1 4.70078 1 5.60078C1 7.30078 1.9 8.80078 3.2 9.70078C2.4 9.70078 1.6 9.50078 1 9.10078C1 9.10078 1 9.10078 1 9.20078C1 11.6008 2.7 13.6008 4.9 14.0008C4.5 14.1008 4.1 14.2008 3.6 14.2008C3.3 14.2008 3 14.2008 2.7 14.1008C3.3 16.1008 5.1 17.5008 7.3 17.5008C5.6 18.8008 3.5 19.6008 1.2 19.6008C0.8 19.6008 0.4 19.6008 0 19.5008C2.2 20.9008 4.8 21.7008 7.5 21.7008C16.6 21.7008 21.5 14.2008 21.5 7.70078C21.5 7.50078 21.5 7.30078 21.5 7.10078C22.5 6.40078 23.3 5.50078 24 4.60078Z',
  ],
  [
    't.me',
    'M23.953 2.52809C23.9336 2.43947 23.8911 2.35756 23.8298 2.29065C23.7685 2.22375 23.6906 2.17422 23.604 2.14709C23.2887 2.08464 22.9624 2.10777 22.659 2.21409C22.659 2.21409 1.63003 9.77309 0.429029 10.6101C0.171029 10.7901 0.0840289 10.8951 0.0410289 11.0181C-0.166971 11.6181 0.480029 11.8761 0.480029 11.8761L5.90003 13.6421C5.99167 13.6585 6.08591 13.653 6.17503 13.6261C7.40703 12.8471 18.575 5.79209 19.224 5.55509C19.324 5.52509 19.401 5.55509 19.381 5.63009C19.123 6.53509 9.47203 15.1081 9.41903 15.1601C9.39321 15.1812 9.3731 15.2085 9.36052 15.2394C9.34795 15.2703 9.34331 15.3039 9.34703 15.3371L8.84103 20.6291C8.84103 20.6291 8.62903 22.2761 10.276 20.6291C11.444 19.4601 12.565 18.4921 13.125 18.0211C14.989 19.3081 16.994 20.7311 17.859 21.4761C18.0045 21.6169 18.1769 21.727 18.3659 21.7997C18.5549 21.8723 18.7567 21.9062 18.959 21.8991C19.2082 21.8687 19.4423 21.7632 19.63 21.5965C19.8178 21.4298 19.9503 21.2099 20.01 20.9661C20.01 20.9661 23.84 5.54309 23.968 3.47709C23.981 3.27709 23.998 3.14509 24 3.00609C24.0063 2.84536 23.9904 2.68453 23.953 2.52809Z',
  ],
]

export default {
  components: {
    LogoEmerisWordmark,
  },
  data() {
    return {
      links: [
        { title: 'Medium', url: 'https://medium.com/emeris-blog' },
        { title: 'Twitter', url: 'https://twitter.com/emerisHQ' },
        { title: 'Telegram', url: 'https://t.me/EmerisHQ' },
      ],
    }
  },
  methods: {
    url(link) {
      return link.url || link
    },
    icon(link) {
      let iconPath
      const url = link.url || link
      iconList.forEach((icon) => {
        if (link.icon && link.icon.match(icon[0])) {
          iconPath = icon[1]
        } else if (url.match(icon[0])) {
          iconPath = icon[1]
        }
      })
      return iconPath
    },
  },
}
</script>

<style lang="stylus" scoped>
.footer
  position relative
  z-index 10
  padding-top var(--spacing-7)
  padding-bottom var(--spacing-9)
  background-color var(--bg)
  @media $breakpoint-xl
    padding-top var(--spacing-8)
    padding-bottom var(--spacing-8)

.social-icons
  display grid
  grid-template-columns repeat(3, 1fr)
  gap 1rem
  text-align center

  &__item
    position relative
    opacity 0.75
    font-size 0
    &:before
      content ''
      position absolute
      width 2.5rem
      height 2.5rem
      top 50%
      left 50%
      transform translate(-50%, -50%)

    &:hover
    &:focus
      opacity 1

.logo
  display flex
  align-items center
  gap var(--spacing-4)
  margin-bottom var(--spacing-5)
  color inherit
  transition transform .4s $ease-out, opacity .4s $ease-out, color .4s $ease-out, visibility .4s 0s
  @media $breakpoint-medium
    justify-content center
    width 100%
    margin-bottom var(--spacing-8)
  @media $breakpoint-large
    width auto
    margin-bottom 0

  svg
    width auto

  &__emeris
    height 1rem

.divider
  margin 0 var(--spacing-6)
  border-right 1px solid var(--white-100)

@media $breakpoint-xsmall-only
  .row
    flex-direction row

  .nav-bottom
    display flex
    flex-direction column
    align-items center

  .link-item + .link-item
    margin-left 0

  .link-item
    margin-top var(--spacing-7)

    &:first-child
      margin-top 0

  .scrolltop
    margin-top var(--spacing-10)

  .smallprint
    text-align center

@media $breakpoint-small
  .row
    display flex
    flex-direction column
    align-items center
    justify-content space-between

  .nav-bottom
    display flex
    flex-direction column

  .link-item + .link-item
    margin-left 0

  .link-item
    margin-top var(--spacing-6)
    text-align center

    &:first-child
      margin-top 0

  .scrolltop
    margin-top var(--spacing-6)
    text-align center

  .smallprint
    text-align center

@media $breakpoint-medium
  .link-item
  .scrolltop
    margin-top 0

  .nav-bottom
    flex-direction row
    justify-content center
    flex-wrap wrap
    text-align center

  .link-item + .link-item
    margin-left var(--spacing-6)

@media $breakpoint-large
  .social-icons
    margin-top 0

  .row
    flex-direction row

  .smallprint
    text-align left
</style>
