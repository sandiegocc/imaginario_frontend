<template>
  <div class="min-h-screen">
    <div class="flex items-center justify-between gap-4 mx-6 mt-4">
      <img class="w-[40%]" src="@/assets/Imaginario-negro.svg" alt="Imaginario Logo 2" />
      <img class="w-[40%]" src="@/assets/logo-sandiego-negro.svg" alt="Sandiego Logo" />
    </div>

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

    <div class="flex items-center justify-between gap-4 mx-6 mt-4 mb-8">
      <h1 class="font-bold text-3xl text-black uppercase leading-0 my-4">
        {{ filteredEvents.length > 0 ? 'Elige un taller' : 'No hay talleres disponibles' }}
      </h1>
    </div>

    <div class="grid grid-cols-2 gap-4 mx-6">
      <router-link
        :to="`/events/${event.url}`"
        v-for="event in filteredEvents"
        :key="event.url"
        :class="[`bg-${event.cardColor}`]"
        class="rounded-lg p-4 font-bold flex flex-col items-center gap-2 shadow-lg justify-center text-black"
      >
        <Component :is="event.icon" :color="`text-${event.cardColor}-oscuro`" :width="60" />
        <span class="text-center leading-none tracking-tight">{{ event.title }}</span>
        <div class="w-[50%] h-1 rounded my-2 bg-white/50"></div>
        <span class="text-center leading-none tracking-tight">{{ event.date }}</span>
        <span class="text-center leading-none tracking-tight text-red-500">{{
          authStore?.user?.email === 'aherron@sandiego.com.co' ? event.keyword : 'No'
        }}</span>
      </router-link>
    </div>

    <div class="flex items-center justify-center my-8">
      <button class="bg-black text-white px-4 py-2 rounded-xl" @click="logout">
        Cerrar sesión
      </button>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, computed } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth.ts'
import { events } from '@/data/events.ts'
import api from '@/api/axios.ts'

const router = useRouter()
const authStore = useAuthStore()

const filteredEvents = computed(() => {
  // 1. Obtenemos la fecha actual en la zona horaria de Colombia
  const nowInColombia = new Intl.DateTimeFormat('sv-SE', {
    timeZone: 'America/Bogota',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(new Date())

  return events
    .filter((event) => {
      return event.fullDate >= nowInColombia
    })
    .sort((a, b) => a.fullDate.localeCompare(b.fullDate))
})

const logout = () => {
  authStore.logout()
  router.replace('/register')
}

onMounted(async () => {
  try {
    const response = await api.get('/imaginario/user')
    authStore.user = response.data.user
  } catch (error) {
    console.error('Error al obtener usuario:', error)
  }
})
</script>
