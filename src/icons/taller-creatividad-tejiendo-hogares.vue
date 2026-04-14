<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 123 123"
    fill="none"
    xmlns="http://www.w3.org/2000/vue"
    :class="[`${color}`]"
  >
    <path
      d="M120.141 60.5889C120.141 59.3381 119.887 58.0873 119.399 56.9213C118.891 55.7553 118.17 54.7165 117.237 53.8685L61.1414 2.14014L5.04578 53.8685C4.11297 54.7165 3.39217 55.7553 2.88337 56.9213C2.37456 58.0873 2.12016 59.3169 2.14136 60.5889V111.045C2.14136 113.462 3.09537 115.752 4.79138 117.469C6.48739 119.165 8.79821 120.119 11.215 120.119H111.046C113.463 120.119 115.753 119.165 117.47 117.469C119.166 115.773 120.12 113.462 120.12 111.045V60.5889H120.141Z"
      stroke="currentColor"
      stroke-width="4.28"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M61.1416 120.14V83.8457"
      stroke="currentColor"
      stroke-width="4.28"
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
