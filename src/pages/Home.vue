<!-- eslint-disable vue/multi-word-component-names -->
<script setup>
import { onMounted, ref, watch } from 'vue'
import CardList from '../components/CardList.vue'
import Error from '../components/Error.vue'
import axios from 'axios'

const ROLES = ['mage', 'fighter', 'assassin', 'tank', 'marksman']

const items = ref([])
const error = ref(null)
const filters = ref({
  difficulty: '',
  search: '',
  role: ''
})

const fetchFavorites = async () => {
  try {
    const { data } = await axios.get('https://e971a4c5e7751391.mokky.dev/favorites')

    items.value = items.value.map((item) => {
      const favorites = data.find((e) => e.parentId === item.id)

      if (!favorites) {
        return item
      }

      return {
        ...item,
        favorite: true,
        favoriteId: favorites.id
      }
    })
  } catch (error) {
    console.log(error)
  }
}

const getChampList = async () => {
  try {
    const params = {}

    if (filters.value.difficulty) {
      params.difficulty = filters.value.difficulty
    }
    if (filters.value.search) {
      params.name = `${filters.value.search}*`
    }
    if (filters.value.role) {
      params.role = filters.value.role
    }

    const { data } = await axios.get('https://e971a4c5e7751391.mokky.dev/championList', {
      params
    })
    items.value = data.map((item) => {
      return {
        ...item,
        favorite: false
      }
    })
  } catch (e) {
    error.value = e.message
  }
}
onMounted(async () => {
  await getChampList()
  await fetchFavorites()
})

watch(() => [filters.value.search, filters.value.difficulty, filters.value.role], getChampList)
</script>

<template>
  <div class="flex items-center justify-between gap-20 p-10 rounded-xl">
    <h3 class="text-xl text-zinc-600">Filter Champion</h3>

    <div class="flex gap-10 items-center">
      <ul class="flex items-center gap-3 text-xl font-bold text-zinc-600">
        Role
        <li
          v-for="(item, i) in ROLES"
          :key="i"
          class="w-9 border rounded-xl p-1 hover:bg-slate-300 duration-300 cursor-pointer"
          @click="filters.role = item"
        >
          <img
            :src="
              'https://raw.communitydragon.org/9.4/plugins/rcp-fe-lol-champion-details/global/default/role-icon-' +
              item +
              '.png'
            "
            alt="role icon"
          />
        </li>
      </ul>
      <select v-model="filters.difficulty" class="py-2 px-3 border rounded-xl focus: outline-none">
        <option value="">All</option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
      <div class="relative">
        <img src="/search.svg" alt="search icon" class="absolute left-3 top-3" />
        <input
          v-model="filters.search"
          placeholder="Search"
          class="border rounded-xl py-2 pl-10 outline-none focus:border-gray-400"
          type="text"
        />
      </div>
    </div>
  </div>

  <div v-auto-animate>
    <h2 class="flex justify-center font-bold text-3xl uppercase">Choose Champion</h2>
    <Error v-if="error">{{ error }}</Error>

    <CardList v-else :items="items" />
  </div>
</template>
