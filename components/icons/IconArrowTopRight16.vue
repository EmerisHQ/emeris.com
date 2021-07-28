<template>
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.5 1.5L1.5 14.5"
      :stroke="gradient ? 'url(#paint0_linear-781982)' : color"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 1.5H14.5V8.5"
      :stroke="gradient ? 'url(#paint1_linear-121239)' : color"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />

    <defs>
      <linearGradient
        id="paint0_linear-781982"
        x1="5.4"
        y1="1.5"
        x2="11.6111"
        y2="14.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#64DAFB" />
        <stop offset="0.291667" stop-color="#30FFDF" />
        <stop offset="0.71875" stop-color="#FFFD38" />
      </linearGradient>
      <linearGradient
        id="paint1_linear-121239"
        x1="9.6"
        y1="1.5"
        x2="12.9444"
        y2="8.5"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#64DAFB" />
        <stop offset="0.291667" stop-color="#30FFDF" />
        <stop offset="0.71875" stop-color="#FFFD38" />
      </linearGradient>
    </defs>
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#212121',
    },
    gradient: {
      type: Boolean,
      default: false,
    },
  },
}
</script>
