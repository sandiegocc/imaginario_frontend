<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 150 150"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M65.3801 128.57C49.0601 145 21.3301 150.44 5.33008 134.01C26.6601 111.93 5.33008 101.27 21.3301 85.2701C24.1401 82.1401 27.5601 79.6201 31.3701 77.8501C35.1901 76.0901 39.3201 75.1201 43.5301 75.0101C47.7301 74.9001 51.9201 75.6501 55.8201 77.2101C59.7301 78.7701 63.2701 81.1101 66.2401 84.0901C69.2101 87.0701 71.5401 90.6201 73.0901 94.5301C74.6401 98.4401 75.3801 102.62 75.2601 106.83C75.1401 111.03 74.1601 115.17 72.3901 118.98C70.6201 122.79 68.0901 126.2 64.9501 129.01L65.3801 128.58V128.57Z"
      stroke="currentColor"
      stroke-width="10.67"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M50.0801 75.5099L106.66 12.4099C114.7 3.36992 129.22 2.91992 137.8 11.4499C146.33 20.0299 145.88 34.5499 136.84 42.5899L74.3701 98.5299"
      stroke="currentColor"
      stroke-width="10.67"
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
  width: 150,
  height: 150,
})
</script>
