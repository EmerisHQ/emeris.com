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
      :stroke="color"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7.5 1.5H14.5V8.5"
      :stroke="color"
      stroke-miterlimit="10"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#212121',
    },
  },
}
</script>
