<template>
  <el-timeline>
    <el-timeline-item
        v-for="(activity, index) in activities"
        :key="index"
        :icon="activity.icon"
        :type="activity.type"
        :color="activity.color"
        :size="activity.size"
        :hollow="activity.hollow"
        :timestamp="activity.timestamp"
    >
      {{ activity.content }}
    </el-timeline-item>
  </el-timeline>
  <div>
    <span>What you are you do not see, what you see is your shadow. </span>
    <el-divider content-position="left">Rabindranath Tagore</el-divider>
    <span
    >My wishes are fools, they shout across thy song, my Master. Let me but
      listen.</span
    >
    <el-divider>
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <span>I cannot choose the best. The best chooses me.</span>
    <el-divider content-position="right">Rabindranath Tagore</el-divider>
  </div>
</template>

<script setup lang="ts">
import {MoreFilled,StarFilled } from '@element-plus/icons-vue'

const activities = [
  {
    content: 'Custom icon',
    timestamp: '2018-04-12 20:46',
    size: 'large',
    type: 'primary',
    icon: MoreFilled,
  },
  {
    content: 'Custom color',
    timestamp: '2018-04-03 20:46',
    color: '#0bbd87',
  },
  {
    content: 'Custom size',
    timestamp: '2018-04-03 20:46',
    size: 'large',
  },
  {
    content: 'Custom hollow',
    timestamp: '2018-04-03 20:46',
    type: 'primary',
    hollow: true,
  },
  {
    content: 'Default node',
    timestamp: '2018-04-03 20:46',
  },
]
</script>

<style lang="scss">
.login {
  @apply w-1/4 justify-center items-center m-auto bg-amber-800 px-3 h-[600px]
}
</style>