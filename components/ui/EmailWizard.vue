<template>
  <div class="wizard">
    <transition-group name="fade" mode="out-in">
      <div v-show="step === 0" ref="step0" key="step0">
        <label
          class="
            wizard__get-notified
            tm-rf0 tm-lh-copy tm-bold tm-measure-narrow
          "
          for="field-email"
          @click="actionGoForwards"
        >
          <icon-bell-24 class="icon" />
          <span class="tm-rf0 tm-lh-title">Email me at launch</span>
        </label>
      </div>
      <div v-show="step === 1" ref="step1" key="step1">
        <div class="form-wrapper__action">
          <form
            :action="url"
            method="POST"
            target="_blank"
            rel="noreferrer noopener"
            class="wizard__form"
            @submit.prevent="actionSubmitEmail"
          >
            <fieldset class="wizard__form__fieldset">
              <input
                id="field-email"
                v-model="email"
                name="fields[email]"
                class="wizard__form__fieldset__input tm-rf0 tm-lh-copy"
                type="email"
                placeholder="Your email address"
                required="required"
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
                <icon-arrow-right-24 />
              </tm-button>
            </fieldset>
          </form>
          <p
            class="wizard__footnote tm-rf-1 tm-lh-copy tm-text-center tm-muted"
          >
            You will receive email updates about Emeris. Unsubscribe at any
            time.
            <a href="https://cosmos.network/privacy"
              >Privacy policy<span class="icon__right">&#8599;</span></a
            >
          </p>
        </div>
      </div>
      <div
        v-show="step === 2"
        ref="step2"
        key="step2"
        class="wizard__state tm-rf0 tm-lh-copy"
      >
        <div class="form-wrapper__success">
          <img
            class="surfer-graphics"
            src="~/assets/images/elements/surfer-flying.png"
            alt=""
          />
          <div class="wizard__title tm-rf0 tm-lh-copy tm-bold">
            Almost there
          </div>
          <p
            class="
              wizard__state__success
              tm-rf-1 tm-lh-title tm-muted
              mt-5
              mb-3
            "
          >
            Check your inbox (or spam folder) and confirm your email address to
            receive Emeris updates.
          </p>
          <tm-button variant="text" class="btn mt-7" @click.native="actionReset"
            >Ok</tm-button
          >
        </div>
      </div>
      <div
        v-show="step === 3"
        ref="step3"
        key="step3"
        class="wizard__state tm-rf0 tm-lh-copy"
      >
        <div class="wizard__title">Something went wrong</div>
        <div class="wizard__state__error">
          Uh oh! Refresh the page and try again.
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
import querystring from 'querystring'
import IconArrowRight24 from '~/components/icons/IconArrowRight24.vue'
import IconBell24 from '~/components/icons/IconBell24.vue'

export default {
  components: {
    IconArrowRight24,
    IconBell24,
  },
  data() {
    return {
      step: 0,
      email: null,
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
      fetch(this.url, options)
        .then(() => {
          this.step = 2
        })
        .catch(() => {
          this.step = 3
        })
    },
    actionGoForwards() {
      this.transition = 'forwards'
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
  },
}
</script>

<style lang="stylus" scoped>
// Global
.icon__right
  margin-left 0.25em

// Transition
.fade-enter-active
  transition all .4s ease-out

.fade-leave-active
  transition all .2s ease-out

.fade-enter
  opacity 0
  transform translateY(1rem)

.fade-enter-to
  opacity 1
  transform translateY(0)

.fade-leave
  opacity 1
  transform scale(1)

.fade-leave-to
  opacity 0
  transform scale(.96)

// Graphics
.surfer-graphics
  width 70%

// Form
.form-wrapper__action
  background var(--gray-100)
  padding var(--spacing-4)
  border none
  border-radius $border-radius-3
  box-shadow 8px 16px 48px rgba(0, 0, 0, 0.21)
  backdrop-filter blur(4.5rem)

.form-wrapper__success
  text-align center
  max-width 17.5rem
  background var(--gray-100)
  padding var(--spacing-6)
  border none
  border-radius $border-radius-3
  box-shadow 8px 16px 48px rgba(0, 0, 0, 0.21)
  backdrop-filter blur(4.5rem)

.wizard
  &__get-notified
    display flex
    align-items center
    cursor pointer
    gap var(--spacing-3)
    outline none
    width 100%
    height auto
    background var(--gray-100)
    border none
    border-radius $border-radius-3
    box-shadow 8px 16px 48px rgba(0, 0, 0, 0.21)
    backdrop-filter blur(4.5rem)
    padding var(--spacing-4) var(--spacing-5)
    color var(--white)
    transition color 0.15s ease-out, background 0.15s ease-out
  &__form
    margin-bottom var(--spacing-4)
    max-width: $max-width['7']
    width 100%
    &__fieldset
      display block
      &__input
        outline none
        width 100%
        height auto
        background transparent
        border none
        border-radius $border-radius-3
        padding var(--spacing-4) var(--spacing-5)
        color var(--white)
        transition color 0.15s ease-out, background 0.15s ease-out
        &::placeholder
          color var(--gray-600)
          transition color 0.15s ease-out
        &:hover
          background transparent
          &:not(:focus)::placeholder
            color var(--gray-800)
        &:focus
          background var(--white-200)

.btn
  margin-top var(--spacing-3)
  width 100%

@media $breakpoint-small
  .wizard__form__fieldset
    align-items center
    display grid
    grid-auto-flow column
    grid-template-columns 1fr min-content
    gap var(--spacing-3)

  .btn
    margin-top 0
</style>
