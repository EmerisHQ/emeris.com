<template>
  <div class="wizard">
    <div class="wizard-border">
      <div class="wizard__inner" :class="[variant, step !== 0 && '_light']">
        <transition-group :name="transition">
          <div
            ref="step0"
            key="step0"
            class="wizard__step wizard__step0"
            :class="[variant, step === 0 ? 'visible' : 'invisible']"
          >
            <label
              class="
                wizard__get-notified
                tm-rf0 tm-lh-copy tm-bold tm-measure-narrow
              "
              :for="`field-email-${_uid}`"
              @click="actionGoForwards"
            >
              <icon-bell-24 class="icon" />
              <span
                class="
                  tm-rf0 tm-lh-title
                  text-with-gradient
                  tm-medium tm-text-left
                "
              >
                <slot>Get email updates</slot>
              </span>
              <!-- <icon-arrow-right-24 class="icon" /> -->
            </label>
          </div>
          <div
            ref="step1"
            key="step1"
            class="wizard__step wizard__step1"
            :class="[step === 1 ? 'visible' : 'invisible']"
          >
            <div class="form-wrapper__action">
              <form
                id="signUp"
                :action="url"
                method="POST"
                target="_blank"
                rel="noreferrer noopener"
                class="wizard__form"
                @submit.prevent="actionSubmitEmail"
              >
                <fieldset class="wizard__form__fieldset">
                  <input
                    :id="`field-email-${_uid}`"
                    ref="input"
                    v-model="email"
                    :name="`fields[email]`"
                    class="wizard__form__fieldset__input tm-rf0 tm-lh-copy"
                    type="email"
                    placeholder="Your email address"
                    required="required"
                    @keyup="onKeyDown"
                    @blur="onClickOutside"
                  />
                  <tm-button
                    variant="text"
                    background-color="#890FA8"
                    color="var(--title)"
                    class="btn"
                    :disabled="emailInvalid"
                    @click="actionSubmitEmail"
                  >
                    <span class="sr-only">Sign up</span>
                    <icon-arrow-right-24
                      v-show="!loading"
                      class="icon-arrow-right"
                    />
                    <icon-spinner-24 v-show="loading" />
                  </tm-button>
                </fieldset>
              </form>
              <p
                class="
                  wizard__footnote
                  tm-rf-1 tm-lh-copy tm-text-center tm-muted
                "
              >
                You will receive email updates about Emeris.<br />Unsubscribe
                anytime.
                <a href="/privacy">Privacy policy</a>
                <span v-if="hasError" class="wizard__error">
                  Please enter a valid email address
                </span>
              </p>
            </div>
          </div>
          <div
            ref="step2"
            key="step2"
            class="wizard__step wizard__state tm-rf0 tm-lh-copy"
            :class="[step === 2 ? 'visible' : 'invisible']"
          >
            <div id="signUpSuccess" class="form-wrapper__success">
              <img
                class="surfer-graphics"
                src="~/assets/images/elements/surfer-flying.png"
                alt=""
                loading="lazy"
              />
              <div class="wizard__title tm-rf1 tm-bold tm-lh-title tm-serif">
                Almost there
              </div>
              <p
                class="
                  wizard__state__success
                  tm-rf-1 tm-lh-copy tm-muted
                  mt-4
                  mb-3
                "
              >
                Check your inbox (or spam folder) and confirm your email address
                to receive Emeris updates.
              </p>
              <tm-button
                variant="text"
                class="btn mt-3"
                color="var(--secondary)"
                @click.native="actionReset"
                >OK</tm-button
              >
            </div>
          </div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import querystring from 'querystring'
// import { mixin as clickaway } from 'vue-clickaway'
import TmButton from './TmButton.vue'
import IconArrowRight24 from '~/components/icons/IconArrowRight24.vue'
import IconSpinner24 from '~/components/icons/IconSpinner24.vue'
import IconBell24 from '~/components/icons/IconBell24.vue'

export default {
  components: {
    IconArrowRight24,
    IconSpinner24,
    IconBell24,
    TmButton,
  },
  //   mixins: [clickaway],
  props: {
    /** 'sans' -> remove background */
    variant: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      step: 0,
      loading: false,
      transition: 'forwards',
      email: null,
      hasError: false,
      url: 'https://app.mailerlite.com/webforms/submit/l9a9o3',
      formData: {
        callback: 'jQuery183034734364421503394_1625597605102',
        'ml-submit': '1',
        anticsrf: 'true',
        ajax: '1',
        guid: '6ca22b31-4124-e926-cf4f-272ff9f44ec3',
        _: '1625597610551',
      },
    }
  },
  computed: {
    emailInvalid() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      return !re.test(String(this.email))
    },
  },
  methods: {
    actionSubmitEmail() {
      const options = {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: querystring.stringify({
          'fields[email]': this.email,
          ...this.formData,
        }),
      }
      this.loading = true
      fetch(this.url, options)
        .then(() => {
          this.step = 2
          this.loading = false
        })
        .catch(() => {
          this.step = 0
          this.loading = false
          this.email = null
        })
    },
    actionGoForwards() {
      this.transition = 'forwards'
      console.log(this.$refs.input)
      this.$refs.input.focus()
      this.step += 1
    },
    actionGoBackwards() {
      this.transition = 'backwards'
      this.step -= 1
    },
    actionReset() {
      this.transition = 'forwards'
      this.step = 0
    },
    onKeyDown(e) {
      this.hasError = false
      this.isEmail()
      if (e.keyCode === 27) {
        this.actionReset()
        e.preventDefault()
      }
    },
    onClickOutside() {
      !this.email && (this.step = 0)
    },
    isEmail() {
      const re =
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      this.hasError = !!this.email && !re.test(String(this.email))
    },
  },
}
</script>

<style lang="stylus" scoped>
// Graphics
.surfer-graphics
  width 70%

// Form
.form-wrapper__success
  text-align center
  padding var(--spacing-6)

.wizard
  @media $breakpoint-medium
    max-height 3rem
    max-width 20rem
    overflow visible
  &__inner
    min-height 3rem

  &__step
    overflow hidden
    border-radius $border-radius-3
    background #171717
    box-shadow 8px 16px 48px rgba(0, 0, 0, 0.21)

    &.sans
        background transparent
        box-shadow none
    &._light
      background #262626

  &__step0
    position relative //absolute
    top 0
    left 0
    right 0


  &__get-notified
    display flex
    align-items center
    justify-content center
    color var(--gray-100)
    cursor pointer
    gap var(--spacing-5)
    outline none
    width 100%
    margin auto
    height auto
    padding var(--spacing-4) var(--spacing-4)
    transition color 0.15s ease-out, background 0.15s ease-out
    border-radius $border-radius-3

    @media $breakpoint-medium
        justify-content space-between

    &:hover
      background-color var(--fg-trans)
    .icon
      flex-shrink 0
    span
      display inline-block
      @media $breakpoint-medium
        width 100%
  &__form
    max-width: $max-width['7']
    width 100%
  &__form__fieldset
    align-items center
    display grid
    grid-auto-flow column
    grid-template-columns 1fr min-content
    align-items stretch
  &__form__fieldset__input
    outline none
    width 100%
    height auto
    background transparent
    border none
    border-radius 0
    padding var(--spacing-4) var(--spacing-6)
    color inherit
    transition color 0.15s ease-out, background 0.15s ease-out
    &::placeholder
      color var(--inactive)
      transition color 0.15s ease-out
    &:hover
      background transparent
      &:not(:focus)::placeholder
        color var(--muted)
    &:-webkit-autofill
    &:-webkit-autofill:hover
    &:-webkit-autofill:focus
      -webkit-box-shadow 0 0 0 48px #262626 inset !important
      -webkit-text-fill-color var(--text) !important
      caret-color var(--text)
  &__footnote
    position relative
    padding var(--spacing-4)
    text-align center
    a
      color var(--secondary)
  &__error
    position absolute
    top 0
    bottom 0
    left 0
    right 0
    padding-top 0.6rem
    background-color #262626
    color #FF6072

  .btn
    padding-left var(--spacing-4)
    padding-right var(--spacing-4)

@-webkit-keyframes autofill
  to
    color inherit
    background transparent

.wizard-border
  position relative
  z-index 1
  border 1px solid transparent
  border-radius $border-radius-3
  &:after
    content ''
    z-index -1
    position absolute
    trbl -1px
    border-radius inherit

.text-with-gradient
  display block
  background var(--title-gradient)
  -webkit-background-clip text
  background-clip text
  -webkit-text-fill-color transparent
  text-fill-color transparent

.icon-arrow-right
  transform translateY(-1px)

.invisible
  opacity 0
  visibility hidden
  max-height 0

.visible
  opacity 1
  visibility visible
</style>
