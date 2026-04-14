<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 118 127"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M4.12988 49.5103V76.7385"
      stroke="currentColor"
      stroke-width="8.26"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M31.3584 26.8198V99.4284"
      stroke="currentColor"
      stroke-width="8.26"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M58.5859 4.12988V122.13"
      stroke="currentColor"
      stroke-width="8.26"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M85.8145 26.8198V99.4284"
      stroke="currentColor"
      stroke-width="8.26"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M113.054 49.5103V76.7385"
      stroke="currentColor"
      stroke-width="8.26"
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
  width: 118,
  height: 127,
})
</script>
