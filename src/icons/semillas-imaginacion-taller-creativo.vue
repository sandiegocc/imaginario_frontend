<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 108 126"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M94.5084 48.0392C112.657 73.6019 98.7772 102.884 92.062 114.305C91.0759 115.903 89.7528 117.263 88.1801 118.299C86.6074 119.335 84.835 120.009 82.9752 120.284C69.8194 122.555 37.0423 125.089 19.4429 99.5266C2.10574 75.4118 2.82969 32.9862 4.36495 12.7657C4.42735 11.2554 4.83925 9.79502 5.58816 8.47195C6.32459 7.16136 7.37306 6.038 8.63372 5.2142C9.89438 4.37792 11.3298 3.86617 12.8276 3.69143C14.3254 3.52916 15.8482 3.71639 17.2586 4.24062C36.7677 9.85743 77.4333 23.9119 94.5084 48.0267V48.0392Z"
      stroke="currentColor"
      stroke-width="7.27"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M33.3232 39.6016C54.1179 64.0659 72.3663 90.5896 87.7813 118.736"
      stroke="currentColor"
      stroke-width="7.27"
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
  width: 108,
  height: 126,
})
</script>
