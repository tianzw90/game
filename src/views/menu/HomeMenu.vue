<template>
<!--  <div class="home-menu">-->
<!--    <div class="home-menu-left"></div>-->
<!--    <div class="home-menu-top"></div>-->
<!--    <div class="home-menu-bottom"></div>-->
<!--  </div>-->
  <div class="home-menu">

    <el-col :span="3" class="col-menu-left">
      <Menu-left />
    </el-col>
    <el-col :span="21" class="col-menu-right">
      <el-row class="grid-content-top">
        <el-col :span="24">
          <Menu-top />
        </el-col>
      </el-row>
      <el-row class="grid-content-bottom">
        <el-col :span="24">
          <Menu-bottom />
        </el-col>
      </el-row>
    </el-col>

  </div>
</template>

<script>
import MenuLeft from '@/views/menu/MenuLeft'
import MenuTop from '@/views/menu/MenuTop'
import MenuBottom from '@/views/menu/MenuBottom.vue'
export default {
  components: { MenuLeft, MenuTop, MenuBottom },
  name: 'homeMenu'
}
</script>

<style lang="scss" scoped>
.home-menu {
  height: 100vh;
  width: 100vw;
  margin: 0;
  display: flex;
}
.grid-content-top {
  height: 6%;
  width: 100%;
  background-image: url("../../assets/header.png");
}
.grid-content-bottom {
  height: 100%;
  width: 100%;
  //background-color: #311159;
}
.col-menu-right{
  height: 100%;
}
.col-menu-left {
  height: 100%;
  background-color: #545c64;
}
</style>
<style lang="scss">
body{
  margin: 0;
  overflow: hidden;
}
</style>
