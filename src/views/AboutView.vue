<template>
  <div class="about">
    <div class="left flex text-center justify-between items-center ms-10">
      <div class="img">
        <RouterLink to="/">
          <el-avatar :icon="UserFilled" />
        </RouterLink>
      </div>
      <div>list2</div>
      <div>list3</div>
      <div>list4</div>
      <div>list5</div>
    </div>
    <div class="right flex text-center justify-between items-center me-10">
      <div>
        <el-dropdown>
          <el-button type="default">
            关于
            <el-icon class="el-icon--right"><arrow-down /></el-icon>
          </el-button>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item>
                <RouterLink to="/about">编辑</RouterLink>
              </el-dropdown-item>
              <el-dropdown-item><RouterLink to="/about">关于</RouterLink></el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { UserFilled, ArrowDown } from '@element-plus/icons-vue'
</script>

<style scoped lang="scss">
.about {
  @apply w-full flex px-10 text-white font-bold justify-between items-center bg-slate-600 h-[48px];
  .left > div {
    @apply w-20;
  }
  .right > div {
    @apply w-20;
  }
}
</style>
