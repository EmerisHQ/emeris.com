<template>
  <div>
    <tm-modal
      v-bind="{
        visible,
        side: 'center',
      }"
    >
      <div class="container">
        <youtube
          ref="youtube"
          width="100%"
          height="100%"
          :video-id="videoId"
          :player-vars="playerVars"
        />

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
  text-align center
  &:before
    content: ''
</style>
