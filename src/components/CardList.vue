<script setup>
import axios from 'axios'
import Card from './Card.vue'

defineProps({
  items: Array
})

const addFavorite = async (item) => {
  try {
    if (!item.favorite) {
      item.favorite = true
      const { data } = await axios.post('https://e971a4c5e7751391.mokky.dev/favorites', {
        parentId: item.id,
        favoriteId: item.favoriteId,
        ...item
      })

      item.favoriteId = data.id
    } else {
      item.favorite = false
      await axios.delete(`https://e971a4c5e7751391.mokky.dev/favorites/${item.favoriteId}`)
    }
  } catch (error) {
    console.log(error)
  }
}
</script>
<template>
  <ul v-auto-animate class="flex p-10 flex-wrap gap-6 justify-center">
    <Card
      v-for="item in items"
      :id="item.id"
      :title="item.name"
      :imgUrl="item.img"
      :key="item.id"
      :favorite="item.favorite"
      :addFavorite="() => addFavorite(item)"
    />
  </ul>
</template>
