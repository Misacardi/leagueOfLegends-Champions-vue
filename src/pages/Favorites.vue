<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { onMounted, ref } from 'vue'

import axios from 'axios'
import CardList from '@/components/CardList.vue'

const favorites = ref([])

const getFavorite = async () => {
  try {
    const { data } = await axios.get('https://e971a4c5e7751391.mokky.dev/championList')

    favorites.value = data.filter((e) => e.favorite)
  } catch (error) {
    console.log(error)
  }
}

onMounted(getFavorite)
</script>
<template>
  <div class="mt-14">
    <h1 class="text-3xl font-bold uppercase flex justify-center">❤️ Favorite Champions</h1>

    <CardList :items="favorites" />
  </div>
</template>
