<script setup>
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div class="bg-yellow-100 pt-20">
    <main class="w-4/5 m-auto rounded-xl shadow-md min-h-screen bg-white">
      <Navigation />
      <RouterView></RouterView>
    </main>
  </div>
</template>
