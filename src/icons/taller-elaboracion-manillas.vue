<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 127 127"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M122.03 22.1899H58.4873V67.5728H122.03V22.1899Z"
      stroke="currentColor"
      stroke-width="8.06"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M90.2695 22.1899V67.5728"
      stroke="currentColor"
      stroke-width="8.06"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M76.6475 4.03027L90.259 22.1789L103.87 4.03027"
      stroke="currentColor"
      stroke-width="8.06"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.03027 99.333L26.2095 117.819C29.4744 120.533 33.5838 122.03 37.8282 122.03H96.3047C100.482 122.03 103.87 118.641 103.87 114.464C103.87 106.111 97.0928 99.333 88.739 99.333H48.0847"
      stroke="currentColor"
      stroke-width="8.06"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.2645 90.2591L38.0759 97.0704C41.8362 100.831 47.927 100.831 51.6874 97.0704C55.4477 93.3101 55.4477 87.2193 51.6874 83.4589L41.1157 72.8872C37.7156 69.4872 33.0884 67.5732 28.281 67.5732H4.03027"
      stroke="currentColor"
      stroke-width="8.06"
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
  width: 127,
  height: 127,
})
</script>
