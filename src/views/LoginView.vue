<template>
  <div class="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Inicia sesión en Imaginario
      </h2>
      <p class="mt-2 text-center text-sm text-gray-600">Centro Comercial Sandiego</p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <div
          v-if="loginError"
          class="mb-4 bg-red-50 border-l-4 border-red-400 p-4 text-red-700 text-sm"
        >
          {{ loginError }}
        </div>

        <Form @submit="onSubmit" v-slot="{ errors }" class="space-y-6">
          <div>
            <label for="whatsapp" class="block text-sm font-medium text-gray-700">
              Teléfono (WhatsApp)
            </label>
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
            <label for="documentId" class="block text-sm font-medium text-gray-700">
              Número de Documento
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
                placeholder="Tu cédula o documento"
              />
            </div>
            <ErrorMessage name="documentId" class="mt-1 text-xs text-red-600" />
          </div>

          <div>
            <button
              type="submit"
              :disabled="isLoading"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <span v-if="isLoading">Cargando...</span>
              <span v-else>Entrar</span>
            </button>
          </div>
        </Form>
      </div>
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
