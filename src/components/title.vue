<template>
  <div>
    测试
    {{ data }}
    <slot name="main" />
    <slot name="main" />
    <slot name="main" />
    <slot name="main" />
    <slot name="header" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  data: string
}>()
</script>

<style scoped></style>
