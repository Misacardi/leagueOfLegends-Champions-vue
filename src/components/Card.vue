<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
defineProps({
  id: Number,
  title: String,
  imgUrl: String,
  favorite: Boolean,
  addFavorite: Function
})
</script>

<template>
  <li
    class="cursor-pointer relative hover:scale-110 ease-out duration-300 hoverable overflow-hidden w-64 h-80 bg-no-repeat bg-center bg-cover rounded-xl"
    :style="{ 'background-image': 'url(' + imgUrl + ')' }"
  >
    <img
      @click="addFavorite"
      :src="!favorite ? '/star.svg' : '/star2.svg'"
      alt=""
      class="cursor-pointer duration-300"
    />
    <div
      class="text-xl absolute w-full text-slate-100 bottom-0 text-center opacity-0 transition-opacity font-bold"
    >
      {{ title }}
    </div>
  </li>
</template>

<style scoped></style>
