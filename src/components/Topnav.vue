<template>
  <div class="topnav-wrapper">
    <div
      class="toggle-menu"
      @click="toggleMenu"
    >
      <svg
        class="icon icon-toggle-menu"
        aria-hidden="true"
        v-if="menuVisible"
      >
        <use xlink:href="#k-kun"></use>
      </svg>
      <svg
        class="icon icon-toggle-menu"
        aria-hidden="true"
        v-else
      >
        <use xlink:href="#k-gan"></use>
      </svg>
    </div>
    <div class="logo">
      <router-link to="/"><svg
          class="icon icon-sun"
          aria-hidden="true"
        >
          <use xlink:href="#k-sun2"></use>
        </svg></router-link>
    </div>
    <ul class="menu">
      <li>
        <router-link to='/'> 首页 </router-link>
      </li>
      <li>
        <router-link to='/doc'> 文档 </router-link>
      </li>
    </ul>
  </div>
</template>
<script lang="ts">
  import { inject, Ref } from 'vue'

  export default {
    setup() {
      const menuVisible = inject<Ref<boolean>>('menuVisible')
      const toggleMenu = () => {
        menuVisible.value = !menuVisible.value
      }
      return { toggleMenu, menuVisible }
    }
  }
</script>

<style lang="scss" scoped>
  .topnav-wrapper {
    z-index: 2;
    width: 100%;
    height: 68px;
    padding: 8px 16px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: rgba(46, 106, 228, 1);
    box-shadow: 0 4px 6px #f0f0f0;
    .toggle-menu {
      display: none;
    }
    .logo {
      color: rgba(46, 106, 228, 0.7);
      a {
        display: block;
        border: none;
      }
    }
    .icon-sun {
      font-size: 3em;
    }
    .menu {
      display: flex;
      li {
        margin-right: 2em;
      }
    }
    @media (max-width: 500px) {
      > .menu {
        display: none;
      }
      > .logo {
        margin: auto;
      }
      > .toggle-menu {
        display: block;
      }
    }
  }
</style>