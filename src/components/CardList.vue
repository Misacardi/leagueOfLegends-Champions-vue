<script setup>
import Card from './Card.vue'

defineProps({
  items: Array
})
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
    />
  </ul>
</template>
