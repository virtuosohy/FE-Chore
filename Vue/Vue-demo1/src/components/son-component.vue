<template>
<div class="son">
  子组件 - {{ name }} -- {{ number }}
  <button @click="down">减小</button>
</div>
</template>

<script setup>
//  借助“编译器宏” 接收父组件传过来的属性
// defineProps 是编译阶段的一个标识
const props = defineProps({
  name: String,
  number: Number
})

const emit = defineEmits(['changenum'])
const down = () => {
 emit('changenum', props.number-1)
}
</script>

<style scoped>
.son{
  border:1px solid black;
  padding: 30px
}
</style>