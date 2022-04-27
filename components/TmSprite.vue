<template>
  <div ref="sprite">
    <canvas ref="canvas" class="tm-sprite-canvas"></canvas>
  </div>
</template>

<script>
import { gsap } from 'gsap/dist/gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

export default {
  inheritAttrs: false,
  props: {
    src: {
      type: String,
      required: true,
    },
    ext: {
      type: String,
      default: 'jpg',
    },
    frameCount: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      testtime: new Date(),
      animation: {},
      tween: null,
      canvas: null,
      context: null,
      images: [],
    }
  },
  beforeDestroy() {
    this.tween.kill()
    ScrollTrigger.getAll().forEach((t) => t.kill())
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    // DOM & config
    this.canvas = this.$refs.canvas
    const size = this.canvas.getBoundingClientRect()
    this.context = this.canvas.getContext('2d')

    // Variables

    this.animation = {
      frame: 0,
    }
    this.canvas.width = size.width
    this.canvas.height = size.height

    // load all images and save them in array (avoid img source modification)
    const currentFrame = (index) =>
      require(`~/assets${this.src + index.toString()}.${this.ext}`)
    this.$nextTick(() => {
      ScrollTrigger.create({
        trigger: this.$refs.sprite,
        start: '-2200px bottom',
        once: true,
        onEnter: () => {
          for (let i = 0; i < this.frameCount; i++) {
            const img = new Image()
            const size = {}
            img.src = currentFrame(i)
            img.onload = () => {
              size.width = img.width
              size.height = img.height
            }
            this.images.push({ img, size })
          }
        },
      })

      // scroll animation
      this.tween = gsap.to(this.animation, {
        frame: this.frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: true,
          trigger: this.canvas,
          start: 'top bottom',
          end: 'bottom top',
          anticipatePin: 1,
        },
        onUpdate: this.render,
      })
    })
  },
  methods: {
    render() {
      if (this.images.length > 0) {
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
        this.context.drawImage(
          this.images[this.animation.frame].img,
          0,
          0,
          this.images[this.animation.frame].size.width,
          this.images[this.animation.frame].size.height,
          0,
          0,
          this.canvas.width,
          this.canvas.height
        )
      }
    },
  },
}
</script>

<style lang="stylus" scoped>
.tm-sprite-canvas
  height 100%
  width 100%
</style>
