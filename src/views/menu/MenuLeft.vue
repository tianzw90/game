<template>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    default-active="2"
    text-color="#fff"
  >
    <el-menu-item index="1" style="color: #ffd04b;background-color: #434A50">
      <el-icon><Menu /></el-icon>
      <span>首页</span>
    </el-menu-item>
    <el-menu-item index="2">
      <el-icon><Setting /></el-icon>
      <span>系统管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { Setting } from '@element-plus/icons-vue'
export default {
  name: 'MenuLeft',
  components: { Setting }
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  width: 100%;
  height: 100%;
}
</style>
