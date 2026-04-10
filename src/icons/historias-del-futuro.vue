<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 123 123"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M61.4297 118.47V72.4002C61.4297 69.4902 62.5897 66.7002 64.6397 64.6402C66.6997 62.5802 69.4897 61.4302 72.3997 61.4302C75.3097 61.4302 78.0997 62.5902 80.1597 64.6402C82.2197 66.6902 83.3697 69.4902 83.3697 72.4002V96.5302H100.92C105.57 96.5302 110.04 98.3802 113.33 101.67C116.62 104.96 118.47 109.43 118.47 114.08V118.47"
      stroke="currentColor"
      stroke-width="8.78"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.9098 27.1602C43.9698 15.1202 29.2998 7.13021 13.2498 4.46021C12.1598 4.31021 11.0498 4.38021 9.98975 4.69021C8.92975 5.00021 7.94975 5.53021 7.10975 6.24021C6.25975 6.97021 5.56975 7.88021 5.09975 8.90021C4.62975 9.92021 4.38975 11.0302 4.38975 12.1502V74.7202C4.37975 76.6402 5.07975 78.5002 6.35975 79.9302C7.63975 81.3702 9.39975 82.2802 11.3098 82.4902C23.8398 84.1902 35.6298 89.1502 45.5298 96.7702"
      stroke="currentColor"
      stroke-width="8.78"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M54.9199 51.4102V27.1602"
      stroke="currentColor"
      stroke-width="8.78"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M98.5199 82.51C100.43 82.3 102.19 81.39 103.47 79.95C104.75 78.51 105.45 76.66 105.44 74.74V12.16C105.44 11.04 105.2 9.93002 104.73 8.91002C104.26 7.89002 103.58 6.98002 102.72 6.25002C101.88 5.53002 100.9 5.00002 99.8399 4.70002C98.7799 4.39002 97.6699 4.31002 96.5799 4.47002C80.5299 7.13002 65.8599 15.13 54.9199 27.17"
      stroke="currentColor"
      stroke-width="8.78"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<script setup lang="ts">
interface Props {
  color?: string
  width?: string | number
  height?: string | number
}

withDefaults(defineProps<Props>(), {
  color: 'currentColor',
  width: 123,
  height: 123,
})
</script>
