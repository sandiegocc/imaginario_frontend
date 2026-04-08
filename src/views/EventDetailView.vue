<template>
  <div class="min-h-screen bg-[#3068B1] flex flex-col pintura-bg">
    <div class="flex items-center justify-between gap-4 mx-6 mt-4">
      <router-link class="w-[40%]" to="/" replace>
        <img src="@/assets/imaginario-logo-2.svg" alt="Imaginario Logo 2" />
      </router-link>

      <img class="w-[40%]" src="@/assets/logo-sandiego-blanco.svg" alt="Sandiego Logo" />
    </div>

    <div
      class="flex flex-col items-center gap-4 mt-8 font-bold text-white text-center font-extrabold text-4xl uppercase px-4"
    >
      <img src="@/assets/pintura.svg" alt="Pintura Logo" />
      Festival de pintura
    </div>

    <div class="text-center text-white px-4 mt-4 font-bold">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab aliquam dignissimos
      exercitationem, fugit hic impedit inventore itaque minus nesciunt, nisi placeat quos, ratione
      vero! Asperiores delectus eius fuga neque provident.
    </div>

    <div class="flex flex-col gap-4 mt-4 p-4 bg-white mx-4 rounded-2xl">
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
              class="appearance-none text-center block w-full px-3 py-2 border rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
            class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#E63916] focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="isLoading">Cargando...</span>
            <span v-else>¡ENVIAR!</span>
          </button>
        </div>
      </Form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ErrorMessage, Field, Form } from 'vee-validate'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import api from '@/api/axios.ts'

const loginError = ref<string | null>(null)
const isLoading = ref(false)
const router = useRouter()

const onSubmit = async (values: any) => {
  loginError.value = null // Corregido .ref por .value
  isLoading.value = true

  try {
    const request = {
      method: 'PATCH',
      url: '/imaginario/register-event',
      data: {
        keyword: values.keyword,
      },
    }

    const response = await api(request)

    console.log(response)

    await router.replace('/events/success')
  } catch (error: any) {
    console.log(error)
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
