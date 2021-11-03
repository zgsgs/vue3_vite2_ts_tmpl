<script setup lang="ts">
import { reactive, onMounted } from 'vue'
const state = reactive({
  films: []
})

onMounted(async () => {
  const data = await fetch('https://swapi.dev/api/films/').then(rsp => rsp.json()).catch((err) => { '{}' });
  console.log(data)
  state.films = data?.results || []
})
</script>

<template>
  <div v-for="i in state.films" :key="i">
    <p>{{ i }}</p>
  </div>
</template>
