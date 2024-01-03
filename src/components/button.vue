<template>
  <div :class="content">
    {{ content }}
    <slot name="nnn" />
    <slot />
  </div>
</template>

<script setup lang="ts">
import { onMounted, toRef, toRefs } from 'vue'

const content1 = defineProps({
  content: {
    type: String,
    readonly: false
  }
})

const { content } = toRefs(content1)
console.log(content?.value)
</script>

<style scoped>
.content {
  @apply bg-red-500;
}
</style>
