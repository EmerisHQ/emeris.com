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
  beforeDestroy() {
    ScrollTrigger.kill()
  },
  mounted() {
    gsap.registerPlugin(ScrollTrigger)

    // DOM & config
    const canvas = this.$refs.canvas
    const size = canvas.getBoundingClientRect()
    const context = canvas.getContext('2d')

    // Variables
    const images = []
    const animation = {
      frame: 0,
    }
    canvas.width = size.width
    canvas.height = size.height

    // load all images and save them in array (avoid img source modification)
    const currentFrame = (index) =>
      require(`~/assets${this.src + index.toString()}.${this.ext}`)

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
          images.push({ img, size })
        }
      },
    })

    // scroll animation
    this.$nextTick(() => {
      gsap.to(animation, {
        frame: this.frameCount - 1,
        snap: 'frame',
        ease: 'none',
        scrollTrigger: {
          scrub: true,
          trigger: canvas,
          start: 'top bottom',
          end: 'bottom top',
          anticipatePin: 1,
        },
        onUpdate: render,
      })
    })

    // Render right image in the canvas
    function render() {
      context.clearRect(0, 0, canvas.width, canvas.height)
      context.drawImage(
        images[animation.frame].img,
        0,
        0,
        images[animation.frame].size.width,
        images[animation.frame].size.height,
        0,
        0,
        canvas.width,
        canvas.height
      )
    }
  },
}
</script>

<style lang="stylus" scoped>
.tm-sprite-canvas
  height 100%
  width 100%
</style>
