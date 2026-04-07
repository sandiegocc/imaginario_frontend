<template>
  <div>
    <button class="bg-black text-white" @click="logout">
      Cerrar sesión
    </button>
  </div>
  <router-view />
</template>

<script lang="ts" setup>
import { useAuthStore } from '@/stores/auth.ts'
import { useRouter } from 'vue-router'

const authStore = useAuthStore();
const router = useRouter();

const logout = () => {
  authStore.logout()
  router.replace('/login')
}
</script>
