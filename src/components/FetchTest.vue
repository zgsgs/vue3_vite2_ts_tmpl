<script setup lang="ts">
import { reactive, onMounted } from 'vue'
const state = reactive({
  films: []
})

onMounted(async () => {
  // any不推荐使用 临时用法 以后学习到正确做法再改正
  const [err, data]:any = await fetch('https://swapi.dev/api/films/').then(rsp => [,rsp.json()]).catch((err) => { [err,] });
  console.log(data)
  if(err){
    alert(err.toString())
    return
  }
  state.films = data?.results || []
})
</script>

<template>
  <div v-for="i in state.films" :key="i">
    <p>{{ i }}</p>
  </div>
</template>
