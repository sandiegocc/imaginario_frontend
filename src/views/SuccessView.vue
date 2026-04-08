<script setup lang="ts"></script>
<template>
  <div class="min-h-screen bg-[#E40D1D] flex flex-col justify-center success-bg">
    <div class="flex flex-col items-center justify-center px-4">
      <img class="w-[60%]" src="@/assets/success-icon.svg" alt="Puntos para ti" />

      <p class="uppercase text-white font-bold text-3xl mt-2">+1 estrellita para ti</p>

      <router-link to="/events" replace>
        <button
          class="bg-[#f4b922] uppercase text-white font-bold text-xl px-8 py-1 rounded mt-4 cursor-pointer"
        >
          Continuar
        </button>
      </router-link>
    </div>
  </div>
</template>
