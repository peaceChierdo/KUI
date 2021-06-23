<template>
  <div class="layout">
    <Topnav />
    <div class="content-wrapper">
      <div
        class="side-bar"
        v-if="menuVisible"
      >
        <ul class="menu">
          <li>
            <router-link to="/doc/intro">介绍</router-link>
          </li>
          <li>
            <router-link to="/doc/install">安装</router-link>
          </li>
          <li class="divider">
            <router-link to="/doc/start">开始使用</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button组件</router-link>
          </li>
          <li>
            <router-link to="/doc/switch">Switch组件</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs组件</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog组件</router-link>
          </li>
        </ul>
      </div>
      <div class="component-page">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { inject, Ref } from 'vue'
  import Topnav from '../components/Topnav.vue'

  export default {
    components: { Topnav },
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible')
      return { menuVisible }
    }
  }
</script>

<style lang="scss" scoped>
  $menu-text-color: #455a64;
  $menu-bar-color: rgba(46, 106, 228, 0.5);
  .layout {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100vh;
    color: #323233;
    .content-wrapper {
      display: flex;
      flex: 1;
      overflow: hidden;
      position: relative;
      .side-bar {
        z-index: 1;
        width: 220px;
        height: 100%;
        overflow: auto;
        background: #fff;
        // border-right: 1px solid #f0f0f0;
        box-shadow: 4px 0 6px #f0f0f0;
        padding: 10px 25px;
        color: $menu-text-color;
        @media (max-width: 500px) {
          position: absolute;
          left: 0;
        }
        .menu {
          > li {
            margin: 16px 0;
            position: relative;
            // border: 1px solid red;
            &.divider {
              &:after {
                content: '';
                display: block;
                position: absolute;
                width: 100%;
                height: 1px;
                background-color: #f0f0f0;
                bottom: -8px;
              }
            }
            a {
              display: block;
              width: 100%;
              height: 100%;
              padding: 0.5em 1em;
              border: none;
              &:hover,
              &.router-link-active {
                // background-color: rgba(0, 0, 255, 0.2);
                // color: #2e6ae4;
                // background-color: #2e6ae4;
                background-color: $menu-bar-color;
                border-radius: 8px;
                color: #fff;
              }
            }
          }
        }
      }
      .component-page {
        flex: 1;
        overflow: auto;
        padding: 28px 32px;
      }
    }
  }
</style>