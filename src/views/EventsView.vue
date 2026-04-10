<template>
  <div class="min-h-screen">
    <!-- Header -->
    <div class="flex items-center justify-between gap-4 mx-6 mt-4">
      <img class="w-[40%]" src="@/assets/Imaginario-negro.svg" alt="Imaginario Logo 2" />
      <img class="w-[40%]" src="@/assets/logo-sandiego-negro.svg" alt="Sandiego Logo" />
    </div>

    <!-- Barra de progreso -->
    <router-link to="/ranking">
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
              <span class="font-bold text-3xl">{{ authStore?.user?.events.length || 0 }}</span>
              <p>Estrellitas</p>
            </div>
            <img class="w-[20%]" src="@/assets/estrella-amarilla.svg" alt="Estella" />
          </div>
        </div>
      </div>
    </router-link>

    <!-- Title -->
    <div class="flex items-center justify-between gap-4 mx-6 mt-4 mb-8">
      <h1 class="font-bold text-3xl text-black uppercase leading-0 my-4">Elige un taller</h1>
    </div>
    <!-- Parte dinamíca -->

    <div class="grid grid-cols-2 gap-4 mx-6">
      <router-link
        :to="`/events/${event.url}`"
        v-for="event in events"
        :key="event.title"
        href="/"
        :class="[`bg-${event.cardColor}`]"
        class="rounded-lg p-4 font-bold flex flex-col items-center gap-2 shadow-lg justify-center"
      >
        <Component :is="event.icon" :color="`text-${event.cardColor}-oscuro`" :width="60" />

        <span class="text-center leading-none tracking-tight">{{ event.title }}</span>

        <div class="w-[50%] h-1 rounded my-2 bg-white/50"></div>

        <span class="text-center leading-none tracking-tight">{{ event.date }}</span>
      </router-link>
    </div>
  </div>

  <div class="flex items-center justify-center my-4">
    <button class="bg-black text-white px-4 py-2 rounded" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth.ts'
const router = useRouter()
import { useRouter } from 'vue-router'
import { onMounted } from 'vue'
import { events } from '@/data/events.ts'
import api from '@/api/axios.ts'

const authStore = useAuthStore()

const logout = () => {
  authStore.logout()
  router.replace('/login')
}

onMounted(async () => {
  const request = {
    method: 'GET',
    url: '/imaginario/user',
  }

  const response = await api(request)

  authStore.user = response.data.user
})
</script>
