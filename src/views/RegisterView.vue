<template>
  <div class="min-h-screen bg-[#3068B1] flex flex-col justify-center register-bg">
    <div class="flex flex-col items-center justify-center px-4">
      <img class="w-full" src="@/assets/hola-amiguito.svg" alt="Hola Amiguito" />
    </div>

    <div class="py-8 px-4 shadow rounded-4xl bg-white mx-4">
      <div
        v-if="loginError"
        class="mb-4 bg-red-50 border-l-4 border-red-400 p-4 text-red-700 text-sm"
      >
        {{ loginError }}
      </div>

      <Form @submit="onSubmit" v-slot="{ errors }" class="space-y-6">
        <div>
          <label for="documentId" class="block text-sm font-medium text-gray-700"
            >Nombre del papá / mamá
          </label>
          <div class="mt-1 relative">
            <Field
              id="documentId"
              name="documentId"
              type="text"
              rules="required|numeric|min:5"
              class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :class="{
                'border-red-300': errors.documentId,
                'border-gray-300': !errors.documentId,
              }"
              placeholder="Ej: María Rodriguez"
            />
          </div>
          <ErrorMessage name="documentId" class="mt-1 text-xs text-red-600" />
        </div>

        <div>
          <label for="documentId" class="block text-sm font-medium text-gray-700"
            >Nombre del niño
          </label>
          <div class="mt-1 relative">
            <Field
              id="documentId"
              name="documentId"
              type="text"
              rules="required|numeric|min:5"
              class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :class="{
                'border-red-300': errors.documentId,
                'border-gray-300': !errors.documentId,
              }"
              placeholder="Ej: Samuel"
            />
          </div>
          <ErrorMessage name="documentId" class="mt-1 text-xs text-red-600" />
        </div>

        <div>
          <label for="whatsapp" class="block text-sm font-medium text-gray-700"
            >Correo electrónico</label
          >
          <div class="mt-1 relative">
            <Field
              id="whatsapp"
              name="whatsapp"
              type="tel"
              rules="required|numeric|min:10"
              class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :class="{ 'border-red-300': errors.whatsapp, 'border-gray-300': !errors.whatsapp }"
              placeholder="Ej: roberto@gmail.com"
            />
          </div>
          <ErrorMessage name="whatsapp" class="mt-1 text-xs text-red-600" />
        </div>

        <div>
          <label for="whatsapp" class="block text-sm font-medium text-gray-700"> Celular </label>
          <div class="mt-1 relative">
            <Field
              id="whatsapp"
              name="whatsapp"
              type="tel"
              rules="required|numeric|min:10"
              class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :class="{ 'border-red-300': errors.whatsapp, 'border-gray-300': !errors.whatsapp }"
              placeholder="Ej: 3001234567"
            />
          </div>
          <ErrorMessage name="whatsapp" class="mt-1 text-xs text-red-600" />
        </div>

        <div>
          <label for="documentId" class="block text-sm font-medium text-gray-700"> Cédula </label>
          <div class="mt-1 relative">
            <Field
              id="documentId"
              name="documentId"
              type="text"
              rules="required|numeric|min:5"
              class="appearance-none block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              :class="{
                'border-red-300': errors.documentId,
                'border-gray-300': !errors.documentId,
              }"
              placeholder="Ej: 1230235450"
            />
          </div>
          <ErrorMessage name="documentId" class="mt-1 text-xs text-red-600" />
        </div>

        <div>
          <button
            type="submit"
            :disabled="isLoading"
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#9CC54B] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading">Cargando...</span>
            <span v-else>¡REGISTRARME!</span>
          </button>
        </div>

        <router-link to="/login">
          <div class="text-center text-[#9CC54B]">Ingresar</div>
        </router-link>
      </Form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Form, Field, ErrorMessage } from 'vee-validate'
import axios from 'axios'
import { useAuthStore } from '@/stores/auth' // Importamos el store
import { useRouter } from 'vue-router' // Para redirigir

const authStore = useAuthStore()
const router = useRouter()

const loginError = ref<string | null>(null)
const isLoading = ref(false)

const onSubmit = async (values: any) => {
  loginError.value = null // Corregido .ref por .value
  isLoading.value = true

  try {
    const response = await axios.post('http://localhost:3000/auth/login', {
      whatsapp: values.whatsapp,
      documentId: values.documentId,
    })

    // Guardamos en Pinia (esto también guarda en localStorage por la acción setAuth)
    const { token, user } = response.data
    authStore.setAuth(token, user)

    console.log('Sesión iniciada:', authStore.user?.fullName)

    // Redirigir al ranking o al home
    router.replace('/events')
  } catch (error: any) {
    console.error(error)
    if (error.response?.status === 401) {
      loginError.value = 'El teléfono o el documento son incorrectos.'
    } else {
      loginError.value = 'Hubo un error de conexión.'
    }
  } finally {
    isLoading.value = false
  }
}
</script>
