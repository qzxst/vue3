<template>

  <div>Hello, {{ name }}!</div>
  <input type="text" v-model="name"/>
  <button :disabled="!isNamePresent" @click="submitName">Submit</button>
  <button class="btn_new" @click="state.count++">
    {{ state.count }}
  </button>
</template>


<script lang="ts" setup>
import {computed, reactive, ref} from 'vue'

const state = reactive({count: 0})
const name = ref('')
const isNamePresent = computed(() => name.value.length > 0)

function submitName() {
  console.log(name.value)
}

</script>

<style scoped>
.btn_new{
  @apply w-[120px] bg-amber-50 border ml-1 text-cyan-600 hover:text-blue-800
}
</style>