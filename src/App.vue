<script setup>
import { provide } from 'vue'
import Navigation from './components/Navigation.vue'
import axios from 'axios'

const addFavorite = async (item, i) => {
  item = item.filter((e) => e.id === i)
  item[0].favorite = !item[0].favorite
  await axios.patch(`https://e971a4c5e7751391.mokky.dev/championList/${i}`, {
    favorite: item[0].favorite
  })
}

provide('addFavorite', addFavorite)
</script>

<template>
  <div class="bg-yellow-100 pt-20">
    <main class="w-4/5 m-auto rounded-xl shadow-md min-h-screen bg-white">
      <Navigation />
      <RouterView></RouterView>
    </main>
  </div>
</template>
