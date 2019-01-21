<template>
  <div id="app">
    <div class="side">
      <sider-bar></sider-bar>
    </div>
    <div class="main">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import SiderBar from "./components/sidebar/sidebar";
export default {
  name: "App",
  components: {
    SiderBar
  }
};
</script>

<style lang="less">
#app {
  height: 100%;
  display: flex;
  .side {
    width: 200px;
    min-width: 200px;
    height: 100%;
  }
  .main {
    height: 100%;
    flex: 1;
    background-color: #fff;
    padding-left: 30px;
    padding-top: 30px;
    box-sizing: border-box;
  }
}
</style>
