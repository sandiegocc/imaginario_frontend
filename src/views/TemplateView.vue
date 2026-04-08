<template>
  <router-view />

  <div class="flex items-center justify-center my-4">
    <button class="bg-black text-white px-4 py-2 rounded" @click="logout">Cerrar sesión</button>
  </div>
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth.ts'
import { useRouter } from 'vue-router'

const authStore = useAuthStore()
const router = useRouter()

const logout = () => {
  authStore.logout()
  router.replace('/login')
}
</script>
