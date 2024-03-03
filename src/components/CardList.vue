<script setup>
import { inject } from 'vue'
import Card from './Card.vue'

defineProps({
  items: Array
})

const addFavorite = inject('addFavorite')
</script>
<template>
  <ul v-auto-animate class="flex p-10 flex-wrap gap-6 justify-center">
    <Card
      v-for="(item, i) in items"
      :id="i"
      :title="item.name"
      :imgUrl="item.img"
      :key="item.id"
      :favorite="item.favorite"
      :addFavorite="() => addFavorite(items, item.id)"
    />
  </ul>
</template>
