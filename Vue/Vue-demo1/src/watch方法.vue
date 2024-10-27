<template>
  <div>{{ count }}</div>
  <button @click="changeCount">改数字</button>
  <div>{{ name }}</div>
  <button @click="changeName">改名字</button>
</template>

<script setup>

 import { ref,watch } from 'vue'
 const name = ref('jack')
 const count = ref(0)

 const changeName = () => {
   name.value = 'rose'
 }
const changeCount = () => {
  count.value++
}
// watch(count, (newValue,oldValue) => {
//   console.log(newValue,oldValue)
// })
watch([count,name], (newValue,oldValue) => {
  console.log(newValue,oldValue)
})
</script>

<style>

</style>