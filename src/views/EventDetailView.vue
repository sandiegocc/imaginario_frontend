<template>
  <div v-if="event" class="min-h-screen bg-[#3068B1] flex flex-col pintura-bg">
    <div class="flex items-center justify-between gap-4 mx-6 mt-4 shrink-0">
      <router-link class="w-[40%]" to="/" replace>
        <img src="@/assets/imaginario-logo-2.svg" alt="Imaginario Logo 2" />
      </router-link>
      <img class="w-[40%]" src="@/assets/logo-sandiego-blanco.svg" alt="Sandiego Logo" />
    </div>

    <div class="flex-1 flex flex-col items-center justify-center px-4 py-8">
      <div class="flex flex-col items-center gap-6 uppercase w-full max-w-md">
        <img src="@/assets/pintura.svg" alt="Icono" class="w-32" />

        <div class="text-white text-center font-extrabold text-4xl leading-tight">
          {{ event.title }}
        </div>

        <div class="text-center text-white font-bold whitespace-pre-line normal-case">
          {{ event.description }}
        </div>

        <div class="flex flex-col gap-4 p-6 bg-white rounded-2xl w-full shadow-2xl">
          <div
            v-if="loginError"
            class="bg-red-50 border-l-4 border-red-400 p-4 text-red-700 text-sm"
          >
            {{ loginError }}
          </div>

          <Form @submit="onSubmit" v-slot="{ errors }" class="space-y-6">
            <div>
              <div class="mt-1 relative">
                <Field
                  id="keyword"
                  name="keyword"
                  type="text"
                  rules="required"
                  class="appearance-none text-center block w-full px-4 py-3 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 text-lg"
                  :class="{
                    'border-red-300': errors.keyword,
                    'border-gray-300': !errors.keyword,
                  }"
                  placeholder="Ingresa la palabra mágica"
                />
              </div>
              <ErrorMessage name="keyword" class="mt-1 text-xs text-red-600" />
            </div>

            <div>
              <button
                type="submit"
                :disabled="isLoading"
                class="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white bg-[#E63916] hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span v-if="isLoading">Cargando...</span>
                <span v-else>¡ENVIAR!</span>
              </button>
            </div>
          </Form>
        </div>
      </div>
    </div>
  </div>

  <div
    v-else
    class="min-h-screen bg-[#3068B1] flex flex-col items-center justify-center text-white px-10 text-center"
  >
    <h2 class="text-2xl font-bold mb-4">¡Ups!</h2>
    <p>El evento que buscas no existe o ha expirado.</p>
    <router-link to="/" class="mt-6 underline">Volver al inicio</router-link>
  </div>
</template>

<script lang="ts" setup>
import { ErrorMessage, Field, Form } from 'vee-validate'
import { ref } from 'vue'
import { useRouter, useRoute } from 'vue-router' // Importar useRoute
import api from '@/api/axios.ts'
import { events } from '@/data/events' // Asegúrate de que la ruta a tu archivo sea correcta

const loginError = ref<string | null>(null)
const isLoading = ref(false)
const router = useRouter()
const route = useRoute()

// Obtenemos el ID de la URL
const eventId = route.params.id

// Buscamos el evento
const event = events.find((e) => e.url === eventId)

const onSubmit = async (values: any) => {
  loginError.value = null
  isLoading.value = true

  try {
    const request = {
      method: 'PATCH',
      url: '/imaginario/register-event',
      data: {
        keyword: values.keyword,
        event_id: eventId, // Tip: suele ser útil enviar el ID del evento también
      },
    }

    const response = await api(request)
    await router.replace('/events/success')
  } catch (error: any) {
    if (error.response?.status === 404) {
      loginError.value = error.response.data.message
    } else {
      loginError.value = 'Hubo un error de conexión.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>
