<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 89 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M76.0703 3.45996H12.5379C7.52666 3.45996 3.45996 7.52666 3.45996 12.5379V112.382C3.45996 117.393 7.52666 121.46 12.5379 121.46H76.0834C81.0946 121.46 85.1613 117.393 85.1613 112.382V12.5379C85.1613 7.52666 81.0946 3.45996 76.0834 3.45996H76.0703Z"
      stroke="currentColor"
      stroke-width="6.92"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M39.7715 98.7651H48.8494"
      stroke="currentColor"
      stroke-width="6.92"
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
  width: 89,
  height: 125,
})
</script>
