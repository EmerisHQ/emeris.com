<template>
  <div>
    <tm-modal
      v-bind="{
        visible,
        side: 'center',
      }"
    >
      <div class="tm-wrapper tm-container container">
        <div class="youtube">
          <youtube
            ref="youtube"
            class="iframe"
            width="100%"
            height="100%"
            :video-id="videoId"
            :player-vars="playerVars"
          />
        </div>

        <div>
          <tm-button
            variant="text"
            background="regular"
            size="s"
            @click.native="closeModal(player)"
            @keydown.enter="closeModal(player)"
          >
            <icon-close />
          </tm-button>
        </div>
      </div>
    </tm-modal>
  </div>
</template>

<script>
import IconClose from '~/components/icons/IconClose.vue'

export default {
  components: {
    IconClose,
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    closeModal: {
      type: Function,
      default: () => {},
    },
  },
  data() {
    return {
      videoId: '6bq-JaViGRM',
      playerVars: {
        rel: 0,
        enablejsapi: 1,
      },
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    },
  },
  methods: {},
}
</script>

<style lang="stylus" scoped>
.container
  display flex
  flex-direction: column
  justify-content: space-between
  height 100%
  padding-block: var(--spacing-9)
  padding-inline: 0
  text-align center
  @media $breakpoint-xl
    padding-inline: var(--wrap-gap)
  &:before
    content: ''
</style>

<style lang="stylus">
.youtube
  position relative
  width 100%
  height 0
  padding-bottom 64%
  @media $breakpoint-xl
    padding-bottom 56.25%
  &:before
    content: ''
    position absolute
    top 50%
    left 50%
    height .35rem
    width 10rem
    background: linear-gradient(270deg, hsla(0,0%,100%,0.2), hsla(0,0%,100%,.7))
    background-size: 200% 200%
    animation: gradient 3s ease infinite
    border-radius: 6px
    transform: translate(-50%, -50%)
  .iframe
    position absolute
    top 0
    left 0
    right 0
    bottom 0

@keyframes gradient
  0%,100%
    background-position 0 50%
  50%
    background-position 100% 50%
</style>
