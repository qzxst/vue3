<template>

  <div>Hello, {{ name }}!</div>
  <input  type="text" v-model="name"/>

  <button :disabled="!isNamePresent" @click="submitName">Submit</button>
</template>


<script lang="ts" setup>
import {computed, ref} from 'vue'

const name = ref('')
const isNamePresent = computed(() => name.value.length > 0)

function submitName() {
  console.log(name.value)
}

</script>

<style scoped>

</style>