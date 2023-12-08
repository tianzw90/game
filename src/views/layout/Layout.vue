<template>
    <!-- element-plus中的容器 -->
    <el-container class="layout-container">
        <!-- 左侧菜单 -->
        <el-aside width="200px">
            <div class="el-aside__logo"></div>
            <!-- element-plus的菜单标签 -->
            <el-menu active-text-color="#ffd04b" background-color="#232323"  text-color="#fff"
                router>
              <el-menu-item index="/">
                <el-icon><home-filled /></el-icon>
                <span>首页</span>
              </el-menu-item>
              <el-sub-menu >
                <template #title>
                  <el-icon><chrome-filled /></el-icon>
                  <span>DNF板块</span>
                </template>
                <el-menu-item index="/dnf/festival">
                  <el-icon><box /></el-icon>
                  <span>节日套管理</span>
                </el-menu-item>
                <el-menu-item index="/dnf/gold">
                  <el-icon><coin /></el-icon>
                  <span>金币比例管理</span>
                </el-menu-item>
                <el-menu-item index="/dnf/festivalCalculation">
                  <el-icon><set-up /></el-icon>
                  <span>节日套计算</span>
                </el-menu-item>
              </el-sub-menu>
<!--              <el-sub-menu >-->
<!--                <template #title>-->
<!--                  &lt;!&ndash;                        <el-icon>&ndash;&gt;-->
<!--                  &lt;!&ndash;                            <UserFilled />&ndash;&gt;-->
<!--                  &lt;!&ndash;                        </el-icon>&ndash;&gt;-->
<!--                  <span>个人中心</span>-->
<!--                </template>-->
<!--                <el-menu-item index="/user/info">-->
<!--                  &lt;!&ndash;                        <el-icon>&ndash;&gt;-->
<!--                  &lt;!&ndash;                            <User />&ndash;&gt;-->
<!--                  &lt;!&ndash;                        </el-icon>&ndash;&gt;-->
<!--                  <span>基本资料</span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="/user/avatar">-->
<!--                  &lt;!&ndash;                        <el-icon>&ndash;&gt;-->
<!--                  &lt;!&ndash;                            <Crop />&ndash;&gt;-->
<!--                  &lt;!&ndash;                        </el-icon>&ndash;&gt;-->
<!--                  <span>更换头像</span>-->
<!--                </el-menu-item>-->
<!--                <el-menu-item index="/user/resetPassword">-->
<!--                  &lt;!&ndash;                        <el-icon>&ndash;&gt;-->
<!--                  &lt;!&ndash;                            <EditPen />&ndash;&gt;-->
<!--                  &lt;!&ndash;                        </el-icon>&ndash;&gt;-->
<!--                  <span>重置密码</span>-->
<!--                </el-menu-item>-->
<!--              </el-sub-menu>-->
            </el-menu>
        </el-aside>
        <!-- 右侧主区域 -->
        <el-container>
            <!-- 头部区域 -->
            <el-header>
                <div>菜单导航：</div>
                <!-- 下拉菜单 -->
                <!-- command: 条目被点击后会触发,在事件函数上可以声明一个参数,接收条目对应的指令 -->
                <el-dropdown placement="bottom-end" >
                    <span class="el-dropdown__box">
                        <el-avatar />
<!--                        <el-icon>-->
<!--                            <CaretBottom />-->
<!--                        </el-icon>-->
                    </span>
                    <template #dropdown>
                        <el-dropdown-menu>
                            <el-dropdown-item command="info" :icon="User">基本资料</el-dropdown-item>
                            <el-dropdown-item command="avatar" :icon="Crop">更换头像</el-dropdown-item>
                            <el-dropdown-item command="resetPassword" :icon="EditPen">重置密码</el-dropdown-item>
                            <el-dropdown-item command="logout" :icon="SwitchButton">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </template>
                </el-dropdown>
            </el-header>
            <!-- 中间区域 -->
            <el-main class="layout-main">
                <router-view></router-view>
            </el-main>
            <!-- 底部区域 -->
<!--            <el-footer>大事件 ©2023 Created by 黑马程序员</el-footer>-->
        </el-container>
    </el-container>
</template>

<script>
import { Box, ChromeFilled, Coin, HomeFilled, SetUp } from '@element-plus/icons-vue'
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Layout',
  components: { SetUp, ChromeFilled, Box, Coin, HomeFilled },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
.layout-container {
    height: 100%;
    .el-aside {
        background-color: #232323;

        &__logo {
            height: 120px;
            background: url('@/assets/dnf-logo.png') no-repeat center / 120px auto;
        }

        .el-menu {
            border-right: none;
        }
    }

    .el-header {
        background-color: #fff;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .el-dropdown__box {
            display: flex;
            align-items: center;

            .el-icon {
                color: #999;
                margin-left: 10px;
            }

            &:active,
            &:focus {
                outline: none;
            }
        }
    }
}
</style>
