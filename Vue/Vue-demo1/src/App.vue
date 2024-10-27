<template>
  <div>
    <h3>
      父组件 -- {{ number }}
    <button @click="add">+1</button>
    </h3>
    
    <!-- 1. 给子组件，添加属性的的方式传值 -->

 <sonComponent name="jack" :number="number" @changenum="ccnum"></sonComponent>
 </div>
</template>

<script setup>
  import { ref } from 'vue';
 import sonComponent from './components/son-component.vue';
 const number = ref(10);
const add = () => {
  number.value++;
};
 const ccnum = (newValue) => {
  number.value = newValue; 
  }
</script>

<style>

</style>