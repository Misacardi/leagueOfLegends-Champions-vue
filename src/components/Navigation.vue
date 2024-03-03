<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <nav class="flex gap-10 justify-between border-b p-10 items-center">
    <div class="flex gap-10 items-center">
      <img src="/logo.svg" alt="logo" class="cursor-pointer hover:bg-sky-900" />
      <RouterLink to="/"> <a href="" class="text-xl font-bold">Champions</a></RouterLink>
    </div>

    <RouterLink c to="/favorites">
      <button
        class="font-bold bg-slate-600 p-2 rounded-xl text-cyan-50 hover:bg-slate-800 duration-300"
      >
        Favorites
      </button></RouterLink
    >
  </nav>
</template>
