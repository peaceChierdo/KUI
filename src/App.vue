<template>
  <router-view />
</template>

<script lang="ts">
import { provide, ref } from 'vue'
import { router } from './router'

export default {
  name: 'App',
  setup() {
    const width = document.documentElement.clientWidth
    const menuVisible = ref(width <= 500 ? false : true) //默认对子组件不可见
    provide('menuVisible', menuVisible) //相当于set
    router.afterEach(() => {
      if (width <= 500) {
        menuVisible.value = false
      }
    })
  }
}
</script>
