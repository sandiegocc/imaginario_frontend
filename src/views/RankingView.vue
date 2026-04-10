<template>
  <div class="min-h-screen bg-[#3068B1] flex flex-col ranking-bg">
    <div class="flex items-center justify-between gap-4 mx-6 mt-4">
      <router-link class="w-[40%]" to="/" replace>
        <img src="@/assets/imaginario-logo-2.svg" alt="Imaginario Logo 2" />
      </router-link>

      <img class="w-[40%]" src="@/assets/logo-sandiego-blanco.svg" alt="Sandiego Logo" />
    </div>

    <div class="font-bold text-white text-center text-4xl mt-4">RANKING</div>

    <div class="flex flex-col gap-4 px-4 mt-4">
      <div
        v-for="rank in ranking"
        class="uppercase font-bold text-red-500 px-4 rounded-2xl flex p-4 gap-4 justify-between"
        :class="[`${rank.isCurrentUser ? 'bg-blue-200' : 'bg-white'}`]"
      >
        <div class="flex gap-4">
          <div
            class="bg-[#e6aa16] text-2xl text-white min-w-8 min-h-8 rounded-full text-center flex items-center justify-center"
          >
            {{ rank.team[0] }}
          </div>
          <span class="text-2xl">{{ rank.team }}</span>
        </div>

        <div class="flex items-center text-2xl gap-2">
          <span>{{ rank.points }}</span>

          <img class="h-8" src="@/assets/start-yellow.svg" alt="Estrella Amarilla" />
        </div>
      </div>
    </div>

    <div class="flex justify-center items-center">
      <router-link to="/events" replace>
        <button
          class="bg-[#f4b922] uppercase text-white font-bold text-xl px-8 py-1 rounded mt-4 cursor-pointer"
        >
          Eventos
        </button>
      </router-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import api from '@/api/axios.ts'

const ranking = ref([])

const getRanking = async () => {
  const request = {
    method: 'GET',
    url: '/imaginario/ranking',
  }

  const response = await api(request)

  ranking.value = response.data
}

onMounted(() => {
  getRanking()
})
</script>
