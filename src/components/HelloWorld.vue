<script setup lang="ts">
defineProps<{
  msg: string
}>()
</script>

<template>
  <div>
    <a href="#" class="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
      <div class="flex items-center space-x-3">
        <svg class="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24"><!-- ... --></svg>
        <h3 class="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
      </div>
      <p class="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of starting templates.</p>
    </a>

    <div class="w-[100px] bg-amber-200 text-center rounded text-cyan-600 shadow text-2xl
  cursor-pointer hover:bg-sky-700 hover:text-green-300">
      sdfas
    </div>
  </div>
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>. What's next?
    </h3>
  </div>
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>
