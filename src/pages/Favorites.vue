<!-- eslint-disable vue/multi-word-component-names -->

<script setup>
import { onMounted, ref, watch } from 'vue'

import CardList from '@/components/CardList.vue'
import axios from 'axios'

const favorites = ref([])

const fetchFavorites = async () => {
  try {
    const { data } = await axios.get('https://e971a4c5e7751391.mokky.dev/favorites')
    favorites.value = data.map((item) => {
      return {
        ...item,
        favoriteId: item.id
      }
    })
    console.log(favorites.value)
  } catch (error) {
    console.log(error)
  }
}

onMounted(async () => {
  await fetchFavorites()
})
</script>
<template>
  <div class="mt-14">
    <h1 class="text-3xl font-bold uppercase flex justify-center">❤️ Favorite Champions</h1>

    <CardList :items="favorites" />
  </div>
</template>
