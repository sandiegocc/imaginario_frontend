<template>
  <svg
    :width="width"
    :height="height"
    viewBox="0 0 128 128"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :class="[`${color}`]"
  >
    <path
      d="M63.5249 4.52002V13.5962"
      stroke="currentColor"
      stroke-width="9.04"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M90.7534 13.5962L95.2915 9.05811"
      stroke="currentColor"
      stroke-width="9.04"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M36.2866 13.5962L31.7485 9.05811"
      stroke="currentColor"
      stroke-width="9.04"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M122.52 122.52H101.215C82.4406 122.52 66.7581 108.203 65.0513 89.4982L64.0071 78.0024C63.7059 74.6993 65.3425 71.5166 68.1938 69.8399C73.3745 66.7878 80.0008 69.8901 80.9948 75.8137L83.4847 90.7432"
      stroke="currentColor"
      stroke-width="9.04"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M122.52 90.7234H107.771C103.223 90.7234 99.3775 87.36 98.7751 82.842L93.0724 40.0415C92.0383 32.2505 82.9922 28.4554 76.7072 33.1742C74.1169 35.1119 72.5908 38.1641 72.5908 41.3969V68.023"
      stroke="currentColor"
      stroke-width="9.04"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.52002 122.52H25.8249C44.5997 122.52 60.2821 108.203 61.9889 89.4982L63.0331 78.0024C63.3343 74.6993 61.6978 71.5166 58.8464 69.8399C53.6658 66.7878 47.0394 69.8901 46.0454 75.8137L43.5555 90.7432"
      stroke="currentColor"
      stroke-width="9.04"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M4.52002 90.7136H19.2688C23.8169 90.7136 27.6622 87.3502 28.2646 82.8322L33.9673 40.0318C35.0014 32.2407 44.0374 28.4456 50.3325 33.1644C52.9228 35.1021 54.4489 38.1543 54.4489 41.3872V68.0132"
      stroke="currentColor"
      stroke-width="9.04"
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
  width: 128,
  height: 128,
})
</script>
