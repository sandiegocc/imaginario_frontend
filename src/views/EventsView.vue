<script setup lang="ts"></script>
<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="flex items-center justify-between gap-4 mx-6 mt-4">
      <img class="w-[40%]" src="@/assets/Imaginario-negro.svg" alt="Imaginario Logo 2" />
      <img class="w-[40%]" src="@/assets/logo-sandiego-negro.svg" alt="Sandiego Logo" />
    </div>
    <!-- Barra de progreso -->
    <div class="relative bg-blue-600 text-white m-6 rounded-2xl p-4 overflow-hidden shadow-xl">
      <img
        class="absolute inset-0 w-full h-full object-cover"
        src="@/assets/textura-progreso.svg"
        alt="Textura de fondo"
      />
      <div class="relative z-10">
        <p class="font-bold text-3xl uppercase">Tu progreso</p>
        <div class="flex justify-between">
          <div class="flex justify-start items-end gap-2">
            <span class="font-bold text-3xl">32</span>
            <p>Estrellas</p>
          </div>
          <img class="w-[20%]" src="@/assets/estrella-amarilla.svg" alt="Estella" />
        </div>
      </div>
    </div>

    <!-- Title -->
    <div class="flex items-center justify-between gap-4 mx-6 mt-4 mb-8">
      <h1 class="font-bold text-3xl text-black uppercase leading-0">Elige un taller</h1>
    </div>
    <!-- Parte dinamíca -->
    <div class="grid grid-cols-2 gap-4 mx-6">
      <a
        href="/"
        class="bg-green-200 rounded-lg p-4 font-bold flex flex-col items-center gap-2 shadow-lg"
      >
        <img class="w-[40%]" src="@/assets/robotica.svg" alt="" />
        <span class="text-center leading-none tracking-tight">Taller Robótica </span>
      </a>
      <a
        href="/"
        class="bg-yellow-200 rounded-lg p-4 font-bold flex flex-col items-center gap-2 shadow-lg"
      >
        <img class="w-[40%]" src="@/assets/robotica.svg" alt="" />
        <span class="text-center leading-none tracking-tight">Historias del futuro </span>
      </a>
      <a
        href="/"
        class="bg-pink-200 rounded-lg p-4 font-bold flex flex-col items-center gap-2 shadow-lg"
      >
        <img class="w-[40%]" src="@/assets/robotica.svg" alt="" />
        <span class="text-center leading-none tracking-tight">Fabrica de amigos imaginarios </span>
      </a>
      <a
        href="/"
        class="bg-green-400 rounded-lg p-4 font-bold flex flex-col items-center gap-2 shadow-lg"
      >
        <img class="w-[40%]" src="@/assets/robotica.svg" alt="" />
        <span class="text-center leading-none tracking-tight">Caricarutas en familia </span>
      </a>
    </div>
  </div>
</template>
