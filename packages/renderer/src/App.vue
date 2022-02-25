<template>
  <div class="app-header">
    <div class="left">小游戏</div>
    <img @click="exit" draggable="false" src="./assets/img/exit.png" class="right" />
  </div>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
</template>

<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from './components/HelloWorld.vue'

function exit() {
  window.ipcRenderer.send("exitWindow")
}

</script>

<style lang="less">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.app-header {
  display: flex;
  justify-content: space-between;
  .left {
    padding: 0 5px;
    flex: 1;
    -webkit-app-region: drag;
  }
  .right {
    width: 26px;
    height: 26px;
    user-select: none;
    cursor: pointer;
  }
}
</style>
