<template>
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    class="spinner"
  >
    <path
      d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23"
      stroke="url(#paint0_linear-179875)"
      stroke-width="1.5"
    />
    <path
      d="M23 12C23 5.92487 18.0751 1 12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23"
      stroke="url(#paint1_radial-593150)"
      stroke-width="1.5"
    />
    <defs>
      <linearGradient
        id="paint0_linear-179875"
        x1="1"
        y1="2.78933"
        x2="8.80464"
        y2="18.3113"
        gradientUnits="userSpaceOnUse"
      >
        <stop stop-color="#64DAFB" />
        <stop offset="0.421875" stop-color="#30FFDF" />
        <stop offset="0.838542" stop-color="#B0FF94" />
      </linearGradient>
      <radialGradient
        id="paint1_radial-593150"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(20.9048 23) rotate(-120.763) scale(19.9699 31.7537)"
      >
        <stop offset="0.259489" stop-color="#FFFD38" />
        <stop offset="1" stop-color="#9EFFB9" stop-opacity="0" />
      </radialGradient>
    </defs>
  </svg>
</template>

<style lang="stylus" scoped>
@keyframes spin
  0%
    transform rotate(0deg)
  100%
    transform rotate(360deg)

.spinner
  animation spin .8s linear infinite
</style>
