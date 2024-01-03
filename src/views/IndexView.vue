<template>
  <div>
    <div v-for="item in items">
      {{ item }}
    </div>
    <div v-if="show">123456</div>
    <div v-else>45555</div>
    <div>{{ counterStore.count }}</div>
    <div>{{ counterStore.doubleCount }}</div>
    <div v-for="item in user.users" :key="item.id">
      {{ item }}
    </div>
    <button
      class="text-center w-20 bg-transparent border p-3 border-red-300 rounded-md"
      @click="counterStore.increment"
    >
      点击测试用例
    </button>
    <ceshi :data="data">
      <template> 111</template>
      <template #header>
        <button class="bg-red-500">header</button>
      </template>
      <template #main>
        <button class="rounded-md w-20 text-center bg-gray-700">main</button>
      </template>
    </ceshi>
    <l-button :content="content">
      <template #nnn> nnn </template>
      <template #default> default </template>
      <!-- <button class="bg-red-500">按钮</button> -->
    </l-button>
  </div>
</template>

<script lang="ts" setup>
import { onMounted, reactive, ref, watchEffect } from 'vue'
import { useCounterStore } from '@/stores/counter'
import { useUserStore } from '@/stores/user'
import ceshi from '@/components/title.vue'
import LButton from '@/components/button.vue'
const content = ref<any>('content')
const data = '父组件'
const abc = (data: string) => {
  console.log(data)
}
const user = useUserStore()
const counterStore = useCounterStore()
console.log('counterStore-----', counterStore.$id)
onMounted(async () => {
  await user.getInfo()
})
const items = ['java', 'golang', 'php']
const show = ref<boolean>(true)
const rel = reactive({
  name: 'dfd'
})
const list = ref<Array<string>>(['123'])
watchEffect(function () {
  list.value = ['sd', 'dd']
  console.log(...list.value)
})
</script>

<style scoped lang="scss">
body {
  @apply bg-gray-400 w-full text-center;
}
</style>
