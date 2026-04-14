<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 125 125"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M35.122 121.345C52.6734 121.345 66.8855 107.119 66.8855 89.5814C66.8855 72.0436 52.6598 57.8179 35.122 57.8179C17.5842 57.8179 3.34497 72.03 3.34497 89.5814C3.34497 107.133 17.5707 121.345 35.1085 121.345H35.122Z"
      stroke="currentColor"
      stroke-width="6.69"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.9274 57.8997L26.0409 3.34521H3.34497"
      stroke="currentColor"
      stroke-width="6.69"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M66.5188 94.1157H107.363L109.78 102.98L96.6534 54.8185C95.934 50.5427 93.7079 46.6605 90.3822 43.8778C87.0565 41.0951 82.835 39.6019 78.5048 39.6562H33.1265"
      stroke="currentColor"
      stroke-width="6.69"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M99.3821 71.4194H61.1709"
      stroke="currentColor"
      stroke-width="6.69"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M112.264 121.345C117.273 121.345 121.345 117.286 121.345 112.264C121.345 107.241 117.286 103.183 112.264 103.183C107.242 103.183 103.183 107.241 103.183 112.264C103.183 117.286 107.242 121.345 112.264 121.345Z"
      stroke="currentColor"
      stroke-width="6.69"
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
  width: 125,
  height: 125,
})
</script>
