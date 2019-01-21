<template>
  <el-row>
    <div class="logo">
      <img src="./logo.png" width="30" alt="">
      vBest
    </div>
    <el-menu
      default-active="1"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-submenu index="1">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>快递查询</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="1-1">
            <router-link to="/interface" class="link">接口描述</router-link>
          </el-menu-item>
          <el-menu-item index="1-2">
            <router-link to="/query" class="link">快递查询</router-link>
          </el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-submenu index="2">
        <template slot="title">
          <i class="el-icon-location"></i>
          <span>家常菜谱</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="2-1">接口描述</el-menu-item>
          <el-menu-item index="2-2">菜谱大全</el-menu-item>
          <el-menu-item index="2-3">菜谱分类</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">导航二</span>
      </el-menu-item>
      <el-menu-item index="3" disabled>
        <i class="el-icon-document"></i>
        <span slot="title">导航三</span>
      </el-menu-item>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">导航四</span>
      </el-menu-item>
    </el-menu>
  </el-row>
</template>

<script>
  export default {
    name: "sidebar",
    data(){
      return {

      }
    },
    methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped lang="less">
  .el-row {
    height: 100%;
    background-color: #545c64;

    .logo {
      box-sizing: border-box;
      height: 80px;
      line-height: 80px;
      text-align: center;
      color: #fff;
      font-size: 20px;

      img {
        vertical-align: middle;
      }
    }

    .el-menu {
      border: none;
      .link{
        color: #fff;
        text-decoration: none;
      }
      .router-link-active {
        color: rgb(255, 208, 75);
        text-decoration: none;
      }
    }
  }
</style>
