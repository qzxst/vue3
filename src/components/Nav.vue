<template>
  <el-container class="layout-container-demo">
    <el-aside width="200px">
    </el-aside>

    <el-container>
      <el-header class="text-right text-xs">
        <div class="toolbar">
          <el-dropdown>
            <el-icon class="mr-[8px] mt-[1px]"
            >
              <setting
              />
            </el-icon>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item>View</el-dropdown-item>
                <el-dropdown-item>Add</el-dropdown-item>
                <el-dropdown-item>Delete</el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <span>Tom</span>
        </div>
      </el-header>

      <el-main>
        <el-scrollbar>
          <el-table :data="tableData">
            <el-table-column prop="date" label="Date" width="140"/>
            <el-table-column prop="name" label="Name" width="120"/>
            <el-table-column prop="address" label="Address"/>
          </el-table>
        </el-scrollbar>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
import {ref} from 'vue'
import {Message, Setting} from '@element-plus/icons-vue'

const item = {
  date: '2016-05-02',
  name: 'Tom',
  address: 'No. 189, Grove St, Los Angeles',
}
const tableData = ref(Array.from({length: 10}).fill(item))
</script>

<style scoped>
.layout-container-demo {
  @apply h-[100vh]
}

.layout-container-demo .el-header {
  @apply relative bg-[var(--el-color-primary-light-7)] text-[var(--el-text-color-primary)];
//background-color: var(--el-color-primary-light-7); //color: var(--el-text-color-primary);
}

.layout-container-demo .el-aside {
  @apply text-[var(--el-text-color-primary)] bg-[var(--el-color-primary-light-8)];
//color: var(--el-text-color-primary); //background: var(--el-color-primary-light-8);

}

.layout-container-demo .el-menu {
  @apply rounded-r-none;
//border-right: none;
}

.layout-container-demo .el-main {
  @apply p-0;
//padding: 0;
}

.layout-container-demo .toolbar {
  @apply inline-flex items-center justify-center h-[100%] right-[20px];
//display: inline-flex; //align-items: center; //justify-content: center; //height: 100%; //right: 20px;
}
</style>
